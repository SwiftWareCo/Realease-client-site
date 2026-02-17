"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, Sprout, TrendingUp, HeartHandshake, Trophy } from "lucide-react";
import Reveal from "./Reveal";

const flowSteps = [
    { icon: <UserPlus size={24} />, title: "Lead Intake", desc: "Leads are captured and entered into the system.", color: "#F59E0B" },
    { icon: <Search size={24} />, title: "AI Qualification", desc: "Leads are scored & qualified by trained AI agents.", color: "#7C3AED" },
    { icon: <Sprout size={24} />, title: "Automated Nurture", desc: "SMS & email campaigns keep leads warm.", color: "#10B981" },
    { icon: <TrendingUp size={24} />, title: "Lead Advancement", desc: "Realtors are provided with actionable insights to advance every lead to a deal.", color: "#06B6D4" },
    { icon: <HeartHandshake size={24} />, title: "Deal Stage", desc: "Showings, contracts & deadlines coordinated.", color: "#F59E0B" },
    { icon: <Trophy size={24} />, title: "Closed Deal", desc: "More deals closed with less effort.", color: "#EF4444" },
];

export default function LeadFlowSection() {
    return (
        <section id="features" style={{ padding: "80px 24px", background: "#FAFBFE" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <Reveal>
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>How It Works</p>
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
                                    flex: "0 0 16.66%",
                                    minWidth: 180,
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
                                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, fontFamily: "var(--font-dm-sans)", marginBottom: 8, color: "#0F172A", minHeight: "2.4em", display: "flex", alignItems: "center", justifyContent: "center" }}>{step.title}</h4>
                                <p style={{ fontSize: "0.85rem", color: "#64748B", lineHeight: 1.6 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
