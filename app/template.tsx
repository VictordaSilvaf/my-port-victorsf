'use client';

import { motion } from "framer-motion";
import React, { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            className="bg-blue-100 shadow bg-opacity-85 h-full flex-1 rounded-r-lg"
            initial={{ x: '-50%', opacity: 0.2 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: .45 }}
        >
            {children}
        </motion.div>
    );
}