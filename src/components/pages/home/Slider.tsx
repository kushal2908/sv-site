'use client';
import MarqueeItem from '@/components/ui/MarqueeItem';

export default function LogoSlider() {
    return (
        <div className="min-h-[300px] flex items-center justify-center">
            <MarqueeItem images={clientLogos} from={0} to={'-100%'} />
        </div>
    );
}

const clientLogos = [
    '/slider/1.png',
    '/slider/2.png',
    '/slider/3.png',
    '/slider/5.png',
    '/slider/6.png',
    '/slider/7.png',
    '/slider/8.png',
    '/slider/9.png',
    '/slider/10.png',
    '/slider/11.png',
    '/slider/12.png',
    '/slider/13.png',
];
