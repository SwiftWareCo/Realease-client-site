"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    Users,
    Phone,
    MessageSquare,
    CalendarDays,
    Megaphone,
    BarChart3,
    ArrowRight,
    Check,
    Sparkles,
    TrendingUp,
    Clock,
    Zap,
    Star,
    ChevronLeft,
    ChevronRight,
    ArrowDown,
    Target,
    UserPlus,
    Bot,
    HeartHandshake,
    Trophy,
} from "lucide-react";
import Navbar from "../components/Navbar";
import DemoForm from "../components/DemoForm";
import Footer from "../components/Footer";

/* ─── Counter ─── */
function Counter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
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
    return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

/* ─── Reveal ─── */
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

export default function Design3() {
    const [demoOpen, setDemoOpen] = useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [annual, setAnnual] = useState(false);

    /* Animated lead count for hero dashboard */
    const [leadCount, setLeadCount] = useState(142);
    useEffect(() => {
        const timer = setInterval(() => {
            setLeadCount((prev) => prev + Math.floor(Math.random() * 3));
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const carouselItems = [
        {
            icon: <Users size={28} />,
            title: "Smart CRM",
            desc: "Auto-organize leads by source, status, and priority. Import your database and watch it sort itself — Google leads, open house contacts, referrals — all in one place with AI-suggested actions.",
            color: "#4F46E5",
        },
        {
            icon: <CalendarDays size={28} />,
            title: "Synced Calendar",
            desc: "Every showing, follow-up, and deadline synced to your leads. Smart reminders, conflict detection, and lead context on every event. Never walk into a meeting unprepared.",
            color: "#10B981",
        },
        {
            icon: <Megaphone size={28} />,
            title: "Campaign Manager",
            desc: "Toggle outreach sequences on and off. Cold introductions, warm nurturing, market updates — all automated and customizable. Create once, run forever.",
            color: "#7C3AED",
        },
        {
            icon: <BarChart3 size={28} />,
            title: "Analytics Hub",
            desc: "Conversion rates, response times, campaign ROI — everything you need to optimize your pipeline, at a glance. Know exactly what's working and what's not.",
            color: "#F59E0B",
        },
    ];

    const aiTools = [
        {
            icon: <Phone size={32} />,
            title: "AI Receptionist",
            desc: "Calls cold leads 24/7. Qualifies prospects, books appointments on your calendar, records full transcripts, and auto-updates lead profiles with smart notes.",
            stats: [
                { label: "Response time", value: "<1s" },
                { label: "Booking rate", value: "34%" },
                { label: "Available", value: "24/7" },
            ],
            color: "#4F46E5",
            liveText: [
                { speaker: "AI", text: "Hi! I'm calling from RealEase Realty about the property on Oak Avenue..." },
                { speaker: "Lead", text: "Yes, I'd love to see it. What times work?" },
                { speaker: "AI", text: "I have Thursday 2 PM or Friday 11 AM. Which works better?" },
            ],
        },
        {
            icon: <MessageSquare size={32} />,
            title: "SMS Bot",
            desc: "Intelligent automated text conversations that nurture leads and answer questions in seconds. Feels personal, runs at machine speed. Your leads never wait.",
            stats: [
                { label: "Avg reply time", value: "8 sec" },
                { label: "Engagement rate", value: "72%" },
                { label: "Leads qualified", value: "450+" },
            ],
            color: "#7C3AED",
            liveText: [
                { speaker: "Bot", text: "Hi James! Just wanted to check in — are you still interested in homes near downtown?" },
                { speaker: "Lead", text: "Yes! But I'm looking for something under $450k now." },
                { speaker: "Bot", text: "Got it! I just found 3 new listings that match. Want me to send them over?" },
            ],
        },
        {
            icon: <Sparkles size={32} />,
            title: "Smart Campaigns",
            desc: "AI-crafted outreach sequences that adapt to each lead's behavior. Cold outreach for new contacts, warm follow-ups for engaged leads, informational drips for the long game.",
            stats: [
                { label: "Open rate", value: "68%" },
                { label: "Reply rate", value: "22%" },
                { label: "Templates", value: "50+" },
            ],
            color: "#10B981",
            liveText: [
                { speaker: "System", text: "Campaign 'Cold → Warm' sent to 45 leads" },
                { speaker: "System", text: "12 opens, 4 replies, 2 appointments booked" },
                { speaker: "System", text: "Auto-moved 4 leads from 'Cold' to 'Warm' pipeline" },
            ],
        },
    ];

    const flowSteps = [
        { icon: <UserPlus size={24} />, title: "Lead Intake", desc: "Leads flow in from Google, Zillow, open houses, intake forms — all captured automatically.", color: "#4F46E5" },
        { icon: <Target size={24} />, title: "AI Qualification", desc: "The AI receptionist calls, qualifies, and scores each lead. Hot prospects surface instantly.", color: "#7C3AED" },
        { icon: <Bot size={24} />, title: "Automated Nurture", desc: "SMS bot and email campaigns keep every lead engaged with personalized outreach on autopilot.", color: "#10B981" },
        { icon: <HeartHandshake size={24} />, title: "Deal Stage", desc: "Active leads sync to your calendar. Showings, contracts, and deadlines — all coordinated.", color: "#F59E0B" },
        { icon: <Trophy size={24} />, title: "Close & Celebrate", desc: "More deals closed with less effort. Your AI copilot handled the busywork.", color: "#EF4444" },
    ];

    return (
        <>
            <Navbar onOpenDemo={() => setDemoOpen(true)} />
            <DemoForm isOpen={demoOpen} onClose={() => setDemoOpen(false)} />

            {/* ═══ HERO — Dashboard Preview ═══ */}
            <section
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: 100,
                    paddingBottom: 60,
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Mesh gradient background */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "radial-gradient(ellipse at 20% 50%, rgba(79,70,229,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.05) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(16,185,129,0.04) 0%, transparent 50%)",
                        pointerEvents: "none",
                    }}
                />

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ textAlign: "center", marginBottom: 48 }}
                    >
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "8px 20px",
                                background: "rgba(79,70,229,0.06)",
                                borderRadius: 50,
                                marginBottom: 20,
                                border: "1px solid rgba(79,70,229,0.12)",
                            }}
                        >
                            <Sparkles size={14} style={{ color: "#4F46E5" }} />
                            <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4F46E5" }}>AI-Powered Command Center</span>
                        </div>

                        <h1
                            style={{
                                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                                fontWeight: 800,
                                lineHeight: 1.1,
                                fontFamily: "var(--font-dm-sans)",
                                letterSpacing: "-0.04em",
                                marginBottom: 20,
                            }}
                        >
                            One Dashboard.{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #4F46E5, #7C3AED, #10B981)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Zero Missed Opportunities.
                            </span>
                        </h1>

                        <p style={{ fontSize: "1.1rem", color: "#64748B", maxWidth: 600, margin: "0 auto 28px", lineHeight: 1.7 }}>
                            RealEase brings your leads, calendar, campaigns, and AI tools
                            into a single command center — so nothing falls through the cracks.
                        </p>

                        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                            <button onClick={() => setDemoOpen(true)} className="btn-primary">
                                Book a Free Demo <ArrowRight size={18} />
                            </button>
                            <a href="#flow" className="btn-secondary">
                                See How It Works <ArrowDown size={16} />
                            </a>
                        </div>
                    </motion.div>

                    {/* ─── LIVE DASHBOARD MOCKUP ─── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                            background: "white",
                            borderRadius: 20,
                            boxShadow: "0 40px 120px rgba(79,70,229,0.12), 0 8px 40px rgba(0,0,0,0.06)",
                            overflow: "hidden",
                            border: "1px solid #E2E8F0",
                            maxWidth: 1000,
                            margin: "0 auto",
                        }}
                    >
                        {/* Browser chrome */}
                        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 20px", borderBottom: "1px solid #F1F5F9", background: "#FAFBFC" }}>
                            <div style={{ display: "flex", gap: 6 }}>
                                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
                                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
                                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
                            </div>
                            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                                <div style={{ padding: "4px 16px", background: "#F1F5F9", borderRadius: 8, fontSize: "0.7rem", color: "#94A3B8", fontWeight: 500 }}>
                                    app.realease.ai/dashboard
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: "24px 28px" }}>
                            {/* Top stats row */}
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 20 }}>
                                {[
                                    { label: "Total Leads", value: leadCount.toString(), change: "+12 this week", icon: <Users size={16} />, color: "#4F46E5" },
                                    { label: "AI Calls Today", value: "23", change: "+8 booked", icon: <Phone size={16} />, color: "#10B981" },
                                    { label: "Active Campaigns", value: "7", change: "3 new replies", icon: <Megaphone size={16} />, color: "#7C3AED" },
                                    { label: "Closing This Month", value: "4", change: "$1.2M value", icon: <TrendingUp size={16} />, color: "#F59E0B" },
                                ].map((stat) => (
                                    <motion.div
                                        key={stat.label}
                                        style={{
                                            padding: "16px 18px",
                                            borderRadius: 14,
                                            background: "#F8F9FC",
                                            border: "1px solid #F1F5F9",
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                                            <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</span>
                                            <div style={{ color: stat.color }}>{stat.icon}</div>
                                        </div>
                                        <p style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0F172A", fontFamily: "var(--font-dm-sans)" }}>{stat.value}</p>
                                        <p style={{ fontSize: "0.65rem", color: "#10B981", fontWeight: 500, marginTop: 2 }}>{stat.change}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Two-col: lead list + calendar */}
                            <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16 }}>
                                {/* Lead list */}
                                <div style={{ borderRadius: 14, border: "1px solid #F1F5F9", overflow: "hidden" }}>
                                    <div style={{ padding: "12px 16px", background: "#FAFBFC", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0F172A" }}>Recent Leads</span>
                                        <span style={{ fontSize: "0.68rem", color: "#4F46E5", fontWeight: 600 }}>View All →</span>
                                    </div>
                                    {[
                                        { name: "Emily Rodriguez", source: "Google", status: "Showing", time: "2 min ago", hot: true },
                                        { name: "Chris Park", source: "Open House", status: "AI Qualified", time: "15 min ago", hot: true },
                                        { name: "Jessica Lin", source: "Referral", status: "Under Contract", time: "1 hr ago", hot: false },
                                        { name: "David Kim", source: "Zillow", status: "Cold Lead", time: "3 hrs ago", hot: false },
                                    ].map((lead) => (
                                        <div key={lead.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderTop: "1px solid #F8F9FC" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                                <div style={{ width: 32, height: 32, borderRadius: "50%", background: lead.hot ? "linear-gradient(135deg, #4F46E5, #7C3AED)" : "#E2E8F0", display: "flex", alignItems: "center", justifyContent: "center", color: lead.hot ? "white" : "#64748B", fontSize: "0.65rem", fontWeight: 700 }}>
                                                    {lead.name.split(" ").map((n) => n[0]).join("")}
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "#0F172A" }}>{lead.name}</p>
                                                    <p style={{ fontSize: "0.65rem", color: "#94A3B8" }}>{lead.source} · {lead.time}</p>
                                                </div>
                                            </div>
                                            <span style={{ fontSize: "0.65rem", padding: "3px 8px", borderRadius: 6, fontWeight: 600, background: lead.status === "Showing" ? "#EEF2FF" : lead.status === "AI Qualified" ? "#ECFDF5" : lead.status === "Under Contract" ? "#FFFBEB" : "#F8F9FC", color: lead.status === "Showing" ? "#4F46E5" : lead.status === "AI Qualified" ? "#059669" : lead.status === "Under Contract" ? "#D97706" : "#94A3B8" }}>
                                                {lead.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Mini Calendar */}
                                <div style={{ borderRadius: 14, border: "1px solid #F1F5F9", overflow: "hidden" }}>
                                    <div style={{ padding: "12px 16px", background: "#FAFBFC", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0F172A" }}>Today&apos;s Schedule</span>
                                        <span style={{ fontSize: "0.68rem", color: "#4F46E5", fontWeight: 600 }}>Feb 16</span>
                                    </div>
                                    {[
                                        { time: "10:00", title: "Showing — 42 Maple Dr", color: "#4F46E5" },
                                        { time: "12:00", title: "AI Call Review (3 calls)", color: "#7C3AED" },
                                        { time: "2:00", title: "Follow-up — Emily R.", color: "#10B981" },
                                        { time: "4:30", title: "Contract Prep — Jessica L.", color: "#F59E0B" },
                                    ].map((ev) => (
                                        <div key={ev.title} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 16px", borderTop: "1px solid #F8F9FC" }}>
                                            <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#94A3B8", width: 36 }}>{ev.time}</span>
                                            <div style={{ width: 3, height: 24, borderRadius: 2, background: ev.color }} />
                                            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#0F172A" }}>{ev.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══ INTEGRATION FLOW ═══ */}
            <section id="flow" style={{ padding: "100px 24px", background: "#FAFBFE" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <Reveal>
                        <div style={{ textAlign: "center", marginBottom: 64 }}>
                            <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>How It Works</p>
                            <h2 style={{ fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>
                                From Lead Intake to{" "}
                                <span style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Closed Deal</span>
                            </h2>
                            <p style={{ color: "#64748B", fontSize: "1.05rem", maxWidth: 550, margin: "0 auto" }}>
                                Watch how leads flow through your AI-powered pipeline — automatically.
                            </p>
                        </div>
                    </Reveal>

                    <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative" }}>
                        {/* Vertical line */}
                        <div style={{ position: "absolute", left: 28, top: 40, bottom: 40, width: 2, background: "linear-gradient(180deg, #4F46E5, #7C3AED, #10B981, #F59E0B, #EF4444)", borderRadius: 2 }} />

                        {flowSteps.map((step, i) => (
                            <Reveal key={step.title} delay={i * 0.1}>
                                <div style={{ display: "flex", gap: 32, alignItems: "flex-start", padding: "24px 0", position: "relative" }}>
                                    <div
                                        style={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: 16,
                                            background: `${step.color}12`,
                                            border: `2px solid ${step.color}30`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: step.color,
                                            flexShrink: 0,
                                            position: "relative",
                                            zIndex: 1,
                                        }}
                                    >
                                        {step.icon}
                                    </div>
                                    <div style={{ flex: 1, paddingTop: 4 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                                            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: step.color, background: `${step.color}10`, padding: "3px 10px", borderRadius: 20 }}>
                                                Step {i + 1}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, fontFamily: "var(--font-dm-sans)", marginBottom: 8 }}>{step.title}</h3>
                                        <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.7, maxWidth: 500 }}>{step.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ AI TOOLS SPOTLIGHT ═══ */}
            <section style={{ padding: "100px 24px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <Reveal>
                        <div style={{ textAlign: "center", marginBottom: 64 }}>
                            <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>AI Tools</p>
                            <h2 style={{ fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>
                                Your AI Team,{" "}
                                <span style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Working 24/7</span>
                            </h2>
                            <p style={{ color: "#64748B", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto" }}>
                                Three powerful AI tools that handle prospecting, nurturing, and outreach — all while you focus on closing.
                            </p>
                        </div>
                    </Reveal>

                    <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
                        {aiTools.map((tool, i) => (
                            <Reveal key={tool.title} delay={0.1}>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: 48,
                                        alignItems: "center",
                                        direction: i % 2 === 1 ? "rtl" : "ltr",
                                    }}
                                >
                                    <div style={{ direction: "ltr" }}>
                                        <div
                                            style={{
                                                width: 64,
                                                height: 64,
                                                borderRadius: 18,
                                                background: `${tool.color}10`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: tool.color,
                                                marginBottom: 20,
                                            }}
                                        >
                                            {tool.icon}
                                        </div>
                                        <h3 style={{ fontSize: "1.6rem", fontWeight: 800, fontFamily: "var(--font-dm-sans)", letterSpacing: "-0.02em", marginBottom: 14 }}>{tool.title}</h3>
                                        <p style={{ fontSize: "0.95rem", color: "#64748B", lineHeight: 1.8, marginBottom: 24 }}>{tool.desc}</p>
                                        <div style={{ display: "flex", gap: 24 }}>
                                            {tool.stats.map((s) => (
                                                <div key={s.label}>
                                                    <p style={{ fontSize: "1.3rem", fontWeight: 800, color: tool.color, fontFamily: "var(--font-dm-sans)" }}>{s.value}</p>
                                                    <p style={{ fontSize: "0.72rem", color: "#94A3B8", fontWeight: 500 }}>{s.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Live preview */}
                                    <div style={{ direction: "ltr" }}>
                                        <div
                                            style={{
                                                background: "linear-gradient(135deg, #F8F9FC, #EEF2FF)",
                                                borderRadius: 20,
                                                padding: 24,
                                                border: `1px solid ${tool.color}15`,
                                            }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                                                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10B981", animation: "pulse-soft 2s ease-in-out infinite" }} />
                                                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#10B981" }}>Live Preview</span>
                                            </div>
                                            <div style={{ background: "white", borderRadius: 14, padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                                                {tool.liveText.map((line, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.3 + idx * 0.2 }}
                                                        style={{ display: "flex", gap: 8, alignItems: "flex-start" }}
                                                    >
                                                        <span style={{ fontSize: "0.72rem", fontWeight: 700, color: line.speaker === "Lead" ? "#0F172A" : tool.color, flexShrink: 0, width: 50 }}>{line.speaker}:</span>
                                                        <span style={{ fontSize: "0.8rem", color: "#475569", lineHeight: 1.6 }}>{line.text}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FEATURE CAROUSEL ═══ */}
            <section style={{ padding: "100px 24px", background: "#FAFBFE" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <Reveal>
                        <div style={{ textAlign: "center", marginBottom: 48 }}>
                            <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Platform Features</p>
                            <h2 style={{ fontFamily: "var(--font-dm-sans)" }}>
                                Everything in{" "}
                                <span style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>One Place</span>
                            </h2>
                        </div>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div style={{ position: "relative" }}>
                            {/* Navigation arrows */}
                            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginBottom: 24 }}>
                                <button
                                    onClick={() => setCarouselIndex(Math.max(0, carouselIndex - 1))}
                                    style={{
                                        width: 40, height: 40, borderRadius: 10, border: "1.5px solid #E2E8F0", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B", transition: "all 0.2s",
                                    }}
                                    disabled={carouselIndex === 0}
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    onClick={() => setCarouselIndex(Math.min(carouselItems.length - 1, carouselIndex + 1))}
                                    style={{
                                        width: 40, height: 40, borderRadius: 10, border: "1.5px solid #E2E8F0", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748B", transition: "all 0.2s",
                                    }}
                                    disabled={carouselIndex === carouselItems.length - 1}
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>

                            <div style={{ overflow: "hidden", borderRadius: 20 }}>
                                <motion.div
                                    animate={{ x: `-${carouselIndex * 100}%` }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ display: "flex" }}
                                >
                                    {carouselItems.map((item) => (
                                        <div key={item.title} style={{ minWidth: "100%", padding: "0 0" }}>
                                            <div
                                                style={{
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: 48,
                                                    alignItems: "center",
                                                    background: "white",
                                                    borderRadius: 20,
                                                    padding: "48px 40px",
                                                    border: "1px solid #E2E8F0",
                                                }}
                                            >
                                                <div>
                                                    <div style={{ width: 56, height: 56, borderRadius: 14, background: `${item.color}10`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, marginBottom: 20 }}>
                                                        {item.icon}
                                                    </div>
                                                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-dm-sans)", marginBottom: 14 }}>{item.title}</h3>
                                                    <p style={{ fontSize: "0.95rem", color: "#64748B", lineHeight: 1.8, marginBottom: 24 }}>{item.desc}</p>
                                                    <button onClick={() => setDemoOpen(true)} className="btn-primary" style={{ fontSize: "0.9rem" }}>
                                                        Learn More <ArrowRight size={16} />
                                                    </button>
                                                </div>
                                                <div style={{ background: `${item.color}08`, borderRadius: 16, padding: 24, minHeight: 260, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <div style={{ color: item.color, textAlign: "center" }}>
                                                        {item.icon}
                                                        <p style={{ fontSize: "0.85rem", fontWeight: 600, marginTop: 12, color: "#475569" }}>Interactive preview</p>
                                                        <p style={{ fontSize: "0.75rem", color: "#94A3B8", marginTop: 4 }}>Book a demo to see {item.title} in action</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Dots */}
                            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
                                {carouselItems.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCarouselIndex(i)}
                                        style={{
                                            width: carouselIndex === i ? 24 : 8,
                                            height: 8,
                                            borderRadius: 4,
                                            background: carouselIndex === i ? "linear-gradient(135deg, #4F46E5, #7C3AED)" : "#E2E8F0",
                                            border: "none",
                                            cursor: "pointer",
                                            transition: "all 0.3s",
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ STATS ═══ */}
            <section style={{ padding: "80px 24px" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <Reveal>
                        <div
                            style={{
                                background: "linear-gradient(135deg, #0F172A, #1E293B)",
                                borderRadius: 24,
                                padding: "60px 48px",
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                gap: 32,
                                textAlign: "center",
                            }}
                        >
                            {[
                                { icon: <TrendingUp size={20} />, value: 47, suffix: "%", label: "Higher Conversion Rate" },
                                { icon: <Clock size={20} />, value: 78, suffix: "%", label: "Expect <5 Min Response" },
                                { icon: <Zap size={20} />, value: 10, suffix: "x", label: "Faster Qualification" },
                                { icon: <Star size={20} />, value: 89, suffix: "%", label: "Agents Using AI by 2027" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div style={{ color: "#7C3AED", marginBottom: 8 }}>{stat.icon}</div>
                                    <p style={{ fontSize: "2.2rem", fontWeight: 800, color: "white", fontFamily: "var(--font-dm-sans)" }}>
                                        <Counter end={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p style={{ fontSize: "0.8rem", color: "#94A3B8", marginTop: 4 }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ PRICING + TOGGLE ═══ */}
            <section id="pricing" style={{ padding: "100px 24px", background: "#FAFBFE" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <Reveal>
                        <div style={{ textAlign: "center", marginBottom: 48 }}>
                            <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Pricing</p>
                            <h2 style={{ fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>
                                Plans That Scale{" "}
                                <span style={{ background: "linear-gradient(135deg, #4F46E5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>with You</span>
                            </h2>

                            {/* Toggle */}
                            <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginTop: 12, padding: "6px 6px", background: "#F1F5F9", borderRadius: 50 }}>
                                <button
                                    onClick={() => setAnnual(false)}
                                    style={{
                                        padding: "8px 20px",
                                        borderRadius: 50,
                                        border: "none",
                                        background: !annual ? "white" : "transparent",
                                        color: !annual ? "#0F172A" : "#64748B",
                                        fontSize: "0.85rem",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        boxShadow: !annual ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    Monthly
                                </button>
                                <button
                                    onClick={() => setAnnual(true)}
                                    style={{
                                        padding: "8px 20px",
                                        borderRadius: 50,
                                        border: "none",
                                        background: annual ? "white" : "transparent",
                                        color: annual ? "#0F172A" : "#64748B",
                                        fontSize: "0.85rem",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        boxShadow: annual ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    Annual <span style={{ color: "#10B981", fontSize: "0.75rem", fontWeight: 700 }}>Save 20%</span>
                                </button>
                            </div>
                        </div>
                    </Reveal>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {[
                            { name: "Starter", monthlyPrice: 49, desc: "For solo agents", features: ["200 leads", "SMS Bot", "3 campaigns", "Calendar sync", "Email support"], popular: false },
                            { name: "Professional", monthlyPrice: 99, desc: "For top producers", features: ["Unlimited leads", "AI Receptionist + SMS", "Unlimited campaigns", "Team calendar", "Priority support", "Full analytics"], popular: true },
                            { name: "Enterprise", monthlyPrice: 249, desc: "For teams & brokerages", features: ["Everything in Pro", "Multi-agent dashboard", "Custom integrations", "White-label", "Dedicated manager", "API access"], popular: false },
                        ].map((plan, i) => {
                            const price = annual ? Math.round(plan.monthlyPrice * 0.8) : plan.monthlyPrice;
                            return (
                                <Reveal key={plan.name} delay={i * 0.1}>
                                    <div
                                        style={{
                                            background: plan.popular ? "linear-gradient(135deg, #4F46E5, #5B21B6)" : "white",
                                            borderRadius: 20,
                                            padding: "40px 32px",
                                            border: plan.popular ? "none" : "1.5px solid #E2E8F0",
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            position: "relative",
                                            boxShadow: plan.popular ? "0 20px 60px rgba(79,70,229,0.2)" : "none",
                                        }}
                                    >
                                        {plan.popular && (
                                            <span style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "6px 20px", background: "linear-gradient(135deg, #F59E0B, #EF4444)", color: "white", borderRadius: 50, fontSize: "0.75rem", fontWeight: 700 }}>
                                                Most Popular
                                            </span>
                                        )}
                                        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: plan.popular ? "white" : "#0F172A", marginBottom: 6, fontFamily: "var(--font-dm-sans)" }}>{plan.name}</h3>
                                        <p style={{ fontSize: "0.85rem", color: plan.popular ? "rgba(255,255,255,0.7)" : "#64748B", marginBottom: 20 }}>{plan.desc}</p>

                                        <AnimatePresence mode="wait">
                                            <motion.p
                                                key={price}
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                style={{ fontSize: "2.5rem", fontWeight: 800, color: plan.popular ? "white" : "#0F172A", fontFamily: "var(--font-dm-sans)", marginBottom: 4 }}
                                            >
                                                ${price}<span style={{ fontSize: "1rem", fontWeight: 500, color: plan.popular ? "rgba(255,255,255,0.6)" : "#94A3B8" }}>/mo</span>
                                            </motion.p>
                                        </AnimatePresence>

                                        {annual && (
                                            <p style={{ fontSize: "0.75rem", color: plan.popular ? "#A5F3FC" : "#10B981", fontWeight: 600 }}>
                                                Billed annually — save ${plan.monthlyPrice * 12 - price * 12}/yr
                                            </p>
                                        )}

                                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginTop: 24, marginBottom: 32, flex: 1 }}>
                                            {plan.features.map((f) => (
                                                <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.85rem", color: plan.popular ? "rgba(255,255,255,0.85)" : "#475569" }}>
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
                                                border: plan.popular ? "2px solid rgba(255,255,255,0.5)" : "none",
                                                background: plan.popular ? "rgba(255,255,255,0.15)" : "linear-gradient(135deg, #4F46E5, #7C3AED)",
                                                color: "white",
                                                fontSize: "0.9rem",
                                                fontWeight: 600,
                                                cursor: "pointer",
                                                transition: "all 0.3s",
                                                backdropFilter: plan.popular ? "blur(10px)" : "none",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = "translateY(-2px)";
                                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "none";
                                            }}
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section style={{ padding: "100px 24px" }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <Reveal>
                        <div
                            style={{
                                background: "linear-gradient(135deg, #4F46E5, #5B21B6, #7C3AED)",
                                borderRadius: 28,
                                padding: "64px 48px",
                                textAlign: "center",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Background decoration */}
                            <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
                            <div style={{ position: "absolute", bottom: -40, left: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

                            <div style={{ position: "relative", zIndex: 1 }}>
                                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>Join 500+ realtors already using RealEase</p>
                                <h2
                                    style={{
                                        color: "white",
                                        fontFamily: "var(--font-dm-sans)",
                                        fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                                        marginBottom: 16,
                                    }}
                                >
                                    Ready to Put Your Business on Autopilot?
                                </h2>
                                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}>
                                    Book a free demo and discover how AI can transform your
                                    lead management, follow-ups, and deal flow.
                                </p>

                                <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                                    <button
                                        onClick={() => setDemoOpen(true)}
                                        style={{
                                            padding: "14px 36px",
                                            background: "white",
                                            color: "#4F46E5",
                                            border: "none",
                                            borderRadius: 50,
                                            fontSize: "1rem",
                                            fontWeight: 700,
                                            cursor: "pointer",
                                            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                                            transition: "all 0.3s",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.2)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.15)";
                                        }}
                                    >
                                        Book Your Free Demo <ArrowRight size={18} style={{ display: "inline", verticalAlign: "middle", marginLeft: 8 }} />
                                    </button>
                                </div>

                                <div style={{ display: "flex", gap: 20, justifyContent: "center", marginTop: 28 }}>
                                    {["Free 14-day trial", "No credit card", "Cancel anytime"].map((item) => (
                                        <span key={item} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}>
                                            <Check size={14} style={{ color: "#A5F3FC" }} />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: 1fr 1fr !important;
          }
          section > div > div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="grid-template-columns: 1.3fr"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </>
    );
}
