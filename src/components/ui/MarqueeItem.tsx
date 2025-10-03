/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MarqueeItem({
  images,
  from,
  to,
}: {
  images: string[];
  from: number | string;
  to: number | string;
}) {
  return (
    <div className="flex my-24 overflow-hidden">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image: any, index: number) => {
          return (
            <Image
              width={200}
              height={200}
              alt={`marqueImg${index}`}
              className="object-contain pr-20"
              src={image}
              key={index}
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image: any, index: number) => {
          return (
            <Image
              width={200}
              height={200}
              alt={`marqueImg${index}`}
              className="object-contain pr-20"
              src={image}
              key={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
