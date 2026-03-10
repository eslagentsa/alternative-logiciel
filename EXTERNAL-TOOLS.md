# Outils Externes Configurés

## 🌐 Chrome Browser

**Statut**: ✅ Disponible

**Commandes principales**:
```bash
# Démarrer
openclaw browser start

# Naviguer
openclaw browser navigate https://gmail.com

# Snapshot de la page
openclaw browser snapshot

# Screenshot
openclaw browser screenshot

# Cliquer sur un élément
openclaw browser click "ref-element"

# Taper du texte
openclaw browser type "ref-input" "texte"

# Remplir un formulaire
openclaw browser fill --fields '[{"ref":"1","value":"text"}]'
```

## 📧 Gmail

**Statut**: ✅ Configuré (accès stockés)

**Email**: esl.agentsa@gmail.com  
**Fichier credentials**: `.email-credentials` (exclu du git)

**Utilisations possibles**:
1. **Lecture email** - Via Chrome sur gmail.com
2. **Envoi email** - Via Chrome ou API si configuré
3. **Vérification** - Connexion automatique pour checks

**Méthode recommandée**:
- Utiliser Chrome pour les tâches complexes (recherche, navigation)
- Pour l'automatisation email, envisager une App Password plus tard

## 🔧 Configuration Email

Pour les tâches automatisées, 2 options:

### Option 1: Chrome (Actuel)
- ✅ Déjà fonctionnel
- ✅ Interface complète
- ❓ Nécessite interaction pour connexion

### Option 2: Himalaya CLI (À installer)
```bash
# Installation via winget ou manuel
# Configuration IMAP/SMTP
# Utilisation: himalaya list, read, send...
```
- ✅ 100% automatisé
- ❌ Nécessite installation
- ❌ Configuration IMAP requise

## 📝 Exemples d'Utilisation

### Vérifier Gmail (manuel)
```bash
openclaw browser start
openclaw browser navigate https://gmail.com
openclaw browser screenshot
```

### Chercher sur le web
```bash
openclaw browser start
openclaw browser navigate https://google.com
openclaw browser fill --fields '[{"ref":"1","value":"recherche"}]'
openclaw browser press Enter
```

### Lire un article
```bash
openclaw browser navigate https://example.com/article
openclaw browser snapshot --format aria
```

## ⚠️ Sécurité

- Credentials stockés dans `.email-credentials` (non versionné)
- App Password recommandé à terme
- Ne jamais committer les credentials
