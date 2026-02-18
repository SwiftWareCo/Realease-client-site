"use client";

import { motion } from "framer-motion";

interface CalendlyButtonProps {
    className?: string;
    text?: string;
    variant?: "primary" | "outline";
}

const CALENDLY_URL = "https://calendly.com/amarramadann/30min";

const CalendlyButton = ({ className, text = "Book a Free Demo", variant = "primary" }: CalendlyButtonProps) => {
    const openCalendly = () => {
        if (typeof window !== "undefined" && window.Calendly) {
            window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        } else {
            window.open(CALENDLY_URL, "_blank");
        }
    };

    const primaryStyles = {
        padding: "10px 24px",
        background: "linear-gradient(135deg, #F59E0B, #D97706)",
        color: "white",
        border: "none",
        borderRadius: 50,
        fontSize: "0.875rem",
        fontWeight: 600,
        cursor: "pointer",
        boxShadow: "0 4px 20px rgba(245,158,11,0.3)",
        transition: "all 0.3s ease",
        fontFamily: "var(--font-inter), sans-serif",
    };

    const outlineStyles = {
        padding: "10px 24px",
        background: "transparent",
        color: "#475569",
        border: "1px solid rgba(226,232,240,0.6)",
        borderRadius: 50,
        fontSize: "0.875rem",
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontFamily: "var(--font-inter), sans-serif",
    };

    const styles = variant === "primary" ? primaryStyles : outlineStyles;

    return (
        <motion.button
            onClick={openCalendly}
            className={className}
            style={styles}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
        >
            {text}
        </motion.button>
    );
};

export default CalendlyButton;
