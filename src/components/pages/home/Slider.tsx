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
        spaceBetween={10}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image
            src="/slider/1.png"
            alt="skill-ventrure-clients"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/3.png"
            alt="skill-ventrure-clients"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/4.jpg"
            alt="skill-ventrure-clients"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/5.png"
            alt="skill-ventrure-clients"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/6.jpg"
            alt="skill-ventrure-clients"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/7.jpg"
            alt="skill-ventrure-clients"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/8.png"
            alt="skill-ventrure-clients"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/9.jpg"
            alt="skill-ventrure-clients"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/10.png"
            alt="skill-ventrure-clients"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/11.jpg"
            alt="skill-ventrure-clients"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/slider/12.jpg"
            alt="skill-ventrure-clients"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Image
            src="/slider/1.png"
            alt="skill-ventrure-clients"
            width={1920}
            height={200}
            className="w-full h-[100px] object-contain"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
