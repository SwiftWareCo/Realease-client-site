"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import CalendlyButton from "./CalendlyButton";

interface ProductHeroProps {
    title: string;
    titleAccent: string;
    description: React.ReactNode;
    icon: React.ReactNode;
    badgeText: string;
    stats: { label: string; value: string }[];
    previewContent: React.ReactNode;
    color: string;
    accentColor: string;
    fromSection: boolean;
    sectionId: string;
}

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 991);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return isMobile;
};

const ProductHero = ({
    title,
    titleAccent,
    description,
    icon,
    badgeText,
    stats,
    previewContent,
    color,
    accentColor,
    fromSection,
    sectionId
}: ProductHeroProps) => {
    const isMobile = useIsMobile();

    return (
        <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 100, paddingBottom: 60, position: "relative", overflow: "hidden" }}>

            <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${accentColor} 1px, transparent 1px), linear-gradient(90deg, ${accentColor} 1px, transparent 1px)`, backgroundSize: "60px 60px", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${accentColor.replace('0.04', '0.10')}, transparent 70%)`, filter: "blur(60px)", pointerEvents: "none" }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
                <div className="product-hero-grid">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="product-info">

                        <div className="product-badge" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 28px", background: accentColor, borderRadius: 50, marginBottom: 24, border: `1px solid ${accentColor.replace('0.06', '0.12')}` }}>
                            <div style={{ color: color }}>{icon}</div>
                            <span style={{ fontSize: "0.95rem", fontWeight: 600, color: color }}>{badgeText}</span>
                        </div>

                        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, fontFamily: "var(--font-dm-sans)", letterSpacing: "-0.04em", marginBottom: 20 }}>
                            {title}{" "}
                            <span style={{ background: `linear-gradient(135deg, ${color}, ${color}, ${color})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                {titleAccent}
                            </span>
                        </h1>

                        <div className="product-description" style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
                            {description}
                        </div>

                        <div className="product-stats" style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <p style={{ fontSize: "1.5rem", fontWeight: 800, color: color, fontFamily: "var(--font-dm-sans)" }}>{s.value}</p>
                                    <p style={{ fontSize: "0.75rem", color: "#94A3B8" }}>{s.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="product-button-container flex items-center gap-4">
                            <CalendlyButton text="See It in Action" color={color} />
                        </div>
                    </motion.div>

                    {!isMobile && (
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="product-preview">
                            {previewContent}
                        </motion.div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .product-hero-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 64px;
                    align-items: center;
                }

                @media (max-width: 991px) {
                    .product-hero-grid {
                        grid-template-columns: 1fr;
                        gap: 48px;
                        text-align: center;
                    }
                    
                    .back-button {
                        position: absolute !important;
                        top: 20px !important;
                        left: 20px !important;
                    }

                    .product-info {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .product-badge {
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .product-description {
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .product-stats {
                        justify-content: center;
                    }

                    .product-button-container {
                        justify-content: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default ProductHero;
