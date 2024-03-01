// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function SliderFlexContainer({children, clase,onSlideChange}) {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        grabCursor={false}
        navigation={true}
        onSlideChange={onSlideChange}
        initialSlide={2}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]} 
        className={clase}
        breakpoints={{
          // when window width is >= 640px
          300: {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            centeredSlides: true,

          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
          },

          992: {
            slidesPerView: 3,
            spaceBetween: 0,
            loop: false,
            centeredSlides: true,
          },

          1200: {
            slidesPerView: 5,
            spaceBetween: 0,
            loop: true,
            centeredSlides: true,
          },
        }}
      >
        {children}
      </Swiper>
    </>
  );
}
