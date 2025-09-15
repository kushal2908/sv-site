import React from "react";
import { cn } from "../lib/utils";

type Props = {
  height?: string | number;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

export default function AnimatedCard({ height, title, description }: Props) {
  return (
    <div
      className={cn(
        "group relative border border-gray-50/50 rounded-lg overflow-hidden w-full p-14",
        height ? `h-[${height}px]` : "h-[420px]"
      )}
    >
      {/* H1 (hidden initially, slides in to top-left) */}
      <h1
        className="absolute top-4 left-6 font-bold text-2xl text-white tracking-tight
                 opacity-0 -translate-y-4 -translate-x-4 transition-all duration-500 ease-out
                 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 uppercase"
      >
        {title}
      </h1>

      {/* P tags (center -> bottom-left) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                 flex flex-col gap-2 text-white text-xl transition-all duration-500 ease-out
                 group-hover:left-6 group-hover:top-auto group-hover:bottom-4 
                 group-hover:translate-x-0 group-hover:translate-y-0"
      >
        {description}
      </div>
    </div>
  );
}
