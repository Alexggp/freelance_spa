import React from "react";
import classes from './Services.module.css';
import Container from "../../components/Container/Container";
import Grid from "../../components/Grid/Grid";
import CustomIcon from "../../components/CustomIcon/CustomICon";
import Online from "../../assets/online.svg?react";
import Web from "../../assets/web.svg?react";
import Mobile from "../../assets/mobile.svg?react";
import Chart from "../../assets/chart.svg?react";



const Services = () => {


  return (
    <Container id="Services" className={classes.Services} size="xl" centered>
      <div className={classes.Title}>
        <h1>Ofrecemos todos los recursos a nuestro alcance para ayudarte a desbloquear tu potencial digital.</h1>
      </div>
      <div className={classes.Content}>
        <div className={classes.ImageContainer}></div>
        <div className={classes.ServicesContainer}>
          <Grid>
            <div className={classes.ServiceBox}>
              <div className={classes.ServiceTitle}>
                <CustomIcon width='35px' height='35px' Icon={Web} />
                <h2>Web</h2>
              </div>
              <p className={classes.ServiceDescription}>Desarrollamos tu aplicación web con las últimas tendencias de diseño en el sector.</p>
            </div>
            <div className={classes.ServiceBox}>
            <div className={classes.ServiceTitle}>
                <CustomIcon width='35px' height='35px' Icon={Mobile} />
                <h2>Mobile</h2>
              </div>
              <p className={classes.ServiceDescription}>Traspasamos cualquier frontera, nos adaptamos a las necesidades reales de tu negocio.</p>
            </div>
            <div className={classes.ServiceBox}>
            <div className={classes.ServiceTitle}>
                <CustomIcon width='35px' height='35px' Icon={Chart} />
                <h2>Consultoría</h2>
              </div>
              <p className={classes.ServiceDescription}>Te ayudamos a llevar a la  realidad tu idea de negocio digital desde cero.</p>
            </div>
            <div className={classes.ServiceBox}>
            <div className={classes.ServiceTitle}>
                <CustomIcon width='35px' height='35px' Icon={Online} />
                <h2>Transformación Digital </h2>
              </div>
              <p className={classes.ServiceDescription}>Pasarte al mundo digital nunca fue tan sencillo. Te asesoraremos en cada paso del proceso. </p>
            </div>
          </Grid>
        </div>
      </div>
      <div className={classes.SubTitle}>
        <h3>Nuestro compromiso con tu éxito es total porque... </h3>
      </div>

    </Container>
  );
};

export default Services;
