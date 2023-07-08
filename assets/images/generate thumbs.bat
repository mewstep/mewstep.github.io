@echo off

echo warning: requires imagemagick installed (winget install imagemagick)
pause
magick mogrify -path gallery/thumbs -resize 400x400 gallery/*.*
pause