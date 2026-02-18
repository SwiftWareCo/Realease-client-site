"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

interface ToolCardProps {
    tool: {
        icon: React.ReactNode;
        title: string;
        slug: string;
        desc: React.ReactNode;
        stats: { label: string; value: string }[];
        color: string;
        liveText: { speaker: string; text: string }[];
    };
    index: number;
}

const ToolCard = ({ tool, index }: ToolCardProps) => {
    return (
        <Reveal key={tool.title} delay={0.1}>
            <div
                id={tool.slug}
                className="tool-card-grid"
                style={{
                    direction: index % 2 === 1 ? "rtl" : "ltr",
                }}
            >
                <div className="tool-copy" style={{ direction: "ltr" }}>
                    <div
                        className="tool-icon-box"
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
                    <div style={{ fontSize: "0.95rem", color: "#64748B", lineHeight: 1.8, marginBottom: 24 }}>{tool.desc}</div>
                    <div className="tool-stats" style={{ display: "flex", gap: 24, marginBottom: 20 }}>
                        {tool.stats.map((s) => (
                            <div key={s.label}>
                                <p style={{ fontSize: "1.3rem", fontWeight: 800, color: tool.color, fontFamily: "var(--font-dm-sans)" }}>{s.value}</p>
                                <p style={{ fontSize: "0.72rem", color: "#94A3B8", fontWeight: 500 }}>{s.label}</p>
                            </div>
                        ))}
                    </div>
                    <Link
                        href={`/products/${tool.slug}?from=section`}
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
                <div className="tool-preview" style={{ direction: "ltr" }}>
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

            <style jsx>{`
                .tool-card-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 48px;
                    align-items: center;
                    scroll-margin-top: 240px;
                }

                @media (max-width: 991px) {
                    .tool-card-grid {
                        grid-template-columns: 1fr;
                        gap: 32px;
                        direction: ltr !important;
                        text-align: center;
                    }

                    .tool-copy {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .tool-icon-box {
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .tool-stats {
                        justify-content: center;
                    }

                    .tool-preview {
                        max-width: 500px;
                        margin: 0 auto;
                        width: 100%;
                    }
                }
            `}</style>
        </Reveal>
    );
};

export default ToolCard;
