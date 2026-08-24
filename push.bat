@echo off
chcp 65001 > nul
echo 🚀 GastroGo - Feltöltés a GitHubra...
git add -A
set /p commit_msg="Add meg a commit üzenetet (vagy nyomj Entert): "
if "%commit_msg%"=="" set commit_msg="Update GastroGo codebase"
git commit -m "%commit_msg%"
git push origin main
echo ✅ Sikeresen feltöltve a GitHub-ra: https://github.com/kulovanyi/gastrogo
pause
