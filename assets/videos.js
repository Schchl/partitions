(function () {
  const grid = document.getElementById("video-grid");
  const template = document.getElementById("video-template");
  const statsEl = document.getElementById("video-stats");
  const emptyState = document.getElementById("video-empty-state");

  const lightbox = document.getElementById("lightbox");
  const lightboxVideo = document.getElementById("lightbox-video");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  const data = Array.isArray(window.VIDEOS) ? window.VIDEOS : [];

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

    if (
      date.getFullYear() !== year ||
      date.getMonth() !== month - 1 ||
      date.getDate() !== day
    ) {
      return null;
    }
    return date;
  }

  // Extrait l'ID Drive depuis un lien de partage complet, ou renvoie
  // la chaîne telle quelle si c'est déjà juste un ID.
  function extractDriveId(str) {
    if (typeof str !== "string") return null;
    const trimmed = str.trim();
    const match = /\/d\/([a-zA-Z0-9_-]+)/.exec(trimmed);
    if (match) return match[1];
    if (/^[a-zA-Z0-9_-]{10,}$/.test(trimmed)) return trimmed;
    return null;
  }

  // Trie : dates valides du plus récent au plus ancien en premier,
  // puis tout ce qui n'a pas de date valide, dans leur ordre d'origine.
  function sortVideos(videos) {
    return videos
      .map((video, index) => ({ video, index, date: parseDate(video.date) }))
      .sort((a, b) => {
        if (a.date && b.date) return b.date - a.date;
        if (a.date && !b.date) return -1;
        if (!a.date && b.date) return 1;
        return a.index - b.index;
      })
      .map((entry) => entry.video);
  }

  const sortedData = sortVideos(data);

  function openLightbox(video) {
    const driveId = extractDriveId(video.drive);
    if (!driveId) return;
    lightboxVideo.src = `https://drive.google.com/file/d/${driveId}/preview`;
    const parts = [video.title, video.date].filter(Boolean);
    lightboxCaption.textContent = parts.join(" — ");
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxVideo.src = ""; // coupe la lecture en fermant
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

    sortedData.forEach((video) => {
      const driveId = extractDriveId(video.drive);
      if (!driveId) return; // lien Drive manquant ou invalide, on ignore l'entrée

      const node = template.content.cloneNode(true);

      const iframe = node.querySelector('[data-field="embed"]');
      iframe.src = `https://drive.google.com/file/d/${driveId}/preview`;
      iframe.title = video.title || "Vidéo";

      const overlay = node.querySelector('[data-field="overlay"]');
      overlay.addEventListener("click", () => openLightbox(video));
      overlay.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(video);
        }
      });

      node.querySelector('[data-field="date"]').textContent = video.date || "";
      node.querySelector('[data-field="title"]').textContent = video.title || "";

      const anecdoteEl = node.querySelector('[data-field="anecdote"]');
      if (video.anecdote) {
        anecdoteEl.textContent = video.anecdote;
      } else {
        anecdoteEl.remove();
      }

      grid.appendChild(node);
    });

    const count = grid.children.length;
    emptyState.hidden = count !== 0;
    statsEl.textContent = `${count} vidéo${count > 1 ? "s" : ""}`;
  }

  render();
})();