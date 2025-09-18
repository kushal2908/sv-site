'use client';
import React from 'react';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
                        src="/slider/apple-tv-logo.png"
                        alt="skill-ventrure-clients"
                        width={1920}
                        height={200}
                        className="w-full h-[100px] object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/canal-hd-logo.png"
                        alt="skill-ventrure-clients"
                        width={1920}
                        height={200}
                        className="w-full h-[100px] object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/hbo-max-black-logo.png"
                        alt="skill-ventrure-clients"
                        width={1920}
                        height={200}
                        className="w-full h-[100px] object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/pepe-jense.png"
                        alt="skill-ventrure-clients"
                        width={1920}
                        height={200}
                        className="w-full h-[100px] object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/dkny.png"
                        alt="skill-ventrure-clients"
                        width={1920}
                        height={200}
                        className="w-full h-[100px] object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/mango.png"
                        alt="skill-ventrure-clients"
                        width={1920}
                        height={200}
                        className="w-full h-[100px] object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/adolf.png"
                        alt="skill-ventrure-clients"
                        width={1920}
                        height={200}
                        className="w-full h-[100px] object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/adidas.png"
                        alt="skill-ventrure-clients"
                        width={1920}
                        height={200}
                        className="w-full h-[100px] object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/inditex.png"
                        alt="skill-ventrure-clients"
                        width={1920}
                        height={200}
                        className="w-full h-[100px] object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/s-oliver.png"
                        alt="skill-ventrure-clients"
                        width={1920}
                        height={200}
                        className="w-full h-[100px] object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/slider/gap.png"
                        alt="skill-ventrure-clients"
                        width={1920}
                        height={200}
                        className="w-full h-[100px] object-contain"
                    />
                </SwiperSlide>{' '}
                <SwiperSlide>
                    <Image
                        src="/slider/zalando.png"
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
