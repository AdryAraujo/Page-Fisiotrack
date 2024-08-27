import logoUfs from "./assets/ufs_horizontal_positiva.png"
import logoDcomp from "./assets/logo_dcomp.svg"
import './Footer.css'


export default function Footer(){
    return(
        <footer className="footer">
            <img className="footer__logo-ufs" src={logoUfs} alt="Logo da Ufs" />
            <img className="footer__logo-dcomp" src={logoDcomp} alt="Logo do Dcomp" />
        </footer>
    )
}