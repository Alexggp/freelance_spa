import React from "react";
import classes from './Problems.module.css';
import Container from "../../components/Container/Container";
import Avatar from "../../components/Avatar/Avatar";
import CustomIcon from "../../components/CustomIcon/CustomICon";
import Cross from "../../assets/close.svg?react";
import logoImage from '../../assets/eutecnia_alt_clean.png';



const Problems = () =>{

  return (
    <Container className={classes.Problems} size="xl" centered>
      <div className={classes.Title}>
        <h1>¿Te suena?</h1>
      </div>
      <div className={classes.ProblemsList}>
        <div className={classes.Problem}>
          <Avatar
            backgroundColor="#ff3b3b"
            size="small"
            fallbackIcon={<CustomIcon Icon={Cross} />}
          />
          <span>Tu negocio físico tiene que <b>dar el salto</b> al mundo digital y no<br/>sabes por donde empezar</span>
        </div>
        <div className={classes.Problem}>
          <Avatar
            backgroundColor="#ff3b3b"
            size="small"
            fallbackIcon={<CustomIcon Icon={Cross} />}
          />
          <span>Tu web está hecha en WordPress pero necesitas <br/><b>funcionalidades personalizadas</b></span>
        </div>
        <div className={classes.Problem}>
          <Avatar
            backgroundColor="#ff3b3b"
            size="small"
            fallbackIcon={<CustomIcon Icon={Cross} />}
          />
          <span>Tienes una idea innovadora pero necesitas <br/><b>estrategia y desarrollo</b></span>
        </div>
      </div>
      <div className={classes.Cta}>
       <a href="#Solution">Tranquilo, son solo 3 pasos</a>
      </div>
      <img className={classes.LogoClean} src={logoImage}/>
    </Container>
  );
};

export default Problems;
