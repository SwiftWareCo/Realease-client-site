"use client";

import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import CalendlyButton from "./common/CalendlyButton";

interface CTASectionProps {
}

export default function CTASection({ }: CTASectionProps) {
    return (
        <section style={{ padding: "100px 24px", background: "#0F172A" }}>
            <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
                <Reveal>
                    <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>Join 500+ Realtors Already Using RealEase</p>
                    <h2 style={{ fontFamily: "var(--font-dm-sans)", color: "white", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", marginBottom: 16, whiteSpace: "nowrap" }}>
                        Ready to Close More Deals with Less Effort?
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.7 }}>
                        See how AI transforms your lead management, follow-ups, and deal flow — in just 30 minutes.
                    </p>
                    <CalendlyButton
                        style={{
                            padding: "16px 40px",
                            background: "linear-gradient(135deg, #F59E0B, #D97706)",
                            color: "white",
                            border: "none",
                            borderRadius: 50,
                            fontSize: "1rem",
                            fontWeight: 700,
                            cursor: "pointer",
                            boxShadow: "0 4px 24px rgba(245,158,11,0.3)",
                            transition: "transform 0.3s, box-shadow 0.3s",
                        }}
                    >
                        See It in Action <ArrowRight size={18} style={{ display: "inline", verticalAlign: "middle", marginLeft: 8 }} />
                    </CalendlyButton>
                    <div style={{ display: "flex", gap: 20, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
                        {["Free 14-day trial", "No credit card", "Cancel anytime"].map((item) => (
                            <span key={item} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
                                <Check size={14} style={{ color: "#F59E0B" }} /> {item}
                            </span>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
