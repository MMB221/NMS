SITE D'ANNIVERSAIRE — NDEYE MATY ♡

CONTENU
- index.html : contenu et textes
- style.css : design, couleurs et responsive mobile
- script.js : interactions, galerie, cœurs et message secret
- photos/ : ajoutez vos propres photos ici

OUVRIR LE SITE
1. Décompressez le dossier.
2. Ouvrez index.html dans un navigateur (Chrome, Safari, Edge…).
3. Pour le partager avec votre copine, publiez ensuite le dossier sur un hébergeur statique (par exemple GitHub Pages ou Netlify).

REMPLACER LES PHOTOS
Dans le dossier photos, ajoutez vos images avec ces noms exacts :
photo-1.jpg
photo-2.jpg
photo-3.jpg
photo-4.jpg
photo-5.jpg
photo-6.jpg
photo-7.jpg

Vous pouvez utiliser des fichiers .png ou .webp, mais dans ce cas modifiez également le chemin correspondant dans index.html.
Les images sont des emplacements : aucune photo personnelle n'est incluse.

PERSONNALISER LES TEXTES
- Ouvrez index.html avec VS Code.
- Recherchez le texte à modifier et remplacez-le.
- Les messages qui s'ouvrent au clic se trouvent dans les attributs data-title et data-message des cartes photo.
- Le message secret est dans la section id="secret".
- Le texte final est dans la section id="final".

CHANGER LE MOT DE PASSE DU MESSAGE SECRET
Dans script.js, modifiez :
const SECRET_PASSWORD = "babygirl";

IMPORTANT
Le mot de passe est uniquement une petite surprise visuelle. Comme le site est côté navigateur, il n'est pas sécurisé : quelqu'un qui inspecte le code peut lire le message et le mot de passe. Ne placez aucune information réellement privée dedans.

MUSIQUE
Aucune musique n'est incluse par défaut. Si vous voulez ajouter votre chanson, il faudra disposer du fichier audio et ajouter un lecteur audio dans index.html.
