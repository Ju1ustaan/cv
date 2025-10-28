import { HashLink as RouterHashLink } from 'react-router-hash-link';
import './Topbar.css';

export const Topbar = () => {
    return (
        <nav className="home__nav">
            <RouterHashLink smooth to="/#home" className="home__link home__house">
                <i className="fa-solid fa-house"></i>
            </RouterHashLink>
            <RouterHashLink smooth to="/#stack" className="home__link home__stack">
                <i className="fa-solid fa-landmark"></i>
            </RouterHashLink>
            <RouterHashLink smooth to="/projects" className="home__link home__js">
                <i className="fa-brands fa-square-js"></i>
            </RouterHashLink>
            <RouterHashLink smooth to="/#about" className="home__link home__about">
                <i className="fa-solid fa-circle-user"></i>
            </RouterHashLink>
            <RouterHashLink smooth to="/#contacts" className="home__link home__contacts">
                <i className="fa-solid fa-square-phone"></i>
            </RouterHashLink>
        </nav>
    );
};