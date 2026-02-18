"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSlide = () => (
    <div className="flex flex-col items-center justify-center p-6 text-center h-full pb-40">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-5xl md:text-9xl font-bold tracking-tighter mb-8 text-slate-900">
                Reimagining
            </h1>
            <h1 className="text-5xl md:text-9xl font-bold tracking-tighter mb-24 pb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
                    Workflow
                </span>
            </h1>
        </motion.div>
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-3xl text-slate-500 font-light max-w-4xl mx-auto leading-relaxed"
        >
            RealEase was founded on a simple observation: <span className="font-bold text-slate-900">real estate agents deserve systems that work as hard as they do.</span>
        </motion.p>

        {/* Spacer for visual separation */}
        <div className="h-16 md:h-20" aria-hidden="true" />

        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-3xl text-slate-500 font-light max-w-4xl mx-auto leading-relaxed"
        >
            We came together to make that a reality.
        </motion.p>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-sm tracking-widest uppercase animate-bounce"
        >
            Scroll or Swipe <ChevronDown size={20} />
        </motion.div>
    </div>
);

export default HeroSlide;
