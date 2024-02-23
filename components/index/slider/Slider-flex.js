// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function SliderFlex({children, clase}) {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        initialSlide={2}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className={clase}
        breakpoints={{
          // when window width is >= 640px
          350: {
            slidesPerView: 1,
            spaceBetween: 5,
            

          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 60,
          },

          992: {
            slidesPerView: 4,
            spaceBetween: 70,
          },

          1200: {
            slidesPerView: 5,
            spaceBetween: 80,
          },
        }}
      >
        {children}
      </Swiper>
    </>
  );
}
