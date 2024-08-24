import CardEquipe from "./CardEquipe";
import './SectionEquipe.css'


export default function SectionEquipe() {
    return (
        <>
            <div id="equipe" className='section section-equipe bg-white'>
                <h2>Equipe de Desenvolvimento</h2>
                <div className="container-main-card ">
                    <CardEquipe nome={"Adryelle Araujo"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"black-text"} />
                    <CardEquipe nome={"Arthur Franklin"} funcao={"Desenvolvedor Back-end"} email={"arthuroliveira.s@outlook.com.br"} classeTexto={"black-text"}/>
                    <CardEquipe nome={"Breno Gabriel"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"black-text"}/>
                    <CardEquipe nome={"George Lucas"} funcao={"Desenvolvedor Back-end"} email={"georgelucas347@hotmail.com"} classeTexto={"black-text"}/>
                    <CardEquipe nome={"Gustavo Lucas"} funcao={"Desenvolvedor Front-end"} email={"gustavolucas864@gmail.com"} classeTexto={"black-text"}/>
                    <CardEquipe nome={"Luan Kyrtinem"} funcao={"Desenvolvedor Back-end"} email={"Kyrtinem@gmail.com"} classeTexto={"black-text"}/>
                    <CardEquipe nome={"Paulina Kayse"} funcao={"Desenvolvedor Back-end"} email={"kaspaulina@hotmail.com"} classeTexto={"black-text"}/>
                </div>
            </div>

            <div className='section section-equipe bg-transp'>
                <h2>Especialistas de Domínio</h2>
                <div className="container-main-card">
                    <CardEquipe nome={"Letícia Vitória"} funcao={"Product Owner"} email={"adryelle.comp13@gmail.com"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                    <CardEquipe nome={"Suziany Caduda"} funcao={"Product Owner"} email={"adryelle.comp13@gmail.com"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                    <CardEquipe nome={"Walderi"} funcao={"Product Owner"} email={"adryelle.comp13@gmail.com"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                </div>
            </div>

            <div className='section section-equipe bg-white'>
                <h2>Consultoria Técnica</h2>
                <div className="container-main-card">
                    <CardEquipe nome={"Debora"} funcao={"Orientadora"} email={"deboramcn@dcomp.ufs.br"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                    <CardEquipe nome={"Edilayne"} funcao={"Orientadora"} email={"edilayne@dcomp.ufs.br"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                    <CardEquipe nome={"Edward Moreno"} funcao={"Orientador"} email={"edward@dcomp.ufs.br"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                    <CardEquipe nome={"Ricardo"} funcao={"Orientador"} email={"ricardo@dcomp.ufs.br"} classeTexto={"verde-text"} classeTitulo={"verde-text"}/>
                </div>
            </div>
        </>
    )
}