import { CardEquipe } from "./CardEquipe";
import './App.css';

export function SectionEquipe() {
    return (
        <div className='container-main-equipe'>
            <h2>Equipe Desenvolvimento</h2>
            <div className="container-main-card">
                <CardEquipe nome={"Adryelle Araujo"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} />
                <CardEquipe nome={"Arthur Franklin"} funcao={"Desenvolvedor Back-end"} email={"adryelle.comp13@gmail.com"} />
                <CardEquipe nome={"Breno Gabriel"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} />
                <CardEquipe nome={"George Lucas"} funcao={"Desenvolvedor Back-end"} email={"adryelle.comp13@gmail.com"} />
                <CardEquipe nome={"Gustavo Lucas"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} />
                <CardEquipe nome={"Luan Kyrtinem"} funcao={"Desenvolvedor Back-end"} email={"adryelle.comp13@gmail.com"} />
                <CardEquipe nome={"Paulina Kayse"} funcao={"Desenvolvedor Back-end"} email={"adryelle.comp13@gmail.com"} />
            </div>
        </div>
    )
}