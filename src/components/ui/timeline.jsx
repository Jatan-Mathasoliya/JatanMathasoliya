"use client";
import { useScroll, useTransform, motion } from "framer-motion"; 
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight); // Ensure height is calculated correctly
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]); 
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1]);

  return (
    <div className="w-full bg-white dark:bg-black font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Timestamp Circle */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}

        {/* 🔹 Fixed & Styled Timeline Beam */}
        <div
          className="absolute left-8 md:left-8 top-0 w-[4px] rounded-full bg-neutral-300 dark:bg-neutral-700"
          style={{ height: height + "px" }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-[4px] rounded-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400 shadow-lg"
            style={{
              height: heightTransform, // Dynamic height animation
              opacity: opacityTransform, // Fade-in effect
            }}
          />
        </div>
      </div>
    </div>
  );
};
