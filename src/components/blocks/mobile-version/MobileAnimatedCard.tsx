'use client';
import React from 'react';
import { cn } from '../../lib/utils';

type Props = {
    height?: string | number;
    title?: React.ReactNode;
    description?: React.ReactNode;
    url?: string;
    isLargeContent?: boolean;
};

export default function MobileAnimatedCard({ height, title, description, url }: Props) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="w-full">
            <div
                className={cn(
                    'flex flex-col flex-wrap justify-between items-start content-stretch group relative bg-[#401444] border border-gray-50/80 rounded-2xl overflow-hidden p-4 shadow-lg cursor-pointer'
                )}
                style={{ height: height ?? '370px' }}
            >
                <h2 className="font-black text-[16px] text-white tracking-tight uppercase">{title}</h2>
                {url && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] font-bold text-gray-200 z-10 hover:underline"
                    >
                        Visit Site →
                    </a>
                )}

                <div className="text-white text-[14px] font-medium tracking-tight">{description}</div>
            </div>
        </a>
    );
}
