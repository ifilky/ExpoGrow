import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import './Carrossel.css'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const Carrossel = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{delay:3000}}
        loop={true}
        navigation={true}
        pagination={{clickable:true}}
        className='swiper-container'>
            <h1 className='title'>Produtos Orgânicos, Amor e Cuidado</h1>
            <SwiperSlide className='slide-item'>
                <img src="/img/carousel3.jpg" alt="banner da página do terra viva" />  
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src="/img/carousel2.jpg" alt="banner da página do terra viva" />  
            </SwiperSlide>
            <SwiperSlide className='slide-item'>
                <img src="/img/carousel1.jpg" alt="banner da página do terra viva" />  
            </SwiperSlide>
        </Swiper>
    )
}

export default Carrossel