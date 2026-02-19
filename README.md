# AsartsDev E-commerce - Livres Illustrés pour Enfants

« Projet e-commerce AsartsDev » - Plateforme de vente de livres illustrés pour enfants

## 📚 Description

Cette plateforme e-commerce présente des livres romans illustrés pour enfants, basés sur des récits d'après des souvenirs personnels. Le projet fait partie d'une autobiographie en cours d'écriture et sera bientôt disponible en format livre et sur internet.

### Caractéristiques principales :

- ✨ **Carrousel Illustré** : Navigation interactive à travers les pages du livre
- 📖 **Histoire Authentique** : Récit basé sur des souvenirs personnels
- 🎨 **Illustrations Originales** : Chaque page est illustrée de manière unique
- 🌐 **Disponible en Ligne** : Accessible via navigateur web
- 📱 **Design Responsive** : Optimisé pour tous les appareils

## 🚀 Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation des dépendances

```bash
npm install
```

## 💻 Développement

### Démarrer l'application en mode développement

```bash
npm start
```

L'application sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
```

Cela créera une version optimisée dans le dossier `build/`.

## 📦 Structure du Projet

```
asartsdev-ecommerce/
├── public/
│   └── index.html          # Page HTML principale
├── src/
│   ├── components/         # Composants React
│   │   ├── BookCarousel.js # Carrousel d'illustrations
│   │   ├── BookCarousel.css
│   │   ├── BookDetails.js  # Détails du livre
│   │   └── BookDetails.css
│   ├── data/
│   │   └── bookData.js     # Données du livre (pages, textes, illustrations)
│   ├── App.js              # Composant principal
│   ├── App.css
│   ├── index.js            # Point d'entrée
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Fonctionnalités

### Carrousel Illustré

Le carrousel permet de naviguer à travers les pages du livre avec :
- Navigation par flèches
- Support tactile (swipe)
- Animations fluides
- Indicateur de page

### Pages du Livre

Chaque page contient :
- Une illustration emoji
- Un texte narratif
- Un numéro de page
- Une couleur de fond unique

## 🌟 Contenu du Livre

Le livre "Souvenirs d'Enfance" raconte l'histoire d'un enfant à travers 6 pages illustrées, chacune représentant un moment précieux des souvenirs de l'auteur.

## 📝 Statut

**Bientôt disponible** - Le livre est en cours de finalisation et sera prochainement disponible à la pré-commande.

## 🛠️ Technologies Utilisées

- **React** 18.2.0 - Framework JavaScript
- **react-responsive-carousel** - Bibliothèque de carrousel
- **react-scripts** - Outils de build
- **CSS3** - Styles et animations

## 📄 Licence

© 2024 AsartsDev E-commerce - Tous droits réservés

## 👤 Auteur

Écrit et illustré par AsartsDev

---

*"Un récit d'après un souvenir, publié lors de l'écriture d'une autobiographie"*
