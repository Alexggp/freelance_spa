import React from "react";
import Main from "./sections/Main/Main";
import './App.css';
import BackgroundImage from "./assets/bg-cta.svg?react";
import Container from "./components/Container/Container";
import Problems from "./sections/Problems/Problems";
import Solution from "./sections/Solution/Solution";
import References from "./sections/References/References";
import Services from "./sections/Services/Services";
import Final from "./sections/Final/Final";
import Footer from './sections/Footer/Footer';

function App() {

  return (
    <Container id='mainContainer' padding={0} size='fs'>
      <BackgroundImage id="backgroundImage"/>
     <Main />
     <Problems />
     <Solution />
     <References />
     <Services />
     <Final />
     <Footer />
    </Container>
  )
}

export default App
