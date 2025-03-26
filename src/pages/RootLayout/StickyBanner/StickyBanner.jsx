import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './StickyBanner.module.css';
import { useCursor } from '../../../contexts/CursorContext';
import Marquee from '../../../components/Marquee/Marquee';

const StickyBanner = () => {
  const { t } = useTranslation('global');
  const { setCursorType } = useCursor();
  const [isFormOpen, setFormOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('https://formsubmit.co/ajax/497925d0bdcc3234eeb94938c875f3fb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          message,
        }),
      });

      setSent(true);
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Error al enviar el formulario', err);
    }
  };

  return (
    <div className={`${classes.StickyBanner} ${isFormOpen ? classes.Open : ''}`}>
      <div
        className={classes.CloseButton}
        onClick={() => setFormOpen(!isFormOpen)}
        onMouseEnter={() => setCursorType('pointer')}
        onMouseLeave={() => setCursorType('default')}
      >
        {!isFormOpen ? '+' : '-'}
      </div>

      <div
        className={classes.BannerContainer}
        onClick={() =>  setFormOpen(!isFormOpen)}
        onMouseEnter={() =>  setCursorType('pointer')}
        onMouseLeave={() =>  setCursorType('default')}
      >
        <Marquee>
          {t('root.StickyBar.bannerText')}
          <span className={classes.Separator}>•</span>
        </Marquee>
      </div>

      <div className={classes.Form}>
        {sent ? (
          <div className={classes.Response}>{t('root.StickyBar.success')}</div>
        ) : (
          <>
            <div className={classes.Title}>{t('root.StickyBar.title')}</div>
            <div className={classes.Cta}>{t('root.StickyBar.cta')}</div>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('root.StickyBar.placeholder')}
                onFocus={() => setCursorType('text')}
                onBlur={() => setCursorType('default')}
                required
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('root.StickyBar.textareaPlaceholder')}
                rows={4}
                onFocus={() => setCursorType('text')}
                onBlur={() => setCursorType('default')}
              />

              <button
                type="submit"
                onMouseEnter={() => setCursorType('pointer')}
                onMouseLeave={() => setCursorType('default')}
              >
                {t('root.StickyBar.button')}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default StickyBanner;
