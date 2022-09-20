import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import choicesDockImg from "../../images/choices-dock.png";
import choicesBackPackImg from "../../images/choices-backpack.png";
import choicesMouseImg from "../../images/choices-mouse.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div>
          <h4 className="text-base text-center">MacBook Dock</h4>
          <img src={choicesDockImg} />
          <h3 className="text-lg text-center text-pb-orange">$60</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h4 className="text-base text-center">Bellroy Backpack</h4>
          <img src={choicesBackPackImg} />
          <h3 className="text-lg text-center text-pb-orange">$45</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h4 className="text-base text-center">Mouse</h4>
          <img src={choicesMouseImg} />
          <h3 className="text-lg text-center text-pb-orange">$320</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h4 className="text-base text-center">MacBook Dock</h4>
          <img className="my-auto mx-auto" src={choicesDockImg} />
          <h3 className="text-lg text-center">$60</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
