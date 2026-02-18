"use client";

import { motion } from "framer-motion";
import { Layout } from "lucide-react";

const steps = (stepCount: number) => (t: number) => Math.floor(t * stepCount) / stepCount;

const OriginSlide2 = () => (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24 max-w-7xl w-full items-center px-6 h-full pt-32 md:pt-0 overflow-y-auto md:overflow-hidden">
        <div className="order-2 md:order-1 h-[300px] md:h-[600px] w-full bg-white rounded-[2.5rem] relative overflow-hidden flex items-center justify-center border border-slate-100 shadow-sm shrink-0 mb-8 md:mb-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,#000_40%,transparent_80%)]" />
            <div className="relative z-10 p-8 border border-slate-200 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl max-w-sm w-full">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3 font-mono text-sm text-slate-500">
                    <p><span className="text-purple-600">const</span> <span className="text-blue-600">inefficiency</span> = <span className="text-amber-600">true</span>;</p>
                    <p><span className="text-purple-600">if</span> (inefficiency) {"{"}</p>

                    {/* Typing Animation */}
                    <div className="pl-4 flex items-center h-6">
                        <motion.div
                            className="overflow-hidden whitespace-nowrap border-r-2 border-slate-400 pr-1"
                            initial={{ width: 0 }}
                            animate={{ width: "auto" }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 1,
                                ease: steps(20)
                            }}
                        >
                            <span className="text-blue-600">system</span>.<span className="text-amber-600">optimize</span>();
                        </motion.div>
                    </div>

                    <p>{"}"}</p>
                </div>
            </div>
        </div>
        <div className="order-1 md:order-2 relative">
            <span className="text-7xl md:text-9xl font-black text-white absolute -top-12 -right-12 md:-top-20 md:-right-20 -z-10 select-none text-stroke-1 md:text-stroke-2 text-stroke-slate-200">02</span>
            <div className="inline-flex items-center gap-1 px-8 md:px-12 py-2 md:py-3 bg-blue-100 text-blue-700 rounded-full font-medium text-xs md:text-sm">
                <Layout size={18} /> The Framework
            </div>

            {/* Spacer */}
            <div className="h-1.5" aria-hidden="true" />

            <h3 className="text-2xl md:text-6xl font-bold text-slate-900 leading-tight">
                The Tech Evolution
            </h3>

            {/* Spacer */}
            <div className="h-2" aria-hidden="true" />

            <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-light">
                The other, with expertise in software engineering, saw these issues not as isolated frustrations, but as <span className="font-semibold text-slate-900">structural problems</span> waiting to be solved.
            </p>

            <div className="h-4" aria-hidden="true" />

            <p className="text-lg md:text-xl text-slate-400 font-medium">
                The conclusion was evident: <span className="text-slate-900">the industry needs operational evolution.</span>
            </p>
        </div>
    </div>
);

export default OriginSlide2;
