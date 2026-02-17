"use client";

import { useState } from "react";
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

declare global {
    interface Window {
        Calendly?: { initPopupWidget: (opts: { url: string }) => void };
    }
}
const CALENDLY_URL = "https://calendly.com/amarramadann/30min";

export default function AIReceptionistPage() {
    const openCalendly = () => {
        if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        else window.open(CALENDLY_URL, "_blank");
    };

    const features = [
        { icon: <Clock size={24} />, title: "Instant Response", desc: "Calls are answered in under 1 second — no lead left waiting." },
        { icon: <Brain size={24} />, title: "Smart Qualification", desc: "AI scores leads based on budget, timeline, and intent in real-time." },
        { icon: <CalendarDays size={24} />, title: "Auto Booking", desc: "Books appointments directly on your calendar with confirmed availability." },
        { icon: <FileText size={24} />, title: "Full Transcripts", desc: "Every call is transcribed and summarized with actionable notes." },
        { icon: <Mic size={24} />, title: "Natural Conversations", desc: "Human-like voice AI that adapts tone and language to each lead." },
        { icon: <BarChart3 size={24} />, title: "Call Analytics", desc: "Track call volume, conversion rates, and lead quality over time." },
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
            <Link href="/#tools" style={{ position: "fixed", top: 80, left: 24, zIndex: 1000, display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.85rem", color: "#10B981", textDecoration: "none", fontWeight: 600, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", padding: "8px 16px", borderRadius: 50, border: "1px solid rgba(16,185,129,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <ArrowLeft size={16} /> Back to Home
            </Link>
            <Navbar />

            {/* HERO */}
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
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.10), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>

                            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 28px", background: "rgba(16,185,129,0.06)", borderRadius: 50, marginBottom: 24, border: "1px solid rgba(16,185,129,0.12)" }}>
                                <Phone size={18} style={{ color: "#10B981" }} />
                                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#10B981" }}>AI Receptionist</span>
                            </div>

                            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, fontFamily: "var(--font-dm-sans)", letterSpacing: "-0.04em", marginBottom: 20 }}>
                                Never Miss a Lead Call.{" "}
                                <span style={{ background: "linear-gradient(135deg, #10B981, #059669, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                    Ever Again.
                                </span>
                            </h1>

                            <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
                                Your AI receptionist answers every call instantly, qualifies leads, books appointments, and delivers detailed transcripts — 24 hours a day, 7 days a week.
                            </p>

                            <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                                {[
                                    { value: "<1s", label: "Response Time" },
                                    { value: "34%", label: "Booking Rate" },
                                    { value: "24/7", label: "Availability" },
                                ].map((s) => (
                                    <div key={s.label}>
                                        <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#10B981", fontFamily: "var(--font-dm-sans)" }}>{s.value}</p>
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
                                    background: "linear-gradient(135deg, #10B981, #059669)",
                                    color: "white",
                                    border: "none",
                                    borderRadius: 50,
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    boxShadow: "0 4px 20px rgba(16,185,129,0.3)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(16,185,129,0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(16,185,129,0.3)";
                                }}
                            >
                                See It in Action <ArrowRight size={18} />
                            </button>
                        </motion.div>

                        {/* Live conversation preview */}
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
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
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FEATURES GRID */}
            <section style={{ padding: "100px 24px", background: "#FAFBFE" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
                        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Capabilities</p>
                        <h2 style={{ fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>
                            Everything Your AI Receptionist <span style={{ background: "linear-gradient(135deg, #10B981, #059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Can Do</span>
                        </h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
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

            {/* HOW IT WORKS */}
            <section style={{ padding: "100px 24px" }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
                        <h2 style={{ fontFamily: "var(--font-dm-sans)" }}>How It <span style={{ background: "linear-gradient(135deg, #10B981, #059669)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Works</span></h2>
                    </div>
                    {[
                        { step: "1", title: "Lead Calls In", desc: "When a new lead calls, the AI receptionist answers instantly with a natural, human-like voice." },
                        { step: "2", title: "Qualification Happens", desc: "The AI asks smart questions about budget, timeline, location, and buying intent." },
                        { step: "3", title: "Appointment is Booked", desc: "If qualified, the AI checks your calendar and books a showing or consultation." },
                        { step: "4", title: "You Get the Summary", desc: "Full transcript, lead score, and key notes are added to your CRM automatically." },
                    ].map((item, i) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            style={{ display: "flex", gap: 24, marginBottom: 40, alignItems: "flex-start" }}
                        >
                            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #10B981, #059669)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", fontWeight: 800, fontFamily: "var(--font-dm-sans)", flexShrink: 0 }}>
                                {item.step}
                            </div>
                            <div>
                                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, fontFamily: "var(--font-dm-sans)", marginBottom: 6 }}>{item.title}</h3>
                                <p style={{ fontSize: "0.92rem", color: "#64748B", lineHeight: 1.7 }}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "100px 24px", background: "#0F172A" }}>
                <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontFamily: "var(--font-dm-sans)", color: "white", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: 16 }}>
                        Ready to Put Your Phone on Autopilot?
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 36, lineHeight: 1.7 }}>See how the AI Receptionist handles real calls in a live demo.</p>
                    <button onClick={openCalendly} style={{ padding: "16px 40px", background: "linear-gradient(135deg, #10B981, #059669)", color: "white", border: "none", borderRadius: 50, fontSize: "1rem", fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 24px rgba(16,185,129,0.3)" }}>
                        See It in Action <ArrowRight size={18} style={{ display: "inline", verticalAlign: "middle", marginLeft: 8 }} />
                    </button>
                </div>
            </section>

            <Footer />
        </>
    );
}
