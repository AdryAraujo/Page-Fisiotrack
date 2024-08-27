import logoBranco from './assets/LogoFisioTrack_Branco.png';
import './SectionBemVindo.css'


function SectionBemVindo(){
    return (
        <div className="section-bem-vindo">

            <img src={logoBranco} alt="" />
            <div className='section-bem-vindo__content-tittle'>
                <p>Seja bem vindo(a) ao</p>
                <h1>FisioTrack</h1>
                <p>Sistema de gerenciamento e monitoramento fisioterapêutico prático e acessível</p>
            </div>
      </div>
    );
}

export default SectionBemVindo;