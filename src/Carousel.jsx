import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import celular from './assets/cellLg.png';
import computador from './assets/computerLg.png';
import todos from './assets/todosLg.png';
import testefer from "./assets/fer.png"
import "./Carousel.css";

export function Carousel() {

    // Defina os conteúdos que você deseja renderizar
    const slides = [
        <div className="teste-carrossel" key="slide-1">
            <img src={testefer} alt="Imagem do Slide 1" />
            <div className="carrossel-text">
                <h2>Débora é uma maluca chata</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eaque repellendus molestiae deserunt amet
                    officia impedit earum, debitis, illum assumenda commodi! Culpa dicta iste saepe est natus suscipit amet totam!</p>
            </div>
        </div>,
        <div className="slide-content" key="slide-2">Conteúdo do Slide 2</div>,
        <div className="slide-content" key="slide-3">Conteúdo do Slide 3</div>
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
                            <img src={testefer} alt={slides} />
                            <div>
                                <h2>DEbora é uma maluca chata</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eaque repellendus molestiae deserunt amet
                                    officia impedit earum, debitis, illum assumenda commodi! Culpa dicta iste saepe est natus suscipit amet totam!</p>
                            </div>
                        </div>
                        <div className="teste-carrossel">
                            <img src={testefer} alt={slides} />
                            <img src={testefer} alt={slides} />
                            <img src={testefer} alt={slides} />
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