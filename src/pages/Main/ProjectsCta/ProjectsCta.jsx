import React from 'react';
import classes from './ProjectsCta.module.css';
import { useTranslation } from 'react-i18next';
import UnicoImg from '../../../assets/projects/unico_by_iconico.png';
import OPVImg from '../../../assets/projects/opv.png';
import SantanderImg from '../../../assets/projects/santander_sgcb.png';

import linkIcon from '../../../assets/icons/svg/enter.svg'
import { useCursorOnHoverArea } from '../../../hooks/useCursorOnHoverArea';
import { useNavigate } from 'react-router-dom';
import useScreenSize from '../../../hooks/useScreenSize';

const ProjectsCta = () => {
  const refCursor = useCursorOnHoverArea({
    enterType: "pointer",
    leaveType: "default"
  });
  const { t } = useTranslation('global');
  const navigate = useNavigate();
  const { isDesktop } = useScreenSize();


  return (
    <div className={classes.ProjectsCta}>

      {
        isDesktop ?
          (
            <>
              <div className={classes.ExtraImageLeft}>
                <img className={classes.Image} src={SantanderImg} />
              </div>

              <div className={classes.ExtraImageReft}>
                <img className={classes.Image} src={OPVImg} />
              </div>
            </>
          )
          : <></>
      }


      <div className={classes.ImageContainer} role='button'
        ref={refCursor}
        onClick={() => navigate('/about#projects')}
      >
        <img className={classes.Image} src={UnicoImg} />
        <div className={classes.Title}>{t('main.ProjectsCta')}
          <img src={linkIcon} />
        </div>
      </div>
    </div>
  );

}

export default ProjectsCta;
