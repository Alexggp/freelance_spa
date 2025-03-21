import React from 'react';
import { useCursor } from '../../../contexts/CursorContext';
import { useNavigate } from 'react-router-dom';


import Footer from '../Footer/Footer';
import classes from './Menu.module.css';

const Menu = ({isVisible}) => {
  const { setCursorType } = useCursor();
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate('/');
  };


  return (
    <div className={`${classes.Menu} ${isVisible && classes.isVisible}`}>
      <p>Sobre mí & Proyectos</p>
      <p>Contacto</p>
      <p>Español - Ingles</p>
      <Footer/>
    </div>
  );

}

export default Menu;