# NPM

**NPM** - node package manger (менеджер пакетов и их зависимостей). **Node.js** - серверный язык программирования, включающий в себя ядро JavaScript + дополнительные комопненты для работы с файлами, базами данных, HTTP-запросами и т.д. Модульность - одна из особенностей Node.js, функционал разбит на отдельные js-файлы (или группы файлов).

    const module_1 = require('module_1');

    module.exports = {
        module_1,
    }

Модули (пакеты) можно создавать самостоятельно и делиться ими в специальном публичном репозитори. **NPM** - управляет этими модулями (пакетами). Все пакеты с описаниями хранятся в `https://www.npmjs.com`

Откроем например страницу пакета **Gulp** https://www.npmjs.com/package/gulp:
- Здесь находится описание пакета и как с ним работать
- Перейдём на вкладку `Dependencies`:
    - Dependencies - пакеты необходимые для работы пакета gulp
    - Dev Dependencies - пакеты используемые при разработке пакета gulp (но на его работу не влияют)
- Вкладка `Dependents` содержит пакеты которые используют `gulp`
