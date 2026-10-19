/* Ambitious Entrepreneurship deck runtime. Updated: 2026-10-19. Status: ready.
   Owned by the course-design skill. One classic script, no modules and no
   fetch, so a deck also runs from file://. Load it at the end of <body>.

   Markup: <main class="deck" data-module="M04" data-module-title="Validating problems">
   holding <section class="slide" data-archetype="..."> elements. Dividers set
   data-chapter, or the deck lists data-chapters="A|B|C". Anchor diagrams are
   <div class="anchor" data-anchor="name" data-active="part">, and a slide with
   data-anchor="name" data-anchor-part="part" gets a corner miniature. Both
   need design/anchors.js loaded before this file. A slide's source line is <footer class="prov" data-kind="...">.
   The runtime adds the top bar with the progress tracker, the divider agenda
   (each item links to its chapter),
   the footer (source line, signature, page) and runs builds (data-step),
   motion (data-anim), timers (data-timer, minutes), videos (data-autoplay),
   the presenter view and print mode.

   URL: ?print (every slide, final state, held-back slides left out),
   ?print&all (held-back slides kept), ?presenter, #n (slide number).
   Keys: arrows, space, PageUp/PageDown, Home/End, P presenter, T timer,
   F full screen. */
(function () {
  "use strict";
  var deck = document.querySelector("main.deck");
  if (!deck) return;
  var root = document.documentElement;
  var params = new URLSearchParams(location.search);
  var slides = Array.prototype.slice.call(deck.querySelectorAll(":scope > section.slide"));
  var NO_TOP = { title: 1, divider: 1, closing: 1 };
  var SIGNATURE = "<b>Ambitious</b> Entrepreneurship · Dr. Bastian Burger";
  var mod = deck.dataset.module || "";
  var modTitle = deck.dataset.moduleTitle || "";

  function make(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function pad(n) { return String(n).padStart(2, "0"); }

  /* ---------- Chrome ---------- */
  // Chapters come from data-chapters="A|B|C" on the deck, or else from the
  // divider slides. A slide's chapter is its own data-chapter or the last one
  // set before it, so a single template or a split session deck still tracks.
  // A slide with data-block starts a block that can run alone (workshop, case
  // discussion). From there on, chapters before it are not marked done,
  // because in a standalone run they never took place.
  var listed = (deck.dataset.chapters || "").split("|").map(function (c) { return c.trim(); }).filter(Boolean);
  var chapters = listed.length ? listed : slides.filter(function (s) {
    return s.dataset.archetype === "divider" && s.dataset.chapter;
  }).map(function (s) { return s.dataset.chapter; });
  var chapter = -1, blockStart = 0;

  // Each agenda item links to the first slide of its chapter, so the presenter
  // can jump there and the student PDF gets working links. Held-back slides are
  // skipped where the chapter has another slide, because the PDF leaves them out.
  var firstOf = [];
  slides.reduce(function (c, s, i) {
    if (s.dataset.chapter && chapters.indexOf(s.dataset.chapter) >= 0) c = chapters.indexOf(s.dataset.chapter);
    if (c >= 0 && (firstOf[c] == null || (slides[firstOf[c]].hasAttribute("data-hold") && !s.hasAttribute("data-hold")))) firstOf[c] = i;
    return c;
  }, -1);
  firstOf.forEach(function (i, k) { if (!slides[i].id) slides[i].id = "chapter-" + (k + 1); });

  slides.forEach(function (s, i) {
    var archetype = s.dataset.archetype || "";
    if (s.dataset.chapter && chapters.indexOf(s.dataset.chapter) >= 0) chapter = chapters.indexOf(s.dataset.chapter);
    if (s.hasAttribute("data-block") && chapter >= 0) blockStart = chapter;
    var state = function (k) { return k < chapter && k >= blockStart ? "done" : k === chapter ? "now" : ""; };

    if (!NO_TOP[archetype] && !s.querySelector(":scope > .chrome-top")) {
      var top = make("div", "chrome-top");
      top.appendChild(make("span", "mod", esc([mod, modTitle].filter(Boolean).join(" · "))));
      if (chapters.length && chapter >= 0) {
        var tracker = make("span", "tracker");
        tracker.appendChild(make("span", "name", (chapter + 1) + "/" + chapters.length + " · <b>" + esc(chapters[chapter]) + "</b>"));
        var segs = make("span", "segs");
        chapters.forEach(function (_, k) { segs.appendChild(make("i", state(k))); });
        tracker.appendChild(segs);
        top.appendChild(tracker);
      }
      s.appendChild(top);
    }

    if (archetype === "divider" && chapters.length && !s.querySelector("ol.agenda")) {
      var agenda = make("ol", chapters.length > 9 ? "agenda is-long" : "agenda");
      chapters.forEach(function (name, k) {
        var li = make("li", state(k));
        if (firstOf[k] != null) {
          var link = make("a", null, esc(name));
          link.href = "#" + slides[firstOf[k]].id;
          link.dataset.goto = firstOf[k];
          li.appendChild(link);
        } else li.innerHTML = esc(name);
        li.dataset.n = pad(k + 1);
        agenda.appendChild(li);
      });
      s.appendChild(agenda);
    }

    if (!s.querySelector(":scope > .chrome-foot")) {
      var foot = make("div", "chrome-foot");
      var source = s.querySelector(":scope > footer.prov");
      if (source) {
        var prov = make("div", "prov");
        var kind = (source.dataset.kind || "").trim();
        if (kind) {
          var open = kind.toLowerCase() === "open";
          prov.appendChild(make("span", "ptag" + (open ? " is-open" : ""), esc(open ? "OPEN" : kind)));
        }
        while (source.firstChild) prov.appendChild(source.firstChild);
        source.remove();
        foot.appendChild(prov);
      }
      var sig = make("div", "sig", SIGNATURE);
      sig.appendChild(make("span", "pg", esc([mod, pad(i + 1)].filter(Boolean).join(" · "))));
      foot.appendChild(sig);
      s.appendChild(foot);
    }
  });

  // A source of three or more lines makes the footer taller and lifts its rule
  // into the frame. The slide's bottom padding then grows, so the content box
  // (and a split head's colour field) still ends 12 px above the rule, the gap
  // a two-line source has always left. Only a rendered slide can be measured,
  // so this runs again when one is shown.
  function fitFoot(s) {
    var foot = s && s.querySelector(":scope > .chrome-foot");
    if (!foot || !foot.offsetHeight) return;
    var room = foot.offsetHeight + (parseFloat(getComputedStyle(foot).bottom) || 0) + 12;
    s.style.setProperty("--foot-room", Math.ceil(room) + "px");
  }
  function fitFeet() { slides.forEach(fitFoot); }
  fitFeet();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitFeet);

  // External links open in a new tab. setAttribute, because an SVG <a> has a
  // read-only target property, and assigning it stopped the runtime here.
  deck.querySelectorAll('a[href^="http"]').forEach(function (a) { a.setAttribute("target", "_blank"); a.setAttribute("rel", "noopener"); });

  /* ---------- Anchor diagrams (design/anchors.js) ---------- */
  // Full size: <div class="anchor" data-anchor="name" data-active="part">.
  // Miniature: <section class="slide" data-anchor="name" data-anchor-part="part">
  // puts a small copy without text in the slide's top right corner. A part
  // matches an element's data-node or any word of its data-group, so a whole
  // phase can light up. Inactive parts turn grey (the context colour).
  var anchors = window.AEAnchors || {};
  function words(v) { return (v || "").split(/\s+/).filter(Boolean); }
  function drawAnchor(box, name, active) {
    var def = anchors[name];
    if (!def) {
      box.innerHTML = '<p class="open-marker">[OPEN: anchor "' + esc(name) + '" is not drawn in design/anchors.js]</p>';
      return;
    }
    box.innerHTML = def.svg;
    box.classList.toggle("has-active", active.length > 0);
    box.querySelectorAll("[data-node]").forEach(function (n) {
      var keys = [n.dataset.node].concat(words(n.dataset.group));
      n.classList.toggle("is-active", keys.some(function (k) { return active.indexOf(k) >= 0; }));
    });
    box.querySelectorAll("[data-to]").forEach(function (e) { e.classList.toggle("is-active", active.indexOf(e.dataset.to) >= 0); });
  }
  deck.querySelectorAll("div.anchor[data-anchor]").forEach(function (a) {
    drawAnchor(a, a.dataset.anchor, words(a.dataset.active || a.dataset.anchorPart));
  });
  slides.forEach(function (s) {
    if (!s.dataset.anchor || s.querySelector(":scope > .anchor-mini")) return;
    var mini = make("div", "anchor anchor-mini");
    mini.setAttribute("aria-hidden", "true");
    mini.title = (anchors[s.dataset.anchor] || {}).title || s.dataset.anchor;
    drawAnchor(mini, s.dataset.anchor, words(s.dataset.anchorPart));
    s.appendChild(mini);
  });

  /* ---------- Builds ---------- */
  function maxStep(s) {
    var m = 0;
    s.querySelectorAll("[data-step]").forEach(function (e) { m = Math.max(m, parseInt(e.dataset.step, 10) || 0); });
    return m;
  }
  function setStep(s, n) {
    s.querySelectorAll("[data-step]").forEach(function (e) {
      e.classList.toggle("is-shown", (parseInt(e.dataset.step, 10) || 0) <= n);
    });
  }

  /* ---------- Timers ---------- */
  function fmt(sec) { return Math.floor(sec / 60) + ":" + pad(sec % 60); }
  function renderTimer(t) {
    t.textContent = fmt(t._left);
    t.classList.toggle("is-running", !!t._run);
    t.classList.toggle("is-done", t._left === 0);
  }
  function setTimer(t, run, left) {
    if (t._run) { clearInterval(t._run); t._run = null; }
    t._left = left;
    if (run) {
      t._run = setInterval(function () {
        t._left = Math.max(0, t._left - 1);
        if (t._left === 0) { clearInterval(t._run); t._run = null; }
        renderTimer(t);
      }, 1000);
    }
    renderTimer(t);
  }
  var timerSync = function () {}; // set once presenting starts
  function toggleTimer(t) {
    var run = !t._run;
    setTimer(t, run, run && t._left === 0 ? t._total : t._left);
    timerSync(t);
  }
  deck.querySelectorAll(".timer[data-timer]").forEach(function (t) {
    t._total = Math.round(parseFloat(t.dataset.timer) * 60) || 0;
    t._left = t._total;
    t._run = null;
    t.setAttribute("role", "timer");
    t.title = "Click or press T to start and pause";
    t.addEventListener("click", function (ev) { ev.stopPropagation(); toggleTimer(t); });
    renderTimer(t);
  });

  /* ---------- Print mode ---------- */
  if (params.has("all")) root.classList.add("show-all");
  if (params.has("print")) {
    root.classList.add("is-print");
    slides.forEach(function (s) { setStep(s, Infinity); });
    fitFeet();
    return;
  }

  /* ---------- Presenting ---------- */
  var presenter = params.has("presenter");
  var cur = -1, step = 0, presenterWin = null;
  root.classList.add(presenter ? "is-presenter" : "is-present");

  var bar, notes, started = Date.now();
  if (presenter) {
    bar = make("div", "presenter-bar", '<b class="p-count"></b><span class="p-time">0:00</span><span>Arrows navigate · T timer · both windows follow each other</span>');
    notes = make("div", "presenter-notes");
    document.body.appendChild(bar);
    document.body.appendChild(notes);
    setInterval(function () { bar.querySelector(".p-time").textContent = fmt(Math.floor((Date.now() - started) / 1000)); }, 1000);
  }

  function fit() {
    if (!presenter) {
      root.style.setProperty("--deck-scale", Math.min(innerWidth / 1920, innerHeight / 1080).toFixed(4));
      return;
    }
    var pcur = Math.min((innerWidth * 0.64 - 48) / 1920, (innerHeight - 128) / 1080);
    var pnext = Math.max(0.1, Math.min((innerWidth - 96 - 1920 * pcur) / 1920, 0.4));
    root.style.setProperty("--p-cur", pcur.toFixed(4));
    root.style.setProperty("--p-next", pnext.toFixed(4));
    root.style.setProperty("--p-notes-top", Math.round(96 + 1080 * pnext + 24) + "px");
    root.style.setProperty("--p-notes-w", Math.round(1920 * pnext) + "px");
  }

  function post(msg) {
    try { if (presenterWin && !presenterWin.closed) presenterWin.postMessage(msg, "*"); } catch (e) { /* closed */ }
    try { if (presenter && window.opener) window.opener.postMessage(msg, "*"); } catch (e) { /* closed */ }
  }
  function sync() { post({ aeDeck: true, i: cur, n: step }); }
  timerSync = function (t) {
    var at = slides.indexOf(t.closest("section.slide"));
    post({ aeTimer: true, i: at, run: !!t._run, left: t._left });
  };

  function show(i, n, remote) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    var entering = i !== cur;
    n = Math.max(0, Math.min(maxStep(slides[i]), n || 0));
    slides.forEach(function (s, k) {
      s.classList.toggle("is-current", k === i);
      s.classList.toggle("is-next", presenter && k === i + 1);
      if (k !== i) s.classList.remove("is-active");
      setStep(s, k === i ? n : k < i ? Infinity : 0);
      s.querySelectorAll("video[data-autoplay]").forEach(function (v) {
        if (k === i) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause();
      });
    });
    fitFoot(slides[i]);
    if (presenter) fitFoot(slides[i + 1]);
    if (entering) {
      var s = slides[i];
      s.classList.remove("is-active");
      void s.offsetWidth; // restart motion when a slide is entered again
      s.classList.add("is-active");
    }
    cur = i;
    step = n;
    if (location.hash !== "#" + (i + 1)) history.replaceState(null, "", "#" + (i + 1));
    if (presenter) {
      bar.querySelector(".p-count").textContent = (i + 1) + " / " + slides.length + (maxStep(slides[i]) ? "  ·  step " + n + "/" + maxStep(slides[i]) : "");
      var aside = slides[i].querySelector("aside.notes");
      notes.innerHTML = aside ? aside.innerHTML : "";
    }
    if (!remote) sync();
  }

  function next() {
    if (step < maxStep(slides[cur])) show(cur, step + 1);
    else if (cur < slides.length - 1) show(cur + 1, 0);
  }
  function prev() {
    if (step > 0) show(cur, step - 1);
    else if (cur > 0) show(cur - 1, maxStep(slides[cur - 1]));
  }
  function openPresenter() {
    var url = location.href.split("#")[0].split("?")[0] + "?presenter#" + (cur + 1);
    presenterWin = window.open(url, "ae-presenter", "width=1440,height=900");
  }

  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target.closest && e.target.closest("input, textarea, select, [contenteditable='true']")) return;
    switch (e.key) {
      case "ArrowRight": case "ArrowDown": case "PageDown": case " ": e.preventDefault(); next(); break;
      case "ArrowLeft": case "ArrowUp": case "PageUp": case "Backspace": e.preventDefault(); prev(); break;
      case "Home": e.preventDefault(); show(0, 0); break;
      case "End": e.preventDefault(); show(slides.length - 1, maxStep(slides[slides.length - 1])); break;
      case "p": case "P": if (!presenter) openPresenter(); break;
      case "t": case "T": var t = slides[cur].querySelector(".timer[data-timer]"); if (t) toggleTimer(t); break;
      case "f": case "F":
        if (document.fullscreenElement) document.exitFullscreen();
        else if (root.requestFullscreen) root.requestFullscreen();
        break;
    }
  });

  deck.addEventListener("click", function (e) {
    var link = e.target.closest("a[data-goto]");
    if (!link) return;
    e.preventDefault();
    show(parseInt(link.dataset.goto, 10), 0);
  });
  if (!presenter) {
    deck.addEventListener("click", function (e) {
      if (e.target.closest("a, button, video, .timer, input, textarea, select")) return;
      if (e.clientX < innerWidth / 3) prev(); else next();
    });
  }

  window.addEventListener("message", function (e) {
    var d = e.data;
    if (!d) return;
    if (d.aeHello) { presenterWin = e.source; sync(); }
    if (d.aeDeck) show(d.i, d.n, true);
    if (d.aeTimer && slides[d.i]) {
      var t = slides[d.i].querySelector(".timer[data-timer]");
      if (t) setTimer(t, d.run, d.left);
    }
  });

  window.addEventListener("hashchange", function () {
    var h = parseInt(location.hash.slice(1), 10);
    if (h && h - 1 !== cur) show(h - 1, 0);
  });

  window.addEventListener("beforeprint", function () {
    root.classList.add("is-print");
    slides.forEach(function (s) { setStep(s, Infinity); });
    fitFeet();
  });
  window.addEventListener("afterprint", function () {
    root.classList.remove("is-print");
    var keep = step;
    slides.forEach(function (s, k) { setStep(s, k === cur ? keep : k < cur ? Infinity : 0); });
  });

  window.addEventListener("resize", fit);
  fit();
  var start = parseInt(location.hash.slice(1), 10);
  show(start ? start - 1 : 0, 0, true);
  if (presenter && window.opener) {
    try { window.opener.postMessage({ aeHello: true }, "*"); } catch (e) { /* no opener */ }
  }
})();
