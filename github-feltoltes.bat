@echo off
setlocal enabledelayedexpansion
chcp 65001 > nul
cd /d "%~dp0"

echo ========================================================
echo   🚀 GastroGo - Automatikus GitHub Feltöltés
echo ========================================================
echo.

echo [1/3] Változtatások begyűjtése...
git.exe add -A

echo.
echo [2/3] Commit mentése...
set "commit_msg="
set /p commit_msg="Add meg a mentés leírását (vagy nyomj Entert): "
if "!commit_msg!"=="" set commit_msg=Frissítés: %date% %time%

git.exe commit -m "!commit_msg!"

echo.
echo [3/3] Feltöltés a GitHubra (origin main)...
git.exe push origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   ✅ SIKERESEN FELTÖLTVE A GITHUB-RA!
    echo   🔗 https://github.com/kulovanyi/gastrogo
    echo ========================================================
) else (
    echo.
    echo ❌ Hiba történt a feltöltés során!
)

echo.
pause
