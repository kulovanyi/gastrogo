@echo off
title GastroGo - GitHub Feltoltes
cls

echo =======================================================
echo              GASTROGO - GITHUB FELTOLTES
echo =======================================================
echo.

echo [1/4] Modositott es uj fajlok ellenorzese:
echo -------------------------------------------------------
git status -s
echo -------------------------------------------------------
echo.

echo [2/4] Fajlok elokeszitese...
git add .
echo [OK] Fajlok hozzaadva!
echo.

echo [3/4] Mentes keszitese (Commit)...
git commit -m "GastroGo frissites: %date% %time%"
echo.

echo [4/4] Feltoltes a GitHubra (Push)...
git push origin main
echo.

echo =======================================================
if %ERRORLEVEL% equ 0 (
    echo    SIKERES FELTOLTES A GITHUBRA!
    echo =======================================================
    echo.
    echo Feltoltott fajlok es modositasok:
    echo -------------------------------------------------------
    git log -1 --stat --oneline
    echo -------------------------------------------------------
) else (
    echo    HIBA TORTENT A FELTOLTES SORAN!
    echo =======================================================
    echo Ellenorizd az internetkapcsolatot vagy a Git beallitasokat.
)

echo.
echo Nyomj meg egy gombot a bezarashoz...
pause >nul
