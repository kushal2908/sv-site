"use client";
import React from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function LogoSlider() {
  return (
    <div className="min-h-[300px] flex items-center justify-center">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image
            src="/slider/apple-tv-logo.png"
            alt="apple-tv-logo"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/canal-hd-logo.png"
            alt="canal-hd-logo"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/hbo-max-black-logo.png"
            alt="hbo-max-black-logo"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
