"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

const OriginSlide1 = () => (
    <div className="grid md:grid-cols-2 gap-12 md:gap-24 max-w-7xl w-full items-center px-6 h-full">
        <div className="relative">
            <span className="text-9xl font-black text-slate-100 absolute -top-20 -left-20 -z-10 select-none">01</span>
            <div className="inline-flex items-center gap-1 px-12 py-3 bg-orange-100 text-orange-700 rounded-full font-medium text-sm">
                <Target size={20} /> The Origin
            </div>

            {/* Spacer */}
            <div className="h-1.5" aria-hidden="true" />

            <h3 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                The Real Estate Perspective
            </h3>

            {/* Spacer */}
            <div className="h-3" aria-hidden="true" />

            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                Through his background in real estate, one of our founders saw firsthand how easily leads fall through the cracks when workflows are scattered. <span className="font-semibold text-slate-900">The gap wasn’t effort — it was infrastructure.</span>
            </p>
        </div>
        <div className="h-[400px] md:h-[500px] bg-slate-50 rounded-[3rem] p-8 relative overflow-hidden group border border-slate-100 flex items-center justify-center">
            {/* Minimalist Broken Pipeline Visual */}
            <div className="relative w-full max-w-md aspect-video flex flex-col items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 400 200" className="overflow-visible">
                    {/* The Infrastructure (Broken) */}
                    <g stroke="currentColor" strokeWidth="2" className="text-slate-200">
                        {/* Segment 1 */}
                        <line x1="50" y1="100" x2="180" y2="100" strokeLinecap="round" />
                        {/* Segment 2 (Disconnected) */}
                        <line x1="220" y1="100" x2="350" y2="100" strokeLinecap="round" />
                    </g>

                    {/* The Gap Indicator (Subtle) */}
                    <g className="text-slate-300/50">
                        <line x1="180" y1="90" x2="180" y2="110" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="220" y1="90" x2="220" y2="110" strokeWidth="1" strokeDasharray="4 4" />
                    </g>

                    {/* The 'Lead' flowing and dropping */}
                    <motion.circle
                        r="6"
                        fill="#F97316" // Orange-500
                        initial={{ cx: 50, cy: 100, opacity: 0 }}
                        animate={{
                            cx: [50, 180, 200],
                            cy: [100, 100, 150],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.6, 1]
                        }}
                        style={{ filter: "drop-shadow(0 0 8px rgba(249,115,22,0.5))" }}
                    />

                    {/* A second lead following later */}
                    <motion.circle
                        r="6"
                        fill="#F97316"
                        initial={{ cx: 50, cy: 100, opacity: 0 }}
                        animate={{
                            cx: [50, 180, 200],
                            cy: [100, 100, 150],
                            opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                            duration: 2.5,
                            delay: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.6, 1]
                        }}
                        style={{ filter: "drop-shadow(0 0 8px rgba(249,115,22,0.5))" }}
                    />
                </svg>
            </div>
        </div>
    </div>
);

export default OriginSlide1;
