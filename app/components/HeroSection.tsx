"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Sparkles, ArrowRight } from "lucide-react";

interface HeroSectionProps {
    openCalendly: () => void;
}

const phrases = [
    "The Machine Behind *Your Momentum*.",
    "Your Entire Workflow. *All in One Platform.*",
    "The Heavy Lifting, *Handled.*",
    "From Lead to Close, *Covered.*",
    "Every Lead. Every Step. *Managed.*"
];

export default function HeroSection({ openCalendly }: HeroSectionProps) {
    const [currentPhrase, setCurrentPhrase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                paddingTop: 100,
                paddingBottom: 60,
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Grid background */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    pointerEvents: "none",
                }}
            />
            <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.10), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -100, left: -50, width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(217,119,6,0.08), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
                    {/* Left — Copy */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "8px 20px",
                                background: "rgba(245,158,11,0.06)",
                                borderRadius: 50,
                                marginBottom: 24,
                                border: "1px solid rgba(245,158,11,0.12)",
                            }}
                        >
                            <Sparkles size={14} style={{ color: "#F59E0B" }} />
                            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#F59E0B" }}>Your AI Command Center</span>
                        </div>

                        <div style={{ height: "180px", position: "relative", marginBottom: 20 }}>
                            <AnimatePresence mode="wait">
                                <motion.h1
                                    key={currentPhrase}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                                        fontWeight: 800,
                                        lineHeight: 1.08,
                                        fontFamily: "var(--font-dm-sans)",
                                        letterSpacing: "-0.04em",
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                    }}
                                >
                                    {phrases[currentPhrase].split("*").map((part, index) =>
                                        index % 2 === 1 ? (
                                            <span
                                                key={index}
                                                style={{
                                                    background: "linear-gradient(135deg, #F59E0B, #D97706, #EA580C)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                }}
                                            >
                                                {part}
                                            </span>
                                        ) : (
                                            part
                                        )
                                    )}
                                </motion.h1>
                            </AnimatePresence>
                        </div>

                        <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
                            RealEase does the work that keeps deals alive — so you can focus on the moments that close them.
                        </p>

                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                            <button onClick={openCalendly} className="btn-primary">
                                See It in Action <ArrowRight size={18} />
                            </button>
                            <a href="#features" className="btn-secondary">
                                Learn More
                            </a>
                        </div>
                    </motion.div>

                    {/* Right — Dashboard Mockup */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                        <div
                            style={{
                                background: "linear-gradient(135deg, #F8F9FC, #EEF2FF)",
                                borderRadius: 20,
                                padding: 24,
                                border: "1px solid rgba(245,158,11,0.1)",
                                boxShadow: "0 24px 48px rgba(245,158,11,0.08)",
                            }}
                        >
                            {/* Title bar */}
                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                                <div style={{ display: "flex", gap: 6 }}>
                                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
                                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
                                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
                                </div>
                                <span style={{ fontSize: "0.72rem", color: "#94A3B8", marginLeft: 8 }}>RealEase Dashboard</span>
                            </div>
                            {/* Mock stats */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
                                {[
                                    { label: "Active Leads", val: "247", color: "#F59E0B" },
                                    { label: "Appointments", val: "18", color: "#10B981" },
                                    { label: "Campaigns", val: "6", color: "#7C3AED" },
                                ].map((m) => (
                                    <div key={m.label} style={{ background: "white", borderRadius: 12, padding: "14px 12px", textAlign: "center" }}>
                                        <p style={{ fontSize: "1.3rem", fontWeight: 800, color: m.color, fontFamily: "var(--font-dm-sans)" }}>{m.val}</p>
                                        <p style={{ fontSize: "0.65rem", color: "#94A3B8" }}>{m.label}</p>
                                    </div>
                                ))}
                            </div>
                            {/* Mock lead list */}
                            <div style={{ background: "white", borderRadius: 12, padding: 14 }}>
                                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#0F172A", marginBottom: 10 }}>Recent Leads</p>
                                {[
                                    { name: "Sarah M.", status: "Hot", time: "2m ago", sc: "#EF4444" },
                                    { name: "John D.", status: "Warm", time: "15m ago", sc: "#F59E0B" },
                                    { name: "Alex T.", status: "New", time: "1h ago", sc: "#F59E0B" },
                                ].map((lead) => (
                                    <div key={lead.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #F1F5F9" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                            <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${lead.sc}14`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Users size={12} style={{ color: lead.sc }} />
                                            </div>
                                            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#0F172A" }}>{lead.name}</span>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                            <span style={{ fontSize: "0.65rem", fontWeight: 700, color: lead.sc, background: `${lead.sc}12`, padding: "2px 8px", borderRadius: 6 }}>{lead.status}</span>
                                            <span style={{ fontSize: "0.62rem", color: "#94A3B8" }}>{lead.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
