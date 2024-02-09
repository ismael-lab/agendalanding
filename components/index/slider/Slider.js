import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay, Navigation, Keyboard} from "swiper";


export default function Slider({children, clase, slides, center, gap}) {

  return (
    <>
    <section className='slider'>
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Autoplay]} 
          className={`mySwiper ${clase}`}          
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={3}
          navigation={true}
          keyboard={true}
          pagination={{
            clickable: true,
          }} 
          autoplay={{disableOnInteraction: false,
          delay: 3500,
          pauseOnMouseEnter: true,}}
          
          >
        
        {children}
        </Swiper>
    </section>
    </>
  )
}
