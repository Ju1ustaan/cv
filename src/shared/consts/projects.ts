import {
    arqa,
    emilkeev,
    layout,
    rickandmorty,
    twitch,
    swapi } from '@/assets/projects'

export const PROJECTS = [
  {
    id: 1,
    image: arqa,
    title: 'ARQA Technologies',
    description:
      'Современный шаблон фронтенд-приложения, реализованный с использованием Feature-Sliced Design (FSD). Проект создан для быстрого старта разработки SPA с гибкой архитектурой и переиспользуемыми компонентами.',
    link: 'https://github.com/Ju1ustaan/arqa-test#readme',
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
    image: layout,
    title: 'Landing Page Layout',
    description:
      'Адаптивная HTML-верстка, включающая готовые блоки и интерфейсные компоненты. Проект можно использовать как основу для реальных сайтов и шаблонов.',
    link: 'https://github.com/Ju1ustaan/Poster-website-layout#readme',
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
  },
    {
    id: 6,
    image: emilkeev,
    title: 'Emilkeev Portfolio',
    description:
      'Современная админ-панель для анализа продаж, заказов и доходов. Интерфейс построен на Vue 3 с использованием TypeScript, Pinia и TailwindCSS по архитектуре Feature-Sliced Design (FSD).',
    link: 'https://github.com/Ju1ustaan/elmikeev-analitycs#readme',
  },
];