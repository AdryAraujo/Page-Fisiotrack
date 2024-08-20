import logoUfs from "./assets/ufs_horizontal_positiva.png"
import logoDcomp from "./assets/image.png";
import './App.css';


export function Footer(){
    return(
        <footer className="container-footer">
            <img className="logo-ufs" src={logoUfs} alt="" />
            <img src={logoDcomp} alt="" />
        </footer>
    )
}