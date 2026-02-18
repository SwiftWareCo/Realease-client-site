"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
    Phone,
    ArrowRight,
    Check,
    Clock,
    CalendarDays,
    FileText,
    Brain,
    Mic,
    BarChart3,
    Sparkles,
    ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ProductHero from "../../components/common/ProductHero";
import CalendlyButton from "../../components/common/CalendlyButton";

function AIReceptionistContent() {
    const searchParams = useSearchParams();
    const fromSection = searchParams.get("from") === "section";
    const [canAnimate, setCanAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setCanAnimate(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const features = [
        { icon: <Clock size={24} />, title: "Instant Response", desc: <>Calls are answered in <strong>under 1 second</strong> — no lead left waiting.</> },
        { icon: <Brain size={24} />, title: "Smart Qualification", desc: <>AI scores leads based on budget, timeline, and intent <strong>in real-time</strong>.</> },
        { icon: <CalendarDays size={24} />, title: "Auto Booking", desc: <><strong>Books appointments directly</strong> on your calendar with confirmed availability.</> },
        { icon: <FileText size={24} />, title: "Full Transcripts", desc: <>Every call is <strong>transcribed and summarized</strong> with actionable notes.</> },
        { icon: <Mic size={24} />, title: "Natural Conversations", desc: <><strong>Human-like voice AI</strong> that adapts tone and language to each lead.</> },
        { icon: <BarChart3 size={24} />, title: "Call Analytics", desc: <><strong>Track call volume</strong>, conversion rates, and lead quality over time.</> },
    ];

    const conversation = [
        { speaker: "AI", text: "Hi! I'm calling on behalf of John about the property on Oak Avenue. Is now a good time?" },
        { speaker: "Lead", text: "Yes! I saw the listing. It looks great — what's the asking price?" },
        { speaker: "AI", text: "It's listed at $485,000. Would you like to schedule a showing? I have Thursday 2 PM or Friday 11 AM available." },
        { speaker: "Lead", text: "Thursday works perfectly." },
        { speaker: "AI", text: "You're all set for Thursday at 2 PM. I'll send a confirmation to your email. Is there anything else I can help with?" },
    ];

    return (
        <>
            <Navbar />

            <ProductHero
                title="Never Miss a Lead Call."
                titleAccent="Ever Again."
                description={<>Your AI receptionist <strong>answers every call instantly</strong>, <strong>qualifies leads</strong>, <strong>books appointments</strong>, and delivers detailed transcripts — <strong>24 hours a day, 7 days a week</strong>.</>}
                icon={<Phone size={18} />}
                badgeText="AI Receptionist"
                stats={[
                    { value: "<1s", label: "Response Time" },
                    { value: "34%", label: "Booking Rate" },
                    { value: "24/7", label: "Availability" },
                ]}
                color="#10B981"
                accentColor="rgba(16,185,129,0.04)"
                fromSection={fromSection}
                sectionId="ai-receptionist"
                previewContent={
                    <div style={{ background: "linear-gradient(135deg, #F8F9FC, #ECFDF5)", borderRadius: 20, padding: 24, border: "1px solid rgba(16,185,129,0.1)", boxShadow: "0 24px 48px rgba(16,185,129,0.08)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", animation: "pulse-soft 2s ease-in-out infinite" }} />
                            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#10B981" }}>Live Call Simulation</span>
                        </div>
                        <div style={{ background: "white", borderRadius: 14, padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
                            {conversation.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: line.speaker === "AI" ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.3 }}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: line.speaker === "AI" ? "flex-start" : "flex-end",
                                    }}
                                >
                                    <span style={{ fontSize: "0.68rem", fontWeight: 700, color: line.speaker === "AI" ? "#10B981" : "#94A3B8", marginBottom: 4 }}>
                                        {line.speaker === "AI" ? "AI Receptionist" : "Lead"}
                                    </span>
                                    <div style={{
                                        background: line.speaker === "AI" ? "rgba(16,185,129,0.06)" : "#F8F9FC",
                                        padding: "10px 14px",
                                        borderRadius: 12,
                                        maxWidth: "85%",
                                        border: line.speaker === "AI" ? "1px solid rgba(16,185,129,0.12)" : "1px solid #E2E8F0",
                                    }}>
                                        <span style={{ fontSize: "0.82rem", color: "#334155", lineHeight: 1.6 }}>{line.text}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                }
            />

            <section style={{ padding: "100px 24px", background: "#FAFBFE" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: "center", marginBottom: 64 }}
                    >
                        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Capabilities</p>
                        <h2 style={{ fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>
                            Everything Your AI Receptionist <span style={{ background: "linear-gradient(135deg, #10B981, #059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Can Do</span>
                        </h2>
                    </motion.div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={canAnimate ? { opacity: 1, y: 0 } : undefined}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    background: "white",
                                    borderRadius: 16,
                                    padding: 28,
                                    border: "1px solid #E2E8F0",
                                    transition: "box-shadow 0.3s, transform 0.3s",
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(16,185,129,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(16,185,129,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981", marginBottom: 16 }}>
                                    {f.icon}
                                </div>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, fontFamily: "var(--font-dm-sans)", marginBottom: 8 }}>{f.title}</h3>
                                <p style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: 1.7 }}>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "100px 24px", background: "#0F172A" }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={canAnimate ? { opacity: 1, y: 0 } : undefined}
                    viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}
                >
                    <h2 style={{ fontFamily: "var(--font-dm-sans)", color: "white", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: 16 }}>
                        Ready to Put Your Phone on Autopilot?
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 36, lineHeight: 1.7 }}>See how the AI Receptionist handles real calls in a live demo.</p>
                    <CalendlyButton text="See It in Action" color="#10B981" />
                </motion.div>
            </section>

            <Footer />
        </>
    );
}

export default function AIReceptionistPage() {
    return (
        <Suspense fallback={null}>
            <AIReceptionistContent />
        </Suspense>
    );
}
