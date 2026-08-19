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

    data.forEach((photo) => {
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

    emptyState.hidden = data.length !== 0;
    statsEl.textContent = `${data.length} photo${data.length > 1 ? "s" : ""}`;
  }

  render();
})();