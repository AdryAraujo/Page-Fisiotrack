import imgObjetivo from './assets/logoExercices.svg';
// import wavesTop from './assets/waveTop_25px.svg'
// import wavesBottom from './assets/waveBottom_25px.svg'
import "./SectionObjetivo.css"


function SectionObjetivo() {
    return (
        <>
            {/* <img src={wavesTop} alt="imagem de transicao" className='waves' /> */}

            <div id="objetivo" className='section section-objetivo'>
                <img src={imgObjetivo} alt="Pacientes se exercitando" />
                <div className='content-text'>
                    <h2>Nosso Objetivo</h2>
                    <p>
                        O FisioTrack corresponde ao sistema WEB e Mobile desenvolvido
                        para <span>auxiliar o fisioterapeuta durante todo o processo de tratamento do paciente</span>.
                        Seu módulo WEB abrange toda a parte de gestão das informações necessárias para o fisioterapeuta,
                        que corresponde ao cadastro do paciente, tratamento, sessão e entre outras. Já o módulo Mobile
                        permite que o paciente e o fisioterapeuta visualize e registre os exercícios
                        prescritos para a sessão
                    </p>
                </div>
            </div>

            {/* <img src={wavesBottom} alt="imagem de transicao" className='waves' /> */}
        </>
    );
}

export default SectionObjetivo;