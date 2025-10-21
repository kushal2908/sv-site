"use client";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

type Props = {
  height?: string | number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  url?: string;
  isLargeContent?: boolean;
  isShortContent?: boolean;
};

export default function AnimatedCard({
  height,
  title,
  description,
  url,
  isLargeContent,
  isShortContent,
}: Props) {
  const [isActive, setIsActive] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1366px)",
  });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="w-full">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate={isActive ? "hover" : "rest"}
        onClick={() => setIsActive(!isActive)} // toggles on mobile
        className={cn(
          "group relative bg-[#401444] border border-gray-50/50 rounded-lg overflow-hidden w-full md:max-w-[400px] p-14 shadow-lg cursor-pointer"
          // add inner glow via pseudo
        )}
        style={{ height: height ?? "420px" }}
      >
        {/* Title */}
        <motion.h2
          variants={{
            rest: { opacity: 0, x: 0, y: -20 },
            hover: {
              opacity: 1,
              x: 0,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
            },
          }}
          className="absolute top-6 left-6 font-black text-xl text-white tracking-tight uppercase"
        >
          {title}
        </motion.h2>
        {url && (
          <motion.div
            variants={{
              rest: { opacity: 0, y: 10 },
              hover: {
                opacity: 1,
                y: 50,
                transition: { duration: 0.4, ease: "easeOut", delay: 0.2 },
              },
            }}
            className="absolute left-6 bottom-80 text-md font-bold text-gray-200 z-10 hover:underline"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              Visit Site →
            </a>
          </motion.div>
        )}

        {/* Description */}
        <motion.div
          variants={{
            rest: {
              scale: 1,
              x: 15,
              y: 100,
              transition: { duration: 0.5, ease: "easeIn" },
            },
            hover: {
              scale: 1,
              x: -35,
              y: isLargeContent
                ? isDesktopOrLaptop
                  ? 150
                  : isTablet
                  ? 120
                  : 320
                : isShortContent
                ? 280
                : 220,
              bottom: "auto",
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          <div className="text-white text-[14px] lg:text-[16px] tracking-tight">
            {description}
          </div>
        </motion.div>
      </motion.div>
    </a>
  );
}
