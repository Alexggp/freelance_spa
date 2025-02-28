import React from "react";
import classes from './References.module.css';
import Container from "../../components/Container/Container";
import Grid from '../../components/Grid/Grid';

import cocacolaLogo from '../../assets/clients/cocacola.png';
import inditexLogo from '../../assets/clients/inditex.png';
import mutuaLogo from '../../assets/clients/mutua.png';
import telefonicaLogo from '../../assets/clients/telefonica.png';
import gobiernoLogo from '../../assets/clients/gobierno.png';
import santanderLogo from '../../assets/clients/santander.png';
import iberiaLogo from '../../assets/clients/iberia.png';

const References = () => {

  const linkToCalendar = () => window.open("https://calendar.app.google/VhiRqbK1hoXmENiQA", "_blank")

  return (
    <Container className={classes.References} size="xl" centered>
      <div className={classes.Title}>
        <h2>¿Listo para unirte al club?</h2>
        <h1>Hemos colaborado con</h1>
      </div>
      <Grid minGap='50px' className={classes.SolutionsList}>
        <div className={classes.LogoContainer}>
          <img src={inditexLogo} style={{ height: "50%", marginTop: '5%' }} alt='Inditex'></img>
        </div>
        <div className={classes.LogoContainer}>
          <img src={iberiaLogo} alt='Iberia'></img>
        </div>
        <div className={classes.LogoContainer}>
          <img src={santanderLogo} alt='Banco Santander'></img>
        </div>
        <div className={classes.LogoContainer}>
          <img src={cocacolaLogo} alt='Cocacola'></img>
        </div>
        <div className={classes.LogoContainer}>
          <img src={gobiernoLogo} alt='Gobierno de España'></img>
        </div>
        <div className={classes.LogoContainer}>
          <img src={telefonicaLogo} alt='Telefónica'></img>
        </div>
        <div className={classes.LogoContainer}>
          <img src={mutuaLogo} alt='Mutua Madrileña'></img>
        </div>
      </Grid>
    </Container>
  );
};

export default References;
