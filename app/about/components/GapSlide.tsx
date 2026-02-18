"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, MessageSquare, Database, Phone } from "lucide-react";

const GapSlide = () => (
    <div className="relative z-10 max-w-7xl w-full text-center px-6 h-full flex flex-col justify-center items-center">

        {/* The Floating Icons - positioned across the full slide */}
        <div className="absolute inset-0 pointer-events-none">
            {[
                { Icon: Mail, x: "-24vw", y: "-20vh", delay: 0 },
                { Icon: Calendar, x: "22vw", y: "-16vh", delay: 0.5 },
                { Icon: MessageSquare, x: "0vw", y: "-26vh", delay: 0.3 },
                { Icon: Database, x: "-22vw", y: "16vh", delay: 1 },
                { Icon: Phone, x: "24vw", y: "14vh", delay: 1.5 },
            ].map(({ Icon, x, y, delay }, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    whileInView={{ opacity: 0.4, x, y }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: delay * 0.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    <motion.div
                        animate={{ y: [0, -20, 0], x: [0, 8, -8, 0], rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
                    >
                        <Icon size={48} strokeWidth={1} className="text-slate-400" />
                    </motion.div>
                </motion.div>
            ))}
        </div>

        {/* Header */}
        <div className="relative mb-16 md:mb-20">
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter relative z-10"
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
