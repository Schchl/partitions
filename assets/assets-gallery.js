(function () {
  const grid = document.getElementById("gallery-grid");
  const template = document.getElementById("photo-template");
  const searchInput = document.getElementById("gallery-search");
  const statsEl = document.getElementById("gallery-stats");
  const emptyState = document.getElementById("gallery-empty-state");

  const data = Array.isArray(window.GALLERY) ? window.GALLERY : [];
  let query = "";

  function matches(photo) {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      (photo.title || "").toLowerCase().includes(q) ||
      (photo.date || "").toLowerCase().includes(q) ||
      (photo.anecdote || "").toLowerCase().includes(q)
    );
  }

  function render() {
    const results = data.filter(matches);
    grid.innerHTML = "";

    results.forEach((photo) => {
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

    emptyState.hidden = results.length !== 0;
    statsEl.textContent = `${results.length} / ${data.length} photo${
      data.length > 1 ? "s" : ""
    }`;
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      query = e.target.value;
      render();
    });
  }

  render();
})();
