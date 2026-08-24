@echo off
chcp 65001 > nul
cd /d "%~dp0"

echo ========================================================
echo   🚀 GastroGo - TELJES GitHub Szinkronizáció
echo ========================================================
echo.

echo [1/3] Összes létező és új fájl hozzáadása (MINDEN fájl)...
git add --all .

echo.
echo [2/3] Módosítások mentése...
git commit -m "Teljes szinkronizáció: minden projekt fájl frissítve"

echo.
echo [3/3] Feltöltés a GitHub-ra (origin main)...
git push -u origin main

echo.
echo ========================================================
echo   📦 GitHubon lévő fájlok listája:
echo ========================================================
git ls-files
echo.
echo ========================================================
echo   ✅ SIKERESEN FELTÖLTVE!
echo   🔗 https://github.com/kulovanyi/gastrogo
echo ========================================================
echo.
pause
