"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, MessageSquare, Database, Phone } from "lucide-react";

const GapSlide = () => (
    <div className="relative z-10 max-w-7xl w-full text-center px-6 h-full flex flex-col justify-center items-center">

        {/* The Floating Icons - positioned across the full slide */}
        <div className="absolute inset-0 pointer-events-none">
            {[
                { Icon: Mail, x: "-24vw", y: "-20vh", ym: "-35vh", delay: 0 },
                { Icon: Calendar, x: "22vw", y: "-16vh", ym: "-30vh", delay: 0.5 },
                { Icon: MessageSquare, x: "0vw", y: "-26vh", ym: "-40vh", delay: 0.3 },
                { Icon: Database, x: "-22vw", y: "16vh", ym: "35vh", delay: 1 },
                { Icon: Phone, x: "24vw", y: "14vh", ym: "30vh", delay: 1.5 },
            ].map(({ Icon, x, y, ym, delay }, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    whileInView={{
                        opacity: 0.4,
                        x: "calc(var(--x-pos, " + x + ") * var(--scale, 1))",
                        y: "calc(var(--y-pos, " + y + ") * var(--scale, 1))"
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: delay * 0.5 }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [--scale:0.55] md:[--scale:1] icon-pos-${i}`}
                    style={{ '--y-pos': y, '--x-pos': x } as any}
                >
                    <motion.div
                        animate={{ y: [0, -20, 0], x: [0, 8, -8, 0], rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
                    >
                        <Icon size={32} strokeWidth={1} className="text-slate-400 md:w-12 md:h-12" />
                    </motion.div>
                </motion.div>
            ))}
        </div>

        <style jsx>{`
            @media (max-width: 768px) {
                .icon-pos-0 { --y-pos: -40vh !important; --x-pos: -32vw !important; }
                .icon-pos-1 { --y-pos: -35vh !important; --x-pos: 30vw !important; }
                .icon-pos-2 { --y-pos: -45vh !important; }
                .icon-pos-3 { --y-pos: 40vh !important; --x-pos: -30vw !important; }
                .icon-pos-4 { --y-pos: 35vh !important; --x-pos: 32vw !important; }
            }
        `}</style>

        {/* Header */}
        <div className="relative mb-8 md:mb-20">
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter relative z-10"
            >
                The Problem:
            </motion.h2>
        </div>

        {/* Content Stacks with generous spacing */}
        <div className="max-w-4xl mx-auto">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl text-slate-500 font-medium leading-snug"
            >
                Plenty of Software.<br />
                <span className="text-slate-900 font-bold">Zero Infrastructure.</span>
            </motion.h3>

            <div className="h-6 md:h-8" aria-hidden="true" />

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
            >
                There are tools for every individual task, yet nothing that seamlessly guides the entire process from first contact to closing.
            </motion.p>
        </div>
    </div>
);

export default GapSlide;
