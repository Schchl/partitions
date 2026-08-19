# Dossier /photos

Dépose ici tes photos (.jpg, .png, .webp…).

Ensuite, dans `data/gallery.js`, ajoute une entrée avec le chemin dans le champ `photo`, par exemple :

```js
{
  title: "Concert de fin d'année",
  date: "Juin 2024",
  anecdote: "Le concert qui a suivi 6 mois de préparation intensive avec le pupitre.",
  photo: "photos/concert-fin-annee.jpg"
}
```

- `title` : petit titre court
- `date` : texte libre ("Juillet 2019", "Été 2022", "12/03/2021"…)
- `anecdote` : facultatif, laisse `""` si tu n'as rien à raconter
- `photo` : chemin vers le fichier dans ce dossier

L'ordre des entrées dans `data/gallery.js` détermine l'ordre d'affichage sur la page — range-les comme tu veux.

Pour éviter de ralentir le chargement de la page, essaie de garder tes photos à une taille raisonnable (environ 1500px de large maximum suffit largement pour un affichage web).
