# Agent Dashboard - Déploiement

## Structure
- `index.html` - Dashboard responsive
- `update-dashboard.js` - Script de mise à jour des données
- `package.json` - Config build
- `wrangler.toml` - Config Cloudflare

## Déploiement manuel

### Option 1: Cloudflare Pages (recommandé)
1. Aller sur https://dash.cloudflare.com
2. Pages > Create a project
3. Connecter GitHub repo: eslagentsa/agent-dashboard
4. Build settings:
   - Framework: None
   - Build command: (vide)
   - Output directory: /
5. Deploy

### Option 2: Wrangler CLI
```bash
wrangler login
wrangler pages project create agent-dashboard
wrangler pages deploy . --project-name=agent-dashboard
```

## URL prévue
https://agent-dashboard.pages.dev

## Mise à jour automatique
Le script `update-dashboard.js` collecte:
- Stats Git (commits, changements)
- Activités récentes (fichiers memory)
- Statut sites web
- Crédit OpenRouter (à configurer avec API key)
