import React from "react";
import classes from './Main.module.css';
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";

const Main = () =>{

  const linkToCalendar = ()=> window.open("https://calendar.app.google/VhiRqbK1hoXmENiQA", "_blank")

  return (
    <Container className={classes.Main} size="xl" centered>
      <Logo />
      <div className={classes.Title}>
        <h2>Esta es tu creencia limitante</h2>
        <h1>Te voy a mostrar que no es cierta</h1>
      </div>
      <div className={classes.Cta}>
        <span>Estás a una llamada estratégica de iniciar el cambio</span>
        <Button color="secondary" onClick={linkToCalendar}>Agendar</Button>
      </div>
    </Container>
  );
};

export default Main;
