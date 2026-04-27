# CLAUDE.md

Системные инструкции для Claude Code при работе над проектом «Стоматология им. Белова». Этот файл лежит в корне репозитория и читается автоматически.

---

## 1. Project context

**Что это:** одностраничный лендинг авторской премиум-стоматологии в Москве. Демо-проект для портфолио — будет показываться на Upwork, Kwork, в Telegram-чатах фрилансеров. Реального заказчика и реальной клиники не существует.

**Цель:** продемонстрировать уровень frontend-разработки на уровне $300–500 заказа. Финальный результат — задеплоенный на Vercel сайт с минимальной адаптивностью на 3 брейкпоинтах, чистым кодом и Lighthouse 90+.

**Основное ТЗ:** см. `TZ.md` в корне репозитория. Он содержит полное описание блоков, контента, дизайн-системы. При расхождении между этим файлом и `TZ.md` — `TZ.md` приоритетнее по содержанию, этот файл приоритетнее по правилам кода.

**Ключевая визуальная идея:** тихий премиум, документальная фотография, редакторская типографика. Никакого медицинского глянца, бирюзы, фуксии, 3D-зубиков, gradient backgrounds.

1.5. В CLAUDE.md секции про dev-сервер замени все упоминания localhost:3001 на localhost:3005.

---

## 2. Tech stack

| Технология | Версия | Назначение |
|---|---|---|
| Next.js | 14.x (App Router) | Фреймворк |
| React | 18.x | — |
| TypeScript | 5.x, strict | Типы |
| Tailwind CSS | 3.4.x | Стили |
| shadcn/ui | latest | UI-компоненты (Button, Input, Select, Toast, Carousel, Dialog, Sheet) |
| Lucide React | latest | Иконки |
| Framer Motion | 11.x | Анимации |
| React Hook Form | 7.x | Формы |
| Zod | 3.x | Валидация |
| pnpm | 9.x | Пакетный менеджер |

**Деплой:** Vercel.

**Установка shadcn-компонентов** — только по мере необходимости через `pnpm dlx shadcn@latest add <component>`. Не устанавливать всё сразу.

---

## 3. Code conventions

### TypeScript
- `strict: true` в `tsconfig.json`. Никаких `any`.
- Типы для props компонентов — через `type` (не `interface`), кроме случаев расширения сторонних типов.
- Возвращаемые типы для публичных функций — явные. Для компонентов можно опустить (выводится).

### Серверные / клиентские компоненты
- **По умолчанию — Server Component.**
- `'use client'` ставится **только если нужно**: state, effects, обработчики событий, Framer Motion, формы, hooks (`useState`, `useEffect`, `useRouter` и т.п.).
- Директива `'use client'` всегда первой строкой файла.
- Если компонент клиентский только из-за анимации — выносить интерактивную часть в отдельный child-компонент, чтобы родитель остался серверным.

### Naming
- **Компоненты — PascalCase.** Файлы компонентов тоже — PascalCase: `HeroSection.tsx`, `PriceList.tsx`.
- **Утилиты, хуки, константы — kebab-case** для файлов, camelCase для экспортов: `lib/format-price.ts`, `hooks/use-scroll-direction.ts`.
- Хуки начинаются с `use`: `useScrollDirection`.
- Bool-переменные с `is/has/should`: `isOpen`, `hasError`, `shouldAnimate`.

### Tailwind
- Условные классы — **только через `cn()`** из `@/lib/utils`:
  ```tsx
  className={cn('base-class', isActive && 'active-class', className)}
  ```
- Классы группируются в порядке: layout → spacing → typography → colors → effects → states. Это улучшает читаемость, но автоформатирование Prettier-tailwind важнее — оно действует приоритетно.
- Никаких inline-стилей (`style={{ ... }}`), кроме случаев, где нужен динамический CSS-variable (например, `--scroll-progress`).
- Магические числа в Tailwind (`mt-[37px]`) — допустимы только если это часть design tokens из `TZ.md`. Иначе — стандартная шкала Tailwind.

### Импорты
Алиасы из `tsconfig.json`:
- `@/components/*` — все React-компоненты
- `@/components/ui/*` — shadcn-компоненты
- `@/components/sections/*` — секции лендинга (по одному файлу на блок)
- `@/lib/*` — утилиты, константы, типы
- `@/app/*` — внутренние модули роутера

Порядок импортов:
1. React / Next
2. Внешние библиотеки
3. `@/components`
4. `@/lib`
5. Относительные импорты `./`
6. Стили / типы

Между группами — пустая строка.

