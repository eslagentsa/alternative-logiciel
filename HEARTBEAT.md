# Heartbeat Tasks - Checks périodiques

## Fréquence: Toutes les 30 minutes (configuré dans openclaw.json)

### ✅ Checklist à exécuter

1. **Vérifier les builds en cours**
   - Si un build tourne depuis >5 min sans update → notifier

2. **Vérifier les déploiements**
   - Sites web empire-web : status HTTP 200?
   - Si 404/erreur → investiguer immédiatement

3. **Git status**
   - Changements non commités depuis >2h?
   - Proposer commit + push

4. **Mémoire**
   - Fichiers memory/YYYY-MM-DD créés?
   - MEMORY.md à jour?

5. **Tâches en attente**
   - Y a-t-il des TODOs dans MEMORY.md?
   - Prioriser et exécuter

### 🔧 Actions automatiques (sans demander)

- Commit des fichiers de documentation
- Vérification des URLs déployées
- Mise à jour des logs/memory

### 🚨 Conditions de notification immédiate

- Site web down (non 200)
- Erreur de build bloquante
- Erreur de déploiement
- Tâche critique en retard
