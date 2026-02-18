"use client";

import { Check, X as XIcon, TrendingUp, CalendarDays, Zap, Star } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";

const comparisonRows = [
    { feature: "Lead Follow-Up Time", old: "2–24 hours", better: "Under 60 seconds" },
    { feature: "Missed Calls / Week", old: "8–15 calls", better: "Zero" },
    { feature: "Lead Organization", old: "Spreadsheets & sticky notes", better: "Auto-sorted by AI" },
    { feature: "Campaign Management", old: "Manual copy-paste", better: "Automated sequences" },
    { feature: "Hours on Admin / Week", old: "12+ hours", better: "Under 2 hours" },
    { feature: "Lead Qualification", old: "You call, one by one", better: "AI qualifies 24/7" },
    { feature: "Calendar Management", old: "Separate from leads", better: "Fully synced with CRM" },
];

export default function ComparisonSection() {
    return (
        <div style={{ background: "white" }}>
            <section style={{ padding: "80px 24px 40px" }}>
                <div style={{ maxWidth: 950, margin: "0 auto" }}>
                    <Reveal>
                        <div style={{ textAlign: "center", marginBottom: 56 }}>
                            <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>Side by Side</p>
                            <h2 style={{ fontFamily: "var(--font-dm-sans)" }}>
                                Traditional Agent vs.{" "}
                                <span className="gradient-text">RealEase</span>
                            </h2>
                        </div>
                    </Reveal>

                    {/* Inline Stats Bar */}
                    <Reveal delay={0.05}>
                        <div className="stats-grid">
                            {[
                                { icon: <TrendingUp size={16} />, value: 47, suffix: "%", label: "Higher Conversion", color: "#F59E0B" },
                                { icon: <CalendarDays size={16} />, value: 4, suffix: "x", label: "More Booked Appointments", color: "#7C3AED" },
                                { icon: <Zap size={16} />, value: 10, suffix: "x", label: "Faster Qualification", color: "#10B981" },
                                { icon: <Star size={16} />, value: 89, suffix: "%", label: "Agents Using AI by 2027", color: "#F59E0B" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="stat-card"
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
                            <div className="comparison-table comparison-header" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", background: "#F8F9FC", padding: "16px 28px" }}>
                                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em" }}>Feature</span>
                                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#EF4444", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center" }}>Traditional</span>
                                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center" }}>RealEase</span>
                            </div>
                            {comparisonRows.map((row, i) => (
                                <div
                                    key={row.feature}
                                    className="comparison-table comparison-row"
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1.5fr 1fr 1fr",
                                        padding: "16px 28px",
                                        borderTop: "1px solid #F1F5F9",
                                        background: i % 2 === 0 ? "white" : "#FCFCFD",
                                    }}
                                >
                                    <span className="feature-name" style={{ fontSize: "0.87rem", fontWeight: 600, color: "#0F172A" }}>{row.feature}</span>
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

                <style jsx>{`
                    .stats-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 14px;
                        margin-bottom: 28px;
                    }

                    @media (max-width: 991px) {
                        .stats-grid {
                            grid-template-columns: repeat(2, 1fr);
                            gap: 12px;
                            margin-bottom: 24px;
                        }
                    }

                    @media (max-width: 640px) {
                        .stats-grid {
                            grid-template-columns: 1fr;
                        }
                        
                        .comparison-table {
                            grid-template-columns: 1fr !important;
                            padding: 20px !important;
                            gap: 12px;
                        }

                        .comparison-header {
                            display: none !important;
                        }

                        .comparison-row {
                            text-align: center;
                        }

                        .feature-name {
                            display: block;
                            margin-bottom: 4px;
                            color: #64748B !important;
                            text-transform: uppercase;
                            font-size: 0.7rem !important;
                            letter-spacing: 0.05em;
                        }
                    }
                `}</style>
            </section>

            {/* Ultra-smooth transition to the brand cream section */}
            <div style={{
                height: 120,
                position: "relative",
                background: "linear-gradient(to bottom, #ffffff 0%, #ffffff 10%, #FDF1E3 100%)"
            }}>
                {/* Subtle grid pattern matching header */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "linear-gradient(rgba(253,241,227,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(253,241,227,0.04) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    pointerEvents: "none"
                }} />
            </div>
        </div>
    );
}
