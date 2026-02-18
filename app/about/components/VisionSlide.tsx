"use client";

import { motion } from "framer-motion";
import { Layers, ShieldCheck } from "lucide-react";

const VisionSlide = () => (
    <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden bg-white px-6">
        {/* Subtle Background Radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0%,transparent_60%)] pointer-events-none" />

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 md:mb-40 z-10 relative -top-4 md:-top-8"
        >
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6">
                Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 font-light">We aim to give realtors two things:</p>
        </motion.div>

        <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 z-10 items-start">

            {/* Central Decorative Elements (Desktop) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center justify-center h-full pointer-events-none">
                <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border border-slate-100 shadow-lg flex items-center justify-center z-20"
                >
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                </motion.div>
            </div>

            {/* Left Side - Leverage */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center md:text-right flex flex-col items-center md:items-end"
            >
                <div className="mb-4 p-5 bg-orange-50 rounded-2xl w-fit shadow-sm">
                    <Layers className="text-orange-600" size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-5 tracking-tight">Leverage</h3>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light max-w-md">
                    The future belongs to professionals supported by <span className="font-semibold text-slate-900">intelligent systems</span>. We automate the grunt work so you can focus on <span className="font-semibold text-slate-900">high-value&nbsp;interactions</span>.
                </p>
            </motion.div>

            {/* Right Side - Consistency */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center md:text-left flex flex-col items-center md:items-start md:mt-12"
            >
                <div className="mb-4 p-5 bg-blue-50 rounded-2xl w-fit shadow-sm">
                    <ShieldCheck className="text-blue-600" size={40} strokeWidth={1.5} />
                </div>
                <div className="relative top-[2px]">
                    <h3 className="text-4xl font-bold text-slate-900 mb-5 tracking-tight">Consistency</h3>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light max-w-md">
                        Systems that <span className="font-semibold text-slate-900">capture, qualify, nurture</span>, and organize opportunities <span className="font-semibold text-slate-900">automatically</span>—protecting your pipeline from human&nbsp;error.
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
);

export default VisionSlide;
