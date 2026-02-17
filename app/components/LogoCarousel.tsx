"use client";

import { motion } from "framer-motion";

const items = ["AI Receptionist", "Smart CRM", "Campaign Engine", "Synced Calendar", "SMS Agent", "Lead Scoring", "Analytics", "Task Manager"];

export default function LogoCarousel() {
    return (
        <section style={{ padding: "18px 0", background: "#0F172A", overflow: "hidden" }}>
            <motion.div
                animate={{ x: [0, -1400] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ display: "flex", gap: 60, whiteSpace: "nowrap" }}
            >
                {[...Array(3)].map((_, rep) => (
                    <div key={rep} style={{ display: "flex", gap: 60, alignItems: "center" }}>
                        {items.map((item) => (
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
                                <span style={{ color: "#F59E0B" }}>◆</span> {item}
                            </span>
                        ))}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
