import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './App.css';
import logo from './assets/LogoFisioTrack_Branco.png';
import imgObjetivo from './assets/logoExercices.svg';
import { Cards } from './Cards';
import { CardEquipe } from './CardEquipe';
import { SectionEquipe } from './SectionEquipe';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="navbar-image">
        <nav className='navbar-options'>
          <img src={logo} alt="" />
          <button
            className="menu"
            onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className='menu-icon' />
          </button>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/">Diferenciais</a>
            </li>
            <li>
              <a href="/">Nossa Equipe</a>
            </li>
            <li>
              <a href="/">Fale Conosco</a>
            </li>
          </ul>
        </nav>
        <div className='container-main'>
          <img src={logo} alt="" />
          <div className='content-tittle'>
            <p>Seja bem vindo(a) ao</p>
            <h1>FisioTrack</h1>
            <p>(Frase de pitch) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar ultricies turpis in dignissim</p>
          </div>
        </div>
      </div>
      <div>
      </div>
      {/* objetivos */}
      <div className='container-objetivo'>
        <img src={imgObjetivo} alt="" />
        <div className='content-text'>
          <h2>Nosso Objetivo</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar ultricies turpis in dignissim. Aenean luctus iaculis nulla, at tempor felis luctus ut. Nunc semper neque a consequat placerat. Pellentesque tortor ex, sodales nec est eget, imperdiet accumsan orci. Nam et ipsum interdum, auctor velit fringilla, finibus odio. Maecenas posuere at elit vel efficitur.</p>
        </div>
      </div>
      {/* Diferenciais */}
      <Cards/>
      <SectionEquipe/>
    </>
  )
}

export default App
