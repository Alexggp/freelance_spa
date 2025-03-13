import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Parallax } from 'react-parallax';

import classes from './MoreBody.module.css';
import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import Logo from '../../../components/Logo/Logo';
import stepsBg from '../../../assets/steps_bg.jpg';
import { useChallenge } from '../../../contexts/ChallengeContext';

const MoreBody = () => {
  const { t } = useTranslation('global');
  const navigate = useNavigate();
  const { activateChallenge } = useChallenge();

  const navigateTo = () => {
    navigate('/about');
  };

  return (
    <>
      <div className={classes.MoreBody}>
        <Container className={classes.BodyContainer} size={'lg'}>
          <div className={classes.MainText}>
            <p>{t('moreBody.intro.0')} <span>{t('moreBody.intro.1')}</span> {t('moreBody.intro.2')}</p>
            <p dangerouslySetInnerHTML={{ __html: t('moreBody.competition') }} />
            <p>{t('moreBody.reputation.0')} <span>{t('moreBody.reputation.1')}</span> {t('moreBody.reputation.2')}</p>
            <p>{t('moreBody.quality.0')} <span>{t('moreBody.quality.1')}</span> {t('moreBody.quality.2')} <span>{t('moreBody.quality.3')}</span></p>
          </div>
          <div className={classes.CtaText}>
            <h3><span>{t('moreBody.callToAction.title')}</span></h3>
            <p>{t('moreBody.callToAction.text')}</p>
            <Button color="secondary" className={classes.Button}>{t('moreBody.callToAction.button')}</Button>
          </div>
          <div className={classes.MainText}>
            <p>{t('moreBody.uncertainty.0')}</p>
            <p><span>{t('moreBody.uncertainty.1')}</span> {t('moreBody.uncertainty.2')}</p>
            <p dangerouslySetInnerHTML={{ __html: t('moreBody.supportAreas.0') }} />

          </div>
        </Container>
      </div>

      <Parallax
        blur={{ min: -5, max: 8 }}
        bgImage={stepsBg}
        bgImageAlt="steps"
        bgImageStyle={{ objectFit: 'cover', top: 'auto', bottom: '-400px' }}
        strength={500}
      >
        <div className={classes.MoreSteps}>
          <Container size={'lg'} className={classes.MoreStepsContainer} backgroundColor={'#fff6'}>
            <p><span className={classes.Index}>1 - </span>{t('moreBody.steps.0')}</p>
            <p><span className={classes.Index}>2 - </span>{t('moreBody.steps.1')}</p>
            <p><span className={classes.Index}>3 - </span>{t('moreBody.steps.2')}</p>
          </Container>
        </div>
      </Parallax>

      <div className={classes.MoreBody}>
        <Container className={classes.BodyContainer} size={'lg'}>
          <div className={classes.MainText}>
            <p dangerouslySetInnerHTML={{ __html: t('moreBody.expertise.0') }} />
            <p dangerouslySetInnerHTML={{ __html: t('moreBody.expertise.1') }} />
            <Button color="secondary" className={classes.Button}>{t('moreBody.cta2.button')}</Button>
          </div>
          <div className={classes.MainText}>
            <p dangerouslySetInnerHTML={{ __html: t('moreBody.solution.0') }} />

            <p dangerouslySetInnerHTML={{ __html: `${t('moreBody.focus.0')} </br> ${t('moreBody.focus.1')}` }} />

          </div>
          <div className={classes.CtaText}>
            <h3><span>{t('moreBody.finalCall.title')}</span></h3>
            <p>{t('moreBody.finalCall.text')}</p>
            <Button color="secondary" className={classes.Button}>{t('moreBody.finalCall.button')}</Button>
          </div>
        </Container>
      </div>

      <div className={classes.Footer}>
        <Logo alternative />
        <div className={classes.shellContainer} onClick={() => activateChallenge('seafloor')}/>
        <div onClick={navigateTo} className={classes.enlaceSubrayado}>
          {t('moreBody.footer.aboutUs')}
        </div>
      </div>
    </>
  );
};

export default MoreBody;
