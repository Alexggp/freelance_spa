import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Header.module.css';
import CustomIcon from '../../../components/CustomIcon/CustomIcon';
import Logo from '../Logo/Logo';
import MenuIcon from '../../../assets/icons/svg/menu.svg?react';
const Header = () => {
  const { t } = useTranslation('global');

  return (
    <div className={classes.Header}>
      <div className={classes.Box}>
        <Logo/>
        <CustomIcon Icon={MenuIcon} onClick={()=>alert('menu')}/>
      </div>
    </div>
  );

}

export default Header;