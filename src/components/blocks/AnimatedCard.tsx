'use client';
import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import Link from 'next/link';

type Props = {
    height?: string | number;
    title?: React.ReactNode;
    description?: React.ReactNode;
    url?: string;
};

export default function AnimatedCard({ height, title, description, url }: Props) {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            animate="rest"
            className={cn(
                'group relative border border-gray-50/50 rounded-lg overflow-hidden w-full p-14 shadow-lg cursor-pointer'
                // add inner glow via pseudo
            )}
            style={{ height: height ?? 420 }}
        >
            {/* Title */}
            <motion.h2
                variants={{
                    rest: { opacity: 0, x: 0, y: -20 },
                    hover: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: { duration: 0.5, ease: 'easeOut' },
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
                            y: -50,
                            transition: { duration: 0.4, ease: 'easeOut' },
                        },
                    }}
                    className="absolute left-6 bottom-40 text-md font-bold text-gray-200 z-10 hover:underline"
                >
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        Visit Project →
                    </a>
                </motion.div>
            )}

            {/* Description */}
            <motion.div
                variants={{
                    rest: { x: '-50%', y: '-50%', left: '50%', top: '50%' },
                    hover: {
                        x: 0,
                        y: 0,
                        left: '1.0rem',
                        top: 'auto',
                        bottom: '1.5rem',
                        transition: { duration: 0.5, ease: 'easeOut' },
                    },
                }}
                className="absolute flex flex-col gap-2 text-white font-normal text-[18px] whitespace-pre-line"
            >
                {description}
            </motion.div>
        </motion.div>
    );
}
