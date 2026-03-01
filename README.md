# Карточки компетенций — деплой на Vercel

## Шаг 1: Создай репозиторий на GitHub

1. Зайди на [github.com/new](https://github.com/new)
2. Назови репозиторий, например `competency-cards`
3. Оставь **Public** (или Private — без разницы)
4. Нажми **Create repository**

## Шаг 2: Залей этот проект

Распакуй zip и в терминале:

```bash
cd competency-cards
git init
git add .
git commit -m "init"
git remote add origin https://github.com/ТВОЙ_ЮЗЕРНЕЙМ/competency-cards.git
git branch -M main
git push -u origin main
```

Если не хочешь терминал — просто перетащи файлы через интерфейс GitHub (кнопка **Add file → Upload files**).

## Шаг 3: Подключи Vercel

1. Зайди на [vercel.com](https://vercel.com) и залогинься через GitHub
2. Нажми **Add New → Project**
3. Найди репозиторий `competency-cards`, нажми **Import**
4. Vercel сам определит, что это Vite-проект. Ничего менять не нужно
5. Нажми **Deploy**
6. Через ~30 секунд получишь ссылку вида `competency-cards-xxx.vercel.app`

## Шаг 4: Вставь в Notion

1. Открой нужную страницу в Notion
2. Напиши `/embed` и выбери **Embed**
3. Вставь ссылку из Vercel
4. Растяни блок на нужную ширину

Готово! Карточки с фильтрацией по тегам работают прямо внутри Notion.

## Как редактировать

Содержимое карточек — в файле `src/App.jsx`, массив `competencies` в начале файла. Меняешь текст, пушишь в GitHub — Vercel автоматически обновит деплой за ~30 секунд.
