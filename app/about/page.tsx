"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";

import HeroSlide from "./components/HeroSlide";
import OriginSlide1 from "./components/OriginSlide1";
import OriginSlide2 from "./components/OriginSlide2";
import GapSlide from "./components/GapSlide";
import SolutionSlide from "./components/SolutionSlide";
import VisionSlide from "./components/VisionSlide";
import MissionSlide from "./components/MissionSlide";

const slides = [
    { id: 'hero', content: <HeroSlide />, bg: 'bg-white' },
    { id: 'origin1', content: <OriginSlide1 />, bg: 'bg-stone-50' },
    { id: 'origin2', content: <OriginSlide2 />, bg: 'bg-slate-50' },
    { id: 'gap', content: <GapSlide />, bg: 'bg-white' },
    { id: 'solution', content: <SolutionSlide />, bg: 'bg-orange-50' },
    { id: 'vision', content: <VisionSlide />, bg: 'bg-slate-50' },
    { id: 'mission', content: <MissionSlide />, bg: 'bg-slate-50' },
];

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const lastScrollTime = useRef(0);
    const scrollCooldown = 700; // ms

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            const now = Date.now();
            if (now - lastScrollTime.current < scrollCooldown) return;

            // Lower threshold to catch trackpad glides, but ensure it's a deliberate move
            if (Math.abs(e.deltaY) > 10) {

                if (e.deltaY > 0) {
                    // Scroll Down
                    if (currentSlide < slides.length - 1) {
                        setCurrentSlide(prev => prev + 1);
                        lastScrollTime.current = now;
                    }
                } else {
                    // Scroll Up
                    if (currentSlide > 0) {
                        setCurrentSlide(prev => prev - 1);
                        lastScrollTime.current = now;
                    }
                }
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            const now = Date.now();
            if (now - lastScrollTime.current < scrollCooldown) return;

            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                if (currentSlide < slides.length - 1) {
                    setCurrentSlide(prev => prev + 1);
                    lastScrollTime.current = now;
                }
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                if (currentSlide > 0) {
                    setCurrentSlide(prev => prev - 1);
                    lastScrollTime.current = now;
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        // Touch support for mobile swipe
        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;

            if (Math.abs(diff) > 50) { // Swipe threshold
                if (diff > 0) {
                    // Swipe Up (Scroll Down)
                    setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
                } else {
                    // Swipe Down (Scroll Up)
                    setCurrentSlide(prev => Math.max(prev - 1, 0));
                }
            }
        };

        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [currentSlide]);


    return (
        <main className="h-screen w-screen overflow-hidden relative">
            <Navbar />
            <Link href="/" style={{ position: "fixed", top: 80, left: 24, zIndex: 1000, display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.85rem", color: "#F59E0B", textDecoration: "none", fontWeight: 600, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", padding: "8px 16px", borderRadius: 50, border: "1px solid rgba(245,158,11,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <ArrowLeft size={16} /> Back to Home
            </Link>

            {/* Slide Container */}
            <motion.div
                className="flex h-full w-full"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={`min-w-full h-full flex items-center justify-center ${slide.bg} relative overflow-hidden`}
                    >
                        {/* Background Gradients/Effects specific to slides */}
                        {/* Background Gradients/Effects specific to slides */}
                        {/* Clean backgrounds now, no heavy gradients for performance */}

                        {slide.content}
                    </div>
                ))}
            </motion.div>

            {/* Navigation Dots */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                            ? "bg-orange-500 w-8"
                            : "bg-slate-300 hover:bg-slate-400"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Manual Navigation Arrows (Optional but helpful) */}
            <button
                onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
                className={`fixed left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-opacity z-40 ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <ChevronLeft size={32} className={currentSlide > 2 ? "text-white" : "text-slate-800"} />
            </button>
            <button
                onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
                className={`fixed right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-opacity z-40 ${currentSlide === slides.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <ChevronRight size={32} className={currentSlide > 2 ? "text-white" : "text-slate-800"} />
            </button>

        </main>
    );
}