---

## 4. Folder structure

```
.
├── app/
│   ├── layout.tsx            # Root layout, шрифты, metadata
│   ├── page.tsx              # Единственная страница, импортирует секции
│   ├── globals.css           # Tailwind directives, CSS-переменные shadcn
│   └── favicon.ico
├── components/
│   ├── ui/                   # shadcn-компоненты (button, input, toast, ...)
│   ├── sections/             # ОДИН ФАЙЛ = ОДИН БЛОК ЛЕНДИНГА
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── PhilosophySection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── HighlightsSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── PricesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── BookingSection.tsx
│   │   └── Footer.tsx
│   ├── shared/               # Переиспользуемые компоненты (FadeIn, SectionHeading, ...)
│   │   ├── FadeIn.tsx
│   │   └── SectionHeading.tsx
│   └── booking-form.tsx      # Клиентская форма (отдельно от секции)
├── lib/
│   ├── utils.ts              # cn() и прочее
│   ├── constants.ts          # Контент: услуги, врачи, отзывы, цены
│   └── validations.ts        # Zod-схемы
├── public/
│   ├── images/               # Локальные ассеты (если не Unsplash через URL)
│   └── og-image.jpg
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── TZ.md                     # Полное ТЗ
├── CLAUDE.md                 # Этот файл
└── README.md
```

**Правило:** секции живут только в `components/sections/`, по одному файлу на блок из ТЗ. Секция импортирует контент из `lib/constants.ts`, не хардкодит данные у себя.

---

## 5. Component conventions

### Структура секции

Каждый файл в `components/sections/` экспортирует **один named export** с именем секции:

```tsx
// components/sections/ServicesSection.tsx
import { SectionHeading } from '@/components/shared/SectionHeading';
import { ServiceCard } from './ServiceCard'; // если карточка только тут используется
import { services } from '@/lib/constants';

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      {/* ... */}
    </section>
  );
}
```

### Разбиение на компоненты
- Если внутри секции есть переиспользуемая карточка — вынести в `./ServiceCard.tsx` рядом.
- Если карточка используется в ≥2 секциях — переносить в `components/shared/`.
- Не плодить компоненты ради компонентов: блок 30 строк JSX можно оставить в секции.

### Props
- Все props типизированы.
- Default values — через деструктуризацию: `{ title, level = 2 }`.
- Для опциональных классов — всегда `className?: string` и `cn()` в корне.

### Server Actions
- В этом проекте Server Actions **не используются** — формы имитируют отправку через клиентский Toast. Если возникает соблазн — не использовать.

---

## 6. Styling rules

### Design tokens

Палитра из `TZ.md` прописана в `tailwind.config.ts`:

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F4',
        ink: {
          DEFAULT: '#1A1A1A',
          muted: '#5C5C5C',
        },
        sand: '#E8E2D6',
        forest: {
          DEFAULT: '#3A5A3F',
          dark: '#2C4530',
        },
        gold: '#C9A961',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
