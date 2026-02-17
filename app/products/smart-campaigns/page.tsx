"use client";

import { motion } from "framer-motion";
import {
    Sparkles,
    ArrowRight,
    ArrowLeft,
    Mail,
    Target,
    BarChart3,
    Layers,
    Clock,
    Repeat,
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

export default function SmartCampaignsPage() {
    const openCalendly = () => {
        if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        else window.open(CALENDLY_URL, "_blank");
    };

    const features = [
        { icon: <Target size={24} />, title: "Behavioral Targeting", desc: "Campaigns adapt based on lead activity — opens, replies, clicks, and engagement signals." },
        { icon: <Mail size={24} />, title: "Multi-Channel", desc: "Reach leads via email, SMS, and automated call sequences — all from one workflow." },
        { icon: <Layers size={24} />, title: "50+ Templates", desc: "Pre-built campaign templates for cold outreach, warm follow-ups, market updates, and more." },
        { icon: <Repeat size={24} />, title: "Auto Sequences", desc: "Set it once and let the AI deliver perfectly timed messages for weeks on end." },
        { icon: <BarChart3 size={24} />, title: "Live Analytics", desc: "Track open rates, reply rates, and conversions in real-time dashboards." },
        { icon: <Clock size={24} />, title: "Send-Time Optimization", desc: "AI picks the best time to reach each lead based on their past response patterns." },
    ];

    const campaignPreview = [
        { type: "System", text: "Campaign 'Winter Market Update' sent to 127 leads" },
        { type: "Stats", text: "📬 68% open rate · 22% reply rate · 8 appointments booked" },
        { type: "System", text: "Auto-moved 14 leads from 'Cold' → 'Warm' pipeline" },
        { type: "System", text: "Follow-up sequence triggered for 45 non-openers — sends in 48h" },
        { type: "Stats", text: "🏆 3 leads upgraded to 'Hot' — showing requests submitted" },
    ];

    return (
        <>
            <Link href="/#tools" style={{ position: "fixed", top: 80, left: 24, zIndex: 1000, display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.85rem", color: "#F59E0B", textDecoration: "none", fontWeight: 600, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", padding: "8px 16px", borderRadius: 50, border: "1px solid rgba(245,158,11,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <ArrowLeft size={16} /> Back to Home
            </Link>
            <Navbar />

            <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 100, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.10), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>

                            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 28px", background: "rgba(245,158,11,0.06)", borderRadius: 50, marginBottom: 24, border: "1px solid rgba(245,158,11,0.12)" }}>
                                <Sparkles size={18} style={{ color: "#F59E0B" }} />
                                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#F59E0B" }}>Smart Campaigns</span>
                            </div>

                            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, fontFamily: "var(--font-dm-sans)", letterSpacing: "-0.04em", marginBottom: 20 }}>
                                Outreach That{" "}
                                <span style={{ background: "linear-gradient(135deg, #F59E0B, #D97706, #EA580C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                    Thinks for You.
                                </span>
                            </h1>

                            <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
                                AI-crafted campaign sequences that adapt to each lead&apos;s behavior. Cold outreach, warm follow-ups, market updates — all running on autopilot.
                            </p>

                            <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                                {[{ value: "68%", label: "Open Rate" }, { value: "22%", label: "Reply Rate" }, { value: "50+", label: "Templates" }].map((s) => (
                                    <div key={s.label}>
                                        <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#F59E0B", fontFamily: "var(--font-dm-sans)" }}>{s.value}</p>
                                        <p style={{ fontSize: "0.75rem", color: "#94A3B8" }}>{s.label}</p>
                                    </div>
                                ))}
                            </div>

                            <button onClick={openCalendly} className="btn-primary">See It in Action <ArrowRight size={18} /></button>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                            <div style={{ background: "linear-gradient(135deg, #F8F9FC, #FFFBEB)", borderRadius: 20, padding: 24, border: "1px solid rgba(245,158,11,0.1)", boxShadow: "0 24px 48px rgba(245,158,11,0.08)" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B", animation: "pulse-soft 2s ease-in-out infinite" }} />
                                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#F59E0B" }}>Campaign Activity Feed</span>
                                </div>
                                <div style={{ background: "white", borderRadius: 14, padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                                    {campaignPreview.map((line, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.25 }} style={{ padding: "10px 14px", borderRadius: 10, background: line.type === "Stats" ? "rgba(245,158,11,0.04)" : "#FAFBFE", border: line.type === "Stats" ? "1px solid rgba(245,158,11,0.12)" : "1px solid #F1F5F9" }}>
                                            <span style={{ fontSize: "0.82rem", color: "#334155", lineHeight: 1.6 }}>{line.text}</span>
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
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
                        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Capabilities</p>
                        <h2 style={{ fontFamily: "var(--font-dm-sans)" }}>Campaigns That <span className="gradient-text">Adapt</span></h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {features.map((f, i) => (
                            <motion.div key={f.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ background: "white", borderRadius: 16, padding: 28, border: "1px solid #E2E8F0", transition: "box-shadow 0.3s, transform 0.3s" }}
                                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(245,158,11,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(245,158,11,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#F59E0B", marginBottom: 16 }}>{f.icon}</div>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, fontFamily: "var(--font-dm-sans)", marginBottom: 8 }}>{f.title}</h3>
                                <p style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: 1.7 }}>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "100px 24px", background: "#0F172A" }}>
                <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontFamily: "var(--font-dm-sans)", color: "white", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: 16 }}>Ready to Launch Smarter Campaigns?</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 36, lineHeight: 1.7 }}>See how Smart Campaigns automate your outreach in a live demo.</p>
                    <button onClick={openCalendly} style={{ padding: "16px 40px", background: "linear-gradient(135deg, #F59E0B, #D97706)", color: "white", border: "none", borderRadius: 50, fontSize: "1rem", fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 24px rgba(245,158,11,0.3)" }}>
                        See It in Action <ArrowRight size={18} style={{ display: "inline", verticalAlign: "middle", marginLeft: 8 }} />
                    </button>
                </div>
            </section>

            <Footer />
        </>
    );
}
