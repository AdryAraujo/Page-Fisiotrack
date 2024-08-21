import imgObjetivo from './assets/logoExercices.svg';
import "./SectionObjetivo.css"


function SectionObjetivo(){
    return (
        <div id="objetivo" className='section section-objetivo'>
            <img src={imgObjetivo} alt="Pacientes se exercitando" />
            <div className='content-text'>
                <h2>Nosso Objetivo</h2>
                <p>
                    O FisioTrack corresponde ao sistema WEB e Mobile desenvolvido 
                    para <span>auxiliar o fisioterapeuta durante todo o processo de tratamento do paciente</span>. 
                    Sua parte WEB cobre toda a parte de gestão das informações necessárias para o fisioterapeuta. 
                    Já a parte Mobile, permite que o paciente e o fisioterapeuta visualize e registre os 
                    exercícios prescritos em sessões de exercício.
                </p>
            </div>
        </div>
    );
}

export default SectionObjetivo;