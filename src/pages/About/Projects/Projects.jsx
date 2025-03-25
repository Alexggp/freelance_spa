import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Projects.module.css';
import { useCursor } from '../../../contexts/CursorContext';

import ProjectReview from './ProjectReview/ProjectReview';

const Projects = () => {
  const { t } = useTranslation('projects');
  const [activeProject, setActiveProject] = useState(0);
  const { setCursorType } = useCursor();

  const projects = t('projects.projects', { returnObjects: true });


  const handleEnter=(p)=>{
    setCursorType("pointer")
    setActiveProject(p);
  }

  const handleLeave=()=>{
    setCursorType("default")
    setActiveProject(null);
  }

  const projectsList = projects.map((project, index) => {
    return (
      <li key={index}
        className={activeProject?.index === index ? classes.Active : null}
        onMouseEnter={() => handleEnter(project)}
        onMouseLeave={() => handleLeave()}
      >
        {project.title}
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
