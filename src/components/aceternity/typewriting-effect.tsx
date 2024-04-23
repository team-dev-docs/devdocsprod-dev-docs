import React, { useEffect, useRef } from "react"; // Import React
import { motion } from "framer-motion"; // Import framer-motion
import { cn } from "../../aceternity_utils/cn"; // Import cn function

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  // Splitting each word into characters
  let wordsArray = words.map(word => ({
    ...word,
    text: word.text.split("")
  }));

  // Define animation variants for container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  

  return (
    <div className={cn("font-bold text-center", className)}>
      <motion.div
        className="inline-block"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                key={`char-${index}`}
                className={cn("dark:text-white text-black", word.className)}
                variants={childVariants}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </motion.div>
      <motion.span
        className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500", cursorClassName)}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1], transition: { repeat: Infinity, repeatType: "reverse", duration: 0.8 } }}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({ words, className, cursorClassName }) => {
  // Similar setup as TypewriterEffect
  let wordsArray = words.map(word => ({
    ...word,
    text: word.text.split("")
  }));

  // Define animation variants
  const containerVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "fit-content",
      transition: {
        duration: 2,
        ease: "linear",
        delay: 1
      }
    }
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        <div className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold whitespace-nowrap">
          {wordsArray.map((word, idx) => (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn("dark:text-white text-black", word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          ))}
        </div>
      </motion.div>
      <motion.span
        className={cn("block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500", cursorClassName)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { repeat: Infinity, repeatType: "reverse", duration: 0.8 } }}
      ></motion.span>
    </div>
  );
};

export default TypewriterEffect