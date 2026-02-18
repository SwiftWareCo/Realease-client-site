"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

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

import ProductHero from "../../components/common/ProductHero";
import CalendlyButton from "../../components/common/CalendlyButton";

function SMSAgentContent() {
    const searchParams = useSearchParams();
    const fromSection = searchParams.get("from") === "section";
    const [canAnimate, setCanAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setCanAnimate(true), 2000);
        return () => clearTimeout(timer);
    }, []);

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
            <Navbar showBack={true} />

            <ProductHero
                title="Nurture Every Lead."
                titleAccent="At Machine Speed."
                description={<>Intelligent text conversations that <strong>engage, qualify, and convert leads</strong> — while feeling completely personal. <strong>Replies in 8 seconds flat</strong>.</>}
                icon={<MessageSquare size={18} />}
                badgeText="SMS Agent"
                stats={[
                    { value: "8 sec", label: "Avg Reply" },
                    { value: "72%", label: "Engagement" },
                    { value: "450+", label: "Leads Qualified" }
                ]}
                color="#7C3AED"
                accentColor="rgba(124,58,237,0.04)"
                fromSection={fromSection}
                sectionId="sms-bot"
                previewContent={
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
                }
            />

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
                    <div className="features-grid">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                className="feature-card"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={canAnimate ? { opacity: 1, y: 0 } : undefined}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    background: "white",
                                    borderRadius: 16,
                                    padding: 28,
                                    border: "1px solid #E2E8F0",
                                    transition: "box-shadow 0.3s, transform 0.3s"
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(124,58,237,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                <div className="feature-icon" style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(124,58,237,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7C3AED", marginBottom: 16 }}>
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
                    <h2 style={{ fontFamily: "var(--font-dm-sans)", color: "white", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: 16 }}>Ready to Text Smarter?</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 36, lineHeight: 1.7 }}>See how the SMS Agent engages and converts leads in a live demo.</p>
                    <CalendlyButton text="See It in Action" color="#7C3AED" />
                </motion.div>
            </section>

            <Footer />

            <style jsx>{`
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }

                @media (max-width: 1024px) {
                    .features-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .features-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }

                    .feature-card {
                        padding: 24px !important;
                        text-align: center;
                    }

                    .feature-icon {
                        margin-left: auto;
                        margin-right: auto;
                    }
                }
            `}</style>
        </>
    );
}

export default function SMSAgentPage() {
    return (
        <Suspense fallback={null}>
            <SMSAgentContent />
        </Suspense>
    );
}
