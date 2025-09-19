import AnimatedCard from "@/components/blocks/AnimatedCard";
import ServiceImage from "@/components/blocks/ServiceImage";
import React from "react";

export default function ServiceMobile() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Skill Graphics */}
      <div className="flex flex-col gap-4 items-center justify-center mb-4">
        <ServiceImage src={"/brands/skill-graphics/sk-1.jpg"} />
        <ServiceImage src={"/brands/skill-graphics/sk-3.jpg"} />
        <ServiceImage src={"/brands/skill-graphics/sk-2.jpg"} />
        <ServiceImage src={"/brands/skill-graphics/sk-4.jpg"} />
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
      </div>
      {/* mvrk */}
      <div className="flex flex-col gap-4 items-center justify-center mb-4">
        <ServiceImage src={"/brands/mvrk/mvrk-1.jpg"} />
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
      </div>
      {/* Plus */}
      <div className="flex flex-col gap-4 items-center justify-center mb-4">
        <ServiceImage src={"/brands/plus/plus-2.png"} />
        <ServiceImage src={"/brands/plus/plus-1.png"} />
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
      </div>
      {/* Auleek */}
      <div className="flex flex-col gap-4 items-center justify-center mb-4">
        <ServiceImage src={"/brands/auleek/auleek-1.png"} />
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
      {/* V2 */}
      <div className="flex flex-col gap-4 items-center justify-center mb-4">
        <ServiceImage src={"/brands/v2/v2-1.png"} />
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
      </div>
    </div>
  );
}
