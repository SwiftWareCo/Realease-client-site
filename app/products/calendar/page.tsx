"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import {
    CalendarDays,
    ArrowRight,
    ArrowLeft,
    Clock,
    Bell,
    RefreshCw,
    Shield,
    Smartphone,
    Link as LinkIcon,
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

export default function CalendarPage() {
    const searchParams = useSearchParams();
    const fromSection = searchParams.get("from") === "section";
    const openCalendly = () => {
        if (window.Calendly) window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        else window.open(CALENDLY_URL, "_blank");
    };

    const features = [
        { icon: <RefreshCw size={24} />, title: "Real-Time Sync", desc: "Bi-directional sync with Google Calendar and Outlook — changes update instantly everywhere." },
        { icon: <Shield size={24} />, title: "No Double-Booking", desc: "AI checks all your calendars before booking. Conflicts are impossible." },
        { icon: <Bell size={24} />, title: "Smart Reminders", desc: "Automated reminders sent to both you and leads before every appointment." },
        { icon: <Clock size={24} />, title: "Auto-Scheduling", desc: "AI books appointments based on your availability preferences and travel time between showings." },
        { icon: <Smartphone size={24} />, title: "Mobile-Friendly", desc: "View and manage your schedule from anywhere with a fully responsive interface." },
        { icon: <LinkIcon size={24} />, title: "CRM-Connected", desc: "Every calendar event is linked to its lead profile — context is always one click away." },
    ];

    const calendarPreview = [
        { time: "9:00 AM", event: "Showing — 123 Oak Ave", lead: "Sarah M.", type: "showing" },
        { time: "11:30 AM", event: "Listing Consultation", lead: "Mark T.", type: "meeting" },
        { time: "2:00 PM", event: "Showing — 456 Elm St", lead: "James K.", type: "showing" },
        { time: "3:30 PM", event: "Follow-up Call (AI Booked)", lead: "Lisa R.", type: "call" },
        { time: "5:00 PM", event: "Contract Review", lead: "David W.", type: "meeting" },
    ];

    const typeColors: Record<string, string> = { showing: "#3B82F6", meeting: "#F59E0B", call: "#10B981" };

    return (
        <>
            <Link href={fromSection ? "/#calendar" : "/"} style={{ position: "fixed", top: 80, left: 24, zIndex: 1000, display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.85rem", color: "#EF4444", textDecoration: "none", fontWeight: 600, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", padding: "8px 16px", borderRadius: 50, border: "1px solid rgba(239,68,68,0.15)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <ArrowLeft size={16} /> Back to Home
            </Link>
            <Navbar />

            <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 100, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(239,68,68,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(239,68,68,0.10), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>

                            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "12px 28px", background: "rgba(239,68,68,0.06)", borderRadius: 50, marginBottom: 24, border: "1px solid rgba(239,68,68,0.12)" }}>
                                <CalendarDays size={18} style={{ color: "#EF4444" }} />
                                <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#EF4444" }}>Synced Calendar</span>
                            </div>

                            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, fontFamily: "var(--font-dm-sans)", letterSpacing: "-0.04em", marginBottom: 20 }}>
                                Every Meeting.{" "}
                                <span style={{ background: "linear-gradient(135deg, #EF4444, #DC2626, #F97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                    Perfectly Synced.
                                </span>
                            </h1>

                            <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
                                <strong>Your calendar stays perfectly synced</strong> with your CRM, showings, and AI-booked appointments. <strong>Never double-book</strong> or miss a meeting again.
                            </p>

                            <div style={{ display: "flex", gap: 24, marginBottom: 32 }}>
                                {[{ value: "95%", label: "Auto-Scheduled" }, { value: "Zero", label: "Conflicts" }, { value: "2", label: "Integrations" }].map((s) => (
                                    <div key={s.label}>
                                        <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#EF4444", fontFamily: "var(--font-dm-sans)" }}>{s.value}</p>
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
                                    background: "linear-gradient(135deg, #EF4444, #DC2626)",
                                    color: "white",
                                    border: "none",
                                    borderRadius: 50,
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    boxShadow: "0 4px 20px rgba(239,68,68,0.3)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(239,68,68,0.4)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(239,68,68,0.3)";
                                }}
                            >
                                See It in Action <ArrowRight size={18} />
                            </button>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                            <div style={{ background: "linear-gradient(135deg, #FEF2F2, #FFF1F2)", borderRadius: 20, padding: 24, border: "1px solid rgba(239,68,68,0.1)", boxShadow: "0 24px 48px rgba(239,68,68,0.08)" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0F172A", fontFamily: "var(--font-dm-sans)" }}>Thursday, Feb 20</span>
                                    <span style={{ fontSize: "0.72rem", color: "#94A3B8" }}>5 events</span>
                                </div>
                                <div style={{ background: "white", borderRadius: 14, padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                                    {calendarPreview.map((event, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.2 }} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 10, border: "1px solid #F1F5F9", transition: "background 0.2s" }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = "#FAFBFE"}
                                            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                                        >
                                            <div style={{ width: 4, height: 36, borderRadius: 4, background: typeColors[event.type], flexShrink: 0 }} />
                                            <div style={{ flex: 1 }}>
                                                <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0F172A", marginBottom: 2 }}>{event.event}</p>
                                                <p style={{ fontSize: "0.72rem", color: "#94A3B8" }}>{event.lead}</p>
                                            </div>
                                            <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#64748B", flexShrink: 0 }}>{event.time}</span>
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
                        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Capabilities</p>
                        <h2 style={{ fontFamily: "var(--font-dm-sans)" }}>Scheduling Made <span style={{ background: "linear-gradient(135deg, #EF4444, #DC2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Effortless</span></h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                        {features.map((f, i) => (
                            <motion.div key={f.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ background: "white", borderRadius: 16, padding: 28, border: "1px solid #E2E8F0", transition: "box-shadow 0.3s, transform 0.3s" }}
                                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(239,68,68,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(239,68,68,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444", marginBottom: 16 }}>{f.icon}</div>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, fontFamily: "var(--font-dm-sans)", marginBottom: 8 }}>{f.title}</h3>
                                <p style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: 1.7 }}>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "100px 24px", background: "#0F172A" }}>
                <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontFamily: "var(--font-dm-sans)", color: "white", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: 16 }}>Ready to Simplify Your Schedule?</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 36, lineHeight: 1.7 }}>See how the Synced Calendar keeps everything in one place.</p>
                    <button onClick={openCalendly} style={{ padding: "16px 40px", background: "linear-gradient(135deg, #EF4444, #DC2626)", color: "white", border: "none", borderRadius: 50, fontSize: "1rem", fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 24px rgba(239,68,68,0.3)" }}>
                        See It in Action <ArrowRight size={18} style={{ display: "inline", verticalAlign: "middle", marginLeft: 8 }} />
                    </button>
                </div>
            </section>

            <Footer />
        </>
    );
}
