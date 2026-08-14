// Chaque partition = une ligne ci-dessous.
// - group : catégorie du filtre principal en haut de page. Utilise UNIQUEMENT
//   l'une de ces trois valeurs, orthographiées exactement ainsi :
//     "Orchestre"  → morceaux joués avec l'orchestre / répertoire orchestral
//     "Loisirs"    → morceaux joués pour le plaisir, hors orchestre
//     "Anciens"    → anciens morceaux, plus joués actuellement
// - category : sous-étiquette libre affichée sur la carte (tu peux inventer
//   ce que tu veux : "Solo / concerto", "Musique de chambre", "Fanfare"…)
// - pdf : chemin vers le fichier dans /scores (obligatoire pour que le bouton fonctionne)
// - mp3 : chemin vers le fichier dans /audio, ou null si tu n'as pas encore d'enregistrement
// - key et opus sont facultatifs, laisse "" si non utilisés.

const SCORES = [
  {
    title: "Concerto pour cor n°3",
    composer: "W. A. Mozart",
    group: "Orchestre",
    category: "Solo / concerto",
    key: "Mi bémol majeur",
    opus: "K. 447",
    pdf: "scores/mozart-concerto-3.pdf",
    mp3: "audio/mozart-concerto-3.mp3"
  },
  {
    title: "Concerto pour cor n°1",
    composer: "R. Strauss",
    group: "Orchestre",
    category: "Solo / concerto",
    key: "Mi bémol majeur",
    opus: "op. 11",
    pdf: "scores/strauss-concerto-1.pdf",
    mp3: null
  },
  {
    title: "Symphonie n°7 — 2e mouvement",
    composer: "L. van Beethoven",
    group: "Orchestre",
    category: "Extraits d'orchestre",
    key: "La mineur",
    opus: "op. 92",
    pdf: "scores/beethoven-symphonie-7.pdf",
    mp3: "audio/beethoven-symphonie-7.mp3"
  },
  {
    title: "Trio pour cor, violon et piano",
    composer: "J. Brahms",
    group: "Loisirs",
    category: "Musique de chambre",
    key: "Mi bémol majeur",
    opus: "op. 40",
    pdf: "scores/brahms-trio.pdf",
    mp3: null
  },
  {
    title: "Quintette pour cuivres n°1",
    composer: "V. Ewald",
    group: "Loisirs",
    category: "Musique de chambre",
    key: "Si bémol mineur",
    opus: "op. 5",
    pdf: "scores/ewald-quintette-1.pdf",
    mp3: "audio/ewald-quintette-1.mp3"
  },
  {
    title: "40 études pour cor — n°12",
    composer: "F. Gallay",
    group: "Anciens",
    category: "Études",
    key: "",
    opus: "op. 13",
    pdf: "scores/gallay-etude-12.pdf",
    mp3: null
  }
];

window.SCORES = SCORES;
