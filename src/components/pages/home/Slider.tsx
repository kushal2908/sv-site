'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export default function Slider() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 1000 })]);

    return (
        <div className="min-h-[300px] flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto px-4" ref={emblaRef}>
                <div className="flex gap-4">
                    <div className="">
                        <Image
                            src={'https://www.esko.com/static/uploads/2024/02/nike-logo-1536x864.png'}
                            alt=""
                            width={100}
                            height={100}
                            className="h-20 w-20 object-contain"
                        />
                    </div>
                    <div className="">
                        <Image
                            src={'https://www.citypng.com/public/uploads/preview/adidas-white-logo-hd-png-701751694777208ogwssxbgpj.png'}
                            alt=""
                            width={100}
                            height={100}
                            className="h-20 w-20 object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
