import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logoVerde from './assets/LogoFisioTrack_Verde.png';
import './App.css';
import './Navbar.css'




function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);


    function onClickButton(){
        window.open("https://fisiotrack.vercel.app/", "_blank")
    }


    return(
        <nav className='navbar'>
            <img src={logoVerde} alt="" />

            <div className='navbar__links'>
                {/* <a href="#teste">Início</a> */}
                <a href="#objetivo">Objetivo</a>
                <a href="#diferencial">Diferencial</a>
                <a href="#equipe">Equipe</a>
                <a href="/">Fale Conosco</a>
                <button className='navbar-links__bt-visualizar' onClick={onClickButton}>Visualizar Projeto</button>
            </div>

            <button
                className="navbar__button-menu"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <FaBars className='menu-icon' />
            </button>
        </nav>
    );
}

export default Navbar;