"use client";

import { motion, MotionValue } from "framer-motion";
import {
    Phone,
    MessageSquare,
    CalendarDays,
    ArrowRight,
    Sparkles,
    Settings,
    Layers,
    Rocket,
} from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

const aiTools = [
    {
        icon: (
            <motion.div
                animate={{ y: [0, -3, 0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Layers size={32} />
            </motion.div>
        ),
        title: "AI-Powered CRM",
        slug: "crm",
        desc: <>A smart CRM that <strong>auto-organizes your leads</strong>, <strong>tracks every interaction</strong>, and <strong>surfaces actionable insights</strong> — so you can spend less time on busywork.</>,
        stats: [
            { label: "Auto-tagged", value: "100%" },
            { label: "Data entry saved", value: "10h/wk" },
            { label: "Pipeline views", value: "∞" },
        ],
        color: "#F59E0B",
        liveText: [
            { speaker: "System", text: "New lead 'Sarah M.' auto-tagged as Hot — budget $550k" },
            { speaker: "System", text: "Lead moved to 'Showing' stage after SMS confirmation" },
            { speaker: "System", text: "AI note: High intent — pre-approved, relocating from Austin" },
        ],
    },
    {
        icon: (
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.2 }}
            >
                <MessageSquare size={32} />
            </motion.div>
        ),
        title: "SMS Agent",
        slug: "sms-bot",
        desc: <>Intelligent <strong>automated text conversations</strong> that nurture leads and <strong>answer questions in seconds</strong>. Feels personal, runs at machine speed.</>,
        stats: [
            { label: "Avg reply time", value: "8 sec" },
            { label: "Engagement rate", value: "72%" },
            { label: "Leads qualified", value: "450+" },
        ],
        color: "#7C3AED",
        liveText: [
            { speaker: "Bot", text: "Hi James! Still interested in homes near downtown?" },
            { speaker: "Lead", text: "Yes! Looking for something under $450k now." },
            { speaker: "Bot", text: "Got it! I found 3 new listings that match. Want me to send them?" },
        ],
    },
    {
        icon: (
            <motion.div
                animate={{
                    rotate: [0, -8, 8, -8, 8, -8, 8, -6, 6, -4, 4, -2, 2, 0, 0, 0],
                    x: [0, -2, 2, -2, 2, -2, 2, -1.5, 1.5, -1, 1, -0.5, 0.5, 0, 0, 0],
                }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "linear",
                }}
            >
                <Phone size={32} />
            </motion.div>
        ),
        title: "AI Receptionist",
        slug: "ai-receptionist",
        desc: <>Handles inbound and outbound calls around the clock. <strong>Qualifies prospects</strong>, <strong>books appointments</strong>, records full transcripts, and auto-updates lead profiles with smart notes.</>,
        stats: [
            { label: "Response time", value: "<1s" },
            { label: "Booking rate", value: "34%" },
            { label: "Available", value: "24/7" },
        ],
        color: "#10B981",
        liveText: [
            { speaker: "AI", text: "Hi! I'm calling on behalf of John about the property on Oak Avenue…" },
            { speaker: "Lead", text: "Yes, I'd love to see it. What times work?" },
            { speaker: "AI", text: "I have Thursday 2 PM or Friday 11 AM. Which works better?" },
        ],
    },
    {
        icon: (
            <div style={{ position: "relative", width: 32, height: 32 }}>
                <Sparkles size={32} />
                {[
                    { top: -4, left: -4, delay: 0 },
                    { top: -2, right: -4, delay: 0.4 },
                    { bottom: 0, left: 2, delay: 0.8 },
                    { bottom: -3, right: 0, delay: 1.2 },
                ].map((pos, idx) => (
                    <motion.div
                        key={idx}
                        style={{
                            position: "absolute",
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "currentColor",
                            ...pos,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            delay: pos.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        ),
        title: "Smart Campaigns",
        slug: "smart-campaigns",
        desc: <>AI-crafted outreach sequences that <strong>adapt to each lead&apos;s behavior</strong>. Cold outreach, warm follow-ups, market updates — <strong>all automated</strong>.</>,
        stats: [
            { label: "Open rate", value: "68%" },
            { label: "Reply rate", value: "22%" },
            { label: "Templates", value: "50+" },
        ],
        color: "#3B82F6",
        liveText: [
            { speaker: "System", text: "Campaign 'Cold → Warm' sent to 45 leads" },
            { speaker: "System", text: "12 opens, 4 replies, 2 appointments booked" },
            { speaker: "System", text: "Auto-moved 4 leads to 'Warm' pipeline" },
        ],
    },
    {
        icon: (
            <motion.div
                animate={{ scale: [1, 1.15, 1, 1.15, 1, 1, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <CalendarDays size={32} />
            </motion.div>
        ),
        title: "Synced Calendar",
        slug: "calendar",
        desc: <>A built-in calendar that <strong>stays in sync</strong> with your leads, showings, and AI-booked appointments. <strong>Never double-book</strong> or miss a meeting again.</>,
        stats: [
            { label: "Auto-scheduled", value: "95%" },
            { label: "Conflicts", value: "Zero" },
            { label: "Linked to CRM", value: "Always" },
        ],
        color: "#EF4444",
        liveText: [
            { speaker: "System", text: "AI booked showing: 123 Oak Ave — Thursday 2 PM" },
            { speaker: "System", text: "Reminder sent to lead Sarah M. and agent" },
            { speaker: "System", text: "Follow-up task auto-created for Friday 10 AM" },
        ],
    },
];

interface AIToolsSectionProps {
    scrollRotate: MotionValue<number>;
    scrollRotateReverse: MotionValue<number>;
}

export default function AIToolsSection({ scrollRotate, scrollRotateReverse }: AIToolsSectionProps) {
    return (
        <section id="tools" style={{ padding: "100px 24px 40px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <Reveal>
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
                        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>AI Tools</p>
                        <h2 style={{ fontFamily: "var(--font-dm-sans)", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
                            <span>Your AI Team,{" "}<span className="gradient-text">Working 24/7</span></span>
                            <div style={{ position: "relative", width: 44, height: 44, flexShrink: 0 }}>
                                <motion.span style={{ display: "inline-flex", color: "#F59E0B", rotate: scrollRotate, position: "absolute", top: 0, left: 0 }}>
                                    <Settings size={36} />
                                </motion.span>
                                <motion.span style={{ display: "inline-flex", color: "#D97706", rotate: scrollRotateReverse, position: "absolute", bottom: -6, right: -10 }}>
                                    <Settings size={20} />
                                </motion.span>
                            </div>
                        </h2>
                        <p style={{ color: "#64748B", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto" }}>
                            Powerful AI tools that handle prospecting, nurturing, outreach, and organization — while you focus on closing.
                        </p>
                    </div>
                </Reveal>

                <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
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
                                            width: 60,
                                            height: 60,
                                            borderRadius: 16,
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
                                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-dm-sans)", letterSpacing: "-0.02em", marginBottom: 14 }}>{tool.title}</h3>
                                    <p style={{ fontSize: "0.95rem", color: "#64748B", lineHeight: 1.8, marginBottom: 24 }}>{tool.desc}</p>
                                    <div style={{ display: "flex", gap: 24, marginBottom: 20 }}>
                                        {tool.stats.map((s) => (
                                            <div key={s.label}>
                                                <p style={{ fontSize: "1.3rem", fontWeight: 800, color: tool.color, fontFamily: "var(--font-dm-sans)" }}>{s.value}</p>
                                                <p style={{ fontSize: "0.72rem", color: "#94A3B8", fontWeight: 500 }}>{s.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href={`/products/${tool.slug}`}
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 8,
                                            padding: "10px 24px",
                                            borderRadius: 50,
                                            border: `2px solid ${tool.color}30`,
                                            background: `${tool.color}06`,
                                            color: tool.color,
                                            fontSize: "0.88rem",
                                            fontWeight: 700,
                                            cursor: "pointer",
                                            fontFamily: "var(--font-dm-sans)",
                                            transition: "all 0.3s",
                                            textDecoration: "none",
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = `${tool.color}12`; e.currentTarget.style.borderColor = `${tool.color}50`; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = `${tool.color}06`; e.currentTarget.style.borderColor = `${tool.color}30`; }}
                                    >
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>

                                {/* Live preview card */}
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

                {/* More AI tools coming soon teaser */}
                <Reveal delay={0.15}>
                    <div
                        style={{
                            marginTop: 64,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 16,
                            padding: "28px 40px",
                            borderRadius: 20,
                            background: "linear-gradient(135deg, rgba(245,158,11,0.04), rgba(217,119,6,0.04))",
                            border: "1.5px dashed rgba(245,158,11,0.25)",
                        }}
                    >
                        <div
                            style={{
                                width: 48,
                                height: 48,
                                borderRadius: 14,
                                background: "rgba(245,158,11,0.08)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Rocket size={22} style={{ color: "#F59E0B" }} />
                        </div>
                        <div>
                            <p style={{ fontSize: "1rem", fontWeight: 700, color: "#0F172A", fontFamily: "var(--font-dm-sans)" }}>More AI Tools Coming Soon</p>
                            <p style={{ fontSize: "0.82rem", color: "#64748B" }}>We&apos;re building even more AI-powered tools to supercharge your workflow. Stay tuned!</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
