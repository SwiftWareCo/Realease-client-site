"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Users,
  Phone,
  MessageSquare,
  CalendarDays,
  ArrowRight,
  Check,
  X as XIcon,
  Sparkles,
  TrendingUp,
  Clock,
  Zap,
  Star,
  Search,
  UserPlus,
  Sprout,
  HeartHandshake,
  Trophy,
  Database,
  Rocket,
} from "lucide-react";

declare global {
  interface Window {
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}
import Navbar from "./components/Navbar";
import DemoForm from "./components/DemoForm";
import Footer from "./components/Footer";
import Link from "next/link";

/* ─── Animated Counter ─── */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = end / 60;
    const id = setInterval(() => {
      n += step;
      if (n >= end) { setCount(end); clearInterval(id); }
      else setCount(Math.floor(n));
    }, 16);
    return () => clearInterval(id);
  }, [inView, end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Reveal ─── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const CALENDLY_URL = "https://calendly.com/amarramadann/30min";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);

  /* Load Calendly widget script */
  useEffect(() => {
    if (document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) return;
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  /* ── Data ── */

  const flowSteps = [
    { icon: <UserPlus size={24} />, title: "Lead Intake", desc: "Captured from Google, Zillow, open houses & forms.", color: "#4F46E5" },
    { icon: <Search size={24} />, title: "AI Qualification", desc: "Scored & qualified by the AI receptionist.", color: "#7C3AED" },
    { icon: <Sprout size={24} />, title: "Automated Nurture", desc: "SMS & email campaigns keep leads warm.", color: "#10B981" },
    { icon: <HeartHandshake size={24} />, title: "Deal Stage", desc: "Showings, contracts & deadlines coordinated.", color: "#F59E0B" },
    { icon: <Trophy size={24} />, title: "Closed Deal", desc: "More deals closed with less effort.", color: "#EF4444" },
  ];

  const aiTools = [
    {
      icon: <Phone size={32} />,
      title: "AI Receptionist",
      slug: "ai-receptionist",
      desc: "Calls cold leads around the clock. Qualifies prospects, books appointments on your calendar, records full transcripts, and auto-updates lead profiles with smart notes.",
      stats: [
        { label: "Response time", value: "<1s" },
        { label: "Booking rate", value: "34%" },
        { label: "Available", value: "24/7" },
      ],
      color: "#4F46E5",
      liveText: [
        { speaker: "AI", text: "Hi! I'm calling on behalf of John about the property on Oak Avenue…" },
        { speaker: "Lead", text: "Yes, I'd love to see it. What times work?" },
        { speaker: "AI", text: "I have Thursday 2 PM or Friday 11 AM. Which works better?" },
      ],
    },
    {
      icon: <MessageSquare size={32} />,
      title: "SMS Bot",
      slug: "sms-bot",
      desc: "Intelligent automated text conversations that nurture leads and answer questions in seconds. Feels personal, runs at machine speed.",
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
      icon: <Sparkles size={32} />,
      title: "Smart Campaigns",
      slug: "smart-campaigns",
      desc: "AI-crafted outreach sequences that adapt to each lead's behavior. Cold outreach, warm follow-ups, market updates — all automated.",
      stats: [
        { label: "Open rate", value: "68%" },
        { label: "Reply rate", value: "22%" },
        { label: "Templates", value: "50+" },
      ],
      color: "#10B981",
      liveText: [
        { speaker: "System", text: "Campaign 'Cold → Warm' sent to 45 leads" },
        { speaker: "System", text: "12 opens, 4 replies, 2 appointments booked" },
        { speaker: "System", text: "Auto-moved 4 leads to 'Warm' pipeline" },
      ],
    },
    {
      icon: <Database size={32} />,
      title: "AI-Powered CRM",
      slug: "crm",
      desc: "A smart CRM that auto-organizes your leads, tracks every interaction, and surfaces actionable insights — no manual data entry needed.",
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
      icon: <CalendarDays size={32} />,
      title: "Synced Calendar",
      slug: "calendar",
      desc: "Your calendar stays perfectly synced with your CRM, showings, and AI-booked appointments. Never double-book or miss a meeting again.",
      stats: [
        { label: "Auto-scheduled", value: "95%" },
        { label: "Conflicts", value: "Zero" },
        { label: "Integrations", value: "Google, Outlook" },
      ],
      color: "#06B6D4",
      liveText: [
        { speaker: "System", text: "AI booked showing: 123 Oak Ave — Thursday 2 PM" },
        { speaker: "System", text: "Reminder sent to lead Sarah M. and agent" },
        { speaker: "System", text: "Follow-up task auto-created for Friday 10 AM" },
      ],
    },
  ];

  const comparisonRows = [
    { feature: "Lead Follow-Up Time", old: "2–24 hours", better: "Under 60 seconds" },
    { feature: "Missed Calls / Week", old: "8–15 calls", better: "Zero" },
    { feature: "Lead Organization", old: "Spreadsheets & sticky notes", better: "Auto-sorted by AI" },
    { feature: "Campaign Management", old: "Manual copy-paste", better: "Automated sequences" },
    { feature: "Hours on Admin / Week", old: "12+ hours", better: "Under 2 hours" },
    { feature: "Lead Qualification", old: "You call, one by one", better: "AI qualifies 24/7" },
    { feature: "Calendar Management", old: "Separate from leads", better: "Fully synced with CRM" },
  ];

  return (
    <>
      <Navbar />
      <DemoForm isOpen={demoOpen} onClose={() => setDemoOpen(false)} />

      {/* ═══════════════════════════════════════════════════
                1. HERO — Split layout from /2, modified heading
            ═══════════════════════════════════════════════════ */}
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
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(79,70,229,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(79,70,229,0.10), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, left: -50, width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            {/* Left — Copy */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 20px",
                  background: "rgba(79,70,229,0.06)",
                  borderRadius: 50,
                  marginBottom: 24,
                  border: "1px solid rgba(79,70,229,0.12)",
                }}
              >
                <Sparkles size={14} style={{ color: "#4F46E5" }} />
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4F46E5" }}>Your AI Command Center</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  fontFamily: "var(--font-dm-sans)",
                  letterSpacing: "-0.04em",
                  marginBottom: 20,
                }}
              >
                Your Entire Workflow.
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #4F46E5, #7C3AED, #10B981)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  All in One Platform.
                </span>
              </h1>

              <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
                RealEase automates your lead management, follow-ups, and campaigns — so you can focus on building relationships and closing deals.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button onClick={openCalendly} className="btn-primary">
                  See It in Action <ArrowRight size={18} />
                </button>
                <a href="#features" className="btn-secondary">
                  Learn More
                </a>
              </div>
            </motion.div>

            {/* Right — Dashboard Mockup */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #F8F9FC, #EEF2FF)",
                  borderRadius: 20,
                  padding: 24,
                  border: "1px solid rgba(79,70,229,0.1)",
                  boxShadow: "0 24px 48px rgba(79,70,229,0.08)",
                }}
              >
                {/* Title bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10B981" }} />
                  </div>
                  <span style={{ fontSize: "0.72rem", color: "#94A3B8", marginLeft: 8 }}>RealEase Dashboard</span>
                </div>
                {/* Mock stats */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
                  {[
                    { label: "Active Leads", val: "247", color: "#4F46E5" },
                    { label: "Appointments", val: "18", color: "#10B981" },
                    { label: "Campaigns", val: "6", color: "#7C3AED" },
                  ].map((m) => (
                    <div key={m.label} style={{ background: "white", borderRadius: 12, padding: "14px 12px", textAlign: "center" }}>
                      <p style={{ fontSize: "1.3rem", fontWeight: 800, color: m.color, fontFamily: "var(--font-dm-sans)" }}>{m.val}</p>
                      <p style={{ fontSize: "0.65rem", color: "#94A3B8" }}>{m.label}</p>
                    </div>
                  ))}
                </div>
                {/* Mock lead list */}
                <div style={{ background: "white", borderRadius: 12, padding: 14 }}>
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#0F172A", marginBottom: 10 }}>Recent Leads</p>
                  {[
                    { name: "Sarah M.", status: "Hot", time: "2m ago", sc: "#EF4444" },
                    { name: "John D.", status: "Warm", time: "15m ago", sc: "#F59E0B" },
                    { name: "Alex T.", status: "New", time: "1h ago", sc: "#4F46E5" },
                  ].map((lead) => (
                    <div key={lead.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #F1F5F9" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${lead.sc}14`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Users size={12} style={{ color: lead.sc }} />
                        </div>
                        <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#0F172A" }}>{lead.name}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: "0.65rem", fontWeight: 700, color: lead.sc, background: `${lead.sc}12`, padding: "2px 8px", borderRadius: 6 }}>{lead.status}</span>
                        <span style={{ fontSize: "0.62rem", color: "#94A3B8" }}>{lead.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
                2. LOGO CAROUSEL / MARQUEE — from /2
            ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "18px 0", background: "#0F172A", overflow: "hidden" }}>
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
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.45)",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
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

      {/* ═══════════════════════════════════════════════════
                3. FROM LEAD INTAKE TO CLOSED DEAL — from /1
            ═══════════════════════════════════════════════════ */}
      <section id="features" style={{ padding: "80px 24px", background: "#FAFBFE" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>How It Works</p>
              <h2 style={{ fontFamily: "var(--font-dm-sans)" }}>
                From Lead Intake to{" "}
                <span className="gradient-text">Closed Deal</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              style={{
                display: "flex",
                overflowX: "auto",
                gap: 0,
                paddingBottom: 8,
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {flowSteps.map((step, i) => (
                <div
                  key={step.title}
                  style={{
                    flex: "0 0 20%",
                    minWidth: 220,
                    scrollSnapAlign: "start",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                    padding: "0 16px",
                  }}
                >
                  {/* Connector line */}
                  {i < flowSteps.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        top: 30,
                        left: "55%",
                        right: "-45%",
                        height: 2,
                        background: `linear-gradient(90deg, ${step.color}, ${flowSteps[i + 1].color})`,
                        opacity: 0.3,
                      }}
                    />
                  )}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 16,
                      background: `${step.color}12`,
                      border: `2px solid ${step.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: step.color,
                      marginBottom: 14,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, color: step.color, background: `${step.color}10`, padding: "3px 12px", borderRadius: 20, marginBottom: 10 }}>
                    Step {i + 1}
                  </span>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, fontFamily: "var(--font-dm-sans)", marginBottom: 8, color: "#0F172A" }}>{step.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#64748B", lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
                4. AI TOOLS — Your AI Team Working 24/7 — from /1 style
                   + CRM, Calendar, Learn More buttons, "more coming" teaser
            ═══════════════════════════════════════════════════ */}
      <section id="tools" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>AI Tools</p>
              <h2 style={{ fontFamily: "var(--font-dm-sans)", marginBottom: 16 }}>
                Your AI Team,{" "}
                <span className="gradient-text">Working 24/7</span>
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
                background: "linear-gradient(135deg, rgba(79,70,229,0.04), rgba(124,58,237,0.04))",
                border: "1.5px dashed rgba(124,58,237,0.25)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "rgba(124,58,237,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Rocket size={22} style={{ color: "#7C3AED" }} />
              </div>
              <div>
                <p style={{ fontSize: "1rem", fontWeight: 700, color: "#0F172A", fontFamily: "var(--font-dm-sans)" }}>More AI Tools Coming Soon</p>
                <p style={{ fontSize: "0.82rem", color: "#64748B" }}>We&apos;re building even more AI-powered tools to supercharge your workflow. Stay tuned!</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
                5. TRADITIONAL AGENT vs REALEASE — from /3 (with metrics)
            ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 950, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Side by Side</p>
              <h2 style={{ fontFamily: "var(--font-dm-sans)" }}>
                Traditional Agent vs.{" "}
                <span className="gradient-text">RealEase-Powered Agent</span>
              </h2>
            </div>
          </Reveal>

          {/* Inline Stats Bar */}
          <Reveal delay={0.05}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 14,
                marginBottom: 28,
              }}
            >
              {[
                { icon: <TrendingUp size={16} />, value: 47, suffix: "%", label: "Higher Conversion", color: "#4F46E5" },
                { icon: <Clock size={16} />, value: 78, suffix: "%", label: "Expect <5 Min Reply", color: "#7C3AED" },
                { icon: <Zap size={16} />, value: 10, suffix: "x", label: "Faster Qualification", color: "#10B981" },
                { icon: <Star size={16} />, value: 89, suffix: "%", label: "Agents Using AI by 2027", color: "#F59E0B" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 16px",
                    borderRadius: 14,
                    background: `${stat.color}06`,
                    border: `1px solid ${stat.color}12`,
                  }}
                >
                  <span style={{ color: stat.color }}>{stat.icon}</span>
                  <div>
                    <p style={{ fontSize: "1.2rem", fontWeight: 800, color: stat.color, fontFamily: "var(--font-dm-sans)", lineHeight: 1 }}>
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p style={{ fontSize: "0.65rem", color: "#94A3B8", fontWeight: 500 }}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Comparison Table */}
          <Reveal delay={0.15}>
            <div style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid #E2E8F0" }}>
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
                    <span style={{ fontSize: "0.82rem", color: "#0F172A", fontWeight: 600 }}>{row.better}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
                6. CTA — "Ready to Close More Deals" from /2
            ═══════════════════════════════════════════════════ */}
      <section style={{ padding: "100px 24px", background: "#0F172A" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>Join 500+ Realtors Already Using RealEase</p>
            <h2 style={{ fontFamily: "var(--font-dm-sans)", color: "white", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: 16 }}>
              Ready to Close More Deals with Less Effort?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.7 }}>
              See how AI transforms your lead management, follow-ups, and deal flow — in just 30 minutes.
            </p>
            <button
              onClick={openCalendly}
              style={{
                padding: "16px 40px",
                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                color: "white",
                border: "none",
                borderRadius: 50,
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 24px rgba(79,70,229,0.3)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 40px rgba(79,70,229,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(79,70,229,0.3)"; }}
            >
              See It in Action <ArrowRight size={18} style={{ display: "inline", verticalAlign: "middle", marginLeft: 8 }} />
            </button>
            <div style={{ display: "flex", gap: 20, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
              {["Free 14-day trial", "No credit card", "Cancel anytime"].map((item) => (
                <span key={item} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
                  <Check size={14} style={{ color: "#818CF8" }} /> {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
