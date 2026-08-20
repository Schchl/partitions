(function () {
  const grid = document.getElementById("gallery-grid");
  const template = document.getElementById("photo-template");
  const statsEl = document.getElementById("gallery-stats");
  const emptyState = document.getElementById("gallery-empty-state");

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  const data = Array.isArray(window.GALLERY) ? window.GALLERY : [];

  // Convertit une date "jj/mm/aaaa" en objet Date. Renvoie null si le
  // format ne correspond pas exactement (texte libre, vide, etc.).
  function parseDate(str) {
    if (typeof str !== "string") return null;
    const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(str.trim());
    if (!match) return null;

    const day = Number(match[1]);
    const month = Number(match[2]);
    const year = Number(match[3]);
    const date = new Date(year, month - 1, day);

    // Vérifie que la date existe vraiment (ex: 31/02/2024 est invalide)
    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return null;
    }
    return date;
  }

  // Trie : dates valides du plus récent au plus ancien en premier,
  // puis tout ce qui n'a pas de date valide, dans leur ordre d'origine.
  function sortGallery(photos) {
    return photos
      .map((photo, index) => ({ photo, index, date: parseDate(photo.date) }))
      .sort((a, b) => {
        if (a.date && b.date) return b.date - a.date;
        if (a.date && !b.date) return -1;
        if (!a.date && b.date) return 1;
        return a.index - b.index; // garde l'ordre d'origine entre elles
      })
      .map((entry) => entry.photo);
  }

  const sortedData = sortGallery(data);

  function openLightbox(photo) {
    lightboxImg.src = photo.photo;
    lightboxImg.alt = photo.title || "";
    const parts = [photo.title, photo.date].filter(Boolean);
    lightboxCaption.textContent = parts.join(" — ");
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  function render() {
    grid.innerHTML = "";

    sortedData.forEach((photo) => {
      const node = template.content.cloneNode(true);

      const frame = node.querySelector(".photo-frame");
      const img = node.querySelector('[data-field="photo"]');
      img.src = photo.photo;
      img.alt = photo.title || "";

      frame.setAttribute("role", "button");
      frame.setAttribute("tabindex", "0");
      frame.setAttribute("aria-label", "Voir la photo en entier");
      frame.addEventListener("click", () => openLightbox(photo));
      frame.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(photo);
        }
      });

      node.querySelector('[data-field="date"]').textContent = photo.date || "";
      node.querySelector('[data-field="title"]').textContent = photo.title || "";

      const anecdoteEl = node.querySelector('[data-field="anecdote"]');
      if (photo.anecdote) {
        anecdoteEl.textContent = photo.anecdote;
      } else {
        anecdoteEl.remove();
      }

      grid.appendChild(node);
    });

    emptyState.hidden = sortedData.length !== 0;
    statsEl.textContent = `${sortedData.length} photo${sortedData.length > 1 ? "s" : ""}`;
  }

  render();
})();