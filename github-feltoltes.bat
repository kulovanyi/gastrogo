@echo off
chcp 65001 > nul
cd /d "%~dp0"

echo ========================================================
echo   🚀 GastroGo - Automatikus GitHub Feltöltés
echo ========================================================
echo.

echo [1/3] Fajlok hozzaadasa...
git add -A

echo.
echo [2/3] Mentes rogzitese...
git commit -m "GastroGo frissites"

echo.
echo [3/3] Feltoltes a GitHub-ra...
git push origin main

echo.
echo ========================================================
echo   ✅ Kesz! Ellenorizd a GitHubon:
echo   🔗 https://github.com/kulovanyi/gastrogo
echo ========================================================
echo.
pause
