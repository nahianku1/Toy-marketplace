import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

function Gallery() {
  return (
    <>
      <div className="flex dark:bg-slate-800 flex-col justify-center items-center my-[20px] lg:mx-[120px]  min-w-[310px]">
        <div>
          <h1 className="text-3xl dark:text-white font-pacifico font-bold text-center">
            Gallery
          </h1>
          <p className="text-[15px] dark:text-white text-center mx-[20px] tracking-wider mt-[20px]">
            Our toy gallery has something for everyone, from babies to adults.
            We carry a wide variety of toys, including dolls, action figures,
            board games, puzzles, and more. We also have a selection of
            educational toys that are perfect for helping children learn and
            grow.
          </p>
        </div>

        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            autoplay={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
          >
            <SwiperSlide className="w-[200px]">
              <img src="https://images.unsplash.com/photo-1567619863709-1d5361a78241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1532065748478-90d89bcb334e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1611250535839-94b88cf88bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1623939012339-5b3dc8eca7c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=875&q=80" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1611250535839-94b88cf88bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1600876997455-4cafa4c419d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1647895559376-a512dfaf0f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=572&q=80" />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </>
  );
}

export default Gallery;
