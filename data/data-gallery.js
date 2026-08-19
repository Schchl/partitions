// Chaque photo = une ligne ci-dessous.
// - title     : petit titre court de la photo
// - date      : ce que tu veux, texte libre — "Juillet 2019", "Été 2022", "12/03/2021"…
// - anecdote  : quelques phrases sur le contexte (facultatif, laisse "" si rien à dire)
// - photo     : chemin vers l'image dans /photos (obligatoire)
//
// L'ordre dans lequel tu écris les photos ici = l'ordre d'affichage sur la page.
// Range-les comme tu veux (chronologique, par importance...).

const GALLERY = [
  {
    title: "Premier concert avec l'orchestre",
    date: "Juillet 2019",
    anecdote: "Mon tout premier concert au pupitre de cor, encore un peu tremblante avant d'entrer en scène.",
    photo: "photos/premier-concert.jpg"
  }
  /*{
    title: "Stage d'été",
    date: "Août 2022",
    anecdote: "Une semaine de stage intensif, avec un super travail sur les extraits d'orchestre.",
    photo: "photos/stage-ete-2022.jpg"
  },*/
];

window.GALLERY = GALLERY;
