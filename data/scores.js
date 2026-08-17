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
    title: "La Danse des Chevaliers",
    composer: "Sergueï Prokofiev",
    group: "Orchestre",
    category: "Extraits d'orchestre",
    opus: "Romeo and Juliet, Op. 64",
    pdf: "scores/La_Danse_des_Chevaliers.pdf",
    mp3: "audio/La_Danse_des_Chevaliers.mp3"
  }
  /*{
    title: "Concerto pour cor n°1",
    composer: "R. Strauss",
    group: "Orchestre",
    category: "Solo / concerto",
    key: "Mi bémol majeur",
    opus: "op. 11",
    pdf: "scores/strauss-concerto-1.pdf",
    mp3: null
  },*/
];

window.SCORES = SCORES;
