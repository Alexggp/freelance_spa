import React from "react";
import classes from './Final.module.css';
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import logoImage from '../../assets/eutecnia_alt_clean.png';

const Final = () =>{

  const linkToCalendar = ()=> window.open("https://calendar.app.google/VhiRqbK1hoXmENiQA", "_blank")

  return (
    <Container className={classes.Final} size="xl" centered>
      <div className={classes.Title}>
        <h2>No hay mayor satisfacción que ver como tus clientes crecen</h2>
        <h1>Agenda una llamada estratégica</h1>
      </div>
      <div className={classes.Cta}>
        <Button color="secondary" onClick={linkToCalendar}>Agendar</Button>
      </div>
      <img className={classes.LogoClean} src={logoImage}/>
    </Container>
  );
};

export default Final;
