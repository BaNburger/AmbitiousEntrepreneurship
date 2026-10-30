/* Ambitious Entrepreneurship deck runtime. Updated: 2026-10-30. Status: ready.
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
   click details (data-pop, anchors.js details, data-details-page), tally
   cells (data-tally), confetti (data-confetti), read-out symbols, the
   presenter view and print mode. Source lines of kind "Bastian" show only
   their citations.

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

  /* ---------- Details (click to open) ---------- */
  // A trigger [data-pop="key"] opens the <div class="pop" data-pop-for="key">
  // on its slide, and a part of a full-size anchor opens the detail its
  // anchors.js entry gives (details: { node: ["Title", "text"] }). Presenting,
  // one detail is open at a time. A slide with data-details-page gets a page
  // after it in print with every detail as a card, under the same page number,
  // so the student PDF keeps what the room heard and the numbers stay those of
  // the live deck (Bastian, 2026-10-30, M00 feedback on the evidence pyramid).
  var anchorsDef = window.AEAnchors || {};
  function detailsOf(s) {
    var list = [];
    s.querySelectorAll(".pop[data-pop-for]").forEach(function (p) {
      var h = p.querySelector("h3, b");
      list.push([h ? h.textContent : "", p.innerHTML.replace(h ? h.outerHTML : "", "")]);
    });
    s.querySelectorAll("div.anchor[data-anchor]").forEach(function (a) {
      var d = (anchorsDef[a.dataset.anchor] || {}).details || {};
      Object.keys(d).forEach(function (k) { list.push([d[k][0], esc(d[k][1])]); });
    });
    return list;
  }
  if (params.has("print")) {
    slides.slice().forEach(function (s) {
      if (!s.hasAttribute("data-details-page")) return;
      var list = detailsOf(s);
      if (!list.length) return;
      var t = s.querySelector(".title");
      var de = (document.documentElement.lang || "").slice(0, 2) === "de";
      var page = make("section", "slide");
      page.dataset.archetype = "details";
      page.setAttribute("data-details-of", "");
      if (s.hasAttribute("data-hold")) page.setAttribute("data-hold", "");
      page.innerHTML = '<div class="head"><span class="label">' + (de ? "Im Detail" : "In detail") + '</span><h2 class="title">' +
        (t ? t.innerHTML : "") + '</h2></div><div class="content"><div class="details-grid' + (list.length > 6 ? ' is-dense" style="grid-template-rows:repeat(' + Math.ceil(list.length / 2) + ',auto)' : "") + '">' +
        list.map(function (d) { return '<div class="card"><h3>' + esc(d[0]) + "</h3><p>" + d[1] + "</p></div>"; }).join("") + "</div></div>";
      var src = s.querySelector(":scope > footer.prov");
      if (src) page.appendChild(src.cloneNode(true));
      s.after(page);
    });
    slides = Array.prototype.slice.call(deck.querySelectorAll(":scope > section.slide"));
  }

  /* ---------- Own-view source lines ---------- */
  // Bastian, 2026-10-30: a source that is only his own assessment stays off
  // the slide, because whatever carries no source is his view anyway. A
  // source line with data-kind="Bastian" (or "Einschätzung") keeps its
  // provenance in the HTML for instructors. The slide shows it only where it
  // also carries a citation or a credit (a link, a year in brackets, "et al.",
  // "after" a name, a photo or logo credit), then without the tag and without
  // the leading sentences that only name the course or Bastian as the source.
  var OWN_KIND = /^(bastian|einschätzung)$/i;
  var KEEP = /\((?:[^()]*\D)?(1[89]|20)\d\d[a-z]?\)|et al\.|\bafter [A-Z]|\bnach [A-ZÄÖÜ]|photo|foto|logo|pexels|pixabay|wikimedia|CC BY|CC0|©|trademark|marken/i;
  // A lead sentence ends at a full stop before a word, not after an initial
  // ("Bower, S. A."). One that also cites someone loses only its own-view
  // opening ("Course material, adapted from X" shows "Adapted from X").
  var OWN_START = /^\s*(?:Bastian(?: Burger)?'s [^,.]*|Course (?:material|graphic)|Course [a-z-]+ format|The course's own [^,.]*|My [^,.]*|(?:Eigene )?Einschätzung[^,.]*)/i;
  var SENTENCE = /^\s*(?:[^.]|\.(?!\s+[A-ZÄÖÜ][a-zäöüß]|\s*$))*\.\s*/;
  // Approval dates are the workspace's process, not a source (review of
  // 2026-10-30): "workshop, approved 2026-10-19" shows as "workshop".
  var APPROVED = /,?\s*\(?approved(?: by Bastian)?(?: on)? \d{4}-\d{2}-\d{2}\)?/g;
  slides.forEach(function (s) {
    var src = s.querySelector(":scope > footer.prov");
    if (src) src.childNodes.forEach(function (n) { if (n.nodeType === 3) n.nodeValue = n.nodeValue.replace(APPROVED, ""); });
    if (!src || !OWN_KIND.test((src.dataset.kind || "").trim())) return;
    if (!src.querySelector("a[href]") && !KEEP.test(src.textContent)) { src.remove(); return; }
    src.dataset.kind = "";
    var first = src.firstChild;
    while (first && first.nodeType === 3 && OWN_START.test(first.nodeValue)) {
      var lead = (first.nodeValue.match(SENTENCE) || [first.nodeValue])[0];
      if (KEEP.test(lead)) {
        var rest = first.nodeValue.replace(OWN_START, "").replace(/^\s*,\s*/, "");
        first.nodeValue = rest.charAt(0).toUpperCase() + rest.slice(1);
        break;
      }
      first.nodeValue = first.nodeValue.slice(lead.length);
    }
  });

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
  // data-main-chapters="3|4|5|6" names the session's main chapters, the input
  // that builds step by step. The agenda marks them, so the room sees which
  // chapters carry the session and which are recap, read-out or wrap-up.
  var mains = (deck.dataset.mainChapters || "").split("|").map(function (n) { return parseInt(n, 10); }).filter(function (n) { return n > 0; });

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

  // The student PDF (?print without all) leaves held slides out, so its page
  // numbers count only the slides it shows. Presenting keeps every number.
  var studentPrint = params.has("print") && !params.has("all"), shown = 0, all = 0;

  slides.forEach(function (s, i) {
    var archetype = s.dataset.archetype || "";
    var extra = s.hasAttribute("data-details-of");
    if (!extra && !(studentPrint && s.hasAttribute("data-hold"))) shown++;
    if (!extra) all++;
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
        var main = mains.indexOf(k + 1) >= 0;
        var li = make("li", [state(k), main ? "main" : "", main && k + 1 === Math.min.apply(null, mains) ? "main-first" : ""].join(" ").trim());
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
      sig.appendChild(make("span", "pg", esc([mod, pad(studentPrint ? shown : all)].filter(Boolean).join(" · "))));
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

  /* ---------- Read-out symbols ---------- */
  // The read-out slide ("Your presentations · make it credible") shows each
  // kind of evidence as a symbol, not only as a word: a chart for facts, a
  // number for numbers, quotation marks for quotes, a picture for images
  // (Bastian, 2026-10-30, M01 slide 12: show, don't tell). A card that
  // brings its own symbol, its h3 inside a row, keeps it.
  var SYMBOLS = { facts: '<span class="icon icon-chart-column"></span>', numbers: "<b>12</b>",
    quotes: '<span class="icon icon-quote"></span>', images: '<span class="icon icon-image"></span>' };
  deck.querySelectorAll(".credible > .card").forEach(function (c) {
    var h = c.querySelector(":scope > h3"), k = h && h.textContent.trim().toLowerCase();
    if (!h || !SYMBOLS[k]) return;
    var row = make("div", "sym-row"), sym = make("span", "sym", SYMBOLS[k]);
    sym.setAttribute("aria-hidden", "true");
    c.insertBefore(row, h);
    row.appendChild(sym);
    row.appendChild(h);
  });

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
    // Parts with a detail in anchors.js open it on click (see Details above).
    var details = (anchors[a.dataset.anchor] || {}).details, s = a.closest("section.slide");
    if (!details || !s) return;
    a.querySelectorAll("[data-node]").forEach(function (n) {
      var d = details[n.dataset.node];
      if (!d) return;
      var key = a.dataset.anchor + "-" + n.dataset.node;
      n.setAttribute("data-pop", key);
      if (!s.querySelector('.pop[data-pop-for="' + key + '"]')) s.appendChild(make("div", "pop", "<h3>" + esc(d[0]) + "</h3><p>" + esc(d[1]) + "</p>")).dataset.popFor = key;
    });
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
    var forward = entering || n > step;
    if (entering && cur >= 0) closePops(slides[cur]);
    cur = i;
    step = n;
    if (forward) fireConfetti(slides[i], n, entering);
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

  /* ---------- Details, tallies and confetti (presenting only) ---------- */
  function closePops(s) {
    s.querySelectorAll(".pop.is-open").forEach(function (p) { p.classList.remove("is-open"); });
    s.querySelectorAll("[data-pop].is-picked").forEach(function (t) { t.classList.remove("is-picked"); });
  }
  deck.addEventListener("click", function (e) {
    var s = e.target.closest("section.slide");
    if (!s) return;
    var open = e.target.closest(".pop.is-open");
    var trig = e.target.closest("[data-pop]");
    if (open || (!trig && s.querySelector(".pop.is-open"))) { e.stopPropagation(); closePops(s); return; }
    if (!trig) return;
    e.stopPropagation();
    var pop = s.querySelector('.pop[data-pop-for="' + trig.getAttribute("data-pop") + '"]');
    var was = pop && pop.classList.contains("is-open");
    closePops(s);
    if (pop && !was) { pop.classList.add("is-open"); trig.classList.add("is-picked"); }
  }, true);

  // A tally cell [data-tally="10"] darkens by one step per click, from the
  // lightest tint to the full colour at the given count (10 if none), so a
  // grid on the wall turns into a heat map of the room's answers. Shift-click
  // or right-click takes one back (Bastian, 2026-10-30, HHL slides 5 and 130).
  deck.querySelectorAll("[data-tally]").forEach(function (t) {
    var max = parseInt(t.dataset.tally, 10) || 10;
    function set(n) {
      n = Math.max(0, n);
      t.dataset.count = n;
      t.style.setProperty("--tally", Math.min(1, n / max).toFixed(3));
      t.classList.toggle("is-tallied", n > 0);
      t.classList.toggle("is-dark", n / max > 0.55);
    }
    set(0);
    t.addEventListener("click", function (ev) { ev.stopPropagation(); set(+t.dataset.count + (ev.shiftKey || ev.altKey ? -1 : 1)); });
    t.addEventListener("contextmenu", function (ev) { ev.preventDefault(); ev.stopPropagation(); set(+t.dataset.count - 1); });
  });

  // An element with data-confetti bursts confetti when its build step shows it,
  // or when its slide is entered if it has no step (Bastian, 2026-10-30, M00).
  var calm = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var CONFETTI = ["var(--primary)", "var(--accent)", "var(--marker)", "var(--diagram-magenta)", "var(--key)", "hsl(150 60% 40%)"];
  function confetti(el) {
    if (calm) return;
    var s = el.closest("section.slide"), r = el.getBoundingClientRect(), b = s.getBoundingClientRect();
    var k = b.width / 1920 || 1, burst = make("div", "confetti");
    burst.style.left = ((r.left + r.width / 2 - b.left) / k) + "px";
    burst.style.top = ((r.top + r.height / 2 - b.top) / k) + "px";
    for (var j = 0; j < 90; j++) {
      var p = make("i"), a = Math.random() * Math.PI * 2, v = 260 + Math.random() * 520;
      p.style.setProperty("--dx", Math.round(Math.cos(a) * v) + "px");
      p.style.setProperty("--dy", Math.round(Math.sin(a) * v * 0.7 - 260) + "px");
      p.style.setProperty("--rot", Math.round(Math.random() * 1080 - 540) + "deg");
      p.style.background = CONFETTI[j % CONFETTI.length];
      p.style.animationDelay = Math.round(Math.random() * 120) + "ms";
      burst.appendChild(p);
    }
    s.appendChild(burst);
    setTimeout(function () { burst.remove(); }, 2600);
  }
  function fireConfetti(s, n, entering) {
    s.querySelectorAll("[data-confetti]").forEach(function (el) {
      var at = parseInt(el.dataset.step, 10) || 0;
      if (at ? at === n : entering) confetti(el);
    });
  }

  deck.addEventListener("click", function (e) {
    var link = e.target.closest("a[data-goto]");
    if (!link) return;
    e.preventDefault();
    show(parseInt(link.dataset.goto, 10), 0);
  });
  if (!presenter) {
    deck.addEventListener("click", function (e) {
      if (e.target.closest("a, button, video, .timer, input, textarea, select, [data-pop], [data-tally], .pop")) return;
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
