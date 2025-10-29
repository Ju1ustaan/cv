import { BlockWrapper } from '@/shared/ui'
import { SectionTitle } from '@/shared/ui'

import { EXPERIENCES } from '@/shared/consts/experiences'

import './experience.css'

export const ExperienceList = () => {
    return (
        <div className="experience">
            <SectionTitle highlightedText="Опыт" titleText="работы" />
            <div className="experience__wrapper">
                {
                    EXPERIENCES.map((exp, idx) => (
                        <div key={exp.title} className='experience__card'>
                            <BlockWrapper key={exp.title} position={idx % 2 === 0 ? 'left' : 'right'}>
                                <div className="experience__item">
                                    <div className="experience__wrapp">
                                        <div className="experience__icon"><img src={exp.icon} alt={exp.title} /></div>
                                    <div className="experience__info">
                                    <p className='experience__title'>{exp.company_name}</p>
                                    <p className='experience__title'>{exp.title}</p>
                                    <p>{exp.date}</p>
                                    </div>
                                    </div>
                                    <ul>
                                        {
                                            exp.points.map((point, index) => (
                                                <li className='experience__point' key={index}>{point}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </BlockWrapper>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
