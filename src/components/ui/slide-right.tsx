"use client"
import { motion } from "framer-motion";

export default function SlideRight({children}: {children: React.ReactNode}) {
    return (
        <motion.div
        initial={{ opacity: 0, x: 10, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        {children}
        </motion.div>
    )
}