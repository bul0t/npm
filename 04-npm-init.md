# Инициализация проекта (пакета)
Создаём проект (пакет) NPM.

Каждый файл JavaScript в node.js, является модулем. Пакет это модуль node.js, разработанный сторонним разработчиком. NPM это менеджер пакетов node.js, который управляет пакетами.

Создадим файл `example/main.js` для node.js этот файл будет являться пакетом.

Набираем в консоли:
- `npm init` - инициализация проекта, пакета (enter)
    - отвечаем на вопросы, нажимем enter
    - можно просто наживат на enter не отвечая на вопросы
- `npm init --yes` - быстрая инициализация проекта
- создастся файл `package.json`, где можно изменить данные введённые при инициализации

Вся папка в которой лежит файл `package.json` является пакетом.  
Весь код в файле `package.json` можно сократить до:

    {
        "name": "example",
        "version": "1.0.0",
    }

Напишем в файле `example/main.js` код `console.log('Привет!')`, вызовем его в терминале `node main`.