```

**Правило:** все цвета из палитры используются через Tailwind-классы (`bg-cream`, `text-ink`, `border-sand`, `text-forest`). Никаких хардкоженных HEX в JSX.

### CSS-файлы
- **Только `app/globals.css`.** Других CSS-файлов нет.
- В `globals.css` — только Tailwind directives (`@tailwind base/components/utilities`) и CSS-переменные для shadcn (если нужны для тем). Никаких `.my-custom-class { ... }`.
- Анимации — через Tailwind keyframes (`tailwind.config.ts`) или Framer Motion. Не через `globals.css`.

### Шрифты
- Подключение через `next/font/google` в `app/layout.tsx`.
- Передаются через CSS-переменные: `--font-inter`, `--font-playfair`.
- Subsets: `latin`, `cyrillic`.

```tsx
// app/layout.tsx
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});
```

---

## 7. Performance rules

### Изображения
- **Только `next/image`.** Никогда `<img>`.
- Hero-изображение — `priority`, остальные — `loading="lazy"` (default).
- Внешние домены (Unsplash, generated.photos) добавляются в `next.config.mjs`:
  ```js
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'generated.photos' },
    ],
  },
  ```
- Размеры всегда заданы (`width`, `height` или `fill` + `sizes`).
- `sizes` для responsive: `sizes="(max-width: 768px) 100vw, 50vw"`.

### Шрифты
- Только `next/font` (см. выше). Никаких `<link>` на Google Fonts в `<head>`.
- `display: 'swap'` — обязательно.

### Bundle
- Lazy-load для блоков ниже первого экрана через `next/dynamic` — только если bundle перегружен (Lighthouse Performance < 85). По умолчанию не нужно.
- Framer Motion импортируется по необходимости: `import { motion } from 'framer-motion'` — только в клиентских компонентах.

### Сторонние библиотеки
- Перед добавлением любой новой библиотеки — проверять `bundlephobia.com`. Лимит: <50KB gzipped на одну.

---

## 8. Accessibility

- Семантический HTML: `<header>`, `<nav>`, `<main>`, `<section>` (с `aria-labelledby`), `<article>`, `<footer>`.
- Один `<h1>` на странице — в hero.
- Все `<img>` (внутри `next/image`) имеют осмысленный `alt`. Декоративные — `alt=""`.
- Иконки-кнопки — `aria-label`. Например, кнопка-гамбургер: `<button aria-label="Открыть меню">`.
- Форма: каждый `<input>` связан с `<label>` через `htmlFor`. Ошибки — `aria-describedby` ссылается на текст ошибки.
- Контрастность: проверяется через Lighthouse. Минимум AA (4.5:1 для body).
- Focus-стили: видимый outline для всех интерактивных элементов. Не убирать `outline: none` без замены.
- Keyboard navigation: всё кликабельное доступно с клавиатуры. Карусель — стрелки клавиатуры работают.

---

## 9. Что НЕ делать

Список запрещённого. При попытке использовать — отказывать и предлагать альтернативу.

- ❌ `<img>` напрямую — **только** `next/image`.
- ❌ `localStorage`, `sessionStorage`, `IndexedDB` — не нужны для лендинга.
- ❌ Material UI, Ant Design, Chakra UI, Mantine — **только** shadcn.
- ❌ CSS-файлы вне `app/globals.css`.
- ❌ Inline-стили `style={{ ... }}` (кроме CSS-переменных).
- ❌ `any`, `as any`, `@ts-ignore`.
- ❌ Прямой fetch к Google Fonts через `<link>` — только `next/font`.
- ❌ Реальный backend, API-роуты для форм, базы данных.
- ❌ `dangerouslySetInnerHTML` (нет такого контента).
- ❌ Слайдер/карусель в hero. Hero статичный.
- ❌ Tailwind plugin с произвольными значениями выходящими за палитру (`bg-[#ff00ff]`). Только цвета из `tailwind.config.ts`.
- ❌ Дублирование контента в JSX. Контент → `lib/constants.ts` → `.map()` в секции.
- ❌ Console.log в финальном коде.

---

## 10. Commit conventions

**Conventional Commits** (https://conventionalcommits.org/):

- `feat:` — новая функциональность / новый блок.
- `fix:` — исправление бага.
- `style:` — визуальные правки (Tailwind, отступы, цвета). Не путать со `refactor`.
- `refactor:` — рефакторинг без изменения поведения.
- `perf:` — оптимизация производительности.
- `chore:` — конфиги, зависимости, build.
- `docs:` — README, CLAUDE.md, TZ.md.

Формат: `<type>(<scope>): <subject>` в нижнем регистре, без точки в конце.

Примеры:
- `feat(hero): add parallax effect to portrait`
- `fix(form): phone mask not working on safari`
- `style(prices): adjust dotted divider opacity`
- `chore: add framer-motion dependency`

---

## 11. Definition of Done

Блок / задача считается готовой, когда выполнено всё:

- [ ] Реализован полностью по `TZ.md`, без отклонений в контенте, цветах, шрифтах.
- [ ] Адаптивен на 3 брейкпоинтах: mobile (`<768px`), tablet (`768–1023px`), desktop (`≥1024px`). Проверено в DevTools.
- [ ] TypeScript: `pnpm tsc --noEmit` проходит без ошибок.
- [ ] ESLint: `pnpm lint` без warnings.
- [ ] Все картинки через `next/image` с заданными `alt`, `width`/`height` или `fill` + `sizes`.
- [ ] Анимации Framer Motion не вызывают layout shift (CLS близко к 0).
- [ ] Lighthouse (mobile, production build):
  - Performance ≥ 90
  - Accessibility ≥ 95
  - Best Practices ≥ 95
  - SEO ≥ 95
- [ ] Никаких console.log, TODO, закомментированного кода в финальном коммите.
- [ ] Commit-сообщение по конвенции выше.

**Финальная Definition of Done всего проекта:** все 10 секций готовы по чек-листу выше + проект задеплоен на Vercel + README содержит инструкцию `pnpm install && pnpm dev` и ссылку на live-демо.
