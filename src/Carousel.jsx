import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
// import sessoes from './assets/cellLg.png';
// import computador from './assets/computerLg.png';
// import todos from './assets/todosLg.png';
import sessoes from "./assets/sessoes.png";
import todos from "./assets/todosDisp.png";
import grafico from "./assets/grafico.png";
import anamnese from "./assets/anamnese.png"
import protocolo from "./assets/protocolo.png"
import "./Carousel.css";

export function Carousel() {

    // Defina os conteúdos que você deseja renderizar
    const slides = [
        <div className="teste-carrossel" key="slide-1">
            <img src={todos} alt="Imagem do Slide 1" />
            <div className="carrossel-text">
                <h2>Disponível em todos os dispositivos</h2>
                <p>Site web que se adequa a todos os dispositivos, de celular a computador, nunca foi tão fácil gerenciar seus pacientes</p>
            </div>
        </div>,
        <div className="teste-carrossel" key="slide-2">
            <img src={grafico} alt="Imagem do Slide 1" />
            <div className="carrossel-text">
                <h2>Gráficos de evolução do paciente</h2>
                <p>Usar papel nunca mais, um novo jeito de monitorar a evolução dos pacientes, a partir de gráficos da Escala Visual Analógica e testes específicos!</p>
            </div>
        </div>,
        <div className="teste-carrossel" key="slide-3">
            <img src={sessoes} alt="Imagem do Slide 1" />
            <div className="carrossel-text">
                <h2>Sessões de exercícios remotas</h2>
                <p>Sessões de exercícios remotas personalizadas para cada paciente, com acompanhamento do fisioterapeuta!</p>
            </div>
        </div>,
        <div className="teste-carrossel" key="slide-3">
            <img src={anamnese} alt="Imagem do Slide 1" />
            <div className="carrossel-text">
                <h2>Anamnese digital</h2>
                <p>Cadastro simplificado da anamnese do paciente e histórico médico!</p>
            </div>
        </div>,
        <div className="teste-carrossel" key="slide-3">
            <img src={protocolo} alt="Imagem do Slide 1" />
            <div className="carrossel-text">
                <h2>Utilização de protocolos</h2>
                <p>Mecanismo para criação de protocolos específicos para facilitar o tratamento dos pacientes!</p>
            </div>
        </div>
    ];

    return (
        <>
            <div id="carousel" className="container-carousel">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination>
                    {slides.map((slideContent, index) => (
                        <SwiperSlide key={index} className="slide">
                            {slideContent}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* <div id="carousel" className="container-carousel teste">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination>
                    {slides.map(slide => (
                    <SwiperSlide className="imagem">
                        <div className="teste-carrossel">
                            <img src={sessoes} alt={slides} />
                            <div>
                                <h2>DEbora é uma maluca chata</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eaque repellendus molestiae deserunt amet
                                    officia impedit earum, debitis, illum assumenda commodi! Culpa dicta iste saepe est natus suscipit amet totam!</p>
                            </div>
                        </div>
                        <div className="teste-carrossel">
                            <img src={sessoes} alt={slides} />
                            <img src={sessoes} alt={slides} />
                            <img src={sessoes} alt={slides} />
                            <div>
                                <h2>DEbora é uma maluca chata</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eaque repellendus molestiae deserunt amet
                                    officia impedit earum, debitis, illum assumenda commodi! Culpa dicta iste saepe est natus suscipit amet totam!</p>
                            </div>
                        </div>
                    </SwiperSlide>
                                      ))} 
                </Swiper>
            </div> */}
        </>
    )
}