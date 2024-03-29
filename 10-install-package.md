# Установка пакетов

- `npm install имя-пакета` или `npm i имя-пакета`
- `npm install bootstrap` - установим bootstrap

После установки первого пакета в корне проекта появится папка `node_modules` и файл `package-lock.json` в котором будут прописаны все зависимости.

Можно установить сразу два пакета: `npm i gulp mocha --save-dev` или `npm i gulp mocha -D`

## Зависимости
При установке пакета разработчик должен сам решить к какому виду зависимости отнести тот или иной пакет, для данного проекта:
- `dependencies` - пакеты необходимые для работы проекта (продакшн):
    - например библиотеки, фреймворки и т.п.
    - установим пакет: `npm i axios --save-prod` или `npm i axios -P` или без параметра `npm i axios` (с 8й версии node.js)
- `devDependencies` - пакеты используемые при разработке проекта
    - например сборщики, линтеры, шаблониаторы, тестирование и т.п.
    - `npm i gulp mocha --save-dev` или `npm i gulp mocha -D`

## Папка node_modules
После установке всего нескольких пакетов папка **node_modules** уже может содержать очень много папок пакетов-зависимостей `dependencies` от других пакетов. Зависимости можно посмотреть в файле `package-lock.json` каждого пакета или через команду в терминале:

- `npm list --all` - посмотреть иерархию зависимостей вашего проекта

## Популярные пакеты
- chalk - раскрашивает текст в терминале `npm install chalk`
    - https://www.npmjs.com/package/chalk

В файле main.js пишем:

    // const chalk = require('chalk'); // через require уже не работает

    import chalk from 'chalk'; // ES6, не забудьте поставить "type": "module" в package.json
    console.log(chalk.blue('Hello world!'));
    console.log(chalk.bgGreen('Hello world!'));

- glob - удаляет файлы в папках и подпапках
