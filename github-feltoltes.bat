@echo off
cd /d "%~dp0"
echo ========================================================
echo   🚀 GastroGo - Automatikus GitHub Feltoltes...
echo ========================================================
echo.
git add -A
git commit -m "Auto update: GastroGo codebase"
git push origin main
echo.
echo ========================================================
echo   ✅ SIKERESEN FELTOLTVE A GITHUB-RA!
echo   🔗 https://github.com/kulovanyi/gastrogo
echo ========================================================
echo.
pause
