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
    title: "Concert Peyrou",
    date: "13/12/2025",
    anecdote: "",
    photo: "photos/2025_12_13_Concert_Peyrou_1.webp"
  },
  {
    title: "Concert Peyrou",
    date: "13/12/2025",
    anecdote: "",
    photo: "photos/2025_12_13_Concert_Peyrou_2.webp"
  },
  {
    title: "Présentation audiovisuelle",
    date: "07/11/2022",
    anecdote: "Interview réalisée pour une SAE audiovisuelle pour mon BUT MMI 1",
    photo: "photos/audiovisuel-presentation.webp"
  },
  {
    title: "Concert en solo",
    date: "Il y a fort longtemps",
    anecdote: "",
    photo: "photos/concert-petite-solo.webp"
  },
  {
    title: "Concert à Toulouse",
    date: "08/12/2018",
    anecdote: "Regroupement de cor d'harmonie à Toulouse",
    photo: "photos/concert-toulouse.webp"
  },
  {
    title: "Concert OSEM — fac de médecine",
    date: "31/03/2026",
    anecdote: "",
    photo: "photos/OSEM_concert_fac-medecine1.webp"
  },
  {
    title: "Concert OSEM — fac de médecine",
    date: "30/05/2026",
    anecdote: "",
    photo: "photos/OSEM_concert_fac-medecine2.webp"
  },
  {
    title: "Photo pour un magazine pour les mamans",
    date: "Il y a fort longtemps",
    anecdote: "",
    photo: "photos/photo_livre_maman.webp"
  },
  {
    title: "Concert orchestre conservatoire Béziers",
    date: "Il y a fort longtemps",
    anecdote: "",
    photo: "photos/photo-concert-pierre.webp"
  },
  {
    title: "Répétition avec l'orchestre",
    date: "12/04/2026",
    anecdote: "21/04/2026",
    photo: "photos/Répet_mde_orchestre.webp"
  },
  {
    title: "Week-end OSEM",
    date: "12/04/2026",
    anecdote: "",
    photo: "photos/WeekEndH_1.16.1.webp"
  },
  {
    title: "Week-end OSEM",
    date: "12/04/2026",
    anecdote: "",
    photo: "photos/WeekEndH_1.88.1.webp"
  },
  {
    title: "Week-end OSEM",
    date: "12/04/2026",
    anecdote: "",
    photo: "photos/WeekEndV_test-cor.webp"
  },
  {
    title: "Week-end OSEM",
    date: "12/04/2026",
    anecdote: "",
    photo: "photos/WeekEndV_1.86.1.webp"
  },
  {
    title: "Week-end OSEM",
    date: "12/04/2026",
    anecdote: "",
    photo: "photos/WeekEndV_1.105.1.webp"
  },
  {
    title: "Week-end OSEM",
    date: "12/04/2026",
    anecdote: "",
    photo: "photos/WeekEndV_1.106.1.webp"
  },
  {
    title: "Week-end OSEM",
    date: "12/04/2026",
    anecdote: "",
    photo: "photos/WeekEndV_1.118.1.webp"
  },
  {
    title: "Pupitre Cuivres OSEM 2025-2026",
    date: "05/06/2026",
    anecdote: "Petite pensée aux personnes absentes sur la photo :c",
    photo: "photos/Cuivres-OSEM-2026.webp"
  }
];

window.GALLERY = GALLERY;