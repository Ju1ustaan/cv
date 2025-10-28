import type { FC } from 'react'
import './sectionTitle.css'

interface TitleProps {
    titleText: string;
    highlightedText: string;
}

export const SectionTitle:FC<TitleProps> = ({titleText, highlightedText}) => {
    return (
        <h2 className="title">
            <span>{highlightedText}</span> {titleText}
        </h2>
    )
}
