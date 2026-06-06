@echo off
setlocal

cd /d "%~dp0"

echo Starting Gao Hongfei personal website...
echo.
echo Local URL:
echo   http://localhost:3000
echo.
echo Keep this window open while viewing the site.
echo Press Ctrl+C to stop the server.
echo.

npm.cmd run dev

echo.
echo The dev server stopped. If this was unexpected, review the messages above.
pause
