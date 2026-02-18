"use client";

import { motion } from "framer-motion";

interface CalendlyButtonProps {
    className?: string;
    text?: string;
    variant?: "primary" | "outline";
    color?: string; // Optional theme color
}

const CALENDLY_URL = "https://calendly.com/amarramadann/30min";

const CalendlyButton = ({ className, text = "Book a Free Demo", variant = "primary", color }: CalendlyButtonProps) => {
    const openCalendly = () => {
        if (typeof window !== "undefined" && window.Calendly) {
            window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        } else {
            window.open(CALENDLY_URL, "_blank");
        }
    };

    // Default primary color is orange if no color is provided
    const primaryColor = color || "#F59E0B";

    const primaryStyles = {
        padding: "10px 24px",
        background: variant === "primary" ? primaryColor : "transparent",
        color: variant === "primary" ? "white" : "#475569",
        border: variant === "primary" ? "none" : "1px solid rgba(226,232,240,0.6)",
        borderRadius: 50,
        fontSize: "0.875rem",
        fontWeight: 600,
        cursor: "pointer",
        boxShadow: variant === "primary" ? `0 4px 20px ${primaryColor}4D` : "none", // 4D is 30% alpha in hex
        transition: "all 0.3s ease",
        fontFamily: "var(--font-inter), sans-serif",
    };

    return (
        <motion.button
            onClick={openCalendly}
            className={className}
            style={primaryStyles}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
        >
            {text}
        </motion.button>
    );
};

export default CalendlyButton;
