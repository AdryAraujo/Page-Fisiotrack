import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import celular from './assets/cellLg.png';
import computador from './assets/computerLg.png';
import todos from './assets/todosLg.png';
import "./Carousel.css";

export function Carousel() {

    const slides = [todos, celular, computador]

    return (
        <div id="carousel" className="container-carousel">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination>
                {slides.map(slide => (
                    <SwiperSlide className="imagem">
                        <img src={slide} alt={slides} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}