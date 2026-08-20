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
    title: "Exemple de vidéo",
    date: "20/08/2026",
    anecdote: "",
    drive: "https://drive.google.com/file/d/COLLE_L_ID_ICI/view?usp=sharing"
  }
];

window.VIDEOS = VIDEOS;
