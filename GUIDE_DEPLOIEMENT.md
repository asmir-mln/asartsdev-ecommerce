# 🌐 Guide de Déploiement - AsartsDev E-commerce

## Comment voir le site en ligne

Ce guide vous explique comment visualiser et déployer le site sur internet.

## 📱 Voir le site localement

### Méthode 1 : Mode développement (Recommandé pour les tests)

```bash
# Étape 1 : Installer les dépendances
npm install

# Étape 2 : Démarrer le serveur de développement
npm start
```

✅ Le site s'ouvre automatiquement dans votre navigateur à `http://localhost:3000`

### Méthode 2 : Mode production (Version optimisée)

```bash
# Étape 1 : Installer les dépendances
npm install

# Étape 2 : Créer la version de production
npm run build

# Étape 3 : Démarrer le serveur
npm run serve
```

✅ Ouvrez votre navigateur à `http://localhost:3000`

## 🚀 Déployer le site sur internet

### Option 1 : GitHub Pages (Gratuit)

1. **Préparez votre build :**
   ```bash
   npm run build
   ```

2. **Dans votre repository GitHub :**
   - Allez dans Settings > Pages
   - Source : Deploy from a branch
   - Branch : Sélectionnez votre branche et le dossier `/build`
   - Cliquez sur Save

3. **Votre site sera disponible à :**
   `https://[votre-username].github.io/asartsdev-ecommerce`

### Option 2 : Netlify (Gratuit et simple)

1. **Créez un compte sur [Netlify](https://netlify.com)**

2. **Connectez votre repository :**
   - Cliquez sur "New site from Git"
   - Sélectionnez GitHub
   - Choisissez votre repository

3. **Configuration de build :**
   - Build command : `npm run build`
   - Publish directory : `build`

4. **Déployez !**
   - Netlify vous donnera une URL comme : `https://[nom-unique].netlify.app`

### Option 3 : Vercel (Gratuit et rapide)

1. **Installez Vercel CLI :**
   ```bash
   npm install -g vercel
   ```

2. **Déployez :**
   ```bash
   npm run build
   vercel --prod
   ```

3. **Suivez les instructions** - Vercel vous donnera une URL

### Option 4 : Hébergement manuel

1. **Créez le build :**
   ```bash
   npm run build
   ```

2. **Uploadez le contenu du dossier `build/`** sur n'importe quel serveur web :
   - OVH
   - Hostinger
   - 1&1 IONOS
   - Votre propre serveur

3. **Le site sera accessible** via votre nom de domaine

## 🆘 Problèmes courants

### Le site ne démarre pas

**Solution :**
```bash
# Supprimez les dépendances et réinstallez
rm -rf node_modules package-lock.json
npm install
npm start
```

### Erreur de port 3000 déjà utilisé

**Solution :**
```bash
# Utilisez un autre port
PORT=3001 npm start
```

### La page est blanche après déploiement

**Solution :** Ajoutez `"homepage": "."` dans `package.json` :
```json
{
  "name": "asartsdev-ecommerce",
  "homepage": ".",
  ...
}
```

## 📞 Support

Pour toute question sur le déploiement, consultez :
- [Documentation React](https://create-react-app.dev/docs/deployment/)
- [Guide Netlify](https://docs.netlify.com/)
- [Guide Vercel](https://vercel.com/docs)

---

✨ **Le site est maintenant visible sur le web !**
