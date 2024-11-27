import React from "react";
import "./NavbarLandingAdotante.css";
import logo from "../../assets/image/logo.png";
import { Link as ScrollLink } from "react-scroll"; // Renomeamos o Link do react-scroll para evitar conflito
import { Link as RouterLink } from "react-router-dom"; // Importamos o Link do React Router

function NavBarLandingPage() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Paw Icon" className="logo-icon" />
      </div>
      <ul className="navbar-menu">
        <li>
          <RouterLink to="/" smooth={true} duration={500}>
            Home
          </RouterLink>
        </li>
        <li>
          <ScrollLink to="tips" smooth={true} duration={500}>
            Dicas
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={500}>
            Sobre
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="feedback" smooth={true} duration={500}>
            Feedback
          </ScrollLink>
        </li>
      </ul>
      {/* Corrigido para usar o RouterLink para navegação entre páginas */}
      <RouterLink to="/login" className="navbar-access-btn">
        Acessar
      </RouterLink>
    </nav>
  );
}

export default NavBarLandingPage;
