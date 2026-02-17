"use client";

import { Check, X as XIcon, TrendingUp, Clock, Zap, Star } from "lucide-react";
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
        <section style={{ padding: "40px 24px 100px" }}>
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
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: 14,
                            marginBottom: 28,
                        }}
                    >
                        {[
                            { icon: <TrendingUp size={16} />, value: 47, suffix: "%", label: "Higher Conversion", color: "#F59E0B" },
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
                            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center" }}>RealEase</span>
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
    );
}
