export const HERO = {
  caption: 'АВТОРСКАЯ СТОМАТОЛОГИЯ — МОСКВА, С 2008 ГОДА',
  h1Line1: 'Зубы, которые вам идут.',
  h1Line2: 'Подход, который вас не торопит.',
  subtitle:
    'Камерная клиника доктора Белова. Один врач ведёт вас от диагностики до результата. Без передачи между специалистами и без конвейера.',
  ctaPrimary: 'Записаться на консультацию',
  ctaSecondary: 'Познакомиться с доктором',
  priceNote: 'Первая консультация — 4 500 ₽, идёт в счёт лечения',
  imageSrc: 'https://images.unsplash.com/photo-1758691463333-c79215e8bc3b?w=1200&q=80',
  imageAlt: 'Артём Белов, врач-стоматолог, основатель клиники',
};

export const PHONE = '+7 (495) 120-45-67';
export const PHONE_HREF = 'tel:+74951204567';
export const EMAIL = 'info@belov-dental.ru';
export const ADDRESS = 'Москва, Большой Козихинский переулок, 22, стр. 1';
export const METRO = 'Маяковская / Тверская — 6 минут пешком';
export const HOURS = 'Пн–Пт: 9:00–21:00 · Сб: 10:00–18:00 · Вс: выходной';

export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    id: 'therapy',
    icon: 'Sparkles',
    title: 'Терапия и лечение кариеса',
    description:
      'Лечение под микроскопом, композитные реставрации, восстановление эстетики переднего ряда.',
  },
  {
    id: 'implants',
    icon: 'Anchor',
    title: 'Имплантация',
    description:
      'Системы Straumann и Nobel Biocare. Хирургический шаблон, остеоинтеграция под наблюдением.',
  },
  {
    id: 'prosthetics',
    icon: 'Layers',
    title: 'Протезирование',
    description:
      'Цельнокерамические коронки, виниры E.max, индивидуальное цветовое моделирование.',
  },
  {
    id: 'orthodontics',
    icon: 'AlignCenter',
    title: 'Ортодонтия',
    description:
      'Брекет-системы Damon, элайнеры Invisalign и Star Smile. План лечения с 3D-визуализацией результата.',
  },
  {
    id: 'hygiene',
    icon: 'Droplets',
    title: 'Гигиена и профилактика',
    description:
      'Air Flow, ультразвуковая чистка, реминерализация. Раз в 6 месяцев — основа долгого здоровья.',
  },
  {
    id: 'children',
    icon: 'Heart',
    title: 'Детская стоматология',
    description:
      'Адаптационные приёмы, лечение в седации закисью азота, наблюдение прикуса.',
  },
];

export const PHILOSOPHY = {
  caption: 'ФИЛОСОФИЯ',
  h2: 'Мы не лечим зубы. Мы выстраиваем долгие отношения с пациентом.',
  paragraphs: [
    'Артём Белов основал клинику в 2008 году с одним правилом — врач никогда не работает на двух пациентов одновременно. Это значит, что приём длится столько, сколько нужно, а не сколько вписано в расписание. Это значит, что вас узнают по имени уже на втором визите.',
    'За 17 лет нас выбрали 2 800 семей. Большинство приходят по рекомендации от тех, кто лечился у нас 5–10 лет назад. Мы считаем это главной метрикой качества — не количество пациентов, а то, что они возвращаются.',
  ],
};

export type Highlight = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
};

export const HIGHLIGHTS: Highlight[] = [
  {
    id: 'veneers',
    imageSrc: 'https://images.unsplash.com/photo-1581585504957-7c7e4c0a4e2f?w=1200&q=80',
    imageAlt: 'Крупный план красивой улыбки после установки виниров E.max',
    title: 'Эстетика, которая выглядит естественно',
    description:
      'Виниры E.max толщиной от 0,3 мм. Цифровое моделирование улыбки до начала работы — вы видите результат, прежде чем мы прикоснёмся к зубам. Срок изготовления — 14 дней.',
    linkLabel: 'Подробнее об эстетике',
    linkHref: '#services',
  },
  {
    id: 'implants',
    imageSrc: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80',
    imageAlt: 'Стоматолог-хирург за работой с инструментом',
    title: 'Имплант, который служит дольше своего владельца',
    description:
      'Straumann SLActive с пожизненной гарантией производителя. Хирургический шаблон по 3D-снимку — установка с точностью 0,2 мм. Постоянная коронка через 3–4 месяца после остеоинтеграции.',
    linkLabel: 'Подробнее об имплантации',
    linkHref: '#services',
  },
];

export type TeamMember = {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  experience: number;
  photoSrc: string;
  photoAlt: string;
};

export const TEAM: TeamMember[] = [
  {
    id: 'belov',
    name: 'Артём Белов',
    specialty: 'ОСНОВАТЕЛЬ, ВРАЧ-СТОМАТОЛОГ',
    bio: 'К.м.н., имплантолог-хирург. Стажировки в Loma Linda University (США), сертифицирован Straumann Pro Arch. Член Российского общества имплантологов.',
    experience: 19,
    photoSrc: 'https://images.unsplash.com/photo-1758691463333-c79215e8bc3b?w=600&q=80',
    photoAlt: 'Артём Белов, основатель клиники, врач-стоматолог',
  },
  {
    id: 'korneeva',
    name: 'Елизавета Корнеева',
    specialty: 'ВРАЧ-ОРТОДОНТ',
    bio: 'Сертифицированный провайдер Invisalign Platinum. Стажировки в Roth Williams International. Специализация — взрослая ортодонтия и подготовка к протезированию.',
    experience: 12,
    photoSrc: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    photoAlt: 'Елизавета Корнеева — врач-ортодонт',
  },
  {
    id: 'tarasov',
    name: 'Михаил Тарасов',
    specialty: 'ВРАЧ-ТЕРАПЕВТ, ЭНДОДОНТ',
    bio: 'Лечение каналов под микроскопом Carl Zeiss. Эстетическая реставрация переднего ряда. Член Европейского эндодонтического общества (ESE).',
    experience: 14,
    photoSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&q=80',
    photoAlt: 'Михаил Тарасов — врач-терапевт, эндодонт',
  },
  {
    id: 'levitskaya',
    name: 'Анна Левицкая',
    specialty: 'ДЕТСКИЙ СТОМАТОЛОГ',
    bio: 'Адаптационная стоматология, лечение в закиси азота. Специализация по работе с детьми с расстройствами аутистического спектра. Сертификат AAPD.',
    experience: 9,
    photoSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
    photoAlt: 'Анна Левицкая — детский стоматолог',
  },
];

