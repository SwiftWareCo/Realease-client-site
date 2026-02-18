"use client";

import Image from "next/image";
import { Zap } from "lucide-react";

const SolutionSlide = () => (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 w-full max-w-7xl px-8 md:px-20 h-full md:h-[85%] justify-start md:justify-center pt-32 md:pt-0 overflow-y-auto md:overflow-hidden">
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-orange-700 mb-4 md:mb-7 uppercase">The Solution:</h2>
            <div className="max-w-[180px] md:max-w-[400px] w-full">
                <Image src="/realease-logo.png" alt="RealEase" width={400} height={100} className="object-contain w-full h-auto" />
            </div>
            <div className="h-1 w-12 md:w-20 bg-orange-300 rounded-full mt-3 md:mt-4" />
            <p className="text-sm md:text-2xl text-orange-900/80 mt-6 md:mt-10 leading-snug">
                Not just another CRM.<br />
                An <span className="text-orange-600 font-semibold">Operating System</span> for your <span className="font-bold">entire workflow</span>.
            </p>
        </div>
        <div className="flex-1 relative hidden md:block">
            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-orange-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-200" />
                        <div className="w-3 h-3 rounded-full bg-slate-200" />
                    </div>
                    <div className="h-2 w-20 bg-slate-100 rounded-full" />
                </div>
                <div className="space-y-4">
                    <div className="h-32 bg-orange-50 rounded-xl w-full flex items-center justify-center border border-orange-100">
                        <Zap className="text-orange-400 opacity-50" size={48} />
                    </div>
                    <div className="flex gap-4">
                        <div className="h-20 bg-slate-50 rounded-xl flex-1" />
                        <div className="h-20 bg-slate-50 rounded-xl flex-1" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default SolutionSlide;
