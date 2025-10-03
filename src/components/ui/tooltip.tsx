"use client";
import React, { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Placement = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: ReactNode;
  placement?: Placement;
  delay?: number; // delay in ms before showing
  children: ReactNode; // trigger element
  className?: string; // additional classes for tooltip box
  arrow?: boolean; // show arrow
}

export default function Tooltip({
  content,
  placement = "top",
  delay = 100,
  children,
  className = "",
  arrow = true,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false); // used for delay
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // compute tooltip position when opened
  const computePosition = () => {
    const trigger = triggerRef.current;
    const tip = tooltipRef.current;
    if (!trigger || !tip) return;

    const tRect = trigger.getBoundingClientRect();
    const tipRect = tip.getBoundingClientRect();

    const scrollY = window.scrollY || window.pageYOffset;
    const scrollX = window.scrollX || window.pageXOffset;

    let top = 0;
    let left = 0;

    switch (placement) {
      case "top":
        top = tRect.top + scrollY - tipRect.height - 8; // 8px gap
        left = tRect.left + scrollX + tRect.width / 2 - tipRect.width / 2;
        break;
      case "bottom":
        top = tRect.top + scrollY + tRect.height + 8;
        left = tRect.left + scrollX + tRect.width / 2 - tipRect.width / 2;
        break;
      case "left":
        top = tRect.top + scrollY + tRect.height / 2 - tipRect.height / 2;
        left = tRect.left + scrollX - tipRect.width - 8;
        break;
      case "right":
        top = tRect.top + scrollY + tRect.height / 2 - tipRect.height / 2;
        left = tRect.left + scrollX + tRect.width + 8;
        break;
      default:
        break;
    }

    // keep inside viewport horizontally
    const pad = 8;
    const maxLeft = document.documentElement.clientWidth - tipRect.width - pad;
    left = Math.min(Math.max(left, pad), Math.max(maxLeft, pad));

    // keep inside viewport vertically
    const maxTop =
      document.documentElement.clientHeight + scrollY - tipRect.height - pad;
    top = Math.min(
      Math.max(top, scrollY + pad),
      Math.max(maxTop, scrollY + pad)
    );

    setCoords({ top, left });
  };

  useEffect(() => {
    if (open) {
      // delay appearance
      timeoutRef.current = window.setTimeout(() => setVisible(true), delay);
      computePosition();
    } else {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      setVisible(false);
    }

    const handleResize = () => open && computePosition();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize, true);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize, true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, placement, delay]);

  // framer-motion variants
  const variants = {
    hidden: {
      opacity: 0,
      y: placement === "top" ? 6 : placement === "bottom" ? -6 : 0,
      x: placement === "left" ? 6 : placement === "right" ? -6 : 0,
      scale: 0.98,
    },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };

  // accessible id
  const id = `tooltip-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <>
      <div
        ref={triggerRef}
        className="inline-block"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-describedby={open || visible ? id : undefined}
        tabIndex={0}
      >
        {children}
      </div>

      {/* Tooltip rendered at document body level using portal-like absolute positioning */}
      <AnimatePresence>
        {visible && (
          <motion.div
            ref={tooltipRef}
            key={id}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ duration: 0.14, ease: "easeOut" }}
            role="tooltip"
            id={id}
            style={{
              position: "absolute",
              top: coords.top,
              left: coords.left,
              zIndex: 9999,
            }}
          >
            <div
              className={`pointer-events-none max-w-xs text-sm ${className}`}
            >
              <div className="rounded-xl px-3 py-2 shadow-lg bg-gray-900 text-white text-center text-sm leading-tight">
                {content}
              </div>
              {arrow && (
                <div
                  aria-hidden
                  className={`w-3 h-3 transform rotate-45 translate-y-0 relative -mt-2 mx-auto`}
                  style={{ marginTop: -6 }}
                >
                  {/* small square rotated to look like an arrow; we match bg by inheriting */}
                  <div className="w-full h-full bg-gray-900 rounded-sm" />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/*
Usage:

import Tooltip from './FramerMotionTooltip';

<Tooltip content={"I'm a tooltip"} placement="bottom" delay={120}>
  <button className="px-3 py-2 bg-sky-500 text-white rounded">Hover me</button>
</Tooltip>

Notes / features:
- Uses framer-motion for a subtle pop+fade animation.
- Positions itself by measuring the trigger and tooltip elements; keeps inside viewport.
- Accessible: sets role="tooltip" and aria-describedby on the trigger.
- Props: content, placement (top|bottom|left|right), delay (ms), arrow, className.
- No external positioning library used (small, dependency-free). For complex positioning use Floating UI / Popper.
*/
