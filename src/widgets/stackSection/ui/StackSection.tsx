import { StackCarousel } from './StackCarousel';
import { StackSkills } from './StackSkills';
import { BlockWrapper } from '../../../shared/ui';
import { SectionTitle } from '../../../shared/ui';

import './stackSection.css';

export const StackSection = () => {
    return (
        <section className="stack" id="stack">
            <div className="container">
                <div className="stack__wrapper">
                    <div className="stack__wrapp">
                        <SectionTitle highlightedText="Технологии" titleText="которые я использую"/>
                        <div
                            className='stack__info'
                        >
                            <BlockWrapper>
                                <StackSkills />

                            </BlockWrapper>
                        </div>
                    </div>

                    <div
                        className='stack__carousel-wrapper'
                    >
                        <BlockWrapper position='left'>
                            <StackCarousel />
                        </BlockWrapper>
                    </div>
                </div>
            </div>
        </section>
    )
}