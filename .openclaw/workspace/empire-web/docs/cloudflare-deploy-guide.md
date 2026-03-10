# Guide Déploiement Cloudflare Pages

## Prérequis
- Compte Cloudflare (gratuit) : https://dash.cloudflare.com/sign-up
- Repo GitHub : https://github.com/eslagentsa/alternative-logiciel

---

## Étape 1 : Connexion GitHub

1. Allez sur https://dash.cloudflare.com
2. Connectez-vous ou créez un compte
3. Dans le menu latéral, cliquez sur **"Pages"**
4. Cliquez sur **"Create a project"**
5. Cliquez sur **"Connect to GitHub"**
6. Autorisez Cloudflare à accéder à vos repos
7. Sélectionnez le repo **"alternative-logiciel"**

---

## Étape 2 : Configuration Build

### Settings :

| Champ | Valeur |
|-------|--------|
| **Project name** | `alternative-logiciel` |
| **Production branch** | `master` |
| **Framework preset** | `Astro` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |

### Variables d'environnement (optionnel) :

Cliquez sur "Add variable" si besoin :
- `NODE_VERSION` = `18` ou `20`

---

## Étape 3 : Deploy

1. Cliquez sur **"Save and Deploy"**
2. Attendez le build (2-3 minutes)
3. Votre site sera disponible sur :
   - `https://alternative-logiciel.pages.dev`

---

## Étape 4 : Domaine Personnalisé (optionnel)

1. Dans le dashboard Cloudflare Pages
2. Allez dans l'onglet **"Custom domains"**
3. Cliquez sur **"Set up a custom domain"**
4. Entrez : `alternative-logiciel.fr`
5. Suivez les instructions DNS

---

## Dépannage

### Si le build échoue :

Vérifiez que le `package.json` contient :
```json
{
  "scripts": {
    "build": "astro build"
  }
}
```

### Si images manquantes :

Ajoutez dans `astro.config.mjs` :
```javascript
export default defineConfig({
  output: 'static',
  adapter: cloudflare()
});
```

---

## Avantages Cloudflare Pages

✅ **Edge Network** - 300+ datacenters mondiaux  
✅ **HTTPS gratuit** - Certificats SSL auto  
✅ **Analytics** - Stats de visite intégrées  
✅ **Rollbacks** - Retour arrière facile  
✅ **Prévisualisation** - Preview par Pull Request  

---

## Prochaines Étapes

1. ✅ Déployer le site
2. ⏳ Configurer le domaine `alternative-logiciel.fr`
3. ⏳ Ajouter Google Analytics / Plausible
4. ⏳ Soumettre à Google Search Console
5. ⏳ Commencer la génération de contenu

---

**Besoin d'aide ?** Vérifiez les logs de build dans l'onglet "Functions" ou "Deployments" sur Cloudflare.
