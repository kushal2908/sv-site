import AnimatedCard from "@/components/blocks/AnimatedCard";
import ServiceImage from "@/components/blocks/ServiceImage";
import React from "react";
import ServiceMobile from "./service-mobile";
import ServiceVideo from "@/components/blocks/ServiceVideo";

export default function Services() {
  return (
    <>
      {/* Desktop view */}
      <div className="max-w-[1200px] mx-auto hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 pb-14">
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
          <div className="flex flex-col gap-2">
            <p className="">Customized Software Development</p>
            <p>Data Analytics & Visualization</p>
          </div>
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
          <div className="flex flex-col gap-2">
            <p className="">Image Editing</p>
            <p>Video Editing</p>
          </div>
        }
        url="https://skillgraphics.biz/"
      />
      <ServiceImage src={"/brands/mvrk/mvrk-1.jpg"} />
      <AnimatedCard
        title={<>AULEEK</>}
        description={
          <div className="flex flex-col gap-2">
            <p className="">Architectural & Product Visualization</p>
            <p>Data Analytics & Visualization</p>
          </div>
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
          <div className="flex flex-col gap-2">
            <p className="">Visual Effects</p>
            <p>Motion Graphics</p>
          </div>
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
      <ServiceVideo src={"/brands/mvrk/mvrk-vid.mp4"} />
      <AnimatedCard
        title={
          <>
            PLUS ONLINE <br /> MARKETING
          </>
        }
        description={
          <div className="flex flex-col gap-2">
            <p>Search Engine Optimization</p>
            <p>Content Marketing</p>
            <p>Website Design & Development</p>
            <p>Performance Marketing</p>
          </div>
        }
        url="https://plusonlinemarketing.com/"
        isLargeContent={true}
      />
      <ServiceImage src={"/brands/plus/plus-2.png"} />
    </div>
  );
};
