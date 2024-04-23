import React, { useEffect, useRef } from "react"; // Import React
import { motion, animate } from "framer-motion";
import { cn } from "../../aceternity_utils/cn";
import { TypewriterEffectSmooth } from "./typewriting-effect";

export const TextGenerateEffect = ({ words, className }) => {
    let wordsArray = words.split(" ");
  
    // Define animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2, // Delay between each child animation
        },
      },
    };
  
    const childVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  
    return (
      <div className={cn("font-bold", className)}>
        <div className="mt-4">
          <motion.div
            className="dark:text-white text-black text-2xl leading-snug tracking-wide"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {wordsArray.map((word, idx) => (
              <motion.span key={word + idx} className="opacity-0" variants={childVariants}>
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };

  export default TextGenerateEffect