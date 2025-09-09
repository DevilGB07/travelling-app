@echo off
echo Looking for favicon files in Downloads...
if exist "%USERPROFILE%\Downloads\favicon.ico" (
    echo Found favicon.ico in Downloads
    copy "%USERPROFILE%\Downloads\favicon.ico" "public\favicon.ico"
    echo Favicon replaced successfully!
) else (
    echo No favicon.ico found in Downloads folder
    echo Please download the favicon from http://localhost:8080/create_favicon.html
    echo and save it as favicon.ico in your Downloads folder
)
pause
