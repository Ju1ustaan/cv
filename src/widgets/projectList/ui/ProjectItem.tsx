import type { FC } from "react";
import { BlockWrapper } from "../../../shared/ui";
import { GitHubIcon } from "../../../assets/icons/icons";
interface ProjectItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
  };
  position?: 'left' | 'right';
}

export const ProjectItem: FC<ProjectItemProps> = ({ item, position }) => {
  return (
    <BlockWrapper position={position}>
      <div className="project-item" style={{ flexDirection: position === 'left' ? 'row' : 'row-reverse' }}>
        <img src={item.image} alt={item.title} className="project-item__img" />
        <div className="project__item-info">
          <h3 className="project-item__title">{item.title}</h3>
          <p className="project-item__desc">{item.description}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item__link"
          >
            Перейти к проекту 
            <GitHubIcon width={32} height={32} />
          </a>
        </div>
      </div>
    </BlockWrapper>
  );
};
