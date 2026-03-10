REM OpenClaw Auto-Start Task Setup
REM Execute this file as Administrator to register the scheduled task

echo ==========================================
echo OpenClaw Scheduled Task Setup
echo ==========================================
echo.

REM Create the task using schtasks
schtasks /Create /TN "OpenClaw-AutoStart" /TR "powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File %%USERPROFILE%%\.openclaw\scripts\start-openclaw.ps1" /SC ONLOGON /RL HIGHEST /F

if %ERRORLEVEL% EQU 0 (
    echo.
    echo SUCCESS: Scheduled task created!
    echo Task Name: OpenClaw-AutoStart
    echo Trigger: At user logon
    echo Restart on failure: Yes (3 attempts, 1 min interval)
) else (
    echo.
    echo ERROR: Failed to create task. Error code: %ERRORLEVEL%
    echo Try running this batch file as Administrator (Right-click - Run as administrator)
)

echo.
pause
