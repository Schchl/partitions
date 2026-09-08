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
  },
  {
    title: "Aladin Maison pour tous Voltaire",
    date: "21/03/2026",
    anecdote: "",
    drive: "https://drive.google.com/file/d/1cJxPmjLeilsN1Sp9NLeNaPhsU1Tr4YxN/view?usp=sharing"
  },
  {
    title: "All I Want For Christmas Is You Marché de Noël",
    date: "13/12/2025",
    anecdote: "",
    drive: "https://drive.google.com/file/d/1slCLk4-bbltFQmo_MOeiO4Oqp_NYhHQ0/view?usp=sharing"
  },
  {
    title: "Chapi-chapo Reine des neiges MDE",
    date: "10/02/2026",
    anecdote: "",
    drive: "https://drive.google.com/file/d/1p-7rxGKxzWaRTtOLjxMwFboncyUr2Wu2/view?usp=sharing"
  },
  {
    title: "Chapi-chapo Reine des neiges MDE 2",
    date: "10/02/2026",
    anecdote: "",
    drive: "https://drive.google.com/file/d/1C2QYvF4Gz43AsubrRJDnnjKuhUH4kmTB/view?usp=sharing"
  },
  {
    title: "Indes Galantes Week-end OSEM",
    date: "12/04/2026",
    anecdote: "",
    drive: "https://drive.google.com/file/d/1EK74x9TsNJdA-91dpY7gFt8Dn8PPxzd0/view?usp=sharing"
  },
  {
    title: "La Truite Week-end OSEM",
    date: "12/04/2026",
    anecdote: "",
    drive: "https://drive.google.com/file/d/1jKuwkNYyq5Yzjvz5gWa6iF14h-SnCENj/view?usp=sharing"
  },
  {
    title: "Star Wars Concert Fac des sciences",
    date: "16/12/2025",
    anecdote: "",
    drive: "https://drive.google.com/file/d/1yv2rNbjOBnQTIaM0LsLms4MZKoyVftOq/view?usp=sharing"
  },
  {
    title: "Tico-tico Concert MO.CO",
    date: "13/02/2026",
    anecdote: "",
    drive: "https://drive.google.com/file/d/1yv2rNbjOBnQTIaM0LsLms4MZKoyVftOq/view?usp=sharing"
  },
  {
    title: "Valse des fleurs Concert Fac de médecine",
    date: "31/03/2026",
    anecdote: "",
    drive: "https://drive.google.com/file/d/1kpB-w97bmWwekNMvd2PWzwnXVa2ww_jc/view?usp=sharing"
  },
  {
    title: "Valse des fleurs Concert Fac de médecine",
    date: "31/03/2026",
    anecdote: "",
    drive: "https://drive.google.com/file/d/1kpB-w97bmWwekNMvd2PWzwnXVa2ww_jc/view?usp=sharing"
  }
];

window.VIDEOS = VIDEOS;
