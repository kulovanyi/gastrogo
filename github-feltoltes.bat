@echo off
title GastroGo - GitHub Feltoltes
cls

echo =======================================================
echo              GASTROGO - GITHUB FELTOLTES
echo =======================================================
echo.

echo [1/4] Modositott es uj fajlok elokeszitese...
git add .
echo [OK] Fajlok hozzaadva!
echo.

echo [2/4] Mentes keszitese (Commit)...
git commit -m "GastroGo frissites: %date% %time%"
echo.

echo [3/4] GitHub szinkronizacio (Elso lepes: Pull/Rebase)...
git pull --rebase origin main
echo.

echo [4/4] Feltoltes a GitHubra (Push)...
git push origin main
echo.

echo =======================================================
if %ERRORLEVEL% equ 0 (
    echo    SIKERES FELTOLTES A GITHUBRA!
    echo =======================================================
    echo.
    echo Legutolso feltoltes adatai:
    echo -------------------------------------------------------
    git log -1 --stat --oneline
    echo -------------------------------------------------------
) else (
    echo    HIBA TORTENT A FELTOLTES SORAN!
    echo =======================================================
    echo Ha tovabbra is hiba lep fel, probald ujra, vagy ellenorizd a kapcsolatot.
)

echo.
echo Nyomj meg egy gombot a bezarashoz...
pause >nul
