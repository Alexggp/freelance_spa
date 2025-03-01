import { useTranslation } from 'react-i18next';

import Box from '../Box/Box';
import classes from "./Logo.module.css";

const Logo = ({alternative = false}) =>{
  
  const { t } = useTranslation('global');

  return (
    <Box 
    className={ ` ${classes.Container} ${alternative  ? classes.Alternative : ''}`}
    width='300' 
    height='115' 
    square 
    transparent>
      <div className={classes.Main}>
        <div className={classes.Icon}></div>
        <span className={classes.Title}>eutecnia</span>
      </div>
      <span className={classes.SubTitle}>{t('logo')}</span>
    </Box>
  )
}

export default Logo; 