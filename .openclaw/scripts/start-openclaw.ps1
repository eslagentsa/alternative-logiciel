# OpenClaw Auto-Start Script
# Created: 2026-03-09
# Purpose: Start OpenClaw Gateway with logging and restart capability

$LogFile = "$env:USERPROFILE\.openclaw\logs\openclaw-gateway.log"
$Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

function Write-Log {
    param([string]$Message)
    "$Timestamp - $Message" | Out-File -Append -FilePath $LogFile
}

Write-Log "=== OpenClaw Gateway Start ==="
Write-Log "User: $env:USERNAME"
Write-Log "Computer: $env:COMPUTERNAME"

try {
    # Check if gateway is already running
    $ExistingProcess = Get-Process | Where-Object {$_.ProcessName -like "*openclaw*" -or $_.CommandLine -like "*openclaw gateway*"}
    if ($ExistingProcess) {
        Write-Log "Gateway already running (PID: $($ExistingProcess.Id))"
        exit 0
    }
    
    # Start OpenClaw Gateway
    Write-Log "Starting OpenClaw Gateway..."
    $OpenClawPath = "$env:APPDATA\npm\openclaw.cmd"
    
    if (Test-Path $OpenClawPath) {
        Start-Process -FilePath $OpenClawPath -ArgumentList "gateway start" -WindowStyle Hidden
        Write-Log "Gateway started successfully"
    } else {
        Write-Log "ERROR: OpenClaw not found at $OpenClawPath"
        exit 1
    }
} catch {
    Write-Log "ERROR: $($_.Exception.Message)"
    exit 1
}
