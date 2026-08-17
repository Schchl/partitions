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
  },
  {
    title: "All I Want for Christmas Is You",
    composer: "Mariah Carey",
    group: "Anciens",
    category: "Chansons populaires",
    opus: "1994",
    pdf: "scores/All_I_Want_for_Christmas_is_You_OSEM-Trompa_en_Fa.pdf",
    mp3: "audio/All_I_Want_for_Christmas_is_You_OSEM.mp3"
  },
  {
    title: "Valse Débutante",
    composer: "Evan Call",
    group: "Anciens",
    category: "Extraits d'orchestre",
    pdf: "scores/debutante-waltz-OSEM2026-Trompa_en_Fa_3.pdf",
    mp3: "audio/debutante-waltz-OSEM2026.mp3"
  },
  {
    title: "Les Indes Galantes",
    composer: "J. P. Rameau",
    group: "Anciens",
    category: "Extraits d'orchestre",
    pdf: "scores/Indes Galantes _-Trompa_en_Fa.pdf",
    mp3: "audio/Indes_Galantes.mp3"
  },
  {
    title: "Jingle Bell Rock",
    composer: "?",
    group: "Anciens",
    category: "Extraits d'orchestre",
    pdf: "scores/Jingle_Bell_Rock_OSEM2025-Trompa_en_Fa.pdf",
    mp3: "audio/Jingle_Bell_Rock_Osem2025.mp3"
  },
  {
    title: "Joyeux Anniversaire",
    composer: "?",
    group: "Loisirs",
    category: "Extraits d'orchestre",
    pdf: "scores/Joyeux Anniversaire OSEM-F_Horn_1_&_3.pdf",
    mp3: null
  },
  {
    title: "La Marseillaise",
    composer: "?",
    group: "Anciens",
    category: "Extraits d'orchestre",
    pdf: "scores/La_Marseillaise_OSEM.pdf",
    mp3: null
  },
  {
    title: "Medley Disney",
    composer: "?",
    group: "Anciens",
    category: "Extraits d'orchestre",
    pdf: "scores/Medley-Disney-Cor_Fa.pdf",
    mp3: "audio/Medley-Disney.mp3"
  },
  {
    title: "Santa Claus Is Coming to Town",
    composer: "?",
    group: "Anciens",
    category: "Extraits d'orchestre",
    pdf: "scores/santa-claus-is-coming-to-town-OSEM-F_Horn.pdf",
    mp3: "audio/santa-claus-is-coming-to-town-OSEM.mp3"
  },
  {
    title: "STAR WARS",
    composer: "John Williams",
    group: "Anciens",
    category: "Extraits d'orchestre",
    pdf: "scores/STAR-WARS-Horn_in_F.pdf",
    mp3: "audio/STAR-WARS.mp3"
  },
  {
    title: "Ticotico",
    composer: "?",
    group: "Anciens",
    category: "Extraits d'orchestre",
    pdf: "scores/ticotico_vf-Cor_en_Fa.pdf",
    mp3: "audio/ticotico_vf.wav"
  },
  {
    title: "La Valse Des Fleurs",
    composer: "?",
    group: "Anciens",
    category: "Extraits d'orchestre",
    pdf: "scores/Valse_Des_Fleurs-Cor_en_Fa.pdf",
    mp3: "audio/Valse_Des_Fleurs.mp3"
  },
  {
    title: "Vive le vent",
    composer: "?",
    group: "Anciens",
    category: "Extraits d'orchestre",
    pdf: "scores/Vive-le-vent.pdf",
    mp3: "audio/Vive-le-vent.mp3"
  },
  {
    title: "We Wish You a Merry Christmas / Petit Papa Noël",
    composer: "?",
    group: "Anciens",
    category: "Extraits d'orchestre",
    pdf: "scores/we-wish-you-a-merry-christmas-PetitPapaNoël-OSEM 2025-F_Horn.pdf",
    mp3: "audio/we-wish-you-a-merry-christmas-PetitPapaNoël-OSEM-2025.mp3"
  },
  {
    title: "Serenade for horn and band",
    composer: "?",
    group: "Anciens",
    category: "Cours cor",
    pdf: "scores/serenade-for-horn-and-band.pdf",
    mp3: null
  },
  {
    title: "From the start",
    composer: "?",
    group: "Loisirs",
    category: "Loisir",
    pdf: "scores/from-the-start.pdf",
    mp3: null
  }
];

window.SCORES = SCORES;
