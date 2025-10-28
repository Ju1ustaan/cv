import { mySkills } from "../../../shared/consts/skills"

export const StackSkills = () => {
    return (
            <div className="stack__info-wrapp">
                <div className="stack__sort">
                    <p>frontend</p>
                    <p>state</p>
                    <p>style</p>
                    <p>ui</p>
                    <p>tooling</p>
                    <p>backend</p>
                    <p>other</p>
                    <p>build</p>
                </div>
                <ul className="stack__text">
                    {
                        mySkills.map((skill) => (
                            <div className="stack__wrapp" key={skill.name}>
                                <li className="stack__list">{skill.name}</li>
                                <div className="stack__rating">
                                    {
                                        Array.from({ length: skill.level }).map((_, i) => (
                                            <i key={i} className="fa-solid fa-star"></i>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </ul>
            </div>
    )
}
