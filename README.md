В проекте используются:
1. React;
2. TypeScript;
3. SCSS;
4. Тесты:
  1. Тесты на React компоненты.
     Запустить тесты можно с помощью команды "npm run test".
     Пример кода: https://github.com/Ivan0705/gems-app/blob/master/src/widget/navbar/ui/Navbar.test.tsx

  2. e2e тестирование с Cypress.
     Пример кода: https://github.com/Ivan0705/gems-app/blob/master/cypress/e2e/features/login.cy.tsx

  3. Компонентное тестирование с Cypress.
     Пример кода: https://github.com/Ivan0705/gems-app/blob/master/cypress/component/shared/Button/DarkButton.cy.tsx

5. Стори-кейсы:
    В проекте для каждого компонента описываются стори-кейсы.
    Файл со стори-кейсами создается с компонентом, имеющим расширение .stories.tsx
    Запустить storybook можно по команде "npm start storybook dev-p 6066".
    Примеры кода: https://github.com/Ivan0705/gems-app/blob/master/src/shared/ui/Button/Button.stories.tsx,
    https://github.com/Ivan0705/gems-app/blob/master/src/entities/users/ui/UserInfo/UserInfo.stories.tsx

6. Инструмент сборки проекта Vite;
    Ссылка: https://github.com/Ivan0705/gems-app/blob/master/vite.config.ts

7. Инструмент анализа качества кода ESlint;
    Ссылка: https://github.com/Ivan0705/gems-app/blob/master/eslint.config.js

8. Инструмент анализа качества CSS кода Stylelint;
    Ссылка: https://github.com/Ivan0705/gems-app/blob/master/.stylelintrc.json

9. i18next, фремворк перевода, интернационализации;
    Ссылки: https://github.com/Ivan0705/gems-app/blob/master/src/shared/i18next/config/i18next.ts,
    https://github.com/Ivan0705/gems-app/blob/master/src/widget/switcher_language/ui/SwitcherLanguage.tsx

10. Фальшивый сервер для авторизации и аутентификации;
    Ссылка: https://github.com/Ivan0705/gems-app/blob/master/public/db/users.json

11. Добавил файл .env в .gitignore.
    В файле .env(enviroment) лежат 2 переменные:
    VITE_REACT_API_URL=/gems-app
    VITE_REACT_API_BASE_URL=/

