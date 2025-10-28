import { PROJECTS } from "../../../shared/consts/projects"
import { ProjectItem } from "./ProjectItem"

import './ProjectItem.css'

export const ProjectList = () => {
    return (
        <div className="projects container">
            {
                PROJECTS.map((project, idx) => (
                    <ProjectItem 
                    key={project.id} 
                    item={project} 
                    position={idx % 2 === 0? 'left': 'right'}/>
                ))
            }
        </div>
    )
}
