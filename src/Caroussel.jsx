import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import celular from './assets/cellLg.png';
import computador from './assets/computerLg.png';
import todos from './assets/todosLg.png';
import "./Carousel.css";

export function Caroussel() {

    const slides = [todos, celular, computador]

    return (
        <div className="container-carousel">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination>
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx} className="imagem">
                        <img src={slide} alt={slides} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}