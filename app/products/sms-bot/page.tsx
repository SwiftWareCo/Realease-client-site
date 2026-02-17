"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import {
    MessageSquare,
    ArrowRight,
    ArrowLeft,
    Zap,
    Users,
    BarChart3,
    Brain,
    Clock,
    Globe,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

declare global {
    interface Window {
        Calendly?: { initPopupWidget: (opts: { url: string }) => void };
    }
}
const CALENDLY_URL = "https://calendly.com/amarramadann/30min";

export default function SMSAgentPage() {
    const [canAnimate, setCanAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setCanAnimate(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const openCalendly = () => {
        if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        else window.open(CALENDLY_URL, "_blank");
    };

    const features = [
        { icon: <Zap size={24} />, title: "8-Second Replies", desc: "Leads get instant responses that feel personal and keep the conversation moving." },
        { icon: <Brain size={24} />, title: "Context-Aware AI", desc: "Understands lead intent, remembers past conversations, and adapts responses." },
        { icon: <Users size={24} />, title: "Lead Qualification", desc: "Automatically qualifies leads through natural text conversations — budget, timeline, preferences." },
        { icon: <Globe size={24} />, title: "Multi-Language", desc: "Communicates with leads in their preferred language for broader reach." },
        { icon: <Clock size={24} />, title: "Scheduled Follow-Ups", desc: "Sends timed follow-up texts to re-engage leads who go quiet." },
        { icon: <BarChart3 size={24} />, title: "Engagement Analytics", desc: "Track open rates, reply rates, and conversion funnels across all SMS campaigns." },
    ];

    const conversation = [
        { speaker: "Bot", text: "Hi James! Still interested in homes near downtown? I have 3 new listings that match your criteria 🏠" },
        { speaker: "Lead", text: "Yes! Actually my budget changed — looking for under $450k now." },
        { speaker: "Bot", text: "Got it! I've updated your profile. Here are 2 homes under $450k near downtown — want me to schedule showings?" },
        { speaker: "Lead", text: "The one on Elm St looks great. Can I see it Saturday?" },
        { speaker: "Bot", text: "Done! You're booked for Saturday at 11 AM at 234 Elm St. I'll send you a reminder Friday evening 📅" },
    ];

    return (
        <>
            <Link href="/#tools" style={{ position: "fixed", top: 80, left: 24, zIndex: 9999, display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.85rem", color: "#7C3AED", textDecoration: "none", fontWeight: 600, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", padding: "8px 16px", borderRadius: 50, border: "1px solid rgba(124,58,237,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <ArrowLeft size={16} /> Back to Home
            </Link>
            <Navbar />

            <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 100, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.10), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>

                            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 28px", background: "rgba(124,58,237,0.06)", borderRadius: 50, marginBottom: 24, border: "1px solid rgba(124,58,237,0.12)" }}>
                                <MessageSquare size={18} style={{ color: "#7C3AED" }} />
                                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#7C3AED" }}>SMS Agent</span>
                            </div>

                            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, fontFamily: "var(--font-dm-sans)", letterSpacing: "-0.04em", marginBottom: 20 }}>
                                Nurture Every Lead.{" "}
                                <span style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                    At Machine Speed.
                                </span>
                            </h1>

                            <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
                                Intelligent text conversations that <strong>engage, qualify, and convert leads</strong> — while feeling completely personal. <strong>Replies in 8 seconds flat</strong>.
                            </p>

                            <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                                {[{ value: "8 sec", label: "Avg Reply" }, { value: "72%", label: "Engagement" }, { value: "450+", label: "Leads Qualified" }].map((s) => (
                                    <div key={s.label}>
                                        <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#7C3AED", fontFamily: "var(--font-dm-sans)" }}>{s.value}</p>
                                        <p style={{ fontSize: "0.75rem", color: "#94A3B8" }}>{s.label}</p>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={openCalendly}
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "14px 32px",
                                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                                    color: "white",
                                    border: "none",
                                    borderRadius: 50,
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(124,58,237,0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(124,58,237,0.3)";
                                }}
                            >
                                See It in Action <ArrowRight size={18} />
                            </button>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                            <div style={{ background: "linear-gradient(135deg, #FAF5FF, #EEF2FF)", borderRadius: 20, padding: 24, border: "1px solid rgba(124,58,237,0.1)", boxShadow: "0 24px 48px rgba(124,58,237,0.08)" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", animation: "pulse-soft 2s ease-in-out infinite" }} />
                                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#10B981" }}>Live SMS Preview</span>
                                </div>
                                <div style={{ background: "white", borderRadius: 14, padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
                                    {conversation.map((line, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.3 }} style={{ display: "flex", flexDirection: "column", alignItems: line.speaker === "Bot" ? "flex-start" : "flex-end" }}>
                                            <span style={{ fontSize: "0.68rem", fontWeight: 700, color: line.speaker === "Bot" ? "#7C3AED" : "#94A3B8", marginBottom: 4 }}>{line.speaker === "Bot" ? "SMS Agent" : "Lead"}</span>
                                            <div style={{ background: line.speaker === "Bot" ? "rgba(124,58,237,0.06)" : "#F8F9FC", padding: "10px 14px", borderRadius: 12, maxWidth: "85%", border: line.speaker === "Bot" ? "1px solid rgba(124,58,237,0.12)" : "1px solid #E2E8F0" }}>
                                                <span style={{ fontSize: "0.82rem", color: "#334155", lineHeight: 1.6 }}>{line.text}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section style={{ padding: "100px 24px", background: "#FAFBFE" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={canAnimate ? { opacity: 1, y: 0 } : undefined}
                        viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: "center", marginBottom: 64 }}
                    >
                        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Capabilities</p>
                        <h2 style={{ fontFamily: "var(--font-dm-sans)" }}>Conversations That <span style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Convert</span></h2>
                    </motion.div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {features.map((f, i) => (
                            <motion.div key={f.title} initial={{ opacity: 0, y: 24 }} whileInView={canAnimate ? { opacity: 1, y: 0 } : undefined} viewport={{ once: true, margin: "0px 0px -100px 0px" }} transition={{ delay: i * 0.1 }} style={{ background: "white", borderRadius: 16, padding: 28, border: "1px solid #E2E8F0", transition: "box-shadow 0.3s, transform 0.3s" }}
                                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(124,58,237,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(124,58,237,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7C3AED", marginBottom: 16 }}>{f.icon}</div>
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
                    <h2 style={{ fontFamily: "var(--font-dm-sans)", color: "white", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: 16 }}>Ready to Text Smarter?</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 36, lineHeight: 1.7 }}>See how the SMS Agent engages and converts leads in a live demo.</p>
                    <button onClick={openCalendly} style={{ padding: "16px 40px", background: "linear-gradient(135deg, #7C3AED, #A855F7)", color: "white", border: "none", borderRadius: 50, fontSize: "1rem", fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 24px rgba(124,58,237,0.3)" }}>
                        See It in Action <ArrowRight size={18} style={{ display: "inline", verticalAlign: "middle", marginLeft: 8 }} />
                    </button>
                </motion.div>
            </section>

            <Footer />
        </>
    );
}
