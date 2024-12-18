import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Header Component - Navegación principal con branding.
 */
const Header = () => {
  return (
    <header>
      <h1>Kodigo Music</h1> {/* Branding del sitio */}
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/explore">Explorar</Link>
        <Link to="/player">Reproductor</Link>
        <Link to="/profile">Perfil</Link>
      </nav>
    </header>
  );
};

export default Header;