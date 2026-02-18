"use client";

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
    return (
        <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 100, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
            {/* Back Button */}
            <Link
                href={fromSection ? `/#${sectionId}` : "/"}
                style={{
                    position: "fixed",
                    top: 80,
                    left: 24,
                    zIndex: 1000,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: "0.85rem",
                    color: color,
                    textDecoration: "none",
                    fontWeight: 600,
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(12px)",
                    padding: "8px 16px",
                    borderRadius: 50,
                    border: `1px solid ${accentColor}`,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
                }}
            >
                <ArrowLeft size={16} /> Back to Home
            </Link>

            <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${accentColor} 1px, transparent 1px), linear-gradient(90deg, ${accentColor} 1px, transparent 1px)`, backgroundSize: "60px 60px", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle, ${accentColor.replace('0.04', '0.10')}, transparent 70%)`, filter: "blur(60px)", pointerEvents: "none" }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>

                        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 28px", background: accentColor, borderRadius: 50, marginBottom: 24, border: `1px solid ${accentColor.replace('0.06', '0.12')}` }}>
                            <div style={{ color: color }}>{icon}</div>
                            <span style={{ fontSize: "0.95rem", fontWeight: 600, color: color }}>{badgeText}</span>
                        </div>

                        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, fontFamily: "var(--font-dm-sans)", letterSpacing: "-0.04em", marginBottom: 20 }}>
                            {title}{" "}
                            <span style={{ background: `linear-gradient(135deg, ${color}, ${color}, ${color})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                {titleAccent}
                            </span>
                        </h1>

                        <div style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
                            {description}
                        </div>

                        <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                            {stats.map((s) => (
                                <div key={s.label}>
                                    <p style={{ fontSize: "1.5rem", fontWeight: 800, color: color, fontFamily: "var(--font-dm-sans)" }}>{s.value}</p>
                                    <p style={{ fontSize: "0.75rem", color: "#94A3B8" }}>{s.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <CalendlyButton text="See It in Action" />
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                        {previewContent}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;
