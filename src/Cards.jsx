import { LuStethoscope } from "react-icons/lu";
import './App.css';
import { GrTask } from "react-icons/gr";
import { FaPersonRunning } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";

export function Cards() {
  return (
    <div className='container-diferencial'>
      <h2>Nosso Diferencial</h2>
      <div className='container-main-card'>
        <div className='container-card'>
          <GrTask style={{ width: "120px", height: "90px" }} />
          <div className='container-card-text'>
            <p>Avaliações e testes especializados previamente cadastrados.</p>
          </div>
        </div>
        <div className='container-card'>
          <LuStethoscope style={{ width: "120px", height: "90px" }} />
          <div className='container-card-text'>
            <p>Criação e uso de Protocolos.</p>
          </div>
        </div>
        <div className='container-card'>
          <FaPersonRunning style={{ width: "120px", height: "90px" }} />
          <div className='container-card-text'>
            <p>Sessões de exercícios remotas para os pacientes.</p>
          </div>
        </div>
        <div className='container-card'>
          <IoIosPhonePortrait style={{ width: "120px", height: "90px" }} />
          <div className='container-card-text'>
            <p>Execução e registro de sessões de exercícios disponível para mobile.</p>
          </div>
        </div>
        <div className='container-card'>
          <BsGraphUpArrow style={{ width: "120px", height: "90px" }} />
          <div className='container-card-text'>
            <p>Gráfico para acompanhamento do EVA.</p>
          </div>
        </div>
        <div className='container-card'>
          <TbReportAnalytics style={{ width: "120px", height: "90px" }} />
          <div className='container-card-text'>
            <p>Geração de relatórios.</p>
          </div>
        </div>
      </div>
    </div >
  )
}