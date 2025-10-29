import { BlockWrapper } from "@/shared/ui";
import { SectionTitle } from "@/shared/ui";

import { ExperienceList } from "@/widgets/experience";

import MyImg from '@/assets/ju-for-sv.jpg'

import './aboutSection.css'


export const AboutSection = () => {
    return (

        <section className="about" id="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__title">
                        <SectionTitle highlightedText="Обо" titleText="мне" />
                    </div>
                    <div className="about__info">
                        <BlockWrapper position="left">
                            <ul className="about__text">
                                <h2 className="about__subtitle">
                                    Дьулустаан Лугинов
                                </h2>
                                <li className="">Фронтенд-разработчик с опытом коммерческой разработки. Реализовал проекты с адаптивной вёрсткой, интеграцией с API, локальным хранением данных и системой авторизации. Владею Vue, React, TypeScript и Node.js. Ценю ясную архитектуру (FSD, SOLID) и комфортную командную коммуникацию. Продолжаю развивать навыки в backend-части и DevOps.</li>
                            </ul>
                        </BlockWrapper>
                    </div>
                    <div className="about__img">
                        <BlockWrapper>
                            <img src={MyImg} alt="my photo" />
                        </BlockWrapper>
                    </div>
                </div>
                <ExperienceList />
            </div>
        </section>
    )
}
