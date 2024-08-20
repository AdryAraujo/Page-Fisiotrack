import { CardEquipe } from "./CardEquipe";
import './App.css';
import './CardsEquipe.css';

export function SectionEquipe() {
    return (
        <>
            <div className='container-main-equipe'>
                <h2>Equipe Desenvolvimento</h2>
                <div className="container-main-card ">
                    <CardEquipe nome={"Adryelle Araujo"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"black-text"} />
                    <CardEquipe nome={"Arthur Franklin"} funcao={"Desenvolvedor Back-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"black-text"}/>
                    <CardEquipe nome={"Breno Gabriel"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"black-text"}/>
                    <CardEquipe nome={"George Lucas"} funcao={"Desenvolvedor Back-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"black-text"}/>
                    <CardEquipe nome={"Gustavo Lucas"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"black-text"}/>
                    <CardEquipe nome={"Luan Kyrtinem"} funcao={"Desenvolvedor Back-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"black-text"}/>
                    <CardEquipe nome={"Paulina Kayse"} funcao={"Desenvolvedor Back-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"black-text"}/>
                </div>
            </div>
            <div className='container-main-equipe verde'>
                <h2>Especialistas de Domínio</h2>
                <div className="container-main-card">
                    <CardEquipe nome={"Letícia Vitória"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                    <CardEquipe nome={"Suziany Caduda"} funcao={"Desenvolvedor Back-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                    <CardEquipe nome={"Walderi"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                </div>
                <h2>Consultoria Técnica</h2>
                <div className="container-main-card">
                    <CardEquipe nome={"Debora"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                    <CardEquipe nome={"Edilayne"} funcao={"Desenvolvedor Back-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                    <CardEquipe nome={"Edward Moreno"} funcao={"Desenvolvedor Back-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                    <CardEquipe nome={"Ricardo"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                </div>
            </div>
        </>
    )
}