/* Course anchor diagrams, the cornerstone graphics. Updated: 2026-10-19.
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
   ideation-stage. Others ("Every application
   ever", the "make numbers go brrr" funnel) are added when a module needs them. */
window.AEAnchors = window.AEAnchors || {};

/* Build-Measure-Learn, legacy slide 38. Framework: Ries, E. (2011). The Lean
   Startup. Crown Business. Steps: build, measure, learn. */
window.AEAnchors["build-measure-learn"] = {
  title: "Build-Measure-Learn",
  source: "Ries, E. (2011). The Lean Startup. Crown Business.",
  steps: ["build", "measure", "learn"],
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
     acceleration, apex. */
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
    [["ideation", "Ideation phase", 0, "magenta"], ["incubation", "Incubation phase", 3, "navy"], ["acceleration", "Acceleration phase", 6, "blue"]].forEach(function (ph) {
      var yb = 596 - ph[2] * 50, yt = yb - 146, ym = (yb + yt) / 2;
      out += '<g class="part phase" data-node="' + ph[0] + '" data-group="' + ph[0] + '">' +
        '<path class="brace k-' + ph[3] + '" d="M1180 ' + yb + " Q1204 " + yb + " 1204 " + (yb - 22) + " L1204 " + (ym + 12) + " L1218 " + ym + " L1204 " + (ym - 12) + " L1204 " + (yt + 22) + " Q1204 " + yt + " 1180 " + yt + '"/>' +
        text("phase-t t-" + ph[3], 1236, ym, ph[1]) + "</g>";
    });
    A["evidence-pyramid"] = {
      title: "Hierarchy of evidence",
      source: "Bastian Burger, course framework, legacy slides 128 and 328.",
      steps: levels.map(function (l) { return l[0]; }).concat(["ideation", "incubation", "acceleration", "apex"]),
      svg: '<svg viewBox="0 0 1640 600" role="img" aria-label="Hierarchy of evidence in the lean startup, eleven levels in three phases">' + out + "</svg>"
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
     Parts: learn, team, problem, outcomes. */
  (function () {
    var out = '<path class="shape c-magenta" d="M0 0 H960 L1000 36 L960 72 H0 Z"/>' + text("lbl", 480, 37, "Ideation") +
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
      title: "Understanding the problem during the ideation stage",
      source: "Bastian Burger, course framework, legacy slide 704.",
      steps: ["learn", "team", "problem", "outcomes"],
      svg: '<svg viewBox="0 0 1640 548" role="img" aria-label="Ideation stage, three pillars lead driven individuals to four outcomes">' + out + "</svg>"
    };
  })();
})();
