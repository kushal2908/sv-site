import AnimatedCard from "@/components/blocks/AnimatedCard";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 pb-14">
      <ColumnOne />
      <ColumnTwo />
      <ColumnThree />
      <ColumnFour />
    </div>
  );
}

const ColumnOne = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="border border-gray-50/50 rounded-lg overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={100}
          height={200}
          className="w-full h-[200px] object-contain"
        />
      </div>
      <div className="border border-gray-50/50 rounded-lg overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={100}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />
      </div>
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
      />
      <div className="border border-gray-50/50 rounded-lg overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={100}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />
      </div>
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
      />
      <div className="border border-gray-50/50 rounded-lg overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={100}
          height={200}
          className="w-full h-[200px] object-contain"
        />
      </div>
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
      />
    </div>
  );
};

const ColumnThree = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="border border-gray-50/50 rounded-lg overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={100}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />
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
      />
      <div className="border border-gray-50/50 rounded-lg overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={100}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />
      </div>{" "}
      <div className="border border-gray-50/50 rounded-lg overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={100}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

const ColumnFour = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="border border-gray-50/50 rounded-lg overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={100}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />
      </div>
      <div className="border border-gray-50/50 rounded-lg overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={100}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />
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
              Search Engine <br /> Optimization
            </p>
            <p className="transition-all duration-700 ease-out delay-200 group-hover:translate-y-0">
              Website Design & <br /> Development
            </p>
            <p className="transition-all duration-700 ease-out delay-200 group-hover:translate-y-0">
              Performance <br />
              Marketing
            </p>
          </>
        }
      />
      <div className="border border-gray-50/50 rounded-lg overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          width={100}
          height={200}
          className="w-full h-[200px] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};
