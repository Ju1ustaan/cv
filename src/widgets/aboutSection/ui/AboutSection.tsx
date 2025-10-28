import { motion } from "framer-motion";
import { BlockWrapper } from "../../../shared/ui";
import { SectionTitle } from "../../../shared/ui";
import MyImg from '../../../assets/ju-for-sv.jpg'
import './aboutSection.css'


export const AboutSection = () => {
    return (

        <section className="about" id="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__title">
                    <SectionTitle highlightedText="Обо" titleText="мне"/>
                    </div>
                        <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="about__info">
                    <BlockWrapper position="left">
                        <ul className="about__text">
                            <h2 className="about__subtitle">
                                Дьулустаан Лугинов
                            </h2>
                            <li className="">Фронтенд-разработчик с опытом коммерческой разработки. Реализовал проекты с адаптивной вёрсткой, интеграцией с API, локальным хранением данных и системой авторизации. Владею Vue, React, TypeScript и Node.js. Ценю ясную архитектуру (FSD, SOLID) и комфортную командную коммуникацию. Продолжаю развивать навыки в backend-части и DevOps.</li>
                        </ul>
                    </BlockWrapper>
                    </motion.div>
                    <div
                        className="about__img"
                    >
                        <BlockWrapper>
                        <img src={MyImg} alt="my photo" />
                        </BlockWrapper>
                    </div>
                </div>
            </div>
        </section>
    )
}
