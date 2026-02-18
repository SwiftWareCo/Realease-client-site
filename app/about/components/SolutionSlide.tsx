"use client";

import Image from "next/image";
import { Zap } from "lucide-react";

const SolutionSlide = () => (
    <div className="flex flex-col md:flex-row items-center gap-16 w-full max-w-7xl px-12 md:px-20 h-auto md:h-[85%] justify-center">
        <div className="flex-1">
            <h2 className="text-sm font-bold tracking-widest text-orange-700" style={{ marginBottom: 28 }}>The Solution:</h2>
            <Image src="/realease-logo.png" alt="RealEase" width={400} height={100} className="object-contain" />
            <div className="h-1 w-20 bg-orange-300 rounded-full" style={{ marginTop: 16 }} />
            <p className="text-xl md:text-2xl text-orange-900/80" style={{ marginTop: 40, lineHeight: 1.4 }}>
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
