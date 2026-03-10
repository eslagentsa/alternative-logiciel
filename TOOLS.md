# TOOLS.md - Configuration et meilleures pratiques

## Modèles et Providers

**Modèle actuel**: openrouter/moonshotai/kimi-k2.5
**Fallback**: openrouter/openai/gpt-4o-mini (si timeout)

### Quand utiliser "thinking": "high"
- Problèmes complexes de debug
- Architecture logicielle
- Refactoring important
- Code critiques (auth, paiement, etc.)

### Quand utiliser "thinking": "low" (défaut)
- Tâches routinières (commit, push)
- Éditions simples
- Vérifications de statut

## Timeouts et Performance

| Type de tâche | Timeout recommandé |
|---------------|-------------------|
| `git clone` | 60s |
| `npm install` | 120s |
| `npm run build` (Astro) | 180-300s |
| `curl` simple | 10s |
| Build Cloudflare Pages | 60s (attente) + vérification |

### Pour les tâches longues
```json
{
  "timeout": 300,
  "pty": false
}
```

### Pour les builds
Toujours vérifier le code de retour:
- `0` = OK
- `1` ou autre = Erreur → analyser les logs

## Cloudflare Pages

### Build command recommandée
```yaml
Command: npm run build
Output directory: dist
Framework: Astro
```

### Pages statiques
Pour toutes les pages publiques:
```astro
---
export const prerender = true;
---
```

### Attente après push
1. Push GitHub (instantané)
2. Build Cloudflare Pages (~1-2 min)
3. Déploiement global (~1 min)
4. **Total d'attente**: 30-60s, puis vérification

## Git - Bonnes pratiques

### Commit
- Message en français clair
- Petit commit = un seul changement logique
- Vérifier `git status` avant commit

### Push avec token
```bash
# Évite d'avoir à configurer l'auth
# Token stocké dans la session
```

## Troubleshooting rapide

Voir `TROUBLESHOOTING.md` pour:
- Erreurs OpenRouter
- Problèmes d'édition
- Erreurs Tailwind
- Issues Cloudflare Pages

## Outils Externes

Voir `EXTERNAL-TOOLS.md` pour:
- Configuration Chrome Browser
- Accès Gmail configuré
- Exemples d'utilisation
- Sécurité des credentials
