# Troubleshooting - Erreurs fréquentes rencontrées

## OpenRouter / Timeouts

**Symptôme**: "Profile timed out" après ~10 min d'inactivité.

**Solutions**:
- Pour les builds longs (>60s), utiliser `timeout: 180` ou `timeout: 300`
- Poll les processus longs avec `process(action="poll")`
- Ne pas laisser les commandes tourner en background sans surveillance

## Outil `edit`

**Erreur**: `Missing required parameter: oldText`

**Règle**:
- Soit `oldText` (camelCase)
- Soit `old_string` (snake_case) 
- JAMAIS les deux, JAMAIS aucun des deux

**OK**:
```json
{
  "file_path": "...",
  "oldText": "texte à remplacer",
  "newText": "nouveau texte"
}
```

**OK aussi**:
```json
{
  "file_path": "...",
  "old_string": "texte à remplacer",
  "new_string": "nouveau texte"
}
```

**PAS OK**:
- `old_string` + `newText` (mixte)
- `oldText` + `new_string` (mixte)

## Tailwind CSS v4 avec Astro

**Erreur**: `Cannot apply unknown utility class`

**Cause**: Tailwind v4 ne permet pas @apply avec des classes custom non définies.

**Solution**: 
- Utiliser des propriétés CSS directes
- Éviter `@apply glass` ou `@apply bg-primary-500/50`
- Remplacer par: `background: rgba(...)` directement

## Cloudflare Pages + Astro SSR

**Erreur**: Pages en 404 sauf l'index

**Cause**: Mode `output: 'server'` sans prerender explicite.

**Solution**:
```astro
---
export const prerender = true;  // <-- INDISPENSABLE
import Layout from '../layouts/Layout.astro';
---
```

Ou configurer en mode statique:
```js
// astro.config.mjs
export default defineConfig({
  output: 'static',  // ou 'hybrid' pour mixte
  // ...
})
```

## Git Push

**Erreur**: "Author identity unknown"

**Solution**:
```bash
git config user.email "user@example.com"
git config user.name "User Name"
```

Ou utiliser l'URL avec token:
```bash
git remote set-url origin https://username:token@github.com/user/repo.git
```
