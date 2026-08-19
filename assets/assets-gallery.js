(function () {
  const grid = document.getElementById("gallery-grid");
  const template = document.getElementById("photo-template");
  const statsEl = document.getElementById("gallery-stats");
  const emptyState = document.getElementById("gallery-empty-state");

  const data = Array.isArray(window.GALLERY) ? window.GALLERY : [];

  function render() {
    grid.innerHTML = "";

    data.forEach((photo) => {
      const node = template.content.cloneNode(true);

      const img = node.querySelector('[data-field="photo"]');
      img.src = photo.photo;
      img.alt = photo.title || "";

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