import { useState } from 'react';
import { HashLink as RouterHashLink } from 'react-router-hash-link';

import { ModeToggle } from '@/widgets/themeToggle';
import { HomeIcon, StackIcon, GridIcon, UserIcon, ContactsIcon, SlidersIcon, GlobeIcon } from '@/assets/icons/icons';
import './topbar.css';

const NAVIGATION_LINKS = [
    { title: 'Главная', to: '/#home', className: 'home__house', icon: <HomeIcon width={18} height={18}/> },
    { title: 'Навыки', to: '/#stack', className: 'home__stack', icon: <StackIcon width={18} height={18}/> },
    { title: 'Проекты', to: '/projects', className: 'home__js', icon: <GridIcon width={18} height={18}/> },
    { title: 'Обо мне', to: '/#about', className: 'home__about', icon: <UserIcon width={18} height={18}/> },
    { title: 'Контакты', to: '/#contacts', className: 'home__contacts', icon: <ContactsIcon width={18} height={18}/> },
];

export const Topbar = () => {
    const [show, setShow] = useState(false);
    return (
        <nav className="home__nav" onMouseLeave={() => setShow(false)}>
            {
                NAVIGATION_LINKS.map((link) => (
                    <RouterHashLink smooth to={link.to} className={`home__link ${link.className}`} key={link.title} onMouseEnter={() => setShow(false)}>
                        {link.icon}
                        <span>{link.title}</span>
                    </RouterHashLink>
                ))
            }
            <button type='button' className='home__setting' onClick={() => setShow(!show)}><SlidersIcon width={14} height={14}/>
            {
                show && (
                    <div className="home__actions" >
                        <button type='button'><GlobeIcon width={18} height={18}/> RU</button>
                        <ModeToggle/>
                    </div>
                )
            }
            </button>
        </nav>
    );
};