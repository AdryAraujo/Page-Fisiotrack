import logoUfs from "./assets/ufs_horizontal_negativa.png"
import logoDcomp from "./assets/logo_dcomp.svg"
import './Footer.css'


export default function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo-ufs" src={logoUfs} alt="Logo da Ufs" />
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <h2>Entre em Contato conosco:</h2>
            <button className='navbar-links-mobile__bt-visualizar'>
                <p>fisiotrack@dcomp.ufs.br</p>
            </button>
            </div>
            <img className="footer__logo-dcomp" src={logoDcomp} alt="Logo do Dcomp" />
        </footer>
    )
}