"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Users,
    Phone,
    MessageSquare,
    CalendarDays,
    Megaphone,
    BarChart3,
    ArrowRight,
    Check,
    X as XIcon,
    Sparkles,
    TrendingUp,
    Clock,
    Zap,
    Star,
    Quote,
    ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import DemoForm from "../components/DemoForm";
import Footer from "../components/Footer";

/* ─── Animated Counter ─── */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const step = end / 125;
        const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, end]);
    return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Fade wrapper ─── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

export default function Design2() {
    const [demoOpen, setDemoOpen] = useState(false);

    const featureDeepDives = [
        {
            icon: <Users size={32} />,
            title: "A CRM That Actually Thinks",
            desc: "Import your leads and watch the magic. RealEase auto-organizes by source — Google, open house, intake forms — and splits them into cold leads vs. active deals. Each profile shows notes, upcoming events, active campaigns, and AI-suggested next steps.",
            visual: "crm",
            stats: [
                { label: "Auto-categorization", value: "100%" },
                { label: "Lead sources tracked", value: "12+" },
                { label: "Time saved / week", value: "8hrs" },
            ],
        },
        {
            icon: <Phone size={32} />,
            title: "An AI Receptionist That Never Sleeps",
            desc: "Your AI calls cold leads around the clock. It qualifies them, asks the right questions, books appointments on your calendar, and saves complete transcripts. Every interaction updates the lead's profile with smart notes automatically.",
            visual: "phone",
            stats: [
                { label: "Calls handled 24/7", value: "∞" },
                { label: "Avg. qualification time", value: "3 min" },
                { label: "Booking rate", value: "34%" },
            ],
        },
        {
            icon: <Megaphone size={32} />,
            title: "Campaigns on Autopilot",
            desc: "Create sophisticated outreach sequences in minutes. Cold lead introductions, warm follow-ups, market updates, Q&A sequences — toggle them on, customize the messaging, and let RealEase handle the rest.",
            visual: "campaigns",
            stats: [
                { label: "Template library", value: "50+" },
                { label: "Open rate avg.", value: "68%" },
                { label: "Reply rate avg.", value: "22%" },
            ],
        },
        {
            icon: <CalendarDays size={32} />,
            title: "A Calendar That Knows Your Leads",
            desc: "Every showing, call, and deadline is synced with your lead database. Get smart reminders, conflict detection, and lead context right on your calendar. Never walk into a showing unprepared again.",
            visual: "calendar",
            stats: [
                { label: "Sync delay", value: "0s" },
                { label: "Missed appointments", value: "0" },
                { label: "Prep time saved", value: "15min" },
            ],
        },
    ];

    const testimonials = [
        {
            quote: "I closed 40% more deals in my first quarter with RealEase. The AI receptionist alone paid for the entire subscription.",
            name: "Marcus Thompson",
            role: "Top Producer, RE/MAX Elite",
            avatar: "MT",
        },
        {
            quote: "I used to spend 3 hours a day on follow-ups. Now I spend 15 minutes reviewing what the AI already did. Game changer.",
            name: "Jennifer Walsh",
            role: "Broker, Coldwell Banker",
            avatar: "JW",
        },
        {
            quote: "The campaign system is incredibly intuitive. I set up my drip sequences once and haven't touched them in months — they just work.",
            name: "David Rodriguez",
            role: "Team Lead, Keller Williams",
            avatar: "DR",
        },
    ];

    const comparisonRows = [
        { feature: "Lead follow-up time", old: "2-24 hours", new: "Under 60 seconds" },
        { feature: "Missed calls per week", old: "8-15 calls", new: "Zero" },
        { feature: "Lead organization", old: "Spreadsheets + sticky notes", new: "Auto-sorted by AI" },
        { feature: "Campaign management", old: "Manual copy-paste", new: "Automated sequences" },
        { feature: "Hours on admin / week", old: "12+ hours", new: "Under 2 hours" },
        { feature: "Lead qualification", old: "You call, one by one", new: "AI qualifies 24/7" },
        { feature: "Calendar management", old: "Separate from leads", new: "Fully synced with CRM" },
    ];

    return (
        <>
            <Navbar onOpenDemo={() => setDemoOpen(true)} />
            <DemoForm isOpen={demoOpen} onClose={() => setDemoOpen(false)} />

            {/* ═══ HERO ═══ */}
            <section
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    paddingTop: 100,
                    paddingBottom: 80,
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Subtle grid background */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(79,70,229,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.03) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        pointerEvents: "none",
                    }}
                />

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "center" }}>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 6,
                                        padding: "6px 16px",
                                        background: "#F5F3FF",
                                        borderRadius: 50,
                                        marginBottom: 28,
                                    }}
                                >
                                    <Sparkles size={14} style={{ color: "#7C3AED" }} />
                                    <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#7C3AED" }}>AI-Powered Real Estate Platform</span>
                                </div>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.35 }}
                                style={{
                                    fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                                    fontWeight: 800,
                                    lineHeight: 1.05,
                                    fontFamily: "var(--font-dm-sans)",
                                    letterSpacing: "-0.04em",
                                    marginBottom: 24,
                                }}
                            >
                                Your Leads{" "}
                                <span
                                    style={{
                                        background: "linear-gradient(135deg, #4F46E5, #7C3AED, #EC4899)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Deserve Better
                                </span>{" "}
                                Than a Spreadsheet.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                style={{
                                    fontSize: "1.15rem",
                                    color: "#64748B",
                                    lineHeight: 1.75,
                                    maxWidth: 520,
                                    marginBottom: 40,
                                }}
                            >
                                RealEase is the AI copilot that organizes your leads, calls your prospects,
                                runs your campaigns, and keeps your calendar in perfect sync — so you can
                                focus on what you do best: closing.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.65 }}
                                style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
                            >
                                <button onClick={() => setDemoOpen(true)} className="btn-primary">
                                    Book a Free Demo <ArrowRight size={18} />
                                </button>
                                <a href="#features" className="btn-secondary">
                                    Explore Features
                                </a>
                            </motion.div>

                            {/* Floating badges */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}
                            >
                                {["No credit card required", "Free 14-day trial", "Setup in 5 minutes"].map((badge) => (
                                    <span
                                        key={badge}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6,
                                            fontSize: "0.8rem",
                                            color: "#64748B",
                                        }}
                                    >
                                        <Check size={14} style={{ color: "#10B981" }} />
                                        {badge}
                                    </span>
                                ))}
                            </motion.div>
                        </div>

                        {/* Hero Visual — Stylized Dashboard Preview */}
                        <motion.div
                            initial={{ opacity: 0, x: 60, rotateY: -8 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            style={{
                                background: "white",
                                borderRadius: 24,
                                padding: 0,
                                boxShadow: "0 40px 100px rgba(79,70,229,0.15), 0 8px 30px rgba(0,0,0,0.06)",
                                overflow: "hidden",
                                border: "1px solid #E2E8F0",
                            }}
                        >
                            {/* Title bar */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "14px 20px",
                                    borderBottom: "1px solid #F1F5F9",
                                }}
                            >
                                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
                                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
                                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
                                <span style={{ marginLeft: 12, fontSize: "0.75rem", color: "#94A3B8", fontWeight: 500 }}>realease.ai — Command Center</span>
                            </div>

                            <div style={{ padding: 20 }}>
                                {/* Dashboard mock */}
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 16 }}>
                                    {[
                                        { label: "Active Leads", value: "147", change: "+12%", color: "#4F46E5" },
                                        { label: "Calls Today", value: "23", change: "+8", color: "#10B981" },
                                        { label: "Deals Closing", value: "6", change: "This month", color: "#7C3AED" },
                                    ].map((m) => (
                                        <div key={m.label} style={{ background: "#F8F9FC", borderRadius: 12, padding: "14px 16px" }}>
                                            <p style={{ fontSize: "0.65rem", color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{m.label}</p>
                                            <p style={{ fontSize: "1.4rem", fontWeight: 800, color: m.color, fontFamily: "var(--font-dm-sans)" }}>{m.value}</p>
                                            <p style={{ fontSize: "0.65rem", color: "#10B981", fontWeight: 500 }}>{m.change}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Lead rows */}
                                {[
                                    { name: "Priya Sharma", status: "Showing", time: "2:00 PM", hot: true },
                                    { name: "Tom Davis", status: "AI Call Scheduled", time: "3:30 PM", hot: false },
                                    { name: "Rachel Kim", status: "Under Contract", time: "—", hot: true },
                                ].map((lead) => (
                                    <div
                                        key={lead.name}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "10px 14px",
                                            borderBottom: "1px solid #F1F5F9",
                                        }}
                                    >
                                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                            <div
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: "50%",
                                                    background: lead.hot
                                                        ? "linear-gradient(135deg, #4F46E5, #7C3AED)"
                                                        : "#E2E8F0",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: lead.hot ? "white" : "#64748B",
                                                    fontSize: "0.65rem",
                                                    fontWeight: 700,
                                                }}
                                            >
                                                {lead.name.split(" ").map((n) => n[0]).join("")}
                                            </div>
                                            <div>
                                                <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#0F172A" }}>{lead.name}</p>
                                                <p style={{ fontSize: "0.65rem", color: "#94A3B8" }}>{lead.status}</p>
                                            </div>
                                        </div>
                                        <span style={{ fontSize: "0.7rem", color: "#64748B" }}>{lead.time}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══ MARQUEE ═══ */}
            <section style={{ padding: "20px 0", background: "#0F172A", overflow: "hidden" }}>
                <motion.div
                    animate={{ x: [0, -1400] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{ display: "flex", gap: 60, whiteSpace: "nowrap" }}
                >
                    {[...Array(3)].map((_, rep) => (
                        <div key={rep} style={{ display: "flex", gap: 60, alignItems: "center" }}>
                            {["AI Receptionist", "Smart CRM", "Campaign Engine", "Synced Calendar", "SMS Bot", "Lead Scoring", "Analytics", "Task Manager"].map((item) => (
                                <span
                                    key={`${item}-${rep}`}
                                    style={{
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        color: "rgba(255,255,255,0.5)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.12em",
                                        fontFamily: "var(--font-inter)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12,
                                    }}
                                >
                                    <span style={{ color: "#7C3AED" }}>◆</span> {item}
                                </span>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* ═══ FEATURE DEEP DIVES ═══ */}
            <section id="features" style={{ padding: "100px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <Reveal>
                        <div style={{ textAlign: "center", marginBottom: 80 }}>
                            <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>
                                Feature Spotlight
                            </p>
                            <h2 style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 16 }}>
                                Built for How Agents{" "}
                                <span
                                    style={{
                                        background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Actually Work
                                </span>
                            </h2>
                        </div>
                    </Reveal>

                    {featureDeepDives.map((feature, i) => (
                        <Reveal key={feature.title} delay={0.1}>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                                    gap: 60,
                                    alignItems: "center",
                                    marginBottom: 100,
                                    direction: i % 2 === 1 ? "rtl" : "ltr",
                                }}
                            >
                                <div style={{ direction: "ltr" }}>
                                    <div
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 16,
                                            background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "white",
                                            marginBottom: 24,
                                        }}
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3
                                        style={{
                                            fontSize: "1.8rem",
                                            fontWeight: 800,
                                            fontFamily: "var(--font-dm-sans)",
                                            letterSpacing: "-0.02em",
                                            marginBottom: 16,
                                        }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "1rem",
                                            color: "#64748B",
                                            lineHeight: 1.8,
                                            marginBottom: 28,
                                        }}
                                    >
                                        {feature.desc}
                                    </p>
                                    <div style={{ display: "flex", gap: 24 }}>
                                        {feature.stats.map((s) => (
                                            <div key={s.label}>
                                                <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#4F46E5", fontFamily: "var(--font-dm-sans)" }}>{s.value}</p>
                                                <p style={{ fontSize: "0.75rem", color: "#94A3B8", fontWeight: 500 }}>{s.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Card */}
                                <div style={{ direction: "ltr" }}>
                                    <div
                                        style={{
                                            background: "linear-gradient(135deg, #F8F9FC, #EEF2FF)",
                                            borderRadius: 20,
                                            padding: 28,
                                            minHeight: 320,
                                            border: "1px solid rgba(79,70,229,0.08)",
                                        }}
                                    >
                                        {feature.visual === "crm" && (
                                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                                <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                                                    {["All", "Hot", "Warm", "Cold"].map((tab, idx) => (
                                                        <span key={tab} style={{ padding: "5px 14px", borderRadius: 8, fontSize: "0.72rem", fontWeight: 600, background: idx === 0 ? "#4F46E5" : "#fff", color: idx === 0 ? "white" : "#64748B", boxShadow: idx !== 0 ? "0 1px 3px rgba(0,0,0,0.05)" : "none" }}>{tab}</span>
                                                    ))}
                                                </div>
                                                {["Amanda Blake — Google — Showing", "Kevin Hart — Open House — Contract", "Nina Patel — Referral — Cold", "Luis Garcia — Intake — Active", "Sophie Chen — Zillow — Warm"].map((row) => {
                                                    const parts = row.split(" — ");
                                                    return (
                                                        <div key={row} style={{ background: "white", borderRadius: 10, padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                                                            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#0F172A" }}>{parts[0]}</span>
                                                            <div style={{ display: "flex", gap: 8 }}>
                                                                <span style={{ fontSize: "0.68rem", color: "#94A3B8" }}>{parts[1]}</span>
                                                                <span style={{ fontSize: "0.68rem", padding: "2px 8px", borderRadius: 4, background: "#EEF2FF", color: "#4F46E5", fontWeight: 600 }}>{parts[2]}</span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}

                                        {feature.visual === "phone" && (
                                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                                                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981", animation: "pulse-soft 2s ease-in-out infinite" }} />
                                                    <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#10B981" }}>Live — AI calling Robert M.</span>
                                                </div>
                                                <div style={{ background: "white", borderRadius: 12, padding: 16 }}>
                                                    {[
                                                        { speaker: "AI", text: "Hi Robert, I noticed you were interested in homes in the Westside area. Do you have a moment to chat?" },
                                                        { speaker: "Robert", text: "Sure, I've been looking at that 3-bed on Elm Street." },
                                                        { speaker: "AI", text: "Great choice! I can schedule a showing for you. Would Thursday at 3 PM work?" },
                                                    ].map((line, idx) => (
                                                        <div key={idx} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                                                            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: line.speaker === "AI" ? "#4F46E5" : "#0F172A", flexShrink: 0, width: 44 }}>{line.speaker}:</span>
                                                            <span style={{ fontSize: "0.78rem", color: "#475569", lineHeight: 1.5 }}>{line.text}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div style={{ display: "flex", gap: 8 }}>
                                                    <span style={{ background: "#ECFDF5", color: "#059669", padding: "4px 10px", borderRadius: 6, fontSize: "0.7rem", fontWeight: 600 }}>✓ Showing Booked</span>
                                                    <span style={{ background: "#EEF2FF", color: "#4F46E5", padding: "4px 10px", borderRadius: 6, fontSize: "0.7rem", fontWeight: 600 }}>Notes Updated</span>
                                                </div>
                                            </div>
                                        )}

                                        {feature.visual === "campaigns" && (
                                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                                {[
                                                    { name: "Cold → Warm Pipeline", active: true, sent: 340, rate: "71%" },
                                                    { name: "Just Listed Alert", active: true, sent: 128, rate: "88%" },
                                                    { name: "Monthly Market Digest", active: false, sent: 520, rate: "52%" },
                                                    { name: "Price Drop Notification", active: true, sent: 95, rate: "79%" },
                                                ].map((c) => (
                                                    <div key={c.name} style={{ background: "white", borderRadius: 12, padding: "16px 18px", boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0F172A" }}>{c.name}</span>
                                                            <div style={{ width: 36, height: 20, borderRadius: 10, background: c.active ? "#10B981" : "#CBD5E1", position: "relative" }}>
                                                                <div style={{ width: 14, height: 14, borderRadius: "50%", background: "white", position: "absolute", top: 3, left: c.active ? 19 : 3, transition: "left 0.2s" }} />
                                                            </div>
                                                        </div>
                                                        <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
                                                            <span style={{ fontSize: "0.68rem", color: "#94A3B8" }}>Sent: <b style={{ color: "#0F172A" }}>{c.sent}</b></span>
                                                            <span style={{ fontSize: "0.68rem", color: "#94A3B8" }}>Open rate: <b style={{ color: "#4F46E5" }}>{c.rate}</b></span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {feature.visual === "calendar" && (
                                            <div>
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                                                    <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#0F172A" }}>This Week</span>
                                                    <span style={{ fontSize: "0.72rem", color: "#4F46E5", fontWeight: 600 }}>Feb 16 – 22</span>
                                                </div>
                                                {[
                                                    { day: "Mon", events: [{ time: "9 AM", title: "Team Standup", type: "meeting" }] },
                                                    { day: "Tue", events: [{ time: "11 AM", title: "Showing — 42 Pine Rd", type: "showing" }, { time: "3 PM", title: "Follow-up — Lisa P.", type: "call" }] },
                                                    { day: "Wed", events: [{ time: "10 AM", title: "Open House Prep", type: "task" }] },
                                                    { day: "Thu", events: [{ time: "2 PM", title: "Contract Signing", type: "deal" }, { time: "4 PM", title: "AI Call Review", type: "ai" }] },
                                                    { day: "Fri", events: [{ time: "1 PM", title: "New Client Onboard", type: "meeting" }] },
                                                ].map((day) => (
                                                    <div key={day.day} style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                                                        <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#94A3B8", width: 30, paddingTop: 4 }}>{day.day}</span>
                                                        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                                                            {day.events.map((ev) => (
                                                                <div key={ev.title} style={{ background: "white", borderRadius: 8, padding: "8px 12px", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 1px 3px rgba(0,0,0,0.03)" }}>
                                                                    <div style={{ width: 3, height: 20, borderRadius: 2, background: ev.type === "showing" ? "#4F46E5" : ev.type === "deal" ? "#10B981" : ev.type === "ai" ? "#7C3AED" : "#F59E0B" }} />
                                                                    <div>
                                                                        <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "#0F172A" }}>{ev.title}</p>
                                                                        <p style={{ fontSize: "0.65rem", color: "#94A3B8" }}>{ev.time}</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ═══ COMPARISON TABLE ═══ */}
            <section style={{ padding: "100px 24px", background: "#FAFBFE" }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <Reveal>
                        <div style={{ textAlign: "center", marginBottom: 64 }}>
                            <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>
                                Side by Side
                            </p>
                            <h2 style={{ fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>
                                Traditional Agent vs.{" "}
                                <span style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                    RealEase-Powered Agent
                                </span>
                            </h2>
                        </div>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid #E2E8F0" }}>
                            {/* Header */}
                            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", background: "#F8F9FC", padding: "16px 28px" }}>
                                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em" }}>Feature</span>
                                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center" }}>Traditional</span>
                                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#4F46E5", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center" }}>RealEase</span>
                            </div>
                            {comparisonRows.map((row, i) => (
                                <div
                                    key={row.feature}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1.5fr 1fr 1fr",
                                        padding: "16px 28px",
                                        borderTop: "1px solid #F1F5F9",
                                        background: i % 2 === 0 ? "white" : "#FCFCFD",
                                    }}
                                >
                                    <span style={{ fontSize: "0.87rem", fontWeight: 600, color: "#0F172A" }}>{row.feature}</span>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                                        <XIcon size={14} style={{ color: "#EF4444" }} />
                                        <span style={{ fontSize: "0.82rem", color: "#94A3B8" }}>{row.old}</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                                        <Check size={14} style={{ color: "#10B981" }} />
                                        <span style={{ fontSize: "0.82rem", color: "#0F172A", fontWeight: 600 }}>{row.new}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ TESTIMONIALS ═══ */}
            <section style={{ padding: "100px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <Reveal>
                        <div style={{ textAlign: "center", marginBottom: 64 }}>
                            <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>
                                Trusted by Agents
                            </p>
                            <h2 style={{ fontFamily: "var(--font-dm-sans)" }}>
                                What Realtors Are Saying
                            </h2>
                        </div>
                    </Reveal>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {testimonials.map((t, i) => (
                            <Reveal key={t.name} delay={i * 0.1}>
                                <div
                                    style={{
                                        background: "white",
                                        borderRadius: 20,
                                        padding: "36px 28px",
                                        border: "1px solid #E2E8F0",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        transition: "box-shadow 0.3s, transform 0.3s",
                                        cursor: "default",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = "0 12px 40px rgba(79,70,229,0.1)";
                                        e.currentTarget.style.transform = "translateY(-4px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = "none";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    <Quote size={24} style={{ color: "#D8D5F2", marginBottom: 16 }} />
                                    <p
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "#334155",
                                            lineHeight: 1.75,
                                            flex: 1,
                                            fontStyle: "italic",
                                            marginBottom: 24,
                                        }}
                                    >
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                        <div
                                            style={{
                                                width: 44,
                                                height: 44,
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "white",
                                                fontSize: "0.8rem",
                                                fontWeight: 700,
                                            }}
                                        >
                                            {t.avatar}
                                        </div>
                                        <div>
                                            <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0F172A" }}>{t.name}</p>
                                            <p style={{ fontSize: "0.75rem", color: "#94A3B8" }}>{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ STATS BAR ═══ */}
            <section style={{ padding: "60px 24px", background: "#0F172A" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" }}>
                    {[
                        { value: 47, suffix: "%", label: "Higher Conversion with AI" },
                        { value: 10, suffix: "x", label: "Faster Lead Qualification" },
                        { value: 78, suffix: "%", label: "Leads Expect <5 Min Response" },
                        { value: 89, suffix: "%", label: "Top Agents Using AI by 2027" },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <p style={{ fontSize: "2.5rem", fontWeight: 800, color: "white", fontFamily: "var(--font-dm-sans)" }}>
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </p>
                            <p style={{ fontSize: "0.8rem", color: "#94A3B8" }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══ PRICING ═══ */}
            <section id="pricing" style={{ padding: "100px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <Reveal>
                        <div style={{ textAlign: "center", marginBottom: 64 }}>
                            <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>
                                Pricing
                            </p>
                            <h2 style={{ fontFamily: "var(--font-dm-sans)", marginBottom: 12 }}>
                                Invest in Your Competitive{" "}
                                <span style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Edge</span>
                            </h2>
                            <p style={{ color: "#64748B", fontSize: "1.05rem" }}>Start free. No credit card required.</p>
                        </div>
                    </Reveal>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, alignItems: "stretch" }}>
                        {[
                            { name: "Solo", price: "$49", desc: "For individual agents", features: ["200 leads", "SMS Bot", "3 campaigns", "Calendar", "Email support"], popular: false },
                            { name: "Pro", price: "$99", desc: "For top producers", features: ["Unlimited leads", "AI Receptionist + SMS", "Unlimited campaigns", "Team calendar", "Priority support", "Full analytics"], popular: true },
                            { name: "Brokerage", price: "$249", desc: "For teams & offices", features: ["Everything in Pro", "Multi-agent dashboard", "Custom integrations", "White-label", "Dedicated manager", "API access"], popular: false },
                        ].map((plan, i) => (
                            <Reveal key={plan.name} delay={i * 0.1}>
                                <div
                                    style={{
                                        background: plan.popular ? "#0F172A" : "white",
                                        borderRadius: 20,
                                        padding: "40px 32px",
                                        border: plan.popular ? "none" : "1.5px solid #E2E8F0",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        position: "relative",
                                    }}
                                >
                                    {plan.popular && (
                                        <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "6px 20px", background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: "white", borderRadius: 50, fontSize: "0.75rem", fontWeight: 700 }}>
                                            Most Popular
                                        </span>
                                    )}
                                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: plan.popular ? "white" : "#0F172A", marginBottom: 6, fontFamily: "var(--font-dm-sans)" }}>{plan.name}</h3>
                                    <p style={{ fontSize: "0.85rem", color: plan.popular ? "#94A3B8" : "#64748B", marginBottom: 20 }}>{plan.desc}</p>
                                    <p style={{ fontSize: "2.5rem", fontWeight: 800, color: plan.popular ? "white" : "#0F172A", fontFamily: "var(--font-dm-sans)", marginBottom: 4 }}>
                                        {plan.price}<span style={{ fontSize: "1rem", fontWeight: 500, color: plan.popular ? "#64748B" : "#94A3B8" }}>/mo</span>
                                    </p>
                                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginTop: 24, marginBottom: 32, flex: 1 }}>
                                        {plan.features.map((f) => (
                                            <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.85rem", color: plan.popular ? "#CBD5E1" : "#475569" }}>
                                                <Check size={16} style={{ color: plan.popular ? "#818CF8" : "#10B981", flexShrink: 0 }} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => setDemoOpen(true)}
                                        style={{
                                            padding: "12px 28px",
                                            borderRadius: 50,
                                            border: "none",
                                            background: plan.popular ? "linear-gradient(135deg, #4F46E5, #7C3AED)" : "#0F172A",
                                            color: "white",
                                            fontSize: "0.9rem",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        Get Started <ChevronRight size={16} style={{ display: "inline", verticalAlign: "middle" }} />
                                    </button>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section style={{ padding: "100px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <Reveal>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                borderRadius: 24,
                                overflow: "hidden",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                            }}
                        >
                            {/* Left — Copy */}
                            <div
                                style={{
                                    background: "#0F172A",
                                    padding: "60px 48px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <h2
                                    style={{
                                        color: "white",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontSize: "2rem",
                                        marginBottom: 16,
                                    }}
                                >
                                    The Future of Real Estate
                                    <br />
                                    is{" "}
                                    <span
                                        style={{
                                            background: "linear-gradient(135deg, #818CF8, #A78BFA)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        Already Here
                                    </span>
                                </h2>
                                <p style={{ color: "#94A3B8", lineHeight: 1.75, marginBottom: 32, fontSize: "0.95rem" }}>
                                    While other agents are still manually dialing cold lists and
                                    losing leads to slow follow-ups, you could be closing deals
                                    with AI on your side. Book a demo today and see the difference.
                                </p>
                                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                    {["Free 14-day trial", "No credit card required", "Cancel anytime"].map((item) => (
                                        <span key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem", color: "#CBD5E1" }}>
                                            <Check size={16} style={{ color: "#818CF8" }} />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right — Mini Form */}
                            <div
                                style={{
                                    background: "white",
                                    padding: "60px 48px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "1.3rem",
                                        fontWeight: 700,
                                        marginBottom: 8,
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                >
                                    Book Your Free Demo
                                </h3>
                                <p style={{ fontSize: "0.85rem", color: "#64748B", marginBottom: 24 }}>Takes 30 seconds. We&apos;ll be in touch within 24 hours.</p>

                                <form
                                    onSubmit={(e) => { e.preventDefault(); setDemoOpen(true); }}
                                    style={{ display: "flex", flexDirection: "column", gap: 12 }}
                                >
                                    {[
                                        { placeholder: "Full Name", type: "text" },
                                        { placeholder: "Email", type: "email" },
                                        { placeholder: "Phone Number", type: "tel" },
                                    ].map((field) => (
                                        <input
                                            key={field.placeholder}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            style={{
                                                padding: "12px 16px",
                                                border: "1.5px solid #E2E8F0",
                                                borderRadius: 10,
                                                fontSize: "0.9rem",
                                                outline: "none",
                                                transition: "border-color 0.2s",
                                                background: "#FAFBFC",
                                            }}
                                            onFocus={(e) => (e.currentTarget.style.borderColor = "#4F46E5")}
                                            onBlur={(e) => (e.currentTarget.style.borderColor = "#E2E8F0")}
                                        />
                                    ))}
                                    <button
                                        type="submit"
                                        style={{
                                            padding: "14px 28px",
                                            background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                                            color: "white",
                                            border: "none",
                                            borderRadius: 50,
                                            fontSize: "0.95rem",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            marginTop: 4,
                                            transition: "all 0.3s",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(79,70,229,0.3)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        Request Demo <ArrowRight size={16} style={{ display: "inline", verticalAlign: "middle", marginLeft: 8 }} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: 1.2fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr 1fr !important;
          }
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </>
    );
}
