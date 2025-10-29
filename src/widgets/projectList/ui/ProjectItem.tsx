import type { FC } from "react";

import { BlockWrapper } from "@/shared/ui";
import { DemoIcon, GitHubIcon } from "@/assets/icons/icons";

interface ProjectItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
    demo?: string;
  };
  position?: 'left' | 'right';
}

export const ProjectItem: FC<ProjectItemProps> = ({ item, position }) => {
  return (
    <BlockWrapper position={position}>
      <div className="project-item" style={{ flexDirection: position === 'left' ? 'row' : 'row-reverse' }}>
        <div className="project-item__img">
        <img src={item.image} alt={item.title} className="project-item__img" />
        </div>
        <div className="project__item-info">
          <h3 className="project-item__title">{item.title}</h3>
          <p className="project-item__desc">{item.description}</p>
          <div className="project-item__action">
            <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item__link"
          >
            Перейти к проекту 
            <GitHubIcon width={32} height={32} />
          </a>
          {item.demo && (
            <a
            href={item.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item__link"
          >
            Перейти к DEMO 
            <DemoIcon width={32} height={32} />
          </a>
          )}
          </div>
        </div>
      </div>
    </BlockWrapper>
  );
};
