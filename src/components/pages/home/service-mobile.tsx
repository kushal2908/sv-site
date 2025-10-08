import MobileAnimatedCard from '@/components/blocks/mobile-version/MobileAnimatedCard';
import MobileServiceImage from '@/components/blocks/mobile-version/MobileServiceImage';
import MobileServiceVideo from '@/components/blocks/mobile-version/MobileServiceVideo';

export default function ServiceMobile() {
    return (
        <div className="grid grid-cols-1 gap-4">
            {/* block one */}
            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <MobileServiceImage src={'/brands/skill-graphics/sk-1.jpg'} />
                    <MobileServiceImage src={'/brands/skill-graphics/sk-3.jpg'} />
                </div>
                <MobileAnimatedCard
                    title={
                        <>
                            Skill <br /> Graphics
                        </>
                    }
                    description={
                        <>
                            <p>Image Editing</p>
                            <p>Video Editing</p>
                        </>
                    }
                    url="https://skillgraphics.biz/"
                />
            </div>

            {/* Block Two */}
            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <MobileAnimatedCard
                        title={
                            <>
                                MVRK <br /> STUDIOS{' '}
                            </>
                        }
                        description={
                            <>
                                <p>Visual Effects</p>
                                <p>Motion Graphics</p>
                            </>
                        }
                        url="https://mvrk.tv/"
                    />
                    <MobileServiceVideo src={'/brands/mvrk/mvrk-vid.mp4'} />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <MobileServiceImage src={'/brands/v2/v2-1.png'} />
                    <MobileAnimatedCard
                        title={
                            <>
                                V2 <br /> Technologies
                            </>
                        }
                        description={
                            <>
                                <p>
                                    Customized Software <br /> Development
                                </p>
                                <p>
                                    Data Analytics & <br /> Visualization
                                </p>
                            </>
                        }
                        url="https://v2.ltd/"
                    />
                </div>
            </div>

            {/* Block Three */}
            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <MobileAnimatedCard
                        title={
                            <>
                                PLUS ONLINE <br /> MARKETING
                            </>
                        }
                        description={
                            <>
                                <p>Search Engine Optimization</p>
                                <p>Content Marketing</p>
                                <p className="transition-all duration-700 ease-out delay-200 group-hover:translate-y-0">
                                    Website Design & Development
                                </p>
                                <p className="transition-all duration-700 ease-out delay-200 group-hover:translate-y-0">
                                    Performance Marketing
                                </p>
                            </>
                        }
                        url="https://plusonlinemarketing.com/"
                    />
                    <MobileServiceImage src={'/brands/plus/plus-1.png'} />
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <MobileServiceImage src={'/brands/auleek/auleek-1.png'} />
                    <MobileAnimatedCard
                        title={<>AULEEK</>}
                        description={
                            <>
                                <p>
                                    Architectural & <br />
                                    Product Visualization
                                </p>
                                <p className="transition-all duration-700 ease-out delay-200 group-hover:translate-y-0">
                                    Data Analytics & <br /> Visualization
                                </p>
                            </>
                        }
                        url="https://auleek.com/"
                    />
                </div>
            </div>
        </div>
    );
}
