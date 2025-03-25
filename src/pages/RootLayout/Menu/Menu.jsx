import React from 'react';
import { useCursor } from '../../../contexts/CursorContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import Footer from '../Footer/Footer';
import classes from './Menu.module.css';

const Menu = ({ isVisible, toggleMenu }) => {
  const { i18n, t } = useTranslation('global');
  const { setCursorType } = useCursor();
  const navigate = useNavigate();
  const { pathname } = useLocation();


  const handleClick = (locale) => {
    if (locale !== i18n.language){
      i18n.changeLanguage(locale);
    }
  }


  const navigateTo = (url) => {
    navigate('/'+url);
    setCursorType("default")
    toggleMenu();
  };

  const Selectable = ({ children, onClick, className }) => (
    <div className={`${classes.Selectable} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setCursorType("pointer")}
      onMouseLeave={() => setCursorType("default")}
    >{children}</div>
  )

  return (
    <div className={`${classes.Menu} ${isVisible && classes.isVisible}`}>
      {pathname!=='/' && <Selectable onClick={()=>navigateTo('')}>{t('root.Menu.home')}</Selectable>}
      {pathname!=='/about' && <Selectable onClick={()=>navigateTo('about')}>{t('root.Menu.about')}</Selectable>}
      {pathname!=='/contact' && <Selectable onClick={()=>navigateTo('contact')}>{t('root.Menu.contact')}</Selectable>}
      <div className={classes.LanguageSelector}>
        <Selectable className={i18n.language === 'es' ? classes.LocaleSelected : ''} onClick={()=>handleClick('es')}>{t('root.Menu.locales.spanish')}</Selectable>
        -
        <Selectable className={i18n.language === 'en' ? classes.LocaleSelected : ''} onClick={()=>handleClick('en')}>{t('root.Menu.locales.english')}</Selectable>
      </div>
      <Footer alternative={true}/>
    </div>
  );

}

export default Menu;