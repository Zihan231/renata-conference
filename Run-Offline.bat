@echo off
title Renata Quiz Launcher
cd /d "%~dp0"

echo ==================================================
echo   Starting Renata Quiz (Offline Standalone)
echo ==================================================
echo.

if not exist "dist\RenataQuiz\RenataQuiz.exe" (
    echo Offline build not found. Packaging now...
    call npm run package:win
)

echo Launching Renata Quiz...
start "" "dist\RenataQuiz\RenataQuiz.exe"
exit
