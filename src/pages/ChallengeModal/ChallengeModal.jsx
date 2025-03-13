import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

import Modal from '../../components/Modal/Modal';
import { useChallenge } from '../../contexts/ChallengeContext';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';

import classes from './ChallengeModal.module.css';
import treasure from '../../assets/treasure.png'
const ChallengeModal = () => {
  const { challenge, isModalOpen, setIsModalOpen } = useChallenge();
  const { t } = useTranslation('global');
  const [email, setEmail]=useState('');

  if (!isModalOpen) return null;

  const count = Object.entries(challenge).filter(([key, value]) =>
    value.activated
  ).length;

  const clue = Object.entries(challenge).find(([key, value]) =>
    !value.activated
  ) && Object.entries(challenge).find(([key, value]) =>
    !value.activated
  )[1].clue;
  console.log(clue)
  return (
    <Modal width={'800px'} height={'600px'} show={true} setShow={setIsModalOpen} square centered>
      {
        count < 3 ? (
          <Container className={classes.ModalContainer}>
            <h2>{t('challenge.title')}</h2>
            <p>{t('challenge.subtitle')}</p>
            <div className={classes.Display}>
              <img src={treasure} />
              <span>{count} / 3</span>
            </div>
            {t('challenge.clue')}: {t(clue)}
            <Button onClick={() => setIsModalOpen(false)}>{t('challenge.accept')}</Button>
          </Container>
        ) :
          <Container className={classes.ModalContainer}>
            <h2>{t('challenge.price.title')}</h2>
              <div className={classes.Display}>
              <img src={treasure} />
              <span>{count} / 3</span>
            </div>
            <p>{t('challenge.price.subtitle')}</p>
            <Input 
               variant="filled" 
               placeholder={t('challenge.price.email')}
               onEnter={() => setIsModalOpen(false)}
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
             />
            <Button onClick={() => setIsModalOpen(false)}>{t('challenge.price.send')}</Button>
          </Container>
      }



    </Modal>
  );
};

export default ChallengeModal;
