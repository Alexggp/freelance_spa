import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Projects.module.css';
import { useCursor } from '../../../contexts/CursorContext';
import useScreenSize from '../../../hooks/useScreenSize';
import ProjectReview from './ProjectReview/ProjectReview';

const Projects = () => {
  const { t } = useTranslation('projects');
  const [activeProject, setActiveProject] = useState(0);
  const { setCursorType } = useCursor();
  const { isDesktop } = useScreenSize();
  const projects = t('projects.projects', { returnObjects: true });


  const handleEnter = (p) => {
    setCursorType("pointer")
    setActiveProject(p);
  }

  const handleLeave = () => {
    setCursorType("default")
    setActiveProject(null);
  }

  const handleClick = (p) => {
    if (isDesktop) return;
    setActiveProject(p);
  }

  const projectsList = projects.map((project, index) => {
    return (
      <li key={index}
        className={activeProject?.title === project.title ? classes.Active : null}
        onMouseEnter={() => handleEnter(project)}
        onClick={() => handleClick(project)}
        onMouseLeave={() => handleLeave()}
      >
        {project.title}

        {!isDesktop ?
          <div className={`${classes.InfoContainerMobile} ${activeProject?.title === project.title ? classes.Active : null}`}>
            <ProjectReview project={project} />
          </div>

          : null
        }
      </li>
    );
  });


  return (
    <div className={classes.Projects}>
      <div className={classes.InfoContainer}>
        {activeProject ?
          <ProjectReview project={activeProject} />
          : <div className={classes.TitleContainer}> <p className={classes.Title}>{t('projects.title')}</p> </div>
        }
      </div>
      <div className={classes.ProjectsContainer}>
        <ul className={classes.ProjectsList}>
          {projectsList}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
