import AnimatedCard from "@/components/blocks/AnimatedCard";
import ServiceImage from "@/components/blocks/ServiceImage";
import React from "react";
import ServiceMobile from "./service-mobile";

export default function Services() {
  return (
    <>
      {/* Desktop view */}
      <div className="max-w-[1600px] mx-auto hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 pb-14">
        <ColumnOne />
        <ColumnTwo />
        <ColumnThree />
        <ColumnFour />
      </div>
      {/* Mobile view */}
      <div className="mx-auto px-4 block lg:hidden">
        <ServiceMobile />
      </div>
    </>
  );
}

const ColumnOne = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <ServiceImage src={"/brands/skill-graphics/sk-1.jpg"} />
      <ServiceImage src={"/brands/skill-graphics/sk-3.jpg"} />
      <AnimatedCard
        title={
          <>
            V2 <br /> Technologies
          </>
        }
        description={
          <>
            <p className="transition-all duration-700 ease-out delay-100 group-hover:translate-y-0">
              Customized Software <br /> Development
            </p>
            <p className="transition-all duration-700 ease-out delay-200 group-hover:translate-y-0">
              Data Analytics & <br /> Visualization
            </p>
          </>
        }
        url="https://v2.ltd/"
      />
      <ServiceImage src={"/brands/v2/v2-1.png"} />
    </div>
  );
};

const ColumnTwo = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <AnimatedCard
        title={
          <>
            Skill <br /> Graphics
          </>
        }
        description={
          <>
            <p className="transition-all duration-700 ease-out delay-100 group-hover:translate-y-0">
              Image Editing
            </p>
            <p className="transition-all duration-700 ease-out delay-200 group-hover:translate-y-0">
              Video Editing
            </p>
          </>
        }
        url="https://skillgraphics.biz/"
      />
      <ServiceImage src={"/brands/mvrk/mvrk-1.jpg"} />
      <AnimatedCard
        title={<>AULEEK</>}
        description={
          <>
            <p className="transition-all duration-700 ease-out delay-100 group-hover:translate-y-0">
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
  );
};

const ColumnThree = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <ServiceImage src={"/brands/skill-graphics/sk-2.jpg"} />
      <AnimatedCard
        title={
          <>
            MVRK <br /> STUDIOS{" "}
          </>
        }
        description={
          <>
            <p className="transition-all duration-700 ease-out delay-100 group-hover:translate-y-0">
              Visual Effects
            </p>
            <p className="transition-all duration-700 ease-out delay-200 group-hover:translate-y-0">
              Motion Graphics
            </p>
          </>
        }
        url="https://mvrk.tv/"
      />
      <ServiceImage src={"/brands/plus/plus-1.png"} />
      <ServiceImage src={"/brands/auleek/auleek-1.png"} />
    </div>
  );
};

const ColumnFour = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <ServiceImage src={"/brands/skill-graphics/sk-4.jpg"} />
      <div className="relative border border-gray-50/50 rounded-lg overflow-hidden">
        <video
          src="/brands/mvrk/mvrk-vid.mp4"
          autoPlay
          loop
          muted
          className="w-[500px] md:w-[430px] h-[250px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-[#401444]/40" />
      </div>
      <AnimatedCard
        title={
          <>
            PLUS ONLINE <br /> MARKETING
          </>
        }
        description={
          <>
            <p className="transition-all duration-700 ease-out delay-100 group-hover:translate-y-0">
              Search Engine Optimization
            </p>
            <p className="transition-all duration-700 ease-out delay-100 group-hover:translate-y-0">
              Content Management
            </p>
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
      <ServiceImage src={"/brands/plus/plus-2.png"} />
    </div>
  );
};
