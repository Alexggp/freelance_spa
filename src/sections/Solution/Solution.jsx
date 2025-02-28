import React from "react";
import classes from './Solution.module.css';
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import SolutionComponent from "./SolutionComponent/SolutionComponent";
import logoImage from '../../assets/eutecnia_alt_clean.png';
import Grid from '../../components/Grid/Grid';

const Solution = () => {

  const linkToCalendar = () => window.open("https://calendar.app.google/VhiRqbK1hoXmENiQA", "_blank")

  return (
    <Container id="Solution" className={classes.Solution} size="xl" centered>
      <div className={classes.Title}>
        <h1>Así es como lo vamos a hacer</h1>
      </div>
      <Grid minGap='50px' className={classes.SolutionsList}>
        <SolutionComponent
          number={1}
          title={'Analizaremos tu situación actual'}
          sub1={'Comunicación clara y transparente'}
          sub2={'Los mejores estrategas a tu lado'}
        />
        <SolutionComponent
          number={2}
          title={'La solución adecuada'}
          sub1={'Te haremos el desarrollo digital a medida'}
          sub2={'Las últimas tecnologías a tu servicio'}
        />
        <SolutionComponent
          number={3}
          title={'No te dejaremos sólo'}
          sub1={'Te daremos mantenimiento'}
          sub2={'Tu negocio digital crecerá contigo'}
        />
      </Grid>
      <div className={classes.Cta}>
        <Button color="secondary" onClick={linkToCalendar}>Agendar una llamada</Button>
      </div>
      <img className={classes.LogoClean} src={logoImage}/>
    </Container>
  );
};

export default Solution;
