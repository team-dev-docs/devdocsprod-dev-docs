import React, { useState } from 'react';
import { cn } from "@site/src/utils";
import { AnimatePresence, motion } from "framer-motion";

const CardGroups = ({ children, className }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={cn("grid grid-cols-2 gap-8 mt-4", className)}>
            {React.Children.map(children, (child, index) => (
                <div
                    className="relative group block p-2 h-full w-full"
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="relative z-10">
                        {child}
                    </div>
                    <AnimatePresence>
                        {hoveredIndex === index && (
                            <motion.div
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}

export default CardGroups;