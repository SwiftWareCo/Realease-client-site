"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CalendlyButton from "../../components/common/CalendlyButton";

const MissionSlide = () => (
    <div className="relative z-10 max-w-5xl text-center px-6 h-full flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.07] pointer-events-none">
            {/* Large Gear */}
            <motion.svg
                width="420" height="420" viewBox="0 0 100 100"
                className="absolute top-1/2 left-1/2"
                style={{ marginTop: -210, marginLeft: -240 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
                <path d="M50 10 L53 20 A30 30 0 0 1 65 23 L72 14 L78 20 L71 28 A30 30 0 0 1 77 38 L88 37 L90 45 L79 47 A30 30 0 0 1 79 53 L90 55 L88 63 L77 62 A30 30 0 0 1 71 72 L78 80 L72 86 L65 77 A30 30 0 0 1 53 80 L50 90 L44 90 L41 80 A30 30 0 0 1 29 77 L22 86 L16 80 L23 72 A30 30 0 0 1 17 62 L6 63 L4 55 L15 53 A30 30 0 0 1 15 47 L4 45 L6 37 L17 38 A30 30 0 0 1 23 28 L16 20 L22 14 L29 23 A30 30 0 0 1 41 20 L44 10 Z" fill="currentColor" className="text-slate-900" />
                <circle cx="47" cy="50" r="14" fill="white" />
            </motion.svg>
            {/* Small Gear */}
            <motion.svg
                width="220" height="220" viewBox="0 0 100 100"
                className="absolute top-1/2 left-1/2"
                style={{ marginTop: -20, marginLeft: 40 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <path d="M50 10 L53 20 A30 30 0 0 1 65 23 L72 14 L78 20 L71 28 A30 30 0 0 1 77 38 L88 37 L90 45 L79 47 A30 30 0 0 1 79 53 L90 55 L88 63 L77 62 A30 30 0 0 1 71 72 L78 80 L72 86 L65 77 A30 30 0 0 1 53 80 L50 90 L44 90 L41 80 A30 30 0 0 1 29 77 L22 86 L16 80 L23 72 A30 30 0 0 1 17 62 L6 63 L4 55 L15 53 A30 30 0 0 1 15 47 L4 45 L6 37 L17 38 A30 30 0 0 1 23 28 L16 20 L22 14 L29 23 A30 30 0 0 1 41 20 L44 10 Z" fill="currentColor" className="text-slate-900" />
                <circle cx="47" cy="50" r="14" fill="white" />
            </motion.svg>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold mb-12 tracking-tight text-slate-900">
            The System Behind<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Your Momentum</span>.
        </h1>
        <p className="text-2xl text-slate-500 mb-16 max-w-2xl mx-auto font-light">
            Clarity. Control. Execution.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-4">
            <CalendlyButton
                className="!py-4 !px-10 !text-base shadow-lg"
            >
                Take Control <ArrowRight size={18} className="inline ml-3" />
            </CalendlyButton>
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6">
            <div className="pt-6 border-t border-slate-200 text-slate-400 text-sm text-center">
                RealEase Inc. © {new Date().getFullYear()}
            </div>
        </div>
    </div>
);

export default MissionSlide;
