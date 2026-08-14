# 🎺 Pupitre — bibliothèque de cor

Un site statique (aucune base de données, aucun serveur) pour ranger tes partitions PDF et leurs MIDI exportés en mp3, avec recherche et filtres par catégorie.

## Structure du projet

```
horn-library/
├── index.html          → la page
├── assets/
│   ├── style.css
│   └── app.js
├── data/
│   └── scores.js        → la liste de tes morceaux (à éditer)
├── scores/               → tes fichiers PDF
└── audio/                → tes fichiers mp3
```

## Ajouter un morceau

1. Copie le PDF dans `scores/` et (si tu l'as) le mp3 dans `audio/`.
2. Ouvre `data/scores.js` et ajoute un bloc dans le tableau `SCORES` :

```js
{
  title: "Titre du morceau",
  composer: "Nom du compositeur",
  category: "Solo / concerto",   // ou "Musique de chambre", "Extraits d'orchestre", "Études", "Fanfare"…
  key: "Mi bémol majeur",        // facultatif
  opus: "op. 11",                // facultatif
  pdf: "scores/mon-fichier.pdf",
  mp3: "audio/mon-fichier.mp3"   // ou null si pas encore d'enregistrement
}
```

3. Enregistre. C'est tout — pas de build, pas de compilation.

Les catégories affichées dans les filtres (les petites "valves" en haut) sont générées automatiquement à partir de ce que tu utilises dans `category`, donc tu peux en inventer de nouvelles librement.

## Tester en local

Double-clique simplement sur `index.html` — comme les données sont chargées via `data/scores.js` (et non via `fetch`), ça fonctionne même sans serveur local.

## Héberger sur GitHub Pages

1. Crée un nouveau dépôt GitHub (public), par exemple `pupitre`.
2. Mets tout le contenu de ce dossier `horn-library/` à la racine du dépôt (donc `index.html` doit être directement à la racine, pas dans un sous-dossier).
3. Pousse le code :
   ```bash
   git init
   git add .
   git commit -m "Bibliothèque de partitions de cor"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/pupitre.git
   git push -u origin main
   ```
4. Sur GitHub : **Settings → Pages → Build and deployment → Source : Deploy from a branch**, choisis la branche `main` et le dossier `/ (root)`.
5. Après une minute ou deux, ton site sera en ligne à `https://<ton-pseudo>.github.io/pupitre/`.

### Une remarque sur les PDF/mp3 volumineux

GitHub limite les fichiers à 100 Mo et recommande de rester sous les quelques centaines de Mo pour un dépôt entier. Des PDF de partitions ne posent en général aucun problème ; si tes mp3 sont nombreux et lourds, pense à les compresser (128 kbps suffit largement pour un rendu MIDI).

## Personnaliser

- Couleurs et typographies : tout est centralisé en haut de `assets/style.css` (variables `--gold`, `--bg`, etc.).
- Le dessin du cor dans l'en-tête est un simple SVG dans `index.html`, modifiable directement.
