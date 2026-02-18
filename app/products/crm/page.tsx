"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { motion } from "framer-motion";
import {
    Database,
    ArrowRight,
    ArrowLeft,
    Users,
    Tag,
    BarChart3,
    Search,
    Layers,
    Zap,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ProductHero from "../../components/common/ProductHero";
import CalendlyButton from "../../components/common/CalendlyButton";

function CRMContent() {
    const searchParams = useSearchParams();
    const fromSection = searchParams.get("from") === "section";
    const [canAnimate, setCanAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setCanAnimate(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const features = [
        { icon: <Tag size={24} />, title: "Auto-Tagging", desc: <>Leads are automatically tagged by source, interest level, price range, and more — <strong>zero manual work</strong>.</> },
        { icon: <Search size={24} />, title: "Smart Search", desc: <><strong>Find any lead instantly</strong> with AI-powered search across names, notes, tags, and conversation history.</> },
        { icon: <Layers size={24} />, title: "Pipeline Views", desc: <><strong>Pipeline Views</strong>, list views, and custom filters so you see your pipeline the way you want.</> },
        { icon: <BarChart3 size={24} />, title: "AI Insights", desc: <><strong>Surface high-intent leads</strong>, predict close probability, and spot pipeline bottlenecks automatically.</> },
        { icon: <Users size={24} />, title: "Team Collaboration", desc: <><strong>Assign leads, share notes</strong>, and track team performance — all in one place.</> },
        { icon: <Zap size={24} />, title: "Zero Manual Entry", desc: <>Every call, text, and email is <strong>automatically logged</strong>. Your CRM stays up-to-date without lifting a finger.</> },
    ];

    const crmPreview = [
        { type: "action", text: "New lead 'Sarah M.' auto-tagged as Hot — budget $550k, relocating from Austin" },
        { type: "action", text: "Lead 'John D.' moved to 'Showing' stage after SMS confirmation" },
        { type: "insight", text: "💡 AI Insight: 12 leads in 'Warm' stage haven't been contacted in 5+ days" },
        { type: "action", text: "Auto-assigned 3 new leads to Agent Lisa B. based on zip code routing" },
        { type: "insight", text: "📊 Pipeline health: 87% of Hot leads contacted within 1 hour" },
    ];

    return (
        <>
            <Navbar />

            <ProductHero
                title="Your Leads,"
                titleAccent="Organized by AI."
                description={<>A CRM that <strong>auto-organizes your leads</strong>, <strong>tracks every interaction</strong>, and <strong>surfaces actionable insights</strong> — no manual data entry needed.</>}
                icon={<Database size={18} />}
                badgeText="AI-Powered CRM"
                stats={[{ value: "100%", label: "Auto-Tagged" }, { value: "10h/wk", label: "Time Saved" }, { value: "∞", label: "Pipeline Views" }]}
                color="#F59E0B"
                accentColor="rgba(245,158,11,0.04)"
                fromSection={fromSection}
                sectionId="crm"
                previewContent={
                    <div style={{ background: "linear-gradient(135deg, #FFFBEB, #FEF3C7)", borderRadius: 20, padding: 24, border: "1px solid rgba(245,158,11,0.1)", boxShadow: "0 24px 48px rgba(245,158,11,0.08)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", animation: "pulse-soft 2s ease-in-out infinite" }} />
                            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#10B981" }}>CRM Activity Feed</span>
                        </div>
                        <div style={{ background: "white", borderRadius: 14, padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                            {crmPreview.map((line, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.25 }} style={{ padding: "10px 14px", borderRadius: 10, background: line.type === "insight" ? "rgba(245,158,11,0.04)" : "#FAFBFE", border: line.type === "insight" ? "1px solid rgba(245,158,11,0.12)" : "1px solid #F1F5F9" }}>
                                    <span style={{ fontSize: "0.82rem", color: "#334155", lineHeight: 1.6 }}>{line.text}</span>
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
                        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Capabilities</p>
                        <h2 style={{ fontFamily: "var(--font-dm-sans)" }}>A CRM That <span className="gradient-text">Works for You</span></h2>
                    </motion.div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {features.map((f, i) => (
                            <motion.div key={f.title} initial={{ opacity: 0, y: 24 }} whileInView={canAnimate ? { opacity: 1, y: 0 } : undefined} viewport={{ once: true, margin: "0px 0px -100px 0px" }} transition={{ delay: i * 0.1 }} style={{ background: "white", borderRadius: 16, padding: 28, border: "1px solid #E2E8F0", transition: "box-shadow 0.3s, transform 0.3s" }}
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={canAnimate ? { opacity: 1, y: 0 } : undefined}
                    viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}
                >
                    <h2 style={{ fontFamily: "var(--font-dm-sans)", color: "white", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: 16 }}>Ready to Ditch the Spreadsheets?</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 36, lineHeight: 1.7 }}>See how the AI-Powered CRM organizes your leads in a live demo.</p>
                    <CalendlyButton text="See It in Action" />
                </motion.div>
            </section>

            <Footer />
        </>
    );
}

export default function CRMPage() {
    return (
        <Suspense fallback={null}>
            <CRMContent />
        </Suspense>
    );
}
