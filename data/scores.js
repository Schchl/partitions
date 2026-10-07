(function () {
  const rack = document.getElementById("rack");
  const template = document.getElementById("card-template");
  const searchInput = document.getElementById("search");
  const filtersEl = document.getElementById("category-filters");
  const statsEl = document.getElementById("stats");
  const emptyState = document.getElementById("empty-state");

  const data = Array.isArray(window.SCORES) ? window.SCORES : [];

  // Ordre fixe des groupes affichés dans les filtres (les "valves").
  const GROUP_ORDER = ["Orchestre", "Loisirs", "Anciens"];

  let activeGroup = null; // un seul groupe actif à la fois (ou null = tous)
  let query = "";

  const PDF_ICON =
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M6 2h9l5 5v15H6z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M14 2v6h6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';

  // Retourne la liste des parties d'une partition (compatible ancien format)
  function getParts(score) {
    if (Array.isArray(score.parts) && score.parts.length) return score.parts;
    return [{ label: "", pdf: score.pdf }];
  }

  // Une ligne = un bouton PDF (avec pastille "Cor 1", "Cor 2"… si label)
  function buildPartRow(part) {
    const row = document.createElement("div");
    row.className = "part-row";

    if (part.label) {
      const label = document.createElement("span");
      label.className = "part-label";
      label.textContent = part.label;
      row.appendChild(label);
    }

    const link = document.createElement("a");
    link.className = "btn-score";
    link.target = "_blank";
    link.rel = "noopener";
    if (part.pdf) {
      link.href = part.pdf;
      link.innerHTML = PDF_ICON + " Voir la partition";
    } else {
      link.href = "#";
      link.classList.add("disabled");
      link.textContent = "Partition à ajouter";
    }
    row.appendChild(link);

    return row;
  }

  // Lecteur audio unique pour toute la partition
  function buildAudio(mp3) {
    const audioSlot = document.createElement("div");
    audioSlot.className = "audio-slot";
    if (mp3) {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.preload = "none";
      audio.src = mp3;
      audioSlot.appendChild(audio);
    } else {
      const badge = document.createElement("span");
      badge.className = "no-audio";
      badge.textContent = "♪ pas encore de MIDI";
      audioSlot.appendChild(badge);
    }
    return audioSlot;
  }

  function buildFilters() {
    GROUP_ORDER.forEach((group) => {
      const btn = document.createElement("button");
      btn.className = "valve-btn";
      btn.type = "button";
      btn.textContent = group;
      btn.setAttribute("aria-pressed", "false");
      btn.addEventListener("click", () => {
        activeGroup = activeGroup === group ? null : group;
        filtersEl.querySelectorAll(".valve-btn").forEach((b) => {
          const isActive = b.textContent === activeGroup;
          b.classList.toggle("active", isActive);
          b.setAttribute("aria-pressed", isActive ? "true" : "false");
        });
        render();
      });
      filtersEl.appendChild(btn);
    });
  }

  function matches(score) {
    const q = query.trim().toLowerCase();
    const inQuery =
      !q ||
      score.title.toLowerCase().includes(q) ||
      score.composer.toLowerCase().includes(q);
    const inGroup = !activeGroup || score.group === activeGroup;
    return inQuery && inGroup;
  }

  function render() {
    const results = data.filter(matches).sort((a, b) => {
      const orderA = GROUP_ORDER.indexOf(a.group);
      const orderB = GROUP_ORDER.indexOf(b.group);
      if (orderA !== orderB) return orderA - orderB;
      return a.title.localeCompare(b.title, "fr", { sensitivity: "base" });
    });
    rack.innerHTML = "";

    results.forEach((score) => {
      const node = template.content.cloneNode(true);
      const card = node.querySelector(".card");

      node.querySelector('[data-field="group"]').textContent = score.group || "";
      node.querySelector('[data-field="category"]').textContent = score.category;
      node.querySelector('[data-field="key"]').textContent = score.key || "";
      node.querySelector('[data-field="title"]').textContent = score.title;
      node.querySelector('[data-field="composer"]').textContent = score.composer;
      node.querySelector('[data-field="opus"]').textContent = score.opus || "";

      // Une ligne par partie (Cor 1, Cor 2…), puis un seul lecteur audio
      const actions = node.querySelector(".card-actions");
      actions.innerHTML = "";
      getParts(score).forEach((part) => actions.appendChild(buildPartRow(part)));
      actions.appendChild(buildAudio(score.mp3));

      rack.appendChild(card);
    });

    emptyState.hidden = results.length !== 0;
    statsEl.textContent = `${results.length} / ${data.length} partition${
      data.length > 1 ? "s" : ""
    } — ${data.filter((s) => s.mp3).length} avec un enregistrement`;
  }

  searchInput.addEventListener("input", (e) => {
    query = e.target.value;
    render();
  });

  buildFilters();
  render();
})();