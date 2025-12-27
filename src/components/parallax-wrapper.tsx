"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface ParallaxWrapperProps {
    children: React.ReactNode;
    offset?: number;
    direction?: "up" | "down";
    className?: string;
}

export function ParallaxWrapper({
    children,
    offset = 50,
    direction = "up",
    className = "",
}: ParallaxWrapperProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const yValue = direction === "up" ? [offset, -offset] : [-offset, offset];

    const yRange = useTransform(scrollYProgress, [0, 1], yValue);
    const y = useSpring(yRange, springConfig);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}

export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}) {
    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { y: 0, x: 40 },
        right: { y: 0, x: -40 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
