import CardEquipe from "./CardEquipe";
import './SectionEquipe.css'
import adry from './assets/adry.jpg';
import gust from './assets/gust.png';
import george from './assets/george.png';
import paulina from './assets/paulina.png';
import arthur from './assets/arthur.png';
import breno from './assets/breno.png';
import luan from './assets/luan.png';
import edward from './assets/edward.svg';
import edilayne from './assets/edilayne.jpeg';
import ricardo from './assets/ricardo.svg';
import leticia from './assets/leticia.svg';
import suziany from './assets/suziany.svg';
import walderi from './assets/walderi.svg';
import debora from './assets/debora.jpg';


export default function SectionEquipe() {

    function handleClickEmail(){
        navigator.clipboard.writeText("fisiotrack@dcomp.ufs.br");
        alert("Email copiado para a área de transferência!")
    }


    return (
        <>
            <div id="equipe" className='section section-equipe bg-white'>
                <h2>Equipe de Desenvolvimento</h2>
                <div className="container-main-card ">
                    <CardEquipe nome={"Adryelle Silva"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"black-text"} imageEquipe={adry} />
                    <CardEquipe nome={"Arthur Oliveira"} funcao={"Desenvolvedor Back-end"} email={"arthuroliveira.s@outlook.com.br"} classeTexto={"black-text"} imageEquipe={arthur} />
                    <CardEquipe nome={"Breno Sacerdote"} funcao={"Desenvolvedor Front-end"} email={"adryelle.comp13@gmail.com"} classeTexto={"black-text"} imageEquipe={breno} />
                    <CardEquipe nome={"George Nunes"} funcao={"Desenvolvedor Back-end"} email={"georgelucas347@hotmail.com"} classeTexto={"black-text"} imageEquipe={george} />
                    <CardEquipe nome={"Gustavo Santana"} funcao={"Desenvolvedor Front-end"} email={"gustavolucas864@gmail.com"} classeTexto={"black-text"} imageEquipe={gust} />
                    <CardEquipe nome={"Luan Gomes"} funcao={"Desenvolvedor Back-end"} email={"Kyrtinem@gmail.com"} classeTexto={"black-text"} imageEquipe={luan} />
                    <CardEquipe nome={"Paulina Santos"} funcao={"Desenvolvedor Back-end"} email={"kaspaulina@hotmail.com"} classeTexto={"black-text"} imageEquipe={paulina} />
                </div>
                {/* <div className="section-equipe">
                    <h4 style={{ textAlign: "center" }}>Entre em contato: <a style={{ color: "black" }} href="fisiotrack@dcomp.ufs.br">fisiotrack@dcomp.ufs.br</a></h4>

                </div> */}
            </div>

            <div className='section section-equipe bg-transp'>
                <h2>Especialistas de Domínio</h2>
                <div className="container-main-card">
                    <CardEquipe nome={"Letícia Carvalho"} email={"adryelle.comp13@gmail.com"} classeTexto={"verde-text"} classeTitulo={"verde-text"} imageEquipe={leticia} />
                    <CardEquipe nome={"Ma. Suziany Caduda"} email={"adryelle.comp13@gmail.com"} classeTexto={"verde-text"} classeTitulo={"verde-text"} imageEquipe={suziany} />
                    <CardEquipe nome={"Dr. Walderi Monteiro"} email={"adryelle.comp13@gmail.com"} classeTexto={"verde-text"} classeTitulo={"verde-text"} imageEquipe={walderi} />
                </div>
            </div>

            <div className='section section-equipe bg-white'>
                <h2>Consultoria Técnica</h2>
                <div className="container-main-card">
                    <CardEquipe nome={"Dra. Debora Nascimento"} email={"deboramcn@dcomp.ufs.br"} classeTexto={"verde-text"} classeTitulo={"verde-text"} imageEquipe={debora} />
                    <CardEquipe nome={"Dra. Edilayne Salgueiro"} email={"edilayne@dcomp.ufs.br"} classeTexto={"verde-text"} classeTitulo={"verde-text"} imageEquipe={edilayne} />
                    <CardEquipe nome={"Dr. Edward Moreno"} email={"edward@dcomp.ufs.br"} classeTexto={"verde-text"} classeTitulo={"verde-text"} imageEquipe={edward} />
                    <CardEquipe nome={"Dr. Ricardo Salgueiro"} email={"ricardo@dcomp.ufs.br"} classeTexto={"verde-text"} classeTitulo={"verde-text"} imageEquipe={ricardo} />
                </div>
            </div>
        </>
    )
}