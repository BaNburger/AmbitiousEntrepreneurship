/* Course anchor diagrams, the cornerstone graphics. Updated: 2026-10-30.
   Owned by the course-design skill. Each is drawn once here, from Bastian's
   legacy slide, and placed in any deck as
     <div class="anchor" data-anchor="NAME" data-active="PART">   full size
     <section class="slide" data-anchor="NAME" data-anchor-part="PART">   corner miniature
   and exported for documents with scripts/deck.py figure --anchor NAME.
   Load this file before deck.js. Parts carry data-node and data-group, so a
   part name lights one element or a whole group (a pyramid phase). Edges and
   their labels carry data-to. Styles live in deck.css.
   Text is in SVG units. Full-colour cornerstones use a 1640-unit viewBox and
   are drawn at the full content width (1640 px), Build-Measure-Learn uses
   1100 units and at least 1000 px, so no label falls under 24 px.
   Drawn so far: build-measure-learn, evidence-pyramid, problem-solution,
   root-cause, problem-you-want, problem-oriented, founder-skills,
   ideation-stage, double-diamond, every-application, agent-loop,
   critical-known, funnel ("How make numbers go brrr"), kpi-tree and
   kpi-tree-profit, stage-arrow, and from M11 identity-map, two-curves,
   in-that-order, stressor-map and scary-bits, for every opening
   course-path and pivot-fork, and on AI at work freeze-rule, task-compass,
   autonomy-levels and build-ladder. Others are added when a module needs
   them. */
window.AEAnchors = window.AEAnchors || {};

/* Build-Measure-Learn, legacy slide 38. Framework: Ries, E. (2011). The Lean
   Startup. Crown Business. Steps: build, measure, learn. */
window.AEAnchors["build-measure-learn"] = {
  title: "Build-Measure-Learn",
  source: "Ries, E. (2011). The Lean Startup. Crown Business.",
  steps: ["build", "measure", "learn"],
  /* Click details (deck.js), Bastian's reading of the loop (2026-10-30, M00
     feedback): start at Learn, test one hypothesis, only paying customers
     measure, and with AI the brake is on building. */
  details: {
    learn: ["Learn: start here", "Your own insight is the start. Pick the one hypothesis you believe brings you to your next paying customer, or to a 10x step. One, not a list. Learning is yours, nobody does it for you."],
    build: ["Build: only what tests it", "Build the smallest thing that tests that one hypothesis, as fast as you can. With AI, building is cheap, so the skill is braking. Whatever extra you build gets measured too and blurs what you learn."],
    measure: ["Measure: with real customers", "Only real customers count, and a real customer opens their wallet. ChatGPT can give you a hint, but ChatGPT is never your customer. It does not pay."]
  },
  svg: '<svg viewBox="0 0 1100 680" role="img" aria-label="Build-Measure-Learn loop">' +
    '<defs>' +
    '<marker id="ae-head-grey" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="hsl(220 13% 78%)"/></marker>' +
    '<marker id="ae-head-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="hsl(217 76% 44%)"/></marker>' +
    '</defs>' +
    '<path class="edge" data-to="measure" d="M712 100 C 850 110, 915 240, 920 410"/>' +
    '<path class="edge" data-to="learn" d="M760 530 C 640 620, 460 620, 350 540"/>' +
    '<path class="edge" data-to="build" d="M180 410 C 185 240, 250 110, 380 100"/>' +
    '<text class="edge-label" data-to="measure" x="890" y="200">Baseline</text>' +
    '<text class="edge-label" data-to="learn" x="550" y="660" text-anchor="middle">Analyze</text>' +
    '<text class="edge-label" data-to="build" x="258" y="262">Hypothesis</text>' +
    '<g class="node" data-node="build"><rect x="390" y="40" width="320" height="140" rx="16"/><text class="n" x="550" y="108" text-anchor="middle">Build</text><text class="d" x="550" y="150" text-anchor="middle">Experiments</text><text class="here" x="550" y="218" text-anchor="middle">Today</text></g>' +
    '<g class="node" data-node="measure"><rect x="760" y="420" width="320" height="140" rx="16"/><text class="n" x="920" y="488" text-anchor="middle">Measure</text><text class="d" x="920" y="530" text-anchor="middle">Metrics</text><text class="here" x="920" y="598" text-anchor="middle">Today</text></g>' +
    '<g class="node" data-node="learn"><rect x="20" y="420" width="320" height="140" rx="16"/><text class="n" x="180" y="488" text-anchor="middle">Learn</text><text class="d" x="180" y="530" text-anchor="middle">Pivot or persevere</text><text class="here" x="180" y="598" text-anchor="middle">Today</text></g>' +
    '</svg>'
};

/* Shared drawing helpers for the full-colour cornerstones. */
(function () {
  var A = window.AEAnchors;
  function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function text(cls, x, y, t, anchor) {
    return '<text class="' + cls + '" x="' + x + '" y="' + y + '"' + (anchor ? ' text-anchor="' + anchor + '"' : "") + '>' + esc(t) + "</text>";
  }
  function lines(cls, x, y, list, step, anchor) {
    return list.map(function (t, i) { return text(cls, x, y + i * step, t, anchor); }).join("");
  }
  function box(node, group, color, x, y, w, h, label) {
    return '<g class="part" data-node="' + node + '"' + (group ? ' data-group="' + group + '"' : "") + ">" +
      '<rect class="shape ' + color + '" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="16"/>' +
      text("lbl", x + w / 2, y + h / 2, label) + "</g>";
  }
  function arrow(x1, y1, x2, y2) {
    return '<path class="line" d="M' + x1 + " " + y1 + " L" + x2 + " " + y2 + '" marker-end="url(#ae-arrow)"/>';
  }
  var DEFS = '<defs><marker id="ae-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path class="arrowfill" d="M0,0 L10,5 L0,10 z"/></marker></defs>';

  /* Evidence pyramid, legacy slides 128 and 328 (328 fades the upper levels,
     the same highlight the parts give here). Bottom to top, typos fixed.
     The legacy order stays. The level above interviews is quantitative
     evidence, a survey or a landing page, and a survey earns it only when it
     tests what interviews suggested with closed questions about past
     behaviour (Bastian, M04 gate F, 2026-10-19, AGENTS.md "Course
     decisions"). Its part name stays "survey". Groups: ideation, incubation,
     acceleration, apex. The phases read Problem space, Solution space and
     Growth phase, and their part names stay (Bastian, 2026-10-30, M00 and M01
     feedback). Each rung and phase opens a detail on click (deck.js). */
  (function () {
    var levels = [
      ["anecdotal", "Anecdotal evidence", "ideation", "c-magenta"],
      ["interviews", "Qualitative interviews", "ideation", "c-magenta"],
      ["survey", "Quantitative evidence", "ideation", "c-magenta"],
      ["mockup", "Wireframe mockup", "incubation", "c-navy"],
      ["prototype", "Functional prototype", "incubation", "c-navy"],
      ["paid", "Paid prototype", "incubation", "c-navy"],
      ["early-product", "Growing early product", "acceleration", "c-blue"],
      ["growth", "Net positive growth", "acceleration", "c-blue"],
      ["margins", "Positive margins", "acceleration", "c-blue"],
      ["sustainable", "Sustainable business", "apex", "c-strong"],
      ["market", "Efficient market", "apex", "c-strong"]
    ];
    var cx = 600, half = function (y) { return 40 + (y - 50) * (520 / 546); };
    var out = DEFS;
    levels.forEach(function (l, i) {
      var yb = 596 - i * 50, yt = yb - 46, ym = (yb + yt) / 2;
      var hb = half(yb), ht = half(yt), hm = half(ym);
      var pts = [cx - hb, yb, cx + hb, yb, cx + ht, yt, cx - ht, yt].map(function (v) { return v.toFixed(1); });
      out += '<g class="part" data-node="' + l[0] + '" data-group="' + l[2] + '">' +
        '<polygon class="shape ' + l[3] + '" points="' + pts[0] + "," + pts[1] + " " + pts[2] + "," + pts[3] + " " + pts[4] + "," + pts[5] + " " + pts[6] + "," + pts[7] + '"/>' +
        (i < 9 ? text("lbl sm", cx, ym, l[1]) : text("note strong", (cx - hm - 18).toFixed(0), ym, l[1], "end")) + "</g>";
    });
    [["ideation", "Problem space", 0, "magenta"], ["incubation", "Solution space", 3, "navy"], ["acceleration", "Growth phase", 6, "blue"]].forEach(function (ph) {
      var yb = 596 - ph[2] * 50, yt = yb - 146, ym = (yb + yt) / 2;
      out += '<g class="part phase" data-node="' + ph[0] + '" data-group="' + ph[0] + '">' +
        '<path class="brace k-' + ph[3] + '" d="M1180 ' + yb + " Q1204 " + yb + " 1204 " + (yb - 22) + " L1204 " + (ym + 12) + " L1218 " + ym + " L1204 " + (ym - 12) + " L1204 " + (yt + 22) + " Q1204 " + yt + " 1180 " + yt + '"/>' +
        text("phase-t t-" + ph[3], 1236, ym, ph[1]) + "</g>";
    });
    A["evidence-pyramid"] = {
      title: "Hierarchy of evidence",
      source: "Bastian Burger, course framework, legacy slides 128 and 328.",
      details: {
        anecdotal: ["Anecdotal evidence", "One person tells you something, or you lived it yourself. Enough to start looking, never enough to decide."],
        interviews: ["Qualitative interviews", "Conversations about the last time the problem happened. They build your theory: who has the problem, what it costs, what they do today."],
        survey: ["Quantitative evidence", "Tests how strong the effect is that your interviews suggested: how many in your segment act on it. A survey about past behaviour, or a landing page that counts clicks."],
        mockup: ["Wireframe mockup", "A quick thing that only shows how the solution could look. People react to it, nothing works yet."],
        prototype: ["Functional prototype", "It works. A slice of the product solves the problem for real users, even if you run parts of it by hand."],
        paid: ["Paid prototype", "Somebody opens their wallet for it. The first rung that counts as validation, everything below is signal."],
        "early-product": ["Growing early product", "Customers pay again and new ones arrive. The question moves from whether it works to whether it grows."],
        growth: ["Net positive growth", "You win more customers than you lose, month after month."],
        margins: ["Positive margins", "Each sale earns more than it costs to deliver."],
        sustainable: ["Sustainable business", "The business carries itself, without your next funding round."],
        market: ["Efficient market", "Others copy you and prices settle. By now everyone has the evidence, and so does every competitor."],
        ideation: ["Problem space", "Rungs 1 to 3. Is the problem real, who has it, and how many?"],
        incubation: ["Solution space", "Rungs 4 to 6. Does your solution solve it, and will someone pay?"],
        acceleration: ["Growth phase", "Rungs 7 to 9. Does it work as a business, again and again?"]
      },
      steps: levels.map(function (l) { return l[0]; }).concat(["ideation", "incubation", "acceleration", "apex"]),
      svg: '<svg viewBox="0 0 1640 600" role="img" aria-label="Hierarchy of evidence in the lean startup, eleven levels in three phases: problem space, solution space, growth phase">' + out + "</svg>"
    };
  })();

  /* Problem space vs. solution space, legacy slides 119 and 120. The problem
     space starts with a segment and its obstacle, the solution space starts
     with a thing and finds customers last. The problem side says "Segment"
     where legacy 119 says "Customers" (Bastian, M03 brief D6, 2026-10-19).
     The part name stays "customers". Groups: problem, solution. */
  A["problem-solution"] = {
    title: "Problem space vs. solution space",
    source: "Bastian Burger, course framework, legacy slides 119 and 120.",
    steps: ["problem", "solution", "customers", "obstacle", "goal", "boundary", "shiny", "feature", "s-goal", "s-customers"],
    svg: '<svg viewBox="0 0 1640 600" role="img" aria-label="Problem space versus solution space">' + DEFS +
      '<g class="part" data-node="problem-head" data-group="problem">' + text("cap-t t-blue", 410, 30, "Problem space", "middle") + "</g>" +
      '<g class="part" data-node="solution-head" data-group="solution">' + text("cap-t t-purple", 1230, 30, "Solution space", "middle") + "</g>" +
      '<path class="divider" d="M820 10 L820 592"/>' +
      box("customers", "problem", "c-blue", 190, 70, 440, 90, "Segment") +
      box("obstacle", "problem", "c-purple", 80, 210, 660, 82, "Obstacle") +
      box("goal", "problem", "c-blue", 190, 342, 440, 90, "Goal") +
      box("boundary", "problem", "c-purple", 190, 490, 440, 90, "Boundary condition") +
      arrow(410, 162, 410, 202) + arrow(410, 294, 410, 334) + arrow(410, 488, 410, 440) +
      box("shiny", "solution", "c-purple", 1010, 70, 440, 90, "Shiny new thing") +
      box("feature", "solution", "c-purple", 1010, 206, 440, 90, "Feature") +
      box("s-goal", "solution", "c-blue", 1010, 342, 440, 90, "Goal") +
      box("s-customers", "solution", "c-blue", 1010, 490, 440, 90, "Customers") +
      arrow(1230, 162, 1230, 198) + arrow(1230, 298, 1230, 334) + arrow(1230, 434, 1230, 482) +
      "</svg>"
  };

  /* Finding root causes, legacy slide 121. Ask why the goal matters, and why
     not, for the boundary condition, four times each. Groups: why, why-not. */
  (function () {
    var out = DEFS + box("goal", "why", "c-blue", 0, 40, 360, 100, "Goal") + box("boundary", "why-not", "c-purple", 0, 260, 360, 100, "Boundary condition") +
      arrow(180, 256, 180, 148);
    for (var i = 0; i < 4; i++) {
      var x = 410 + i * 300;
      out += arrow(x - 46, 90, x - 8, 90) + box("why-" + (i + 1), "why", "c-blue", x, 40, 250, 100, "Why?");
      out += arrow(x - 46, 310, x - 8, 310) + box("why-not-" + (i + 1), "why-not", "c-purple", x, 260, 250, 100, "Why not?");
    }
    A["root-cause"] = {
      title: "Finding root causes",
      source: "Bastian Burger, course framework, legacy slide 121.",
      steps: ["why", "why-not", "goal", "boundary"],
      svg: '<svg viewBox="0 0 1640 400" role="img" aria-label="Finding root causes, four times why for the goal and why not for the boundary condition">' + out + "</svg>"
    };
  })();

  /* A problem you want to have, legacy slide 161. Three circles, the problem
     worth having sits where all three overlap. Parts: insight, problem,
     executable, center. */
  A["problem-you-want"] = {
    title: "A problem you want to have",
    source: "Bastian Burger, course framework, legacy slide 161.",
    steps: ["insight", "problem", "executable", "center"],
    svg: '<svg viewBox="0 8 1640 624" role="img" aria-label="A problem you want to have, the overlap of unique insight, a problem worth solving and a team that can execute">' +
      '<g class="venn">' +
      '<g class="part" data-node="insight"><circle class="shape c-blue-soft" cx="820" cy="215" r="200"/>' + text("lbl dark", 820, 140, "Unique insight") + "</g>" +
      '<g class="part" data-node="problem"><circle class="shape c-magenta-soft" cx="700" cy="420" r="200"/>' + text("lbl dark", 620, 470, "Problem worth") + text("lbl dark", 620, 508, "solving") + "</g>" +
      '<g class="part" data-node="executable"><circle class="shape c-yellow" cx="940" cy="420" r="200"/>' + text("lbl dark", 1020, 470, "Executable") + text("lbl dark", 1020, 508, "by the team") + "</g>" +
      "</g>" +
      '<g class="part" data-node="center"><path class="shape c-ink" d="M820 312 L831 340 L861 341 L837 359 L846 388 L820 371 L794 388 L803 359 L779 341 L809 340 Z"/></g>' +
      '<g class="part" data-node="insight-notes" data-group="insight">' + lines("note", 1050, 60, ["Unique tech", "Unique access to customers", "Unique take that others don’t have"], 38) + "</g>" +
      '<g class="part" data-node="problem-notes" data-group="problem">' + lines("note", 480, 548, ["You are passionate about it", "Your audience is passionate about it", "You can make a good living from it"], 38, "end") + "</g>" +
      '<g class="part" data-node="executable-notes" data-group="executable">' + lines("note", 1160, 548, ["You can scale the product", "You can scale the backend", "You can scale the sales"], 38) + "</g>" +
      "</svg>"
  };

  /* Lean Startup, problem-oriented approach, legacy slide 118, redrawn as an
     illustration composite. The legacy photos are stock images, so the
     redraw uses pictograms. Parts: solution, problem. */
  (function () {
    function person(x, y, cls) {
      return '<g class="pict ' + cls + '"><circle cx="' + x + '" cy="' + (y - 52) + '" r="34"/><path d="M' + (x - 52) + " " + (y + 70) + " Q" + (x - 52) + " " + (y - 10) + " " + x + " " + (y - 10) + " Q" + (x + 52) + " " + (y - 10) + " " + (x + 52) + " " + (y + 70) + ' Z"/></g>';
    }
    var icons = {
      tech: '<rect x="18" y="18" width="44" height="44" rx="6"/><path d="M28 8v10M40 8v10M52 8v10M28 62v10M40 62v10M52 62v10M8 28h10M8 40h10M8 52h10M62 28h10M62 40h10M62 52h10"/>',
      org: '<rect x="28" y="6" width="24" height="18" rx="3"/><rect x="6" y="56" width="24" height="18" rx="3"/><rect x="50" y="56" width="24" height="18" rx="3"/><path d="M40 24v16M18 40h44M18 40v16M62 40v16"/>',
      product: '<path d="M40 8 L70 22 L70 56 L40 72 L10 56 L10 22 Z M10 22 L40 36 L70 22 M40 36 L40 72"/>',
      service: '<path d="M14 58 Q14 24 40 24 Q66 24 66 58 Z M8 64 H72 M40 24 V16 M34 14 H46"/>',
      bundle: '<rect x="10" y="40" width="34" height="30" rx="4"/><rect x="36" y="12" width="34" height="30" rx="4"/><rect x="30" y="36" width="20" height="16" rx="3"/>',
      education: '<path d="M40 14 L74 30 L40 46 L6 30 Z M20 37 V56 Q40 68 60 56 V37 M70 32 V54"/>'
    };
    function tile(key, x, y, label) {
      return '<g transform="translate(' + (x - 40) + "," + y + ')"><rect class="tile" x="-10" y="-10" width="100" height="100" rx="18"/><g class="icon-l">' + icons[key] + "</g></g>" + text("note strong", x, y + 122, label, "middle");
    }
    var hub = [1060, 240], hw = 180, hh = 130;
    var spokes = [["tech", 1520, 100, "Technologies"], ["org", 1520, 290, "Organization"], ["product", 880, 470, "Products"],
      ["service", 1090, 470, "Services"], ["bundle", 1300, 470, "Bundles"], ["education", 1500, 470, "Education"]];
    function edge(cx, cy, ex, ey, dx, dy) { // where the line from the centre leaves a box of half size ex, ey
      var t = Math.min(ex / Math.max(Math.abs(dx), 0.001), ey / Math.max(Math.abs(dy), 0.001));
      return [cx + dx * t, cy + dy * t];
    }
    var right = '<g class="part" data-node="problem">' + text("cap-t t-blue", 1180, 30, "Problem oriented", "middle") +
      '<rect class="tile" x="' + (hub[0] - hw) + '" y="' + (hub[1] - hh) + '" width="' + 2 * hw + '" height="' + 2 * hh + '" rx="22"/>' +
      person(hub[0], 214, "p-blue") + '<path class="stress" d="M1100 118 L1110 136 L1120 122 L1130 140 L1140 126"/>' +
      text("note strong", hub[0], 318, "Work pressure,", "middle") + text("note strong", hub[0], 352, "lack of balance", "middle");
    spokes.forEach(function (sp) {
      var dx = sp[1] - hub[0], dy = (sp[2] + 40) - hub[1];
      var a = edge(hub[0], hub[1], hw + 12, hh + 12, dx, dy), b = edge(sp[1], sp[2] + 40, 62, 62, -dx, -dy);
      right += '<path class="line dash" d="M' + a[0].toFixed(0) + " " + a[1].toFixed(0) + " L" + b[0].toFixed(0) + " " + b[1].toFixed(0) + '" marker-end="url(#ae-arrow)"/>' + tile(sp[0], sp[1], sp[2], sp[3]);
    });
    right += "</g>";
    var left = '<g class="part" data-node="solution">' + text("cap-t t-purple", 380, 30, "Solution oriented", "middle") +
      person(110, 210, "p-purple") +
      '<path class="banana" d="M60 400 Q110 470 190 410 Q200 398 196 388 Q150 430 92 392 Q80 380 70 384 Z"/>' +
      '<path class="bubble" d="M240 90 H740 Q760 90 760 110 V430 Q760 450 740 450 H260 Q240 450 240 430 V240 L208 214 L240 196 Z"/>' +
      lines("note", 270, 140, ["I developed this great product.", "I love it.", "Everybody will love it.", "Because I love it.", "My next version will be made", "from aluminum."], 52) + "</g>";
    A["problem-oriented"] = {
      title: "Lean Startup, a problem-oriented approach",
      source: "Bastian Burger, course material, legacy slide 118, redrawn with pictograms.",
      steps: ["solution", "problem"],
      svg: '<svg viewBox="0 0 1640 620" role="img" aria-label="Solution oriented, a founder in love with a product, versus problem oriented, many kinds of solutions to one pain">' + DEFS +
        left + '<path class="divider" d="M820 10 L820 610"/>' + right + "</svg>"
    };
  })();

  /* What you want in a team, legacy slide 66 (re-shown in M02 via 164 and
     M12 via 975). Three founders, bars at the legacy heights on a 0 to 10
     scale, illustrative. Each bar belongs to its founder and its skill, so
     "founder-2" lights one founder and "sales" lights every sales bar.
     Parts: founder-1 to founder-3, tech, product, sales. */
  (function () {
    var founders = [[8.5, 0.8, 2], [4.3, 2.8, 7.7], [0.3, 10, 2.8]];
    var skills = [["tech", "Tech", "c-blue"], ["product", "Product", "c-magenta"], ["sales", "Sales", "c-purple"]];
    var base = 440, maxh = 270, out = "";
    founders.forEach(function (vals, i) {
      var cx = Math.round(i * 1640 / 3 + 1640 / 6), f = "founder-" + (i + 1);
      out += '<g class="part" data-node="' + f + '-name" data-group="' + f + '"><g class="pict p-blue"><circle cx="' + (cx - 170) + '" cy="52" r="28"/>' +
        '<path d="M' + (cx - 216) + " 128 Q" + (cx - 216) + " 88 " + (cx - 170) + " 88 Q" + (cx - 124) + " 88 " + (cx - 124) + ' 128 Z"/></g>' +
        text("cap-t t-blue", cx - 100, 104, "Founder " + (i + 1)) + "</g>";
      skills.forEach(function (sk, j) {
        var h = Math.max(6, Math.round(vals[j] / 10 * maxh)), x = cx - 205 + j * 150;
        out += '<g class="part" data-node="' + f + "-" + sk[0] + '" data-group="' + f + " " + sk[0] + '"><rect class="shape ' + sk[2] + '" x="' + x + '" y="' + (base - h) + '" width="110" height="' + h + '"/></g>' +
          text("note", x + 55, base + 44, sk[1], "middle");
      });
      out += '<path class="divider" d="M' + (cx - 230) + " " + base + " L" + (cx + 230) + " " + base + '"/>';
    });
    A["founder-skills"] = {
      title: "What you want in a team: tech, product, sales",
      source: "Bastian Burger, course material, legacy slide 66. Bar heights as on the legacy slide, illustrative.",
      steps: ["founder-1", "founder-2", "founder-3"],
      svg: '<svg viewBox="0 0 1640 500" role="img" aria-label="Skill bars of three founders in tech, product and sales">' + out + "</svg>"
    };
  })();

  /* The ideation stage, legacy slide 704 (re-shown in M10). Driven
     individuals move through three pillars to four outcomes. Typos fixed.
     The band reads Problem space since 2026-10-30, the course's name for
     the phase (Bastian, M01 feedback), and the anchor name stays.
     Parts: learn, team, problem, outcomes. */
  (function () {
    var out = '<path class="shape c-magenta" d="M0 0 H960 L1000 36 L960 72 H0 Z"/>' + text("lbl", 480, 37, "Problem space") +
      lines("cap-t", 140, 250, ["Driven,", "smart and", "engaged", "individuals"], 44, "middle") +
      '<path class="tile" d="M290 150 H1150 V112 L1215 320 L1150 528 V490 H290 Z"/>';
    [["learn", "Pillar 1", ["Learn what", "it takes"], "How do I do it?"],
     ["team", "Pillar 2", ["Find", "a team"], "Who will be my mates?"],
     ["problem", "Pillar 3", ["Discover", "a problem"], "Where can I disrupt?"]].forEach(function (p, i) {
      var x = 310 + i * 290, c = x + 140;
      out += '<g class="part" data-node="' + p[0] + '" data-group="pillars"><rect class="shape c-blue" x="' + x + '" y="180" width="280" height="280" rx="16"/>' +
        text("lbl xs", c, 222, p[1]) + text("lbl", c, 292, p[2][0]) + text("lbl", c, 332, p[2][1]) + text("lbl xs", c, 412, p[3]) + "</g>";
    });
    var outcomes = [["Team committed", "for full-time work"], ["Team completed by all", "necessary disciplines"],
      ["Founders agree on hard and", "soft facts about funding"], ["Agreement on an", "interesting problem space"]];
    out += '<g class="part" data-node="outcomes"><rect class="shape c-navy" x="1230" y="100" width="410" height="440" rx="16"/>' + text("lbl", 1435, 148, "Outcomes");
    outcomes.forEach(function (o, i) { out += text("lbl xs", 1435, 214 + i * 84, o[0]) + text("lbl xs", 1435, 244 + i * 84, o[1]); });
    out += "</g>";
    A["ideation-stage"] = {
      title: "Understanding the problem in the problem space",
      source: "Bastian Burger, course framework, legacy slide 704.",
      steps: ["learn", "team", "problem", "outcomes"],
      svg: '<svg viewBox="0 0 1640 548" role="img" aria-label="Problem space, three pillars lead driven individuals to four outcomes">' + out + "</svg>"
    };
  })();

  /* The double diamond, legacy slides 357 to 360, after Design Council (2004).
     Diverge, then converge, first in the problem space, then in the solution
     space. Each half belongs to its diamond and to its way of thinking, so
     "solution" lights the second diamond and "diverge" both diverging halves.
     The pivots of legacy 363 and 364 are optional parts, drawn only when a
     slide lights them: pivot1 turns back within the solution diamond (another
     solution to the same problem), pivot2 goes back into the problem space.
     Parts: problem, solution, diverge, converge, explore, define, ideate,
     prototype, pivot1, pivot2. */
  (function () {
    var xs = [80, 435, 790, 1145, 1500], cy = 290, top = 100, bottom = 480;
    var halves = [["explore", "problem diverge", "c-magenta", "t-magenta", "Diverge", ["Understand", "& explore"]],
      ["define", "problem converge", "c-magenta", "t-magenta", "Converge", ["Synthesize", "& define"]],
      ["ideate", "solution diverge", "c-purple", "t-purple", "Diverge", ["Ideate", "& wireframe"]],
      ["prototype", "solution converge", "c-purple", "t-purple", "Converge", ["Prototype", "& iterate"]]];
    var out = DEFS + '<path class="line" d="M10 ' + cy + " L" + xs[0] + " " + cy + '"/>' +
      '<path class="line" d="M' + xs[4] + " " + cy + " L1628 " + cy + '" marker-end="url(#ae-arrow)"/>';
    halves.forEach(function (h, i) {
      var x1 = xs[i], x2 = xs[i + 1], diverge = i % 2 === 0;
      var d = diverge ? "M" + x1 + " " + cy + " L" + x2 + " " + top + " L" + x2 + " " + bottom + " Z"
        : "M" + x1 + " " + top + " L" + x2 + " " + cy + " L" + x1 + " " + bottom + " Z";
      var lx = Math.round(diverge ? x1 + (x2 - x1) * 0.64 : x1 + (x2 - x1) * 0.36);
      out += '<g class="part" data-node="' + h[0] + '" data-group="' + h[1] + '"><path class="shape ' + h[2] + '" d="' + d + '"/>' +
        text("lbl", lx, cy - 20, h[5][0]) + text("lbl", lx, cy + 20, h[5][1]) +
        text("cap-t " + h[3], (x1 + x2) / 2, 64, h[4], "middle") + "</g>";
    });
    out += '<path class="gap" d="M' + xs[1] + " " + top + " L" + xs[1] + " " + bottom + " M" + xs[3] + " " + top + " L" + xs[3] + " " + bottom + '"/>';
    function uturn(cx) { return '<path class="pivot" d="M' + (cx - 25) + " 140 H" + (cx + 15) + " A40 40 0 0 1 " + (cx + 15) + " 220 H" + (cx - 30) + '" marker-end="url(#ae-pivot)"/>'; }
    out += '<defs><marker id="ae-pivot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="2.6" markerHeight="2.6" orient="auto-start-reverse"><path class="arrowfill" d="M0,0 L10,5 L0,10 z"/></marker></defs>' +
      '<g class="part opt" data-node="pivot1">' + uturn(xs[3]) + "</g>" +
      '<g class="part opt" data-node="pivot2"><path class="pivot" d="M1090 180 H575" marker-end="url(#ae-pivot)"/>' + uturn(xs[1]) + "</g>";
    [[xs[0], "Start"], [xs[2], "Problem space definition"], [xs[4], "Solution definition"]].forEach(function (p) {
      out += '<circle class="dot" cx="' + p[0] + '" cy="' + cy + '" r="16"/>' + text("note strong", p[0], bottom + 44, p[1], "middle");
    });
    A["double-diamond"] = {
      title: "The double diamond",
      source: "After Design Council (2004), as drawn on legacy slides 357 to 360.",
      steps: ["explore", "define", "ideate", "prototype"],
      svg: '<svg viewBox="0 0 1640 540" role="img" aria-label="Double diamond: diverge and converge in the problem space, then in the solution space">' + out + "</svg>"
    };
  })();

  /* Every application ever, legacy slides 398 and 400 to 402 ("Every software
     product ever"): a user works with the interface, the interface talks to
     the logic, the logic reads and writes the database and reaches external
     services through APIs. Parts: user, interface, logic, database, api
     (also "apis"). */
  (function () {
    function block(node, group, x, y, w, h, cap, lines) {
      var c = y + h / 2 - (lines.length - 1) * 20;
      return '<g class="part" data-node="' + node + '"' + (group ? ' data-group="' + group + '"' : "") + '>' +
        '<rect class="shape c-magenta" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="16"/>' +
        text("cap-t t-magenta", x + w / 2, y - 18, cap, "middle") +
        lines.map(function (t, i) { return text("lbl", x + w / 2, c + i * 40, t); }).join("") + "</g>";
    }
    function pair(x1, y1, x2, y2, dy) {
      return arrow(x1, y1, x2, y2) + arrow(x2, y2 + dy, x1, y1 + dy);
    }
    var out = DEFS +
      '<g class="part" data-node="user"><rect class="shape c-navy" x="0" y="70" width="150" height="450" rx="24"/>' + text("lbl", 75, 295, "User") + "</g>" +
      block("interface", "", 250, 150, 300, 320, "Frontend", ["Interface"]) +
      block("logic", "", 700, 150, 300, 320, "Backend", ["Logic"]) +
      block("database", "", 1150, 70, 330, 190, "Backend", ["Database"]) +
      block("api", "apis", 1150, 330, 330, 190, "APIs", ["External", "services"]) +
      pair(162, 230, 238, 230, 140) + pair(562, 280, 688, 280, 60) +
      arrow(1012, 230, 1138, 180) + arrow(1138, 215, 1012, 265) +
      arrow(1012, 330, 1138, 380) + arrow(1138, 415, 1012, 365) +
      arrow(1492, 395, 1626, 395) + arrow(1626, 455, 1492, 455);
    A["every-application"] = {
      title: "Every application ever",
      source: "Bastian Burger, course material, legacy slides 398 and 400 to 402.",
      steps: ["interface", "logic", "database", "api"],
      svg: '<svg viewBox="0 0 1640 540" role="img" aria-label="Every application ever: a user works with the interface, the interface talks to the logic, the logic reads and writes the database and reaches external services through APIs">' + out + "</svg>"
    };
  })();

  /* The agent loop, new for M06 (no legacy slide): a written brief and a plan
     in small steps, then one step, test, review and save a version before the
     next step. Two misses lead back to the last saved version and a new
     brief. Parts: brief, plan, step, test, review, save (group cycle), restart. */
  (function () {
    function node(name, group, color, x, y, w, title, sub) {
      return '<g class="part" data-node="' + name + '"' + (group ? ' data-group="' + group + '"' : "") + '>' +
        '<rect class="shape ' + color + '" x="' + x + '" y="' + y + '" width="' + w + '" height="120" rx="18"/>' +
        text("lbl", x + w / 2, y + 48, title) + text("lbl xs", x + w / 2, y + 88, sub) + "</g>";
    }
    var out = DEFS +
      node("brief", "", "c-navy", 0, 240, 250, "Brief", "in writing") +
      node("plan", "", "c-navy", 320, 240, 260, "Plan", "small steps") +
      node("step", "cycle", "c-blue", 700, 90, 300, "One step", "ask for one") +
      node("test", "cycle", "c-blue", 1120, 90, 300, "Test", "does it work?") +
      node("review", "cycle", "c-blue", 1120, 360, 300, "Review", "what changed?") +
      node("save", "cycle", "c-strong", 700, 360, 300, "Save", "a version") +
      arrow(256, 300, 312, 300) + arrow(586, 286, 692, 172) +
      arrow(1008, 150, 1112, 150) + arrow(1270, 216, 1270, 352) + arrow(1114, 420, 1008, 420) +
      '<g class="part" data-node="next" data-group="cycle">' + arrow(850, 354, 850, 218) + text("note strong t-blue", 876, 296, "next") + "</g>" +
      '<g class="part" data-node="restart"><path class="line dash k-magenta" d="M1270 84 C 1270 10, 125 10, 125 232" marker-end="url(#ae-arrow)"/>' +
      text("cap-t t-magenta", 700, 2, "Two misses? Restore the last version, brief again", "middle") + "</g>";
    A["agent-loop"] = {
      title: "The agent loop",
      source: "Bastian Burger, course material for M06, no legacy slide.",
      steps: ["brief", "plan", "step", "test", "review", "save"],
      svg: '<svg viewBox="0 -34 1640 534" role="img" aria-label="The agent loop: a written brief, a plan in small steps, then one step, test, review and save a version before the next step. Two misses lead back to the last version and a new brief">' + out + "</svg>"
    };
  })();

  /* Choose your most crucial hypothesis, legacy slide 749 ("Kown" fixed): a
     2x2 of critical against known. Unknown and critical is the priority, so
     test it first. The labels sit on the quadrants instead of a legend.
     Parts: priority, todo, backlog, donot, and groups critical, unknown. */
  (function () {
    var x0 = 200, y0 = 64, w = 1240, h = 480, g = 16, qw = (w - g) / 2, qh = (h - g) / 2;
    var cx = x0 + w / 2, cy = y0 + h / 2;
    function quad(node, group, color, dark, col, row, title, sub) {
      var x = x0 + col * (qw + g), y = y0 + row * (qh + g), lc = dark ? "lbl dark" : "lbl";
      return '<g class="part" data-node="' + node + '" data-group="' + group + '"><rect class="shape ' + color + '" x="' + x + '" y="' + y + '" width="' + qw + '" height="' + qh + '" rx="16"/>' +
        text(lc, x + qw / 2, y + qh / 2 - 20, title) + text(lc + " xs", x + qw / 2, y + qh / 2 + 22, sub) + "</g>";
    }
    var out = DEFS +
      quad("priority", "critical unknown", "c-magenta", false, 0, 0, "Priority to-do", "Unknown and critical") +
      quad("todo", "critical", "c-purple", false, 1, 0, "To-do", "Known and critical") +
      quad("backlog", "unknown", "c-yellow", true, 0, 1, "Backlog", "Unknown and non-critical") +
      quad("donot", "", "c-navy", false, 1, 1, "Do not do", "Known and non-critical") +
      '<path class="line" d="M' + cx + " " + (y0 + h + 10) + " L" + cx + " " + (y0 - 10) + '" marker-start="url(#ae-arrow)" marker-end="url(#ae-arrow)"/>' +
      '<path class="line" d="M' + (x0 - 12) + " " + cy + " L" + (x0 + w + 12) + " " + cy + '" marker-start="url(#ae-arrow)" marker-end="url(#ae-arrow)"/>' +
      text("cap-t", cx, y0 - 26, "Critical", "middle") + text("cap-t", cx, y0 + h + 52, "Non-critical", "middle") +
      text("cap-t", x0 - 30, cy + 11, "Unknown", "end") + text("cap-t", x0 + w + 30, cy + 11, "Known");
    A["critical-known"] = {
      title: "Choose your most crucial hypothesis",
      source: "Bastian Burger, course material, legacy slide 749.",
      steps: ["priority", "todo", "backlog", "donot"],
      svg: '<svg viewBox="0 0 1640 610" role="img" aria-label="Hypotheses by critical or non-critical and unknown or known: unknown and critical is the priority to-do, known and critical a to-do, unknown and non-critical the backlog, known and non-critical not to do">' + out + "</svg>"
    };
  })();

  /* How make numbers go brrr, legacy slide 501, re-shown on 577 (M09). Four
     stages from impressions to customers, each with its levers, and the four
     tool notes the chapter works through. The legacy states light one note
     each: 503 posting, 508 flywheel, 511 interviewing, 515 funnel. Wording as
     on 501 in sentence case, "Be their concierge" kept. No "Activated" stage,
     it is not in the legacy graphic. Parts: stages impressions, clicks,
     signups (also "sign-ups"), customers (group stages), tool notes posting,
     flywheel, interviewing, funnel (group tools). */
  (function () {
    var stages = [
      ["impressions", "", "IMPRESSIONS", ["Always be posting", "Improve your targeting", "Improve your relevance"]],
      ["clicks", "", "CLICKS", ["Farm your friends & family", "Guide through keynotes & presentations"]],
      ["signups", " sign-ups", "SIGN-UPS", ["Demos, interviews, …", "Personal interaction"]],
      ["customers", "", "CUSTOMERS", ["Show attention", "Manage your funnel", "Be their concierge"]]
    ];
    var tools = [["posting", ["Posting &", "outreach"], -4], ["flywheel", ["Keep the", "flywheel going"], -2.5],
      ["interviewing", ["Interviewing", "techniques"], -3.5], ["funnel", ["Managing your", "funnel"], -2]];
    var top = 16, pitch = 150, h = 124, out = "";
    stages.forEach(function (s, i) {
      var y = top + i * pitch, cy = y + h / 2;
      out += '<g class="part" data-node="' + s[0] + '" data-group="stages' + s[1] + '">' +
        '<rect class="shape c-blue" x="0" y="' + y + '" width="400" height="' + h + '" rx="12"/>' + text("lbl lg", 200, cy, s[2]) +
        '<path class="shape c-blue" d="M418 ' + (cy - 15) + " H446 V" + (cy - 36) + " L490 " + cy + " L446 " + (cy + 36) + " V" + (cy + 15) + ' H418 Z"/>';
      s[3].forEach(function (b, j) {
        var ly = cy + (j - (s[3].length - 1) / 2) * 42;
        out += '<circle class="shape c-blue" cx="532" cy="' + ly + '" r="6"/>' + text("note lg", 554, ly + 11, b) +
          '<rect class="shape c-blue mini-only" x="554" y="' + (ly - 9) + '" width="' + Math.round(b.length * 16) + '" height="18" rx="9"/>'; // the line as a bar in the text-free miniature
      });
      out += "</g>";
    });
    tools.forEach(function (t, i) { // a sticky note with a folded corner, tilted like the legacy notes
      var x = 1296, w = 328, f = 28, y = top + i * pitch, cx = x + w / 2, cy = y + h / 2;
      var body = " h" + w + " v" + (h - f) + " l-" + f + " " + f + " h-" + (w - f) + " Z";
      out += '<g class="part" data-node="' + t[0] + '" data-group="tools" transform="rotate(' + t[2] + " " + cx + " " + cy + ')">' +
        '<path class="nshadow" d="M' + (x + 5) + " " + (y + 9) + body + '"/>' +
        '<path class="shape c-sticky" d="M' + x + " " + y + body + '"/>' +
        '<path class="fold" d="M' + (x + w) + " " + (y + h - f) + " l-" + f + " " + f + " v-" + f + ' Z"/>' +
        text("lbl xs dark", cx, y + 30, "Tool") + text("lbl dark", cx, y + 66, t[1][0]) + text("lbl dark", cx, y + 100, t[1][1]) + "</g>";
    });
    A["funnel"] = {
      title: "How make numbers go brrr",
      source: "Bastian Burger, course material, legacy slides 501 and 577, states on 503, 508, 511 and 515.",
      steps: stages.map(function (s) { return s[0]; }).concat(tools.map(function (t) { return t[0]; })),
      svg: '<svg viewBox="0 0 1640 610" role="img" aria-label="How make numbers go brrr: impressions, clicks, sign-ups and customers, each with its levers, and four tools, posting and outreach, keep the flywheel going, interviewing techniques and managing your funnel">' + out + "</svg>"
    };
  })();

  /* KPI trees, legacy slide 726 (startup, growth-focused), with 725 (small
     business, profitability-focused) as its contrast, the same tree with
     other words. Wording as on the legacy slides in sentence case. The top
     metric, three branches and two leaves under each. Grey wires join the
     boxes, and a lit part shows its path from the top in blue (class link).
     A leaf belongs to its branch, so "retention" lights the branch and both
     its leaves. Parts of kpi-tree: north-star (the top, "Growth rate (%)"),
     new-customers with cac and conversion, retention with churn and nrr,
     engagement with activation and dau. Parts of kpi-tree-profit: margin,
     revenue with sales-volume and order-value, costs with opex and cogs,
     efficiency with utilization and productivity. Group root lights the
     top of either tree. */
  (function () {
    function tree(top, branches) {
      var cols = [0, 560, 1120];
      var out = '<path class="wire" d="M820 120 V160 M260 160 H1380' + cols.map(function (x) {
        return " M" + (x + 260) + " 160 V200 M" + (x + 48) + " 300 V505 M" + (x + 48) + " 385 H" + (x + 90) + " M" + (x + 48) + " 505 H" + (x + 90);
      }).join("") + '"/>';
      out += '<g class="part" data-node="' + top[0] + '" data-group="root"><rect class="shape c-strong" x="490" y="0" width="660" height="120" rx="18"/>' + text("lbl lg", 820, 60, top[1]) + "</g>";
      branches.forEach(function (b, i) {
        var x = cols[i], c = x + 260;
        out += '<g class="part" data-node="' + b[0] + '"><path class="link" d="M820 120 V160 H' + c + ' V200"/>' +
          '<rect class="shape c-blue" x="' + x + '" y="200" width="520" height="100" rx="16"/>' + text("lbl md", c, 250, b[1]) + "</g>";
        b[2].forEach(function (l, j) {
          var y = 340 + j * 120, m = y + 45;
          out += '<g class="part" data-node="' + l[0] + '" data-group="' + b[0] + '"><path class="link" d="M' + (x + 48) + " 300 V" + m + " H" + (x + 90) + '"/>' +
            '<rect class="shape c-outline" x="' + (x + 90) + '" y="' + y + '" width="430" height="90" rx="14"/>' + text("lbl dark", x + 305, m, l[1]) + "</g>";
        });
      });
      return out;
    }
    A["kpi-tree"] = {
      title: "Startup: growth-focused KPI tree",
      source: "Bastian Burger, course material, legacy slide 726.",
      steps: ["north-star", "new-customers", "retention", "engagement"],
      svg: '<svg viewBox="0 0 1640 554" role="img" aria-label="Growth-focused KPI tree: growth rate on top, fed by new customers (CAC, conversion rate), retention (churn rate, net revenue retention) and product engagement (activation rate, daily active users)">' +
        tree(["north-star", "Growth rate (%)"], [
          ["new-customers", "New customers", [["cac", "CAC"], ["conversion", "Conversion rate"]]],
          ["retention", "Retention", [["churn", "Churn rate"], ["nrr", "Net revenue retention"]]],
          ["engagement", "Product engagement", [["activation", "Activation rate"], ["dau", "Daily active users"]]]]) + "</svg>"
    };
    A["kpi-tree-profit"] = {
      title: "Small business: profitability-focused KPI tree",
      source: "Bastian Burger, course material, legacy slide 725.",
      steps: ["margin", "revenue", "costs", "efficiency"],
      svg: '<svg viewBox="0 0 1640 554" role="img" aria-label="Profitability-focused KPI tree: net profit margin on top, fed by revenue (sales volume, average order value), costs (operating expenses, cost of goods sold) and efficiency (resource utilization, productivity metrics)">' +
        tree(["margin", "Net profit margin (%)"], [
          ["revenue", "Revenue", [["sales-volume", "Sales volume"], ["order-value", "Average order value"]]],
          ["costs", "Costs", [["opex", "Operating expenses"], ["cogs", "Cost of goods sold"]]],
          ["efficiency", "Efficiency", [["utilization", "Resource utilization"], ["productivity", "Productivity metrics"]]]]) + "</svg>"
    };
  })();

  /* Ideation, incubation, acceleration, legacy slide 703, the arrow that the
     stage slides 704 to 706 carry on top, with each stage's outcomes below:
     704 for ideation (as in ideation-stage), 705 for incubation, 706 for
     acceleration. Typos fixed. Legacy 703 is all magenta. Here the stages take
     the phase colours of the evidence pyramid (magenta, navy, blue), so the
     two cornerstones name the same stages alike. Parts: ideation, incubation,
     acceleration (each its arrow segment and its outcomes), groups arrow
     (the three segments) and outcomes (the three cards). Since 2026-10-30 the
     arrow reads Problem space, Solution space and Growth phase, as the
     pyramid does (Bastian, M01 feedback). "stage-arrow-legacy" keeps the old
     names for the M01 archive deck on ideation, incubation and acceleration. */
  function stageArrow(names) {
    var stages = [
      ["ideation", names[0], "c-magenta", [["Team committed", "for full-time work"], ["Team completed by all", "necessary disciplines"],
        ["Founders agree on hard and", "soft facts about funding"], ["Agreement on an", "interesting problem space"]]],
      ["incubation", names[1], "c-navy", [["A fundable business with a clear", "business plan for the next 12 months"], ["Paid pilot customers with", "completely conducted projects"],
        ["Validated value proposition", "with real customers"], ["Clear setup around team,", "processes, idea and more"]]],
      ["acceleration", names[2], "c-blue", [["Business gets progressively", "de-risked and starts turning profits"], ["Fundable through", "Series A and B rounds"],
        ["Self-sufficient business", "at each funding round"], ["Gut feeling gets replaced", "by data in daily operations"]]]
    ];
    var cw = 528, gap = 28, d = 40, h = 100, top = 132, out = "";
    stages.forEach(function (s, i) {
      var x = i * (cw + gap), end = i === 2 ? 1640 - d : x + cw, c = x + cw / 2;
      var seg = "M" + x + " 0 H" + end + " L" + (end + d) + " " + h / 2 + " L" + end + " " + h + " H" + x + (i ? " L" + (x + d) + " " + h / 2 : "") + " Z";
      out += '<g class="part" data-node="' + s[0] + '" data-group="arrow"><path class="shape ' + s[2] + '" d="' + seg + '"/>' +
        text("lbl lg", Math.round((x + end) / 2 + (i ? d / 2 : d / 4)), h / 2, s[1]) + "</g>";
      out += '<g class="part" data-node="' + s[0] + '-outcomes" data-group="' + s[0] + ' outcomes"><rect class="shape ' + s[2] + '" x="' + x + '" y="' + top + '" width="' + cw + '" height="434" rx="16"/>' +
        text("lbl", c, top + 46, "Outcomes");
      s[3].forEach(function (o, k) { out += text("lbl xs", c, top + 110 + k * 88, o[0]) + text("lbl xs", c, top + 140 + k * 88, o[1]); });
      out += "</g>";
    });
    return '<svg viewBox="0 0 1640 566" role="img" aria-label="Three stages as one arrow, ' + names.join(", ").toLowerCase() + ', each with four outcomes">' + out + "</svg>";
  }
  A["stage-arrow"] = {
    title: "Problem space, solution space, growth phase",
    source: "Bastian Burger, course framework, legacy slide 703, outcomes from legacy slides 704 to 706.",
    steps: ["ideation", "incubation", "acceleration"],
    svg: stageArrow(["Problem space", "Solution space", "Growth phase"])
  };
  A["stage-arrow-legacy"] = {
    title: "Ideation, incubation, acceleration",
    source: A["stage-arrow"].source,
    steps: A["stage-arrow"].steps,
    svg: stageArrow(["Ideation", "Incubation", "Acceleration"])
  };

  /* The five M11 cornerstones (founder health), from Bastian's lecture on
     failure and staying happy (WS27 deck), drawn as the approved M11 deck
     draws them, wording kept. */

  /* The identity map, WS27 slides 70 and 71. A treemap of who you are: the
     founder tile takes most of the space, the other tiles share the rest.
     The tiles are an example. Two states: lit "without-founder" redraws the
     map without the founder tile, the other tiles across the full width
     ("Who am I?", slide 71). That part is a state (class "opt state"), drawn
     only when lit, and while lit it hides the parts of class "base".
     Parts: founder, others, without-founder. */
  (function () {
    // [label, colour, x0, y0, x1, y1 as fractions of the area, lines when the tile is narrow]
    var cells = [
      ["Bass Player", "c-purple", 0, 0, 1, 0.32],
      ["Reliable Friend", "c-blue", 0, 0.32, 0.52, 0.83, ["Reliable", "Friend"]],
      ["Hard Worker", "c-purple", 0.52, 0.32, 1, 0.65],
      ["A-Grade Student", "c-navy", 0.52, 0.65, 1, 0.83, ["A-Grade", "Student"]],
      ["Tennis Novice", "c-blue", 0, 0.83, 0.7, 1],
      ["Good Driver", "c-navy", 0.7, 0.83, 1, 1, ["Good", "Driver"]]
    ];
    var H = 570, g = 8;
    function tiles(x0, w, narrow) {
      return cells.map(function (c) {
        var x = x0 + c[2] * (w + g), y = c[3] * (H + g), cw = (c[4] - c[2]) * (w + g) - g, ch = (c[5] - c[3]) * (H + g) - g;
        var cx = (x + cw / 2).toFixed(1), cy = y + ch / 2, rect = '<rect class="shape ' + c[1] + '" x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + cw.toFixed(1) + '" height="' + ch.toFixed(1) + '" rx="8"/>';
        if (!narrow) return rect + text("lbl md", cx, cy.toFixed(1), c[0]);
        if (!c[6]) return rect + text("lbl", cx, cy.toFixed(1), c[0]);
        return rect + text("lbl sm", cx, (cy - 17).toFixed(1), c[6][0]) + text("lbl sm", cx, (cy + 17).toFixed(1), c[6][1]);
      }).join("");
    }
    A["identity-map"] = {
      title: "Who am I?",
      source: "Bastian Burger, lecture on failure and staying happy (WS27 deck, slides 70 and 71), as the M11 deck draws it. The tiles are an example.",
      steps: ["founder", "others", "without-founder"],
      svg: '<svg viewBox="0 0 1640 570" role="img" aria-label="Identity as a treemap: Startup Founder takes most of the space, small tiles for Bass Player, Reliable Friend, Hard Worker, A-Grade Student, Tennis Novice and Good Driver. Without the founder tile, the small tiles fill the map">' +
        '<g class="part opt state" data-node="without-founder">' + tiles(0, 1640, false) + "</g>" +
        '<g class="part base" data-node="founder"><rect class="shape c-blue" x="0" y="0" width="1100" height="' + H + '" rx="8"/>' + text("lbl xl", 550, H / 2, "Startup Founder") + "</g>" +
        '<g class="part base" data-node="others">' + tiles(1108, 532, true) + "</g></svg>"
    };
  })();

  /* Two curves, WS27 slides 30 and 50: one rises steeply, the other rises a
     little and falls back. No labels, as in WS27. The lines take the text
     colour of the slide (class curve), so they turn white on a dark slide.
     Parts: steep, hump. */
  A["two-curves"] = {
    title: "Two curves",
    source: "Bastian Burger, lecture on failure and staying happy (WS27 deck, slides 30 and 50), as the M11 deck draws it.",
    steps: ["steep", "hump"],
    svg: '<svg viewBox="0 -6 1640 652" role="img" aria-label="Two curves from the lower left. One rises steeply to the top right, the other rises a little, then falls back">' +
      '<g class="part" data-node="hump"><path class="curve" d="M0 632 C 400 625, 560 470, 760 470 C 960 470, 1080 560, 1260 640"/></g>' +
      '<g class="part" data-node="steep"><path class="curve" d="M0 630 C 500 620, 900 520, 1180 330 S 1450 60, 1500 0"/></g>' +
      "</svg>"
  };

  /* In that order, WS27 slides 56 and 106, adapted from Horowitz (2014), who
     takes care of the people, the products and the profits, in that order.
     Bastian puts YOU in front. Each box is smaller than the one before, the
     profits stay grey (class c-context) and turn ink when lit.
     Parts: you, people, product, profits. */
  A["in-that-order"] = {
    title: "Take care of YOU first",
    source: "Adapted from Horowitz, B. (2014). The hard thing about hard things. HarperCollins. As drawn in Bastian's lecture on failure and staying happy (WS27 deck, slides 56 and 106).",
    steps: ["you", "people", "product", "profits"],
    svg: '<svg viewBox="0 0 1640 400" role="img" aria-label="YOU, the people, the product, the profits, in that order, each box smaller than the one before">' +
      '<g class="part" data-node="you"><rect class="shape c-blue" x="0" y="40" width="520" height="320" rx="28"/>' + text("lbl xxl", 260, 200, "YOU") + "</g>" +
      '<g class="part" data-node="people"><rect class="shape c-purple" x="560" y="100" width="340" height="260" rx="24"/>' + text("lbl lg", 730, 230, "the people") + "</g>" +
      '<g class="part" data-node="product"><rect class="shape c-navy" x="940" y="140" width="330" height="220" rx="24"/>' + text("lbl lg", 1105, 250, "the product") + "</g>" +
      '<g class="part" data-node="profits"><rect class="shape c-context" x="1310" y="180" width="330" height="180" rx="24"/>' + text("lbl lg ctx", 1475, 270, "the profits") + "</g>" +
      text("cap-t lg", 1640, 30, "In that order.", "end") + "</svg>"
  };

  /* The stressor map, WS27 slides 66 and 67 (five sources) plus 54
     (loneliness, the course's sixth): stressor, stress, reaction. Six
     sources lead into stress, stress leads to a reaction. The stress box is
     grey (class c-context) and turns ink when lit. Parts: the six sources
     uncertainty, money, social-pressure, workload, expectations, loneliness
     (group sources), stress, reaction. */
  (function () {
    var src = [["uncertainty", "Uncertainty", "c-magenta"], ["money", "Money", "c-purple"], ["social-pressure", "Social pressure", "c-navy"],
      ["workload", "Workload", "c-blue"], ["expectations", "Expectations", "c-magenta"], ["loneliness", "Loneliness", "c-purple"]];
    var wires = "", out = "";
    src.forEach(function (s, i) {
      var y = 60 + i * 86, m = y + 35;
      wires += " M410 " + m + " C 520 " + m + ", 560 320, 640 320";
      out += '<g class="part" data-node="' + s[0] + '" data-group="sources"><rect class="shape ' + s[2] + '" x="0" y="' + y + '" width="400" height="70" rx="16"/>' + text("lbl md", 200, m, s[1]) + "</g>";
    });
    A["stressor-map"] = {
      title: "Know where your stress comes from",
      source: "Bastian Burger, lecture on failure and staying happy (WS27 deck, slides 66 and 67, loneliness from slide 54), as the M11 deck draws it.",
      steps: ["sources", "stress", "reaction"],
      svg: '<svg viewBox="0 8 1640 556" role="img" aria-label="The stressor map: six sources, uncertainty, money, social pressure, workload, expectations and loneliness, lead to stress, and stress leads to a reaction">' +
        text("kicker", 200, 34, "STRESSORS", "middle") + '<path class="wire" d="' + wires.trim() + '"/>' + out +
        '<g class="part" data-node="stress"><rect class="shape c-context" x="660" y="250" width="360" height="140" rx="24"/>' + text("lbl xl dark", 840, 320, "Stress") + "</g>" +
        '<path class="arrowbody" d="M1030 317 H1152 V299 L1192 320 L1152 341 V323 H1030 Z"/>' +
        '<g class="part" data-node="reaction"><rect class="shape c-blue" x="1200" y="250" width="440" height="140" rx="24"/>' + text("lbl xl", 1420, 320, "Reaction") + "</g></svg>"
    };
  })();

  /* Pack the scary bits first, WS27 slide 100, redrawn because the jar photo
     is third-party. Three jars: sand first leaves no room, then the rocks
     won't fit, rocks first and the sand fills the gaps. The jars are 74 units
     shorter than in the M11 deck, so the drawing fits under a title and a
     subhead at full width. Parts: sand-first, wont-fit, rocks-first. */
  (function () {
    var jars = [["sand-first", 80, "1 · Sand first", "the small stuff", "dark"], ["wont-fit", 640, "2 · Then the rocks", "they won’t fit", "dark"],
      ["rocks-first", 1200, "3 · Rocks first", "the sand fills the gaps", "t-blue"]];
    function rock(cx, cy) { return '<circle class="shape c-purple rock" cx="' + cx + '" cy="' + cy + '" r="46"/>'; }
    var out = "";
    jars.forEach(function (j) {
      var x = j[1], first = j[0] === "rocks-first";
      out += '<g class="part" data-node="' + j[0] + '">' +
        '<path class="jar" d="M' + x + " 120 L" + x + " 446 Q" + x + " 486 " + (x + 40) + " 486 L" + (x + 320) + " 486 Q" + (x + 360) + " 486 " + (x + 360) + " 446 L" + (x + 360) + ' 120"/>' +
        '<rect class="shape c-sticky" x="' + (x + 6) + '" y="' + (first ? 256 : 230) + '" width="348" height="' + (first ? 224 : 250) + '" rx="30"/>';
      if (first) [[90, 416], [190, 426], [280, 411], [140, 326], [245, 321]].forEach(function (p) { out += rock(x + p[0], p[1]); });
      if (j[0] === "wont-fit") [[110, 180], [250, 175], [180, 95], [70, 70], [300, 75]].forEach(function (p) { out += rock(x + p[0], p[1]); });
      out += text("lbl md " + j[4], x + 180, 524, j[2]) + text("note lg muted", x + 180, 582, j[3], "middle") + "</g>";
    });
    A["scary-bits"] = {
      title: "Pack the scary bits first",
      source: "Bastian Burger, lecture on failure and staying happy (WS27 deck, slide 100), the jars redrawn.",
      steps: ["sand-first", "wont-fit", "rocks-first"],
      svg: '<svg viewBox="0 18 1640 574" role="img" aria-label="Three jars. Sand first, then the rocks do not fit. Rocks first, the sand fills the gaps">' + out + "</svg>"
    };
  })();

  /* The course path, for the opening "Where we are" of every input session
     (Bastian, 2026-10-26, AGENTS.md "Where we are, then previously on"). New,
     no legacy slide: the course path of the title slide drawn with module
     names, as the M06 deck first drew it. Thirteen sessions as a snake, 00 to
     06 left to right, 07 to 12 back. A deck lights today's module only,
     data-active="m06". It turns blue with a Today note, every module before it
     turns navy and the line runs solid up to it, dashed after it. That works
     through groups: the done mark of module j and the line after it belong to
     every later module. Without a lit part every module is grey.
     Parts: m00 to m12. */
  (function () {
    var mods = [["Kickoff"], ["Team"], ["Finding", "ideas"], ["Problem", "space"], ["Validating", "problems"], ["Solution", "space"],
      ["Prototyping"], ["The kill", "decision"], ["First", "users"], ["Prototype to", "product"], ["Product", "management"],
      ["Founder", "health"], ["Fundraising,", "Demo Day"]];
    var step = 234, y1 = 136, y2 = 320, r = 44, R = 58;
    function nn(k) { return (k < 10 ? "0" : "") + k; }
    function pos(k) { return k < 7 ? [117 + k * step, y1] : [117 + (13 - k) * step, y2]; }
    function after(k) { var g = []; for (var j = k + 1; j < 13; j++) g.push("m" + nn(j)); return g.join(" "); }
    function name(k, cx, cy, rad) {
      var l = mods[k], top = cy === y1;
      return l.map(function (t, i) {
        var y = top ? cy - rad - 22 - (l.length - 1 - i) * 32 : cy + rad + 40 + i * 32;
        return text("cp-name", cx, y, t, "middle");
      }).join("");
    }
    var segs = "", stops = "";
    for (var k = 0; k < 12; k++) {
      var a = pos(k), b = pos(k + 1);
      var d = k === 6 ? "M" + a[0] + " " + y1 + " C 1620 " + y1 + ", 1620 " + y2 + ", " + b[0] + " " + y2 : "M" + a[0] + " " + a[1] + " L" + b[0] + " " + b[1];
      segs += '<path class="cp-seg" data-node="s' + nn(k) + '" data-group="' + after(k) + '" d="' + d + '"/>';
    }
    for (k = 0; k < 13; k++) {
      // The Today badge overlaps the lit circle, below it on the first row and above it on the second,
      // so it can only belong to that circle.
      var p = pos(k), cx = p[0], cy = p[1], chipY = cy === y1 ? cy + R - 14 : cy - R - 36;
      stops += '<g class="cp">' +
        '<circle class="cp-base" cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>' +
        '<g class="cp-done" data-node="d' + nn(k) + '"' + (k < 12 ? ' data-group="' + after(k) + '"' : "") + '><circle cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>' +
          text("cp-num", cx, cy, nn(k), "middle") + name(k, cx, cy, r) + "</g>" +
        '<g class="cp-now" data-node="m' + nn(k) + '"><circle cx="' + cx + '" cy="' + cy + '" r="' + R + '"/>' +
          text("cp-num", cx, cy, nn(k), "middle") + name(k, cx, cy, R) +
          '<rect class="cp-chip" x="' + (cx - 85) + '" y="' + chipY + '" width="170" height="50" rx="25"/>' + text("cp-chip-t", cx, chipY + 25, "Today", "middle") + "</g>" +
        '<g class="cp-text">' + text("cp-num", cx, cy, nn(k), "middle") + name(k, cx, cy, r) + "</g></g>";
    }
    A["course-path"] = {
      title: "The course path",
      source: "The course path of Ambitious Entrepreneurship, sessions 00 to 12, as the M06 deck first drew it (2026-10-26).",
      steps: mods.map(function (m, i) { return "m" + nn(i); }),
      svg: '<svg viewBox="0 0 1640 462" role="img" aria-label="Course path of thirteen sessions: 00 Kickoff, 01 Team, 02 Finding ideas, 03 Problem space, 04 Validating problems, 05 Solution space, 06 Prototyping, 07 The kill decision, 08 First users, 09 Prototype to product, 10 Product management, 11 Founder health, 12 Fundraising and Demo Day. Today\'s session is lit, the sessions before it are done">' +
        '<g class="cp-segs">' + segs + "</g>" + stops + "</svg>"
    };
  })();

  /* Pivot or persevere, for the opening "Where we are" of every input session
     (Bastian, 2026-10-26). New, no legacy slide: after Ries, E. (2011), The
     Lean Startup, with the pivot types of the course Glossary (type 1 another
     solution to a proven problem, type 2 back to the problem space), as the
     M06 deck first drew it. A test ends at the line written before it. Above
     it you persevere, under it you pivot, and both are progress. Arrowheads
     are drawn inside their part, so they fade with it.
     Parts: test, line, persevere, pivot1, pivot2 (group pivot, with the
     "Under the line" caption), rule. */
  (function () {
    function head(x, y, cls) { return '<path class="shape ' + cls + '" d="M' + x + " " + y + " l-22 -13 l0 26 z" + '"/>'; }
    A["pivot-fork"] = {
      title: "Pivot or persevere",
      source: "After Ries, E. (2011). The Lean Startup. Crown Business. Pivot types as in the course Glossary.",
      steps: ["test", "line", "persevere", "pivot1", "pivot2", "rule"],
      svg: '<svg viewBox="0 0 1640 560" role="img" aria-label="Pivot or persevere. Your test ends at your line, written before. Above the line you persevere and take the next step. Under it you pivot, type 1 to another solution for the same problem, type 2 back to the problem space. Both are progress. The only miss is no line, so no decision">' +
        '<g class="part" data-node="test"><rect class="shape c-navy" x="0" y="190" width="330" height="170" rx="18"/>' +
          text("lbl md", 165, 250, "Your test") + text("lbl sm", 165, 302, "what people did") +
          '<path class="line" d="M338 275 L404 275"/>' + head(426, 275, "c-ink") + "</g>" +
        '<g class="part" data-node="line"><path class="shape c-sticky fork-line" d="M560 140 L700 275 L560 410 L420 275 Z"/>' +
          text("lbl md dark", 560, 256, "Your line") + text("lbl sm dark", 560, 302, "written before") + "</g>" +
        '<g class="part" data-node="persevere"><path class="line k-blue" d="M640 200 C 700 110, 740 90, 790 90"/>' + head(812, 90, "c-blue") +
          '<rect class="shape c-blue" x="820" y="20" width="820" height="150" rx="18"/>' +
          text("lbl md", 1230, 72, "Above the line: persevere") + text("lbl sm", 1230, 124, "Take the next step") + "</g>" +
        '<g class="part" data-node="under" data-group="pivot"><path class="line k-magenta" d="M640 350 C 700 440, 740 330, 790 330"/>' + head(812, 330, "c-magenta") +
          text("cap-t t-magenta", 1230, 228, "Under the line", "middle") + "</g>" +
        '<g class="part" data-node="pivot1" data-group="pivot"><rect class="shape c-magenta" x="820" y="250" width="400" height="170" rx="18"/>' +
          text("lbl md", 1020, 298, "Pivot, type 1") + text("lbl sm", 1020, 346, "same problem,") + text("lbl sm", 1020, 382, "another solution") + "</g>" +
        '<g class="part" data-node="pivot2" data-group="pivot"><rect class="shape c-purple" x="1240" y="250" width="400" height="170" rx="18"/>' +
          text("lbl md", 1440, 298, "Pivot, type 2") + text("lbl sm", 1440, 346, "back to the") + text("lbl sm", 1440, 382, "problem space") + "</g>" +
        '<g class="part" data-node="rule"><rect class="shape c-soft" x="0" y="470" width="1640" height="80" rx="12"/>' +
          text("lbl dark", 820, 510, "Both are progress. The only miss: no line, so no decision") + "</g></svg>"
    };
  })();

  /* Four cornerstones on AI at work, promoted on 2026-10-26 from the deck-local
     dt-freeze, dt-compass, dt-autonomy and dt-ladder of the executive module
     "Digitale Trends und Technologien" (Guest Lectures/2026-11-06_…/working/
     build/dtlib.py), with English labels and the same drawing and parts. New,
     no legacy slide. That deck keeps its own German copies under the dt- names. */

  /* The freeze rule, "The third time, you get a button". Burger, B. (2026),
     Towards Intent-Based Computing, section 3.4: the first time the model does
     the work and you approve it, the second time it shows what differs, the
     third time you get a button with fixed steps and no model inside. Each
     time the box rises. For Prototyping (M06) and Prototype to product (M09).
     Parts: first, second, third. */
  (function () {
    var steps = [["first", "c-navy", 0, 250, "1st time", ["AI does it,", "you approve"]],
      ["second", "c-blue", 570, 150, "2nd time", ["AI shows", "what differs"]],
      ["third", "c-magenta", 1140, 30, "3rd time", ["fixed steps,", "no AI"]]];
    var out = DEFS;
    steps.forEach(function (s) {
      var x = s[2], y = s[3];
      var g = '<rect class="shape ' + s[1] + '" x="' + x + '" y="' + y + '" width="500" height="' + (450 - y) + '" rx="18"/>' +
        text("lbl md", x + 250, y + 62, s[4]) + lines("lbl", x + 250, y + 122, s[5], 40);
      if (s[0] === "third") g += '<rect class="shape c-paper" x="' + (x + 100) + '" y="' + (y + 230) + '" width="300" height="110" rx="55"/>' +
        text("lbl md dark", x + 250, y + 285, "Button");
      out += '<g class="part" data-node="' + s[0] + '">' + g + "</g>";
    });
    A["freeze-rule"] = {
      title: "The third time, you get a button",
      source: "Burger, B. (2026). Towards Intent-Based Computing, section 3.4, the freeze rule.",
      steps: ["first", "second", "third"],
      svg: '<svg viewBox="0 0 1640 460" role="img" aria-label="The third time, you get a button. The first time AI does the task and you approve it, the second time it shows what differs, the third time it becomes a button with fixed steps and no AI">' +
        out + arrow(505, 230, 560, 190) + arrow(1075, 130, 1130, 90) + "</svg>"
    };
  })();

  /* The task compass: tasks sorted by repetition (rare and different each
     time, or often and always the same) and by judgment and relationships.
     Each corner gives AI another role, and the corner of frequent tasks with
     little judgment is the freeze rule. New, drawn for that executive module
     after the freeze rule. For deciding what to automate in a team's own
     operations (First users M08, Prototype to product M09).
     Parts: human, prepare, assist, freeze. */
  (function () {
    var q = [["human", "c-purple", 220, 0, "Stays with you", "AI as a sparring partner"],
      ["prepare", "c-magenta", 940, 0, "AI prepares", "you decide"],
      ["assist", "c-navy", 220, 250, "AI as an assistant", "you check every time"],
      ["freeze", "c-blue", 940, 250, "Freeze it", "the third time, a button"]];
    var out = DEFS;
    q.forEach(function (c) {
      out += '<g class="part" data-node="' + c[0] + '"><rect class="shape ' + c[1] + '" x="' + c[2] + '" y="' + c[3] + '" width="700" height="220" rx="18"/>' +
        text("lbl md", c[2] + 350, c[3] + 92, c[4]) + text("lbl", c[2] + 350, c[3] + 150, c[5]) + "</g>";
    });
    A["task-compass"] = {
      title: "Task compass",
      source: "Course graphic after the freeze rule in Burger, B. (2026), Towards Intent-Based Computing.",
      steps: ["human", "prepare", "assist", "freeze"],
      svg: '<svg viewBox="0 0 1640 540" role="img" aria-label="Task compass: tasks sorted by repetition and judgment. Often the same with little judgment: freeze it. Rare with little judgment: AI as an assistant, you check every time. Often the same with a lot of judgment: AI prepares, you decide. Rare with a lot of judgment: it stays with you">' +
        out + arrow(200, 468, 200, 14) + arrow(220, 486, 1630, 486) +
        lines("note strong", 180, 64, ["high", "judgment,", "relationships"], 34, "end") + lines("note strong", 180, 360, ["low", "judgment"], 34, "end") +
        text("note strong", 230, 528, "rare, different each time", "start") + text("note strong", 1640, 528, "often, always the same", "end") + "</svg>"
    };
  })();

  /* Autonomy is earned: an AI feature or agent climbs from intern (observes,
     you do it) to junior (proposes, you decide) to senior (acts within limits,
     you check the receipts). Promote slow, demote fast. Burger, B. (2026),
     Towards Principal Computing, the harness rules ("intern observes, junior
     proposes, senior acts", "Demote fast, promote slow"). For Product
     management (M10). The arrows stay outside the parts: promotion runs one
     level up at a time, and demotion one level down, from acting to proposing
     as the paper's harness does. The labels sit
     higher in their boxes than in the German original, so the short intern
     box keeps a margin under its second line. Parts: intern, junior, senior. */
  (function () {
    var st = [["intern", "c-navy", 0, 250, "Intern", ["observes,", "you do it"]],
      ["junior", "c-blue", 580, 140, "Junior", ["proposes,", "you decide"]],
      ["senior", "c-magenta", 1160, 30, "Senior", ["acts within limits,", "you check the receipts"]]];
    var out = DEFS;
    st.forEach(function (s) {
      var x = s[2], y = s[3];
      out += '<g class="part" data-node="' + s[0] + '"><rect class="shape ' + s[1] + '" x="' + x + '" y="' + y + '" width="480" height="' + (430 - y) + '" rx="18"/>' +
        text("lbl md", x + 240, y + 50, s[4]) + lines("lbl", x + 240, y + 100, s[5], 38) + "</g>";
    });
    A["autonomy-levels"] = {
      title: "Autonomy is earned",
      source: "Burger, B. (2026). Towards Principal Computing, the autonomy levels and the rule “Demote fast, promote slow”.",
      steps: ["intern", "junior", "senior"],
      svg: '<svg viewBox="0 0 1640 540" role="img" aria-label="Autonomy is earned: the intern observes, the junior proposes, the senior acts within limits. Promote slow, one level at a time. Demote fast, from acting back to proposing">' +
        out + '<path class="line" d="M240 236 C 260 120, 420 90, 570 120" marker-end="url(#ae-arrow)"/>' +
        '<path class="line" d="M820 126 C 840 40, 1000 20, 1150 50" marker-end="url(#ae-arrow)"/>' + text("note strong t-blue", 60, 90, "promote slow", "start") +
        '<path class="line dash k-magenta" d="M1400 440 C 1380 520, 840 520, 820 444" marker-end="url(#ae-arrow)"/>' +
        text("note strong t-magenta", 1110, 530, "demote fast", "middle") + "</svg>"
    };
  })();

  /* The build ladder: template, assistant, workflow, agent. Each step up
     costs more effort and risk and needs a wider mandate, so a team starts at
     the bottom. Course graphic after Bastian's stages use, build, automate
     (2024) and his ladder from assistant to agent (2025), as that executive
     module first drew it, its labels set higher for the same margin. For
     Prototyping (M06) and Prototype to product (M09).
     Parts: prompt, assistant, workflow, agent. */
  (function () {
    var steps = [["prompt", "c-navy", 380, "Template", ["a brief", "to copy"]],
      ["assistant", "c-blue", 260, "Assistant", ["knows your", "documents"]],
      ["workflow", "c-magenta", 140, "Workflow", ["runs", "by itself"]],
      ["agent", "c-purple", 20, "Agent", ["plans and", "acts on its own"]]];
    var out = DEFS;
    steps.forEach(function (s, i) {
      var x = i * 420, y = s[2];
      out += '<g class="part" data-node="' + s[0] + '"><rect class="shape ' + s[1] + '" x="' + x + '" y="' + y + '" width="380" height="' + (560 - y) + '" rx="18"/>' +
        text("lbl md", x + 190, y + 50, s[3]) + lines("lbl", x + 190, y + 100, s[4], 38) + "</g>";
    });
    A["build-ladder"] = {
      title: "The build ladder",
      source: "Course graphic after Bastian's stages use, build, automate (2024) and his ladder from assistant to agent (2025).",
      steps: ["prompt", "assistant", "workflow", "agent"],
      svg: '<svg viewBox="0 0 1640 560" role="img" aria-label="The build ladder: a template to copy, an assistant that knows your documents, a workflow that runs by itself, an agent that plans and acts on its own. Effort, risk and the mandate it needs rise with every step">' +
        out + lines("note strong", 0, 40, ["Effort, risk and the", "mandate it needs rise"], 36, "start") + "</svg>"
    };
  })();
})();
