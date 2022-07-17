# Продакшн
Перенос проекта на продакшн.

- папку `node_modules` помещаем в `.gitignore`
    - node_modules
- чтобы развернуть проект в другой папке
    - помещаем в эту папку файл `package.json`
    - набираем команду `npm i`
    - `npm i --production` (пакеты из devDependencies не установятся)
