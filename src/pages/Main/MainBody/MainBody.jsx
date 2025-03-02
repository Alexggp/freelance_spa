import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import classes from './MainBody.module.css';
import Container from '../../../components/Container/Container';
import FaroImg from '../../../assets/faro-azul.png';
import Button from '../../../components/Button/Button';
import Logo from '../../../components/Logo/Logo';

const MainBody = () => {
  const { t } = useTranslation('global');
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate('/more');
  };

  return (
    <div className={classes.MainBody}>
      <Container className={classes.BodyContainer} size={'lg'}>
        <div className={classes.MainText}>
          {t('mainBody.intro', { returnObjects: true }).map((text, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
          {t('mainBody.ocean', { returnObjects: true }).map((text, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
          <img className={classes.Image} src={FaroImg} alt="Faro" />
        </div>
        <div className={classes.CtaText}>
          <p>{t('mainBody.cta.warning')}</p>
          <h3><span>{t('mainBody.cta.action')}</span></h3>
          <Button className={classes.Button}>{t('mainBody.cta.button')}</Button>
        </div>
      </Container>
      <div className={classes.Footer}>
        <Logo />
        <div onClick={navigateTo} className={classes.enlaceSubrayado}>
          {t('mainBody.footer.explore')}
        </div>
      </div>
    </div>
  );
};

export default MainBody;
