"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.2),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          let extraStyles = "";

          if (word === "Full") extraStyles = "text-blue-500"; // Change color
          if (word === "Stack") extraStyles = "text-blue-500";
          if (word === "Developer") extraStyles = "text-blue-500";

          if (word === "Jatan") extraStyles = "text-4xl"; // Increase size
          if (word === "Mathasoliya") extraStyles = "text-4xl";

          return (
            <motion.span
              key={word + idx}
              className={cn("dark:text-white text-black opacity-0", extraStyles)}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };


  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
