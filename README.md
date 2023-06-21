1. Скачиваем с GitHub командой - git clone https://github.com/userName-Andrei/test_Takeoff.git <название папки>
2. Выполняем команду - npm install
3. Для запуска приложения воспользуйтесь командой - npm start

Для обхода CORS необходимо добавить расширение в браузер chrome - Cross Domain - CORS, либо через консоль запустить команды:

##### Windows

start chrome.exe --user-data-dir="C://chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials

##### macOS

open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials

##### Linux

google-chrome --user-data-dir="~/chrome-dev-disabled-security" --disable-web-security --disable-site-isolation-trials
