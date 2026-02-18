"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, Sprout, TrendingUp, HeartHandshake, Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { useRef } from "react";

const flowSteps = [
    { icon: <UserPlus size={24} />, title: "Lead Intake", desc: "Leads are captured and entered into the system.", color: "#F59E0B" },
    { icon: <Search size={24} />, title: "AI Qualification", desc: "Leads are scored & qualified by trained AI agents.", color: "#7C3AED" },
    { icon: <Sprout size={24} />, title: "Automated Nurture", desc: "SMS & email campaigns keep leads warm.", color: "#10B981" },
    { icon: <TrendingUp size={24} />, title: "Lead Advancement", desc: "Receive actionable insights that advance every lead to a deal.", color: "#06B6D4" },
    { icon: <HeartHandshake size={24} />, title: "Deal Stage", desc: "Showings, contracts & deadlines coordinated.", color: "#F59E0B" },
    { icon: <Trophy size={24} />, title: "Closed Deal", desc: "More deals closed with less effort.", color: "#EF4444" },
];

export default function LeadFlowSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const scrollAmount = container.offsetWidth;
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth"
        });
    };

    return (
        <section id="features" style={{ padding: "80px 24px", background: "#FAFBFE", position: "relative" }}>
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
                    <div style={{ position: "relative" }}>
                        <div className="flow-container" ref={scrollContainerRef}>
                            {flowSteps.map((step, i) => (
                                <div
                                    key={step.title}
                                    className="flow-step"
                                >
                                    {/* Connector line */}
                                    {i < flowSteps.length - 1 && (
                                        <div
                                            className="connector-line"
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

                        {/* Mobile Navigation Buttons */}
                        <div className="mobile-nav-buttons">
                            <button onClick={() => scroll("left")} aria-label="Previous step">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={() => scroll("right")} aria-label="Next step">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </Reveal>
            </div>

            <style jsx>{`
                .flow-container {
                    display: flex;
                    overflow-x: auto;
                    gap: 0;
                    padding-top: 10px;
                    padding-bottom: 24px;
                    scroll-snap-type: x mandatory;
                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;
                }

                .flow-container::-webkit-scrollbar {
                    display: none;
                }

                .flow-step {
                    flex: 0 0 16.66%;
                    min-width: 180px;
                    scroll-snap-align: start;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    position: relative;
                    padding: 0 16px;
                }

                .mobile-nav-buttons {
                    display: none;
                }

                @media (max-width: 1024px) {
                    .flow-step {
                        flex: 0 0 33.33%;
                    }
                }

                @media (max-width: 768px) {
                    .flow-step {
                        flex: 0 0 100%;
                        scroll-snap-align: center;
                        padding: 0 40px;
                    }
                    .connector-line {
                        display: none !important;
                    }
                    .mobile-nav-buttons {
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                        margin-top: 20px;
                    }
                    .mobile-nav-buttons button {
                        width: 44,
                        height: 44,
                        border-radius: 50%,
                        border: 1px solid #E2E8F0,
                        background: white,
                        display: flex,
                        align-items: center,
                        justify-content: center,
                        color: #64748B,
                        box-shadow: 0 2px 8px rgba(0,0,0,0.05),
                        cursor: pointer,
                        transition: all 0.2s,
                    }
                    .mobile-nav-buttons button:active {
                        transform: scale(0.95),
                        background: #F8FAFC,
                    }
                }

                /* Fix for button styles in style jsx */
                .mobile-nav-buttons button {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    border: 1px solid #E2E8F0;
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #64748B;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    cursor: pointer;
                    transition: all 0.2s;
                }
            `}</style>

            {/* Smooth transition to AIToolsSection */}
            <div style={{
                height: 120,
                background: "linear-gradient(to bottom, #FAFBFE, #ffffff)",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 0
            }} />
        </section>
    );
}
