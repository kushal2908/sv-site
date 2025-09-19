"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
type Props = {
  src: string;
};

export default function ServiceVideo({ src }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="relative group border border-gray-50/60 rounded-lg overflow-hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <video
          src={src}
          autoPlay
          loop
          muted
          className="w-[500px] md:w-[430px] h-[250px] object-cover rounded-lg transform transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#401444]/40 transition group-hover:bg-[#401444]/0" />
      </div>
      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setOpen(false)} // click outside closes
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] w-full p-4"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
            >
              <video
                src={src}
                autoPlay
                loop
                muted
                className="w-full h-[80vh] px-4 object-cover rounded-lg"
              />
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white bg-[#401444]/60 px-3 py-1 rounded-md"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
