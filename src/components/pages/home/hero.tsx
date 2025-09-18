import Image from 'next/image';
import React from 'react';

export default function Hero() {
    return (
        <section className="min-h-[600px] flex items-center justify-center">
            <Image src={'/hero.png'} alt="Hero Image" width={1920} height={1080} className="absolute object-contain h-full w-full -z-10" />
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    <div className="max-w-[600px]">
                        <h1 className="text-4xl md:text-[50px] text-white text-center md:text-left leading-tight uppercase">
                            Your global <br /> partner in <br /> a dynamic <br />
                            digital landscape.
                        </h1>
                    </div>
                    <div>
                        <Image src={'/logo.png'} alt="Hero Image" width={500} height={400} className="w-full h-[200px] object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
}
