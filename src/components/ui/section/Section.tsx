import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";

export interface SectionProps {
    className?: string;
    children?: React.ReactNode
    id?: string
}

// Note: Removal of Implicit children
// * Reference : https://solverfox.dev/writing/no-implicit-children/

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 50px, rgba(0,0,0,1) 50px, rgba(0,0,0,1) 50px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 50px)`;

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
    const { scrollYProgress } = useScroll();
    const ref = useRef(null);
    const isInView = useInView(ref)

    console.table({ isInView, children });

    return (
        <motion.section
            ref={ref}
            id={id}
            className={`h-screen grid place-items-center ${className}`}
            initial={false}
            animate={
                isInView
                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 1 }}
        >
            {children}
        </motion.section>
    )
}

export default Section