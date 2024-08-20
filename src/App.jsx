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
          <p>O FisioTrack corresponde ao sistema WEB e Mobile desenvolvido para auxiliar o fisioterapeuta durante todo o processo de tratamento do paciente. Sua parte WEB cobre toda a parte de gestão das informações necessárias para o fisioterapeuta. Já a parte Mobile, permite que o paciente e o fisioterapeuta visualize e registre os exercícios prescritos em sessões de exercício.</p>
        </div>
      </div>
      {/* Diferenciais */}
      <Cards />
      <SectionEquipe />
    </>
  )
}

export default App
