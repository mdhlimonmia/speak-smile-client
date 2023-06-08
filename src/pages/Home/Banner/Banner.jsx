import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "../../../assets/banner/1.jpg";
import banner2 from "../../../assets/banner/2.jpg";
import banner3 from "../../../assets/banner/3.jpg";
import banner4 from "../../../assets/banner/4.jpg";
import banner5 from "../../../assets/banner/5.jpg";
import banner6 from "../../../assets/banner/6.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Banner = () => {
  const bannerText = (
    <div className="w-1/2 absolute top-0 h-full lg:p-32 backdrop-blur-sm text-white space-y-5">
            <h1 className="text-5xl text-blue-500 font-bold font-sans"> Speak Smile</h1>
            <p className="text-2xl font-serif font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              doloribus, sed, necessitatibus quasi
            </p>
          </div>
  )
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={banner1} className="w-full h-[500px]" alt="" />
          {bannerText}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={banner2} className="w-full h-[500px]" alt="" />{" "}
           {bannerText}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={banner3} className="w-full h-[500px]" alt="" />{" "}
           {bannerText}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={banner4} className="w-full h-[500px]" alt="" />{" "}
           {bannerText}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={banner5} className="w-full h-[500px]" alt="" />{" "}
           {bannerText}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={banner6} className="w-full h-[500px]" alt="" />{" "}
           {bannerText}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
