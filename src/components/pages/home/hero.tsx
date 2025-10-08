import Image from 'next/image';
import React from 'react';

export default function Hero() {
    return (
        <section className="relative min-h-[600px] flex justify-center items-center ">
            <Image
                src={'/hero.png'}
                alt="Hero Image"
                width={1920}
                height={500}
                className="absolute object-contain h-[600px] w-full -z-10 top-10 "
            />

            <div className=" w-[1100px] flex flex-col md:flex-row justify-between items-center gap-4 ">
                {/* For Desktop */}
                <h1 className="hidden md:block text-4xl md:text-[50px] text-white text-center md:text-left leading-tight uppercase mb-14 md:mb-0">
                    Your global <br /> partner in <br /> a dynamic <br />
                    digital landscape.
                </h1>

                {/* For Mobile */}
                <h1 className="block md:hidden text-4xl md:text-[50px] text-white text-center md:text-left leading-tight uppercase mb-14 md:mb-0 px-8 order-1">
                    Your global partner in a dynamic digital landscape.
                </h1>

                <div>
                    <Image
                        src={'/logo.png'}
                        alt="Hero Image"
                        width={500}
                        height={400}
                        className="w-full h-[100px] md:h-[200px] mb-12 md:mb-0 object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

//  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
