# Guide de Déploiement TechnoCars sur Netlify

## 🚀 Déploiement simple sur Netlify

### Étape 1 : Créer un compte Netlify
1. Aller sur **netlify.com**
2. Créer un compte gratuit (email ou GitHub)

### Étape 2 : Déploiement automatique
1. Cliquer sur **"Add new site"** 
2. Sélectionner **"Deploy manually"**
3. Glisser-déposer le **dossier complet du projet** TechnoCars
4. Netlify détecte automatiquement la configuration via `netlify.toml`

### Étape 3 : Configuration automatique
Netlify utilise votre fichier `netlify.toml` qui contient :
- Build command: `cd client && npm install && npm run build`
- Publish directory: `client/dist`
- Variable d'environnement WhatsApp
- Redirections SPA automatiques

### Option 2 : Déploiement Git (Production)

1. **Push vers GitHub/GitLab**
   - Créer un repo pour TechnoCars
   - Push le code complet

2. **Connexion Netlify**
   - "Add new site" > "Import from Git"
   - Sélectionner votre repo TechnoCars

3. **Configuration automatique**
   - Build command: `npm run build`
   - Publish directory: `client/dist`
   - Netlify détecte automatiquement le `netlify.toml`

## ⚙️ Variables d'environnement Netlify

Dans l'interface Netlify > Site settings > Environment variables :

```
VITE_WHATSAPP_NUMBER=213698997346
```

## 🌍 Domaine personnalisé

Après déploiement :
1. Site settings > Domain management
2. Add custom domain
3. Suggestions : `technocars.dz` ou `technocars-alger.com`
4. SSL automatique activé

## 📱 Test final

Vérifier après déploiement :
- ✅ Navigation entre pages
- ✅ Galeries photos fonctionnelles
- ✅ Boutons WhatsApp (+213 698997346)
- ✅ Informations de contact
- ✅ Favicon TechnoCars
- ✅ Responsive mobile

## 🎯 URL de test
Netlify fournira une URL type : `https://technocars-abc123.netlify.app`

## 📞 Support
En cas de problème :
- Logs de build dans Netlify Dashboard
- Variables d'environnement vérifiées
- Redirections SPA fonctionnelles via `netlify.toml`