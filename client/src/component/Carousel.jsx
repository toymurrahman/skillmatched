
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../image/carousel1.jpg';
import img2 from '../image/carousel2.jpg';
import img3 from '../image/carousel3.jpg';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
  return (
    <div className="container px-6 py-10 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <Slide image={img1} text='Web development project '  /> </SwiperSlide>
        <SwiperSlide> <Slide image={img2} text='Graphics design project'  /> </SwiperSlide>
        <SwiperSlide> <Slide image={img3} text='Digital marketing project '  /> </SwiperSlide>

      
      </Swiper>
    </div>
  );
}
