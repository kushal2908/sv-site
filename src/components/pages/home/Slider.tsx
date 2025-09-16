"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function LogoSlider() {
  // const [emblaRef] = useEmblaCarousel({ loop: true }, [
  //   Autoplay({ playOnInit: true, delay: 1000 }),
  // ]);

  return (
    <div className="min-h-[300px] flex items-center justify-center">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          {" "}
          <Image
            src="https://www.citypng.com/public/uploads/preview/adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png"
            alt="Adidas Logo"
            width={100}
            height={100}
            className="h-24 w-24 object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="https://www.citypng.com/public/uploads/preview/adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png"
            alt="Adidas Logo"
            width={100}
            height={100}
            className="h-20 w-20 object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="https://www.citypng.com/public/uploads/preview/adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png"
            alt="Adidas Logo"
            width={100}
            height={100}
            className="h-20 w-20 object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="https://www.citypng.com/public/uploads/preview/adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png"
            alt="Adidas Logo"
            width={100}
            height={100}
            className="h-20 w-20 object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="https://www.citypng.com/public/uploads/preview/adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png"
            alt="Adidas Logo"
            width={100}
            height={100}
            className="h-20 w-20 object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="https://www.citypng.com/public/uploads/preview/adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png"
            alt="Adidas Logo"
            width={100}
            height={100}
            className="h-20 w-20 object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="https://www.citypng.com/public/uploads/preview/adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png"
            alt="Adidas Logo"
            width={100}
            height={100}
            className="h-20 w-20 object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="https://www.citypng.com/public/uploads/preview/adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png"
            alt="Adidas Logo"
            width={100}
            height={100}
            className="h-20 w-20 object-contain"
          />
        </SwiperSlide>
      </Swiper>
      {/* <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide flex items-center justify-center">
            <Image
              src="https://www.esko.com/static/uploads/2024/02/nike-logo-1536x864.png"
              alt="Nike Logo"
              width={100}
              height={100}
              className="h-20 w-20 object-contain"
            />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image
              src="https://www.citypng.com/public/uploads/preview/adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png"
              alt="Adidas Logo"
              width={100}
              height={100}
              className="h-20 w-20 object-contain"
            />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image
              src="https://www.esko.com/static/uploads/2024/02/nike-logo-1536x864.png"
              alt="Nike Logo"
              width={100}
              height={100}
              className="h-20 w-20 object-contain"
            />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image
              src="https://www.citypng.com/public/uploads/preview/adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png"
              alt="Adidas Logo"
              width={100}
              height={100}
              className="h-20 w-20 object-contain"
            />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image
              src="https://www.esko.com/static/uploads/2024/02/nike-logo-1536x864.png"
              alt="Nike Logo"
              width={100}
              height={100}
              className="h-20 w-20 object-contain"
            />
          </div>
          <div className="embla__slide flex items-center justify-center">
            <Image
              src="https://www.citypng.com/public/uploads/preview/adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png"
              alt="Adidas Logo"
              width={100}
              height={100}
              className="h-20 w-20 object-contain"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
