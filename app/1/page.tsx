"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
    Users,
    Phone,
    MessageSquare,
    CalendarDays,
    BarChart3,
    Megaphone,
    ArrowRight,
    Check,
    X as XIcon,
    Sparkles,
    TrendingUp,
    Clock,
    Zap,
    Star,
} from "lucide-react";
import Navbar from "../components/Navbar";
import DemoForm from "../components/DemoForm";
import Footer from "../components/Footer";

/* ─── Animated Counter ─── */
function Counter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const duration = 2000;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, end]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
}

/* ─── Section Fade-In Wrapper ─── */
function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function Design1() {
    const [demoOpen, setDemoOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const features = [
        { icon: <Users size={28} />, title: "Smart CRM", desc: "Import your lead database and watch it organize itself. Cold leads, warm leads, active deals — all sorted by source, status, and priority." },
        { icon: <CalendarDays size={28} />, title: "Synced Calendar", desc: "Every showing, follow-up, and deadline in one place. Automatic reminders tied to each lead ensure you never miss a beat." },
        { icon: <Phone size={28} />, title: "AI Receptionist", desc: "Your AI calls cold leads 24/7, qualifies them, books appointments, and saves full transcripts — all while you sleep." },
        { icon: <MessageSquare size={28} />, title: "SMS Bot", desc: "Automated, intelligent text conversations that nurture leads and answer questions instantly. Feels human, works at machine speed." },
        { icon: <Megaphone size={28} />, title: "Smart Campaigns", desc: "Create, edit, and toggle outreach sequences — cold outreach, warm follow-ups, informational drips. Each one tailored to your lead's stage." },
        { icon: <BarChart3 size={28} />, title: "Analytics", desc: "See what's working. Conversion rates, response times, campaign performance — actionable insights at a glance." },
    ];

    const tabs = [
        { label: "CRM", desc: "Your entire lead database, organized and intelligent. See every lead's source, status, notes, AI-suggested actions, and upcoming events at a glance.", visual: "crm" },
        { label: "Calendar", desc: "A calendar that knows your leads. Showings, follow-ups, and deadlines sync automatically from your CRM. Never double-book or forget a call.", visual: "calendar" },
        { label: "Campaigns", desc: "Toggle campaigns on and off. Cold outreach, warm nurturing, information-based sequences — all running in the background, tailored to each lead.", visual: "campaigns" },
        { label: "AI Tools", desc: "Let AI handle the heavy lifting. The receptionist calls, the SMS bot texts, and transcripts auto-populate lead profiles with smart notes.", visual: "ai" },
    ];

    const beforeItems = [
        "Leads slip through the cracks",
        "Manual follow-ups take hours",
        "Missed calls = missed deals",
        "Spreadsheets everywhere",
        "No idea which leads are hot",
        "Campaigns are copy-paste chaos",
    ];

    const afterItems = [
        "Every lead tracked & organized automatically",
        "AI follows up in seconds, 24/7",
        "AI receptionist answers every call",
        "One command center for everything",
        "AI scores and prioritizes leads for you",
        "Smart campaigns run on autopilot",
    ];

    return (
        <>
            <Navbar onOpenDemo={() => setDemoOpen(true)} />
            <DemoForm isOpen={demoOpen} onClose={() => setDemoOpen(false)} />

            {/* ═══ HERO ═══ */}
            <motion.section
                ref={heroRef}
                style={{ opacity: heroOpacity, y: heroY }}
            >
                <div
                    style={{
                        position: "relative",
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        paddingTop: 80,
                    }}
                >
                    {/* Background Orbs */}
                    <div className="orb orb-1" style={{ animation: "pulse-soft 6s ease-in-out infinite" }} />
                    <div className="orb orb-2" style={{ animation: "pulse-soft 8s ease-in-out infinite 2s" }} />
                    <div className="orb orb-3" style={{ animation: "pulse-soft 7s ease-in-out infinite 4s" }} />

                    <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 800, padding: "0 24px" }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "8px 20px",
                                background: "rgba(79,70,229,0.08)",
                                borderRadius: 50,
                                marginBottom: 24,
                                border: "1px solid rgba(79,70,229,0.15)",
                            }}
                        >
                            <Sparkles size={16} style={{ color: "#4F46E5" }} />
                            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#4F46E5", fontFamily: "var(--font-inter)" }}>
                                Your Real Estate Copilot
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            style={{
                                fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
                                fontWeight: 800,
                                lineHeight: 1.1,
                                marginBottom: 24,
                                fontFamily: "var(--font-dm-sans)",
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Stop Chasing Leads.{" "}
                            <span className="gradient-text">Start Closing Deals.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            style={{
                                fontSize: "1.15rem",
                                color: "#64748B",
                                maxWidth: 580,
                                margin: "0 auto 36px",
                                lineHeight: 1.7,
                            }}
                        >
                            RealEase is the AI-powered command center that organizes your leads,
                            automates follow-ups, and helps you close more deals — on autopilot.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
                        >
                            <button
                                onClick={() => setDemoOpen(true)}
                                className="btn-primary"
                            >
                                Book a Free Demo <ArrowRight size={18} />
                            </button>
                            <a href="#features" className="btn-secondary">
                                See How It Works
                            </a>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* ═══ TRUST BAR ═══ */}
            <section style={{ padding: "60px 24px", background: "#FAFBFE" }}>
                <FadeIn>
                    <div
                        style={{
                            maxWidth: 900,
                            margin: "0 auto",
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: 32,
                            textAlign: "center",
                        }}
                    >
                        {[
                            { value: "10,000+", label: "Leads Managed" },
                            { value: "3x", label: "Faster Follow-ups" },
                            { value: "47%", label: "More Conversions" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <p
                                    style={{
                                        fontSize: "2rem",
                                        fontWeight: 800,
                                        background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                >
                                    {stat.value}
                                </p>
                                <p style={{ fontSize: "0.9rem", color: "#64748B", fontWeight: 500 }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </section>

            {/* ═══ FEATURES GRID ═══ */}
            <section id="features" style={{ padding: "100px 24px" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <FadeIn>
                        <div style={{ textAlign: "center", marginBottom: 64 }}>
                            <div className="section-divider" />
                            <h2 style={{ fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>
                                Everything You Need,{" "}
                                <span className="gradient-text">One Platform</span>
                            </h2>
                            <p style={{ fontSize: "1.05rem", color: "#64748B", maxWidth: 560, margin: "0 auto" }}>
                                Stop juggling 10 different tools. RealEase brings your entire workflow into a single, intelligent command center.
                            </p>
                        </div>
                    </FadeIn>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(340, 1fr))",
                            gap: 24,
                        }}
                    >
                        {features.map((f, i) => (
                            <FadeIn key={f.title} delay={i * 0.08}>
                                <div
                                    className="glass-card"
                                    style={{
                                        padding: "36px 32px",
                                        height: "100%",
                                        cursor: "default",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: 14,
                                            background: "linear-gradient(135deg, rgba(79,70,229,0.1), rgba(124,58,237,0.08))",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: 20,
                                            color: "#4F46E5",
                                        }}
                                    >
                                        {f.icon}
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: "1.15rem",
                                            fontWeight: 700,
                                            marginBottom: 10,
                                            fontFamily: "var(--font-dm-sans)",
                                        }}
                                    >
                                        {f.title}
                                    </h3>
                                    <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.7 }}>
                                        {f.desc}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ BEFORE vs AFTER ═══ */}
            <section style={{ padding: "100px 24px", background: "#FAFBFE" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <FadeIn>
                        <div style={{ textAlign: "center", marginBottom: 64 }}>
                            <div className="section-divider" />
                            <h2 style={{ fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>
                                The <span style={{ color: "#EF4444" }}>Old Way</span> vs The{" "}
                                <span className="gradient-text">RealEase Way</span>
                            </h2>
                            <p style={{ fontSize: "1.05rem", color: "#64748B", maxWidth: 560, margin: "0 auto" }}>
                                See what changes when AI handles the busywork.
                            </p>
                        </div>
                    </FadeIn>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                        {/* Without */}
                        <FadeIn delay={0.1}>
                            <div
                                style={{
                                    background: "white",
                                    borderRadius: 20,
                                    padding: "36px 32px",
                                    border: "1px solid #FEE2E2",
                                    height: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        marginBottom: 28,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: 10,
                                            background: "#FEF2F2",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <XIcon size={18} style={{ color: "#EF4444" }} />
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            color: "#991B1B",
                                            fontFamily: "var(--font-dm-sans)",
                                        }}
                                    >
                                        Without RealEase
                                    </h3>
                                </div>
                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                                    {beforeItems.map((item) => (
                                        <li
                                            key={item}
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: 12,
                                                fontSize: "0.9rem",
                                                color: "#64748B",
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            <XIcon
                                                size={16}
                                                style={{
                                                    color: "#EF4444",
                                                    flexShrink: 0,
                                                    marginTop: 3,
                                                }}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                        {/* With */}
                        <FadeIn delay={0.2}>
                            <div
                                style={{
                                    background: "white",
                                    borderRadius: 20,
                                    padding: "36px 32px",
                                    border: "1px solid #D1FAE5",
                                    height: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        marginBottom: 28,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: 10,
                                            background: "#ECFDF5",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Check size={18} style={{ color: "#10B981" }} />
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            color: "#065F46",
                                            fontFamily: "var(--font-dm-sans)",
                                        }}
                                    >
                                        With RealEase
                                    </h3>
                                </div>
                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                                    {afterItems.map((item) => (
                                        <li
                                            key={item}
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: 12,
                                                fontSize: "0.9rem",
                                                color: "#64748B",
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            <Check
                                                size={16}
                                                style={{
                                                    color: "#10B981",
                                                    flexShrink: 0,
                                                    marginTop: 3,
                                                }}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ═══ PRODUCT SHOWCASE (Tabs) ═══ */}
            <section style={{ padding: "100px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <FadeIn>
                        <div style={{ textAlign: "center", marginBottom: 48 }}>
                            <div className="section-divider" />
                            <h2 style={{ fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>
                                See It <span className="gradient-text">In Action</span>
                            </h2>
                            <p style={{ fontSize: "1.05rem", color: "#64748B", maxWidth: 560, margin: "0 auto" }}>
                                Explore the tools that make up your new command center.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        {/* Tab Nav */}
                        <div
                            style={{
                                display: "flex",
                                gap: 8,
                                justifyContent: "center",
                                marginBottom: 40,
                                flexWrap: "wrap",
                            }}
                        >
                            {tabs.map((tab, i) => (
                                <button
                                    key={tab.label}
                                    onClick={() => setActiveTab(i)}
                                    style={{
                                        padding: "10px 24px",
                                        borderRadius: 50,
                                        border: activeTab === i ? "none" : "1.5px solid #E2E8F0",
                                        background: activeTab === i ? "linear-gradient(135deg, #4F46E5, #7C3AED)" : "white",
                                        color: activeTab === i ? "white" : "#475569",
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        fontFamily: "var(--font-inter)",
                                    }}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1.2fr",
                                gap: 48,
                                alignItems: "center",
                            }}
                        >
                            <div>
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h3
                                        style={{
                                            fontSize: "1.6rem",
                                            fontWeight: 800,
                                            marginBottom: 16,
                                            fontFamily: "var(--font-dm-sans)",
                                        }}
                                    >
                                        {tabs[activeTab].label}
                                    </h3>
                                    <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.8, marginBottom: 28 }}>
                                        {tabs[activeTab].desc}
                                    </p>
                                    <button
                                        onClick={() => setDemoOpen(true)}
                                        className="btn-primary"
                                        style={{ fontSize: "0.9rem" }}
                                    >
                                        See Live Demo <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            </div>

                            {/* Mock Dashboard Preview */}
                            <motion.div
                                key={`visual-${activeTab}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    background: "linear-gradient(135deg, #F8F9FC, #EEF2FF)",
                                    borderRadius: 20,
                                    padding: 32,
                                    minHeight: 380,
                                    border: "1px solid rgba(79,70,229,0.1)",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Mock UI Elements */}
                                {tabs[activeTab].visual === "crm" && (
                                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                        <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                                            {["All Leads", "Active", "Cold", "Under Contract"].map((t, i) => (
                                                <span
                                                    key={t}
                                                    style={{
                                                        padding: "6px 16px",
                                                        borderRadius: 20,
                                                        fontSize: "0.75rem",
                                                        fontWeight: 600,
                                                        background: i === 0 ? "#4F46E5" : "#F1F5F9",
                                                        color: i === 0 ? "white" : "#64748B",
                                                    }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        {[
                                            { name: "Sarah Johnson", source: "Google", status: "Showing", score: 92 },
                                            { name: "Mike Chen", source: "Open House", status: "Under Contract", score: 88 },
                                            { name: "Lisa Park", source: "Intake Form", status: "Cold Lead", score: 45 },
                                            { name: "James Wilson", source: "Referral", status: "Active", score: 76 },
                                        ].map((lead) => (
                                            <div
                                                key={lead.name}
                                                style={{
                                                    background: "white",
                                                    borderRadius: 12,
                                                    padding: "14px 18px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                                                }}
                                            >
                                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                                    <div
                                                        style={{
                                                            width: 36,
                                                            height: 36,
                                                            borderRadius: "50%",
                                                            background: "linear-gradient(135deg, #818CF8, #A78BFA)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "white",
                                                            fontSize: "0.75rem",
                                                            fontWeight: 700,
                                                        }}
                                                    >
                                                        {lead.name.split(" ").map((n) => n[0]).join("")}
                                                    </div>
                                                    <div>
                                                        <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#0F172A" }}>{lead.name}</p>
                                                        <p style={{ fontSize: "0.7rem", color: "#94A3B8" }}>{lead.source}</p>
                                                    </div>
                                                </div>
                                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                                    <span
                                                        style={{
                                                            padding: "4px 10px",
                                                            borderRadius: 6,
                                                            fontSize: "0.7rem",
                                                            fontWeight: 600,
                                                            background: lead.score > 80 ? "#ECFDF5" : lead.score > 60 ? "#FFF7ED" : "#FEF2F2",
                                                            color: lead.score > 80 ? "#059669" : lead.score > 60 ? "#D97706" : "#DC2626",
                                                        }}
                                                    >
                                                        {lead.status}
                                                    </span>
                                                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#4F46E5" }}>
                                                        {lead.score}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {tabs[activeTab].visual === "calendar" && (
                                    <div>
                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                                            <span style={{ fontWeight: 700, color: "#0F172A", fontSize: "0.95rem" }}>February 2026</span>
                                            <div style={{ display: "flex", gap: 8 }}>
                                                <span style={{ padding: "4px 12px", borderRadius: 8, background: "#4F46E5", color: "white", fontSize: "0.75rem", fontWeight: 600 }}>Week</span>
                                                <span style={{ padding: "4px 12px", borderRadius: 8, background: "#F1F5F9", color: "#64748B", fontSize: "0.75rem", fontWeight: 600 }}>Month</span>
                                            </div>
                                        </div>
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 16 }}>
                                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                                                <span key={d} style={{ textAlign: "center", fontSize: "0.65rem", color: "#94A3B8", fontWeight: 600, padding: 4 }}>{d}</span>
                                            ))}
                                            {Array.from({ length: 28 }, (_, i) => (
                                                <div
                                                    key={i}
                                                    style={{
                                                        textAlign: "center",
                                                        padding: 6,
                                                        borderRadius: 8,
                                                        fontSize: "0.75rem",
                                                        fontWeight: 500,
                                                        background: i === 15 ? "#4F46E5" : "transparent",
                                                        color: i === 15 ? "white" : "#334155",
                                                        position: "relative",
                                                    }}
                                                >
                                                    {i + 1}
                                                    {[3, 7, 15, 20, 24].includes(i) && (
                                                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: i === 15 ? "white" : "#4F46E5", margin: "2px auto 0" }} />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                            {[
                                                { time: "10:00 AM", event: "Showing — 123 Oak St", lead: "Sarah J." },
                                                { time: "2:00 PM", event: "Follow-up Call", lead: "Mike C." },
                                                { time: "4:30 PM", event: "Contract Review", lead: "Lisa P." },
                                            ].map((ev) => (
                                                <div key={ev.event} style={{ background: "white", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                                                    <div style={{ width: 4, height: 32, borderRadius: 4, background: "linear-gradient(180deg, #4F46E5, #7C3AED)" }} />
                                                    <div>
                                                        <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#0F172A" }}>{ev.event}</p>
                                                        <p style={{ fontSize: "0.7rem", color: "#94A3B8" }}>{ev.time} · {ev.lead}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {tabs[activeTab].visual === "campaigns" && (
                                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                        {[
                                            { name: "Cold Lead Outreach", status: "Active", sent: 245, opened: 68, type: "outreach" },
                                            { name: "Warm Lead Follow-up", status: "Active", sent: 180, opened: 82, type: "follow-up" },
                                            { name: "Market Update Newsletter", status: "Paused", sent: 520, opened: 55, type: "info" },
                                            { name: "New Listing Alert", status: "Active", sent: 90, opened: 91, type: "alert" },
                                        ].map((c) => (
                                            <div key={c.name} style={{ background: "white", borderRadius: 14, padding: "18px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                                                    <div>
                                                        <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0F172A" }}>{c.name}</p>
                                                        <p style={{ fontSize: "0.7rem", color: "#94A3B8" }}>{c.type}</p>
                                                    </div>
                                                    <div
                                                        style={{
                                                            width: 40,
                                                            height: 22,
                                                            borderRadius: 11,
                                                            background: c.status === "Active" ? "#10B981" : "#CBD5E1",
                                                            position: "relative",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: "50%",
                                                                background: "white",
                                                                position: "absolute",
                                                                top: 3,
                                                                left: c.status === "Active" ? 21 : 3,
                                                                transition: "left 0.2s",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div style={{ display: "flex", gap: 16 }}>
                                                    <span style={{ fontSize: "0.7rem", color: "#64748B" }}>Sent: <b style={{ color: "#0F172A" }}>{c.sent}</b></span>
                                                    <span style={{ fontSize: "0.7rem", color: "#64748B" }}>Opened: <b style={{ color: "#4F46E5" }}>{c.opened}%</b></span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {tabs[activeTab].visual === "ai" && (
                                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                        <div style={{ background: "white", borderRadius: 14, padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                                                <Phone size={18} style={{ color: "#4F46E5" }} />
                                                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0F172A" }}>AI Receptionist — Last Call</span>
                                            </div>
                                            <div style={{ background: "#F8F9FC", borderRadius: 10, padding: 14, fontSize: "0.8rem", color: "#475569", lineHeight: 1.7 }}>
                                                <p style={{ color: "#64748B" }}><b style={{ color: "#4F46E5" }}>AI:</b> &quot;Hi, this is Sarah from RealEase Realty. I&apos;m calling about the property you inquired about on Zillow...&quot;</p>
                                                <p style={{ marginTop: 8, color: "#64748B" }}><b style={{ color: "#0F172A" }}>Lead:</b> &quot;Yes! I&apos;d love to schedule a showing this week.&quot;</p>
                                                <p style={{ marginTop: 8, color: "#64748B" }}><b style={{ color: "#4F46E5" }}>AI:</b> &quot;Wonderful! I have availability on Thursday at 2 PM or Friday at 10 AM...&quot;</p>
                                            </div>
                                            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                                                <span style={{ padding: "4px 10px", borderRadius: 6, fontSize: "0.7rem", fontWeight: 600, background: "#ECFDF5", color: "#059669" }}>✓ Appointment Booked</span>
                                                <span style={{ padding: "4px 10px", borderRadius: 6, fontSize: "0.7rem", fontWeight: 600, background: "#EEF2FF", color: "#4F46E5" }}>Transcript Saved</span>
                                            </div>
                                        </div>

                                        <div style={{ background: "white", borderRadius: 14, padding: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                                                <MessageSquare size={18} style={{ color: "#7C3AED" }} />
                                                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0F172A" }}>SMS Bot Activity</span>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                                {[
                                                    { msg: "Sent follow-up to James W. — replied in 4 min", badge: "Engaged" },
                                                    { msg: "Qualified Michael R. — added to hot leads", badge: "Qualified" },
                                                    { msg: "Sent market update to 12 cold leads", badge: "Outreach" },
                                                ].map((a) => (
                                                    <div key={a.msg} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #F1F5F9" }}>
                                                        <span style={{ fontSize: "0.78rem", color: "#475569" }}>{a.msg}</span>
                                                        <span style={{ padding: "3px 8px", borderRadius: 4, fontSize: "0.65rem", fontWeight: 600, background: "#F5F3FF", color: "#7C3AED" }}>{a.badge}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ═══ AI STATS ═══ */}
            <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #4F46E5, #7C3AED)" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <FadeIn>
                        <h2
                            style={{
                                textAlign: "center",
                                color: "white",
                                marginBottom: 12,
                                fontFamily: "var(--font-dm-sans)",
                            }}
                        >
                            AI Is Changing Real Estate
                        </h2>
                        <p
                            style={{
                                textAlign: "center",
                                color: "rgba(255,255,255,0.7)",
                                marginBottom: 48,
                                fontSize: "1.05rem",
                            }}
                        >
                            The numbers don&apos;t lie. Agents using AI-powered tools are outperforming the competition.
                        </p>
                    </FadeIn>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                        {[
                            { icon: <TrendingUp size={24} />, value: 47, suffix: "%", label: "Higher conversion rate with AI follow-ups" },
                            { icon: <Clock size={24} />, value: 78, suffix: "%", label: "of leads expect a response within 5 minutes" },
                            { icon: <Zap size={24} />, value: 10, suffix: "x", label: "Faster lead qualification with AI calling" },
                            { icon: <Star size={24} />, value: 89, suffix: "%", label: "of top agents will use AI tools by 2027" },
                        ].map((stat, i) => (
                            <FadeIn key={stat.label} delay={i * 0.1}>
                                <div
                                    style={{
                                        textAlign: "center",
                                        padding: "32px 20px",
                                        background: "rgba(255,255,255,0.1)",
                                        borderRadius: 16,
                                        backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                    }}
                                >
                                    <div style={{ color: "rgba(255,255,255,0.8)", marginBottom: 12 }}>{stat.icon}</div>
                                    <p
                                        style={{
                                            fontSize: "2.2rem",
                                            fontWeight: 800,
                                            color: "white",
                                            fontFamily: "var(--font-dm-sans)",
                                            marginBottom: 8,
                                        }}
                                    >
                                        <Counter end={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "0.8rem",
                                            color: "rgba(255,255,255,0.7)",
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ PRICING ═══ */}
            <section id="pricing" style={{ padding: "100px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <FadeIn>
                        <div style={{ textAlign: "center", marginBottom: 64 }}>
                            <div className="section-divider" />
                            <h2 style={{ fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>
                                Simple, Transparent{" "}
                                <span className="gradient-text">Pricing</span>
                            </h2>
                            <p style={{ fontSize: "1.05rem", color: "#64748B", maxWidth: 500, margin: "0 auto" }}>
                                Start free, upgrade when you&apos;re ready to scale.
                            </p>
                        </div>
                    </FadeIn>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {[
                            {
                                name: "Starter",
                                price: "$49",
                                desc: "Perfect for solo agents just getting started.",
                                features: ["Up to 200 leads", "AI SMS Bot", "Basic campaigns", "Calendar sync", "Email support"],
                                popular: false,
                            },
                            {
                                name: "Professional",
                                price: "$99",
                                desc: "For serious agents ready to scale.",
                                features: ["Unlimited leads", "AI Receptionist + SMS Bot", "Advanced campaigns", "Team calendar", "Priority support", "Analytics dashboard"],
                                popular: true,
                            },
                            {
                                name: "Enterprise",
                                price: "$249",
                                desc: "For teams and brokerages.",
                                features: ["Everything in Pro", "Multi-agent support", "Custom integrations", "White-label options", "Dedicated account manager", "API access"],
                                popular: false,
                            },
                        ].map((plan, i) => (
                            <FadeIn key={plan.name} delay={i * 0.1}>
                                <div
                                    style={{
                                        background: plan.popular ? "linear-gradient(135deg, #4F46E5, #7C3AED)" : "white",
                                        borderRadius: 20,
                                        padding: "40px 32px",
                                        border: plan.popular ? "none" : "1.5px solid #E2E8F0",
                                        position: "relative",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        boxShadow: plan.popular ? "0 20px 60px rgba(79,70,229,0.25)" : "none",
                                        transform: plan.popular ? "scale(1.04)" : "none",
                                    }}
                                >
                                    {plan.popular && (
                                        <span
                                            style={{
                                                position: "absolute",
                                                top: -12,
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                padding: "6px 20px",
                                                background: "#F59E0B",
                                                color: "white",
                                                borderRadius: 50,
                                                fontSize: "0.75rem",
                                                fontWeight: 700,
                                            }}
                                        >
                                            Most Popular
                                        </span>
                                    )}
                                    <h3
                                        style={{
                                            fontSize: "1.2rem",
                                            fontWeight: 700,
                                            color: plan.popular ? "white" : "#0F172A",
                                            marginBottom: 8,
                                            fontFamily: "var(--font-dm-sans)",
                                        }}
                                    >
                                        {plan.name}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "0.85rem",
                                            color: plan.popular ? "rgba(255,255,255,0.7)" : "#64748B",
                                            marginBottom: 20,
                                        }}
                                    >
                                        {plan.desc}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "2.5rem",
                                            fontWeight: 800,
                                            color: plan.popular ? "white" : "#0F172A",
                                            fontFamily: "var(--font-dm-sans)",
                                            marginBottom: 4,
                                        }}
                                    >
                                        {plan.price}
                                        <span
                                            style={{
                                                fontSize: "1rem",
                                                fontWeight: 500,
                                                color: plan.popular ? "rgba(255,255,255,0.6)" : "#94A3B8",
                                            }}
                                        >
                                            /mo
                                        </span>
                                    </p>
                                    <ul
                                        style={{
                                            listStyle: "none",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 12,
                                            marginTop: 24,
                                            marginBottom: 32,
                                            flex: 1,
                                        }}
                                    >
                                        {plan.features.map((f) => (
                                            <li
                                                key={f}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 10,
                                                    fontSize: "0.875rem",
                                                    color: plan.popular ? "rgba(255,255,255,0.85)" : "#475569",
                                                }}
                                            >
                                                <Check size={16} style={{ color: plan.popular ? "#A5F3FC" : "#10B981", flexShrink: 0 }} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => setDemoOpen(true)}
                                        style={{
                                            padding: "12px 28px",
                                            borderRadius: 50,
                                            border: plan.popular ? "2px solid white" : "1.5px solid #E2E8F0",
                                            background: plan.popular ? "white" : "transparent",
                                            color: plan.popular ? "#4F46E5" : "#475569",
                                            fontSize: "0.9rem",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            fontFamily: "var(--font-inter)",
                                        }}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section
                style={{
                    padding: "100px 24px",
                    background: "linear-gradient(135deg, #F8F9FC, #EEF2FF)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div className="orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(79,70,229,0.12), transparent)", top: -100, right: -100 }} />
                <div className="orb" style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(124,58,237,0.1), transparent)", bottom: -80, left: -80 }} />

                <FadeIn>
                    <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
                        <h2
                            style={{
                                fontFamily: "var(--font-dm-sans)",
                                marginBottom: 16,
                            }}
                        >
                            Ready to Transform Your{" "}
                            <span className="gradient-text">Real Estate Business?</span>
                        </h2>
                        <p style={{ fontSize: "1.05rem", color: "#64748B", marginBottom: 36, lineHeight: 1.7 }}>
                            Join hundreds of top-performing realtors who&apos;ve already made the switch.
                            Book your free demo today and see the difference AI can make.
                        </p>
                        <button
                            onClick={() => setDemoOpen(true)}
                            className="btn-primary"
                            style={{ fontSize: "1.05rem", padding: "16px 40px" }}
                        >
                            Book Your Free Demo <ArrowRight size={18} />
                        </button>
                    </div>
                </FadeIn>
            </section>

            <Footer />

            <style jsx global>{`
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr 1fr !important;
          }
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="grid-template-columns: 1fr 1.2fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </>
    );
}
