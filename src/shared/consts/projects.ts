import {
    arqa,
    emilkeev,
    layout,
    rickandmorty,
    twitch,
    swapi,
  tarla, ivi, chess,
usersDashboard } from '@/assets/projects'

export const PROJECTS = [
  {
    id: 1,
    image: ivi,
    title: 'Netflix Clone (дизайн Иви)',
    description:
      'Данный проект — это клон платформы Netflix с визуальным стилем, вдохновлённым ivi.ru. Проект создан для демонстрации навыков работы с React, React Router, Zustand, Tailwind CSS и React Query.',
    link: 'https://github.com/Ju1ustaan/ivi-clone#readme',
    demo: 'https://ivi-clone-beta.vercel.app/',
  },
  {
    id: 9,
    image: tarla,
    title: 'Tarla',
    description:
      'Приложение, где пользователи могут делиться своими рецептами, просматривать рецепты других и сохранять понравившиеся в избранное. Проект создан с акцентом на простоту интерфейса, удобство взаимодействия и отзывчивый дизайн.',
    link: 'https://github.com/Ju1ustaan/recipeSite#readme',
  },
  {
    id: 2,
    image: twitch,
    title: 'Twitch Clone',
    description:
      'Клон платформы Twitch, созданный на React + Redux с авторизацией через Twitch API. Приложение позволяет пользователям авторизоваться через Twitch, просматривать стримы, каналы и взаимодействовать с контентом в реальном времени.',
    link: 'https://github.com/Ju1ustaan/My-Twitch-Clone#readme',
  },
  {
    id: 3,
    image: usersDashboard,
    title: 'Users Dashboard',
    description:
      'Данный проект был создан в рамках тестового задания.',
    link: 'https://github.com/Ju1ustaan/dashboard#readme',
    demo: 'https://dashboard-gules-one-34.vercel.app/'
  },
  {
    id: 4,
    image: rickandmorty,
    title: 'Rick and Morty Explorer',
    description:
      'Приложение на Vue 3, использующее открытое API Rick and Morty. Проект по одноименному мультсериалу "Рик и Морти". Позволяет просматривать персонажей, эпизоды и локации — с фильтрацией, пагинацией и детальными страницами.',
    link: 'https://github.com/Ju1ustaan/rick-and-morty#readme',
  },
  {
    id: 5,
    image: swapi,
    title: 'Star Wars Database',
    description:
      'Интерактивное SPA-приложение, созданное на React с использованием Redux Toolkit и React Router. Позволяет просматривать данные о персонажах, кораблях и планетах вселенной Star Wars с удобной пагинацией, детальными страницами и авторизацией.',
    link: 'https://github.com/Ju1ustaan/swapi/tree/main/solva-project#readme',
    demo: 'https://swapi-sepia.vercel.app/auth'
  },
    {
    id: 6,
    image: emilkeev,
    title: 'Emilkeev Portfolio',
    description:
      'Современная админ-панель для анализа продаж, заказов и доходов. Интерфейс построен на Vue 3 с использованием TypeScript, Pinia и TailwindCSS по архитектуре Feature-Sliced Design (FSD).',
    link: 'https://github.com/Ju1ustaan/elmikeev-analitycs#readme',
    demo: 'https://elmikeev-analitycs.vercel.app/'
  },
  {
    id: 7,
    image: layout,
    title: 'Landing Page Layout',
    description:
      'Адаптивная HTML-верстка, включающая готовые блоки и интерфейсные компоненты. Проект можно использовать как основу для реальных сайтов и шаблонов.',
    link: 'https://github.com/Ju1ustaan/Poster-website-layout#readme',
  },
  {
    id: 8,
    image: arqa,
    title: 'ARQA Technologies',
    description:
      'Современный шаблон фронтенд-приложения, реализованный с использованием Feature-Sliced Design (FSD). Проект создан для быстрого старта разработки SPA с гибкой архитектурой и переиспользуемыми компонентами.',
    link: 'https://github.com/Ju1ustaan/arqa-test#readme',
  },
  {
    id: 10,
    image: chess,
    title: 'Шахматный клуб',
    description:
      'Одностраничная адаптивная верстка лендинга для шахматного клуба. Сайт выполнен с применением анимаций на JavaScript и полностью адаптирован под все устройства Реализованы плавные переходы, интерактивные элементы и акцент на визуальную динамику.',
    link: 'https://github.com/Ju1ustaan/chess-club-landing#readme',
  },
];