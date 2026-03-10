# Configuration OpenClaw Optimisée

## ⚙️ Paramètres Agent

| Paramètre | Valeur | Optimisation |
|-----------|--------|--------------|
| `maxConcurrent` | 6 | +50% par rapport à défaut (4) |
| `subagents.maxConcurrent` | 12 | +50% par rapport à défaut (8) |
| `compaction.mode` | safeguard | Préserve la mémoire importante |
| Modèle principal | openrouter/moonshotai/kimi-k2.5 | Rapide et efficace |

## 🔄 Cron Jobs Actifs

| Nom | Fréquence | Description |
|-----|-----------|-------------|
| `site-health-check` | Toutes les 30 min | Vérifie que les sites répondent en HTTP 200 |
| `git-sync-check` | Toutes les 4h | Commit/push automatique des changements |
| `memory-maintenance` | Tous les jours à 9h | Met à jour MEMORY.md avec les apprentissages |

## 🚀 Améliorations de Performance

### Concurrence
- Augmentation du nombre de tâches parallèles
- Plus de subagents pour les tâches complexes
- Meilleure utilisation des ressources

### Timeouts Adaptatifs
- Git operations: 60s
- npm install: 120s
- npm build: 180-300s
- curl checks: 10s

### Proactivité
- Heartbeat activé avec HEARTBEAT.md
- Crons pour maintenance automatique
- Vérifications régulières sans intervention

## 📁 Fichiers de Référence

- `TROUBLESHOOTING.md` - Solutions aux erreurs fréquentes
- `TOOLS.md` - Configuration outils et timeouts
- `HEARTBEAT.md` - Tâches de vérification périodiques
- `MEMORY.md` - Mémoire long terme (curated)

## 🎯 Comportement Attendu

1. **Autonomie** : Je dois maintenant:
   - Détecter et corriger les erreurs de build
   - Vérifier les déploiements sans être demandé
   - Commit automatiquement les changements
   - Maintenir la documentation à jour

2. **Proactivité** :
   - Vérifier l'état des sites toutes les 30 min
   - Sync git toutes les 4h
   - Maintenance mémoire quotidienne

3. **Performance** :
   - Paralléliser les tâches quand possible
   - Utiliser les timeouts appropriés
   - Fallback intelligent en cas d'erreur
