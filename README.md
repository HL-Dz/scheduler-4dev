# Планировщик на ReactJS

### Описание

Тестовое задание: необходимо было создать упрощенную версию планировщика задач с помощью React.js. Тестовое
задание состоит из нескольких обязательных задач и нескольких дополнительных. Адаптив обязателен. Основной функционал реализован в полном объеме. Решение дополнительных заданий описано ниже.

**Логин**: admin

**Пароль**: admin

---

### Инструменты:

![React](https://img.shields.io/badge/-React-090909?style=for-the-badge&logo=React&logoColor=03c2e5)
![Redux](https://img.shields.io/badge/-Redux-090909?style=for-the-badge&logo=redux&logoColor=7b3ebc)
![Typescript](https://img.shields.io/badge/-TypeScript-090909?style=for-the-badge&logo=TypeScript&logoColor=2f74c0)
![NodeJS](https://img.shields.io/badge/-NodeJs-090909?style=for-the-badge&logo=nodejs&logoColor=2f74c0)

### Установка

> !!! Важно. Для локальной установки и запуска проекта переключитесь на **14** версию NodeJs.

**1. Клонировать репозитрий:**

```command
git clone https://github.com/HL-Dz/scheduler-4dev.git
```

**2. Перейти в папку проекта:**

```command
cd scheduler-4dev
```

**3. Установить зависимости:**

```command
npm install
```

**4. Запустить проект:**

```command
npm run dev
```

### Описание страниц и функционала

**1** Форма авторизации:

- токен хранится на сервере и при правильном вводе логина и пароля происходит редирект на страницу с задачами, токен сохраняется в localStorage
- если данные невалидны, то происходит редирект на страницу /error
  ![Авторизация](./src/images/auth.png)

**2** Страница с задачами

![Задачи](./src/images/tasks.png)

**3** Добавление новой задачи

![Новая задача](./src/images/new-task.png)

**4** Редактирование задачи

![Редактирование задачи](./src/images/update-task.png)

**5** Страница ошибки

![Страница ошибки](./src/images/error.png)

**6** Адаптив (от 320px)

![Адаптив](./src/images/responsive.png)

---

Дополнительные задания:

1. Для фильтрации списков можно использовать метод массива **filter()** и получать только нужные таски. А для сортировки метод массива **sort().**
2. Добавлен build проекта
3. Для проверки совместимости с IE можно использовать сайт canIUse.
