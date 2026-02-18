"use client";

import { Suspense } from "react";
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

import ProductHero from "../../components/common/ProductHero";
import CalendlyButton from "../../components/common/CalendlyButton";

function CalendarContent() {
    const searchParams = useSearchParams();
    const fromSection = searchParams.get("from") === "section";

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
            <Navbar showBack={true} />

            <ProductHero
                title="Every Meeting."
                titleAccent="Perfectly Synced."
                description={<><strong>Your calendar stays perfectly synced</strong> with your CRM, showings, and AI-booked appointments. <strong>Never double-book</strong> or miss a meeting again.</>}
                icon={<CalendarDays size={18} />}
                badgeText="Synced Calendar"
                stats={[
                    { value: "95%", label: "Auto-Scheduled" },
                    { value: "Zero", label: "Conflicts" },
                    { value: "2", label: "Integrations" }
                ]}
                color="#EF4444"
                accentColor="rgba(239,68,68,0.04)"
                fromSection={fromSection}
                sectionId="calendar"
                previewContent={
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
                }
            />

            <section style={{ padding: "100px 24px", background: "#FAFBFE" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
                        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Capabilities</p>
                        <h2 style={{ fontFamily: "var(--font-dm-sans)" }}>Scheduling Made <span style={{ background: "linear-gradient(135deg, #EF4444, #DC2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Effortless</span></h2>
                    </div>
                    <div className="features-grid">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                className="feature-card"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    background: "white",
                                    borderRadius: 16,
                                    padding: 28,
                                    border: "1px solid #E2E8F0",
                                    transition: "box-shadow 0.3s, transform 0.3s"
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(239,68,68,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                <div className="feature-icon" style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(239,68,68,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#EF4444", marginBottom: 16 }}>
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
                <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontFamily: "var(--font-dm-sans)", color: "white", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: 16 }}>Ready to Simplify Your Schedule?</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 36, lineHeight: 1.7 }}>See how the Synced Calendar keeps everything in one place.</p>
                    <CalendlyButton text="See It in Action" color="#EF4444" />
                </div>
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

export default function CalendarPage() {
    return (
        <Suspense fallback={null}>
            <CalendarContent />
        </Suspense>
    );
}
