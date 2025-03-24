import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ProjectReview.module.css';

const ProjectReview = ({ project }) => {
  const { t } = useTranslation('projects');

  const {
    title,
    description,
    period,
    tech,
    role,
    contract,
    company,
    status,
    image,
    url
  } = project;

  return (
    <div className={styles.ProjectReview}>
      <div className={styles.ImageContainer}>
        <img src={`/src/assets/projects/${image}`} alt={title} />
      </div>
      <p>{description}</p>
      <div className={styles.InfoContainer}>
        {period && <div className={styles.Field}><span>{t('projects.fields.period')}</span>: {period}</div>}
        {tech && <div className={styles.Field}><span>{t('projects.fields.tech')}</span>: {tech}</div>}
        {role && <div className={styles.Field}><span>{t('projects.fields.role')}</span>: {role}</div>}
        {contract && <div className={styles.Field}><span>{t('projects.fields.contract')}</span>: {contract}</div>}
        {company && <div className={styles.Field}><span>{t('projects.fields.company')}</span>: {company}</div>}
        {status && <div className={styles.Field}><span>{t('projects.fields.status')}</span>: {status}</div>}
      </div>
    </div>
  );
};

export default ProjectReview;