export type PriceItem = {
  service: string;
  price: string;
};

export type PriceCategory = {
  id: string;
  title: string;
  items: PriceItem[];
};

export const PRICES: PriceCategory[] = [
  {
    id: 'consultation',
    title: 'Консультация',
    items: [
      { service: 'Первичная консультация врача', price: '4 500 ₽' },
      { service: 'Консультация с планом лечения и КЛКТ', price: '8 500 ₽' },
    ],
  },
  {
    id: 'hygiene',
    title: 'Гигиена',
    items: [
      { service: 'Профессиональная чистка Air Flow + ультразвук', price: '12 000 ₽' },
      { service: 'Реминерализация эмали', price: '6 500 ₽' },
    ],
  },
  {
    id: 'therapy',
    title: 'Терапия',
    items: [
      { service: 'Лечение кариеса под микроскопом', price: 'от 14 500 ₽' },
      { service: 'Лечение каналов (одноканальный зуб)', price: 'от 22 000 ₽' },
    ],
  },
  {
    id: 'aesthetics',
    title: 'Эстетика',
    items: [
      { service: 'Винир E.max', price: 'от 58 000 ₽' },
      { service: 'Отбеливание Zoom 4', price: '42 000 ₽' },
    ],
  },
  {
    id: 'implants',
    title: 'Имплантация',
    items: [
      { service: 'Имплант Straumann + установка', price: 'от 95 000 ₽' },
      { service: 'Коронка на имплант (керамика)', price: 'от 48 000 ₽' },
    ],
  },
  {
    id: 'orthodontics',
    title: 'Ортодонтия',
    items: [
      { service: 'Брекет-системы Damon (полный курс)', price: 'от 280 000 ₽' },
      { service: 'Элайнеры Invisalign (полный курс)', price: 'от 320 000 ₽' },
    ],
  },
];

export type Testimonial = {
  id: string;
  name: string;
  meta: string;
  quote: string;
  photoSrc: string;
  photoAlt: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'maria-k',
    name: 'Мария К.',
    meta: 'Пациент с 2019 года · Виниры',
    quote:
      'Я три года выбирала клинику для виниров. Артём Сергеевич — единственный, кто сначала сделал диагностический wax-up и показал, как это будет выглядеть. Мы переделывали моделирование четыре раза, пока я не сказала «да». Это и есть профессионализм.',
    photoSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
    photoAlt: 'Мария К., пациент клиники',
  },
  {
    id: 'dmitry-l',
    name: 'Дмитрий Л.',
    meta: 'Пациент с 2017 года · Имплантация двух зубов',
    quote:
      'Поставили два импланта Straumann. Через два года — ноль проблем. Главное, что после процедуры мне позвонили вечером узнать, как самочувствие. Не администратор по скрипту, а сам врач. Такого больше нигде не было.',
    photoSrc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
    photoAlt: 'Дмитрий Л., пациент клиники',
  },
  {
    id: 'elena-p',
    name: 'Елена П.',
    meta: 'Пациент с 2021 года · Ортодонтия',
    quote:
      'Носила брекеты в 38 лет. Елизавета Андреевна спокойно объяснила каждый этап, показывала прогресс на 3D-моделях. Курс занял 18 месяцев — ровно как обещали. Цена не поменялась ни разу.',
    photoSrc: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80',
    photoAlt: 'Елена П., пациент клиники',
  },
  {
    id: 'andrey-m',
    name: 'Андрей М.',
    meta: 'Пациент с 2018 года · Лечение детей',
    quote:
      'Привёл сына 6 лет, который в трёх клиниках устраивал истерику. Анна Игоревна сначала просто играла с ним 20 минут, потом мы вернулись через неделю — и он сам сел в кресло. Мы у них уже четыре года.',
    photoSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
    photoAlt: 'Андрей М., пациент клиники',
  },
  {
    id: 'olga-v',
    name: 'Ольга В.',
    meta: 'Пациент с 2020 года · Эстетическая реставрация',
    quote:
      'У меня был скол на переднем зубе после падения. Михаил Александрович восстановил композитом так, что я сама не вижу разницы. Прошло три года, реставрация на месте.',
    photoSrc: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
    photoAlt: 'Ольга В., пациент клиники',
  },
];

export type ServiceOption = { value: string; label: string };

export const SERVICE_OPTIONS: ServiceOption[] = [
  { value: 'consultation', label: 'Консультация' },
  { value: 'implants', label: 'Имплантация' },
  { value: 'veneers', label: 'Виниры / эстетика' },
  { value: 'orthodontics', label: 'Ортодонтия' },
  { value: 'children', label: 'Детская стоматология' },
  { value: 'other', label: 'Другое' },
];

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: 'О клинике', href: '#philosophy' },
  { label: 'Услуги', href: '#services' },
  { label: 'Врачи', href: '#team' },
  { label: 'Цены', href: '#prices' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Контакты', href: '#booking' },
];
