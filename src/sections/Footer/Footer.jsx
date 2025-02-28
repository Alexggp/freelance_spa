import React from "react";
import classes from './Footer.module.css';
import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";

const Footer = () =>{



  return (
    <Container className={classes.Footer} size="fs" centered>
      <Logo alternative/>
      <div className={classes.Contact}>
        <span>626581246</span>
        <span>alejandro.gg.perez@gmail.com</span>
      </div>
    </Container>
  );
};

export default Footer;
