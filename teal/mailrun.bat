@echo off
if not "%min%"=="" goto :min
set min=true
start "" /min "%~dpnx0"
goto :EOF
:min
cscript C:\tealTools\tealMail.vbs /body:"Computer online!"
cscript C:\tealTools\tealReset.vbs
exit