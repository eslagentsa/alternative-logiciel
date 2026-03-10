# OpenClaw Auto-Start Configuration

## Fichiers créés

### 1. Script de démarrage
- **Chemin :** `C:\Users\AgentSA\.openclaw\scripts\start-openclaw.ps1`
- **But :** Démarrer la gateway OpenClaw avec logging

### 2. Tâche planifiée Windows
- **Nom :** OpenClaw-AutoStart
- **Déclencheur :** Au démarrage de Windows
- **Action :** Exécuter le script PowerShell
- **Redémarrage :** Si échec, redémarrage automatique après 1 minute
- **Exécution :** Avec privilèges élevés

## Commandes utiles

### Redémarrer manuellement
```powershell
Restart-ScheduledTask -TaskName "OpenClaw-AutoStart"
```

### Vérifier le statut
```powershell
Get-ScheduledTask -TaskName "OpenClaw-AutoStart" | Get-ScheduledTaskInfo
```

### Arrêter temporairement
```powershell
Disable-ScheduledTask -TaskName "OpenClaw-AutoStart"
```

### Réactiver
```powershell
Enable-ScheduledTask -TaskName "OpenClaw-AutoStart"
```

## Logs
Les logs sont stockés dans : `C:\Users\AgentSA\.openclaw\logs\`
