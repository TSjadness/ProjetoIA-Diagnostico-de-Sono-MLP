pip install -U flask

start /min "" cmd /c .\backend\dist\app\app.exe 

start /min "" cmd /c "cd .\frontend && .\frontend.bat"

start http://localhost:5500 