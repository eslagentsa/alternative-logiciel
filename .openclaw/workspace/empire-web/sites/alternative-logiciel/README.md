# Empire Web - Alternative Logiciel

## 🚀 Déploiement Rapide

### Étape 1: Compte Vercel
1. Créer un compte sur https://vercel.com avec esl.agentsa@gmail.com
2. Connecter le repo GitHub (à créer)

### Étape 2: Variables d'environnement
Dans le dashboard Vercel, ajouter:
- `PUBLIC_SITE_URL` : https://alternative-logiciel.vercel.app
- `PUBLIC_SITE_NAME` : Alternative Logiciel

### Étape 3: Déploiement auto
Chaque push sur `main` déclenche un déploiement automatique.

## 📁 Structure du Projet

```
sites/alternative-logiciel/
├── src/
│   ├── components/     # Composants réutilisables
│   ├── layouts/        # Layouts de page
│   ├── pages/          # Routes Astro
│   ├── content/        # Contenu Keystatic
│   └── styles/         # CSS global
├── public/             # Assets statiques
├── keystatic.config.ts # Config CMS
└── astro.config.mjs    # Config Astro
```

## 🎨 Design System

- **Primary**: Violet/Purple (#8B5CF6)
- **Accent**: Electric Blue (#3B82F6)
- **Background**: Dark (#0F0F1A) / Light (#FFFFFF)
- **Font**: Inter (Google Fonts)

## 📝 Génération de Contenu

Voir `../../scripts/` pour les scripts de génération automatique.

## 🌐 Domaine Personnalisé

Une fois le site validé:
1. Acheter alternative-logiciel.fr
2. Configurer dans Vercel > Settings > Domains
