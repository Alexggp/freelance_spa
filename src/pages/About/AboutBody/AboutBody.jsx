import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import classes from './AboutBody.module.css';
import HorizontalBody from '../HorizontalBody/HorizontalBody';
import Container from '../../../components/Container/Container';
import Logo from '../../../components/Logo/Logo';
import Button from '../../../components/Button/Button';
import References from '../References/References';

const AboutBody = () => {
  const { t } = useTranslation('global');
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate('/');
  };

  return (
    <>
      <div className={classes.AboutBody}>
        <Container className={classes.BodyContainer} size={'lg'}>
          <div className={classes.CenterText}>
            {t('aboutBody.intro', { returnObjects: true }).map((text, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </div>
        </Container>
        <HorizontalBody />
        <Container className={classes.BodyContainer} size={'lg'}>
          <div className={classes.CenterText}>
            <h1>{t('aboutBody.titleYearsPassed')}</h1>
          </div>
        </Container>
      </div>
      <References />
      <div className={classes.AboutBody}>
        <Container className={classes.BodyContainer} size={'lg'}>
          <div className={classes.CenterText}>
            {t('aboutBody.creation', { returnObjects: true }).map((text, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </div>
          <div className={classes.CtaText}>
            <p dangerouslySetInnerHTML={{ __html: t('aboutBody.cta.text') }} />
            <h3>{t('aboutBody.cta.scheduleCall')}</h3>
            <Button className={classes.Button}>{t('aboutBody.cta.button')}</Button>
          </div>
        </Container>
      </div>
      <div className={classes.Footer}>
        <Logo />
        <div onClick={navigateTo} className={classes.enlaceSubrayado}>
          {t('aboutBody.footer.backToHome')}
        </div>
      </div>
    </>
  );
};

export default AboutBody;
