// Chaque vidéo = une ligne ci-dessous.
// - title    : petit titre court de la vidéo
// - date     : format jj/mm/aaaa pour être triée correctement
//              (texte libre ou vide = classée tout en bas)
// - anecdote : quelques phrases sur le contexte (facultatif, laisse "" si rien à dire)
// - drive    : soit le lien de partage Drive complet, soit juste l'ID du fichier
//              (obligatoire)
//
// Pour trouver le lien : clic droit sur la vidéo dans Drive > Partager >
// "Toute personne disposant du lien" > Lecteur, puis "Copier le lien".
// Colle ce lien tel quel dans "drive", pas besoin de le transformer.

const VIDEOS = [
  {
    title: "Valse des fleurs Concert OSEM Fac des sciences",
    date: "05/06/2026",
    anecdote: "",
    drive: "https://drive.google.com/file/d/1IliGmFtaJ7W1dLjEldREYdKBLg2dWp-h/view?usp=sharing"
  },
  {
    title: "Solo Star Wars Concert OSEM Fac des sciences",
    date: "05/06/2026",
    anecdote: "",
    drive: "https://drive.google.com/file/d/1r0Q2tNnY_PJbppUNnO_ow2BBVimx-Voj/view?usp=sharing"
  }
];

window.VIDEOS = VIDEOS;
