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
        grabCursor={true}
        navigation={true}
        onSlideChange={onSlideChange}
        initialSlide={2}
        pagination={{
          clickable: true,
        }}
        /* modules={[Pagination]} */
        className={clase}
        breakpoints={{
          // when window width is >= 640px
          300: {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            centeredSlides: true,

          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
            centeredSlides: true,
            loop: false,
          },

          992: {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: false,
            centeredSlides: true,
          },

          1200: {
            slidesPerView: 6,
            spaceBetween: 30,
            loop: false,
            centeredSlides: true,
          },
        }}
      >
        {children}
      </Swiper>
    </>
  );
}
