"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["👋 Hello", "👋 Bonjour", "👋 Ciao", "👋 Olà", "👋 やあ", "👋 Guten Tag", "👋 Hallo"];

const slideUp = {
    initial: {
        y: 0
    },
    exit: {
        y: "-100%",
    }
}

const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
    },
}

export default function Preloader() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index === words.length - 1) return;

        const timeoutId = setTimeout(() => {
            setIndex(index + 1)
        }, index === 0 ? 1000 : 150);

        return () => clearTimeout(timeoutId);
    }, [index]);

    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="h-screen w-screen flex items-center justify-center bg-black fixed z-50"
        >
            <motion.p
                variants={opacity}
                initial="initial"
                animate="enter"
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center text-white text-4xl md:text-6xl"
            >
                {words[index]}
            </motion.p>
        </motion.div>
    )
}