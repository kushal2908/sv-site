import Image from 'next/image';
import React from 'react';

type Props = {
    src: string;
};

export default function ServiceImage({ src }: Props) {
    return (
        <div className="relative border border-gray-50/60 rounded-lg overflow-hidden">
            <Image
                src={src}
                alt="skill ventures service"
                width={1920}
                height={200}
                className="w-[500px] md:w-[400px] h-[250px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-[#401444]/40" />
        </div>
    );
}
