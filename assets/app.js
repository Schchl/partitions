(function () {
  const rack = document.getElementById("rack");
  const template = document.getElementById("card-template");
  const searchInput = document.getElementById("search");
  const filtersEl = document.getElementById("category-filters");
  const statsEl = document.getElementById("stats");
  const emptyState = document.getElementById("empty-state");

  const data = Array.isArray(window.SCORES) ? window.SCORES : [];

  // Ordre fixe des groupes affichés dans les filtres (les "valves").
  // On garde toujours cet ordre, même si un groupe n'a encore aucune partition.
  const GROUP_ORDER = ["Orchestre", "Loisirs", "Anciens"];

  const activeGroups = new Set();
  let query = "";

  function buildFilters() {
    GROUP_ORDER.forEach((group) => {
      const btn = document.createElement("button");
      btn.className = "valve-btn";
      btn.type = "button";
      btn.textContent = group;
      btn.setAttribute("aria-pressed", "false");
      btn.addEventListener("click", () => {
        if (activeGroups.has(group)) {
          activeGroups.delete(group);
          btn.classList.remove("active");
          btn.setAttribute("aria-pressed", "false");
        } else {
          activeGroups.add(group);
          btn.classList.add("active");
          btn.setAttribute("aria-pressed", "true");
        }
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
    const inGroup =
      activeGroups.size === 0 || activeGroups.has(score.group);
    return inQuery && inGroup;
  }

  function render() {
    const results = data.filter(matches);
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

      const pdfLink = node.querySelector('[data-field="pdfLink"]');
      if (score.pdf) {
        pdfLink.href = score.pdf;
      } else {
        pdfLink.href = "#";
        pdfLink.classList.add("disabled");
        pdfLink.textContent = "Partition à ajouter";
      }

      const audioSlot = node.querySelector('[data-field="audioSlot"]');
      if (score.mp3) {
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.preload = "none";
        audio.src = score.mp3;
        audioSlot.appendChild(audio);
      } else {
        const badge = document.createElement("span");
        badge.className = "no-audio";
        badge.textContent = "♪ pas encore de MIDI";
        audioSlot.appendChild(badge);
      }

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
