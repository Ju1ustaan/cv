import { motion } from "framer-motion";
import { BlockWrapper } from "../../../shared/ui";
import { SectionTitle } from "../../../shared/ui";
import './aboutSection.css';

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
                            <li className="">Тут будет немного информации обо мне. </li>
                            <li className="">Например где и как обучался. </li>
                            <li className=""> Где я работал. </li>
                            <li className=""> Чем там занимался</li>
                            <li className=""> Мое хобби</li>
                            <li className=""> И еще что нибудь</li>
                        </ul>
                    </BlockWrapper>
                    </motion.div>
                    <div
                        className="about__img"
                    >
                        <BlockWrapper>
                        <img src="https://www.kino-teatr.ru/acter/album/49791/33778.jpg" alt="my photo" />
                        </BlockWrapper>
                    </div>
                </div>
            </div>
        </section>
    )
}
