import { skills } from "../../../shared/consts/skills"

export const StackCarousel = () => {
    return (
            <div className="stack__carousel">
                {[...skills, ...skills].map((skill, i) => (
                    <div className="block-container" key={i}>
                        <div className="btn-back btn-back-pink" />
                        <div className="btn-front ">
                            <img src={skill.imageUrl} alt={skill.name} />
                        </div>
                    </div>
                ))}
            </div>
    )
}
