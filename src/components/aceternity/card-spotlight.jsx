"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useState } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { cn } from "../../utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    (<div
      className={cn(
        "group/spotlight p-[3.75rem] w-[37.125rem] rounded-[1.25rem] relative",
        className
      )}
      style={{
        background: "linear-gradient(0deg, rgba(243, 243, 243, 0.20) 0%, rgba(243, 243, 243, 0.20) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%)",
        boxShadow: "0px -2px 10px 0px rgba(233, 223, 255, 0.30), 0px -2px 40px 0px rgba(187, 155, 255, 0.15), 0px 0.5px 0px 0px rgba(255, 255, 255, 0.50) inset"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}>
      <motion.div
        className="absolute z-0 transition duration-300 rounded-[1.25rem] opacity-0 pointer-events-none -inset-px group-hover/spotlight:opacity-100"
        style={{
          // backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}>
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3} />
        )}
      </motion.div>
      {children}
    </div>)
  );
};
