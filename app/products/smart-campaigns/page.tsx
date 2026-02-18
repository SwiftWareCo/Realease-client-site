"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import {
    Sparkles,
    Target,
    BarChart3,
    Layers,
    Clock,
    Repeat,
    Mail,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ProductHero from "../../components/common/ProductHero";
import CalendlyButton from "../../components/common/CalendlyButton";

function SmartCampaignsContent() {
    const searchParams = useSearchParams();
    const fromSection = searchParams.get("from") === "section";

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
            <Navbar showBack={true} />

            <ProductHero
                title="Outreach That"
                titleAccent="Thinks for You."
                description={<>AI-crafted campaign sequences that <strong>adapt to each lead's behavior</strong>. Cold outreach, warm follow-ups, market updates — <strong>all running on autopilot</strong>.</>}
                icon={<Sparkles size={18} />}
                badgeText="Smart Campaigns"
                stats={[
                    { value: "68%", label: "Open Rate" },
                    { value: "22%", label: "Reply Rate" },
                    { value: "50+", label: "Templates" }
                ]}
                color="#3B82F6"
                accentColor="rgba(59,130,246,0.04)"
                fromSection={fromSection}
                sectionId="smart-campaigns"
                previewContent={
                    <div style={{ background: "linear-gradient(135deg, #F0F9FF, #EFF6FF)", borderRadius: 20, padding: 24, border: "1px solid rgba(59,130,246,0.1)", boxShadow: "0 24px 48px rgba(59,130,246,0.08)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#3B82F6", animation: "pulse-soft 2s ease-in-out infinite" }} />
                            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#3B82F6" }}>Campaign Activity Feed</span>
                        </div>
                        <div style={{ background: "white", borderRadius: 14, padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                            {campaignPreview.map((line, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.25 }} style={{ padding: "10px 14px", borderRadius: 10, background: line.type === "Stats" ? "rgba(59,130,246,0.04)" : "#FAFBFE", border: line.type === "Stats" ? "1px solid rgba(59,130,246,0.12)" : "1px solid #F1F5F9" }}>
                                    <span style={{ fontSize: "0.82rem", color: "#334155", lineHeight: 1.6 }}>{line.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                }
            />

            <section style={{ padding: "100px 24px", background: "#FAFBFE" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
                        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#3B82F6", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Capabilities</p>
                        <h2 style={{ fontFamily: "var(--font-dm-sans)" }}>Campaigns That <span style={{ background: "linear-gradient(135deg, #3B82F6, #2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Adapt</span></h2>
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
                                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(59,130,246,0.08)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                <div className="feature-icon" style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(59,130,246,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3B82F6", marginBottom: 16 }}>
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
                    <h2 style={{ fontFamily: "var(--font-dm-sans)", color: "white", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: 16 }}>Ready to Launch Smarter Campaigns?</h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 36, lineHeight: 1.7 }}>See how Smart Campaigns automate your outreach in a live demo.</p>
                    <CalendlyButton text="See It in Action" color="#3B82F6" />
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

export default function SmartCampaignsPage() {
    return (
        <Suspense fallback={null}>
            <SmartCampaignsContent />
        </Suspense>
    );
}
