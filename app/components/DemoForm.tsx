"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";

interface DemoFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DemoForm({ isOpen, onClose }: DemoFormProps) {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", company: "", message: "" });
            onClose();
        }, 2500);
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "14px 16px",
        border: "1.5px solid #E2E8F0",
        borderRadius: 12,
        fontSize: "0.95rem",
        fontFamily: "var(--font-inter), sans-serif",
        outline: "none",
        transition: "border-color 0.2s, box-shadow 0.2s",
        background: "#FAFBFC",
        color: "#0F172A",
    };

    const labelStyle: React.CSSProperties = {
        display: "block",
        fontSize: "0.8rem",
        fontWeight: 600,
        color: "#475569",
        marginBottom: 6,
        fontFamily: "var(--font-inter), sans-serif",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(15, 23, 42, 0.5)",
                        backdropFilter: "blur(8px)",
                        zIndex: 2000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 24,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: "white",
                            borderRadius: 20,
                            padding: "40px 36px",
                            maxWidth: 480,
                            width: "100%",
                            position: "relative",
                            boxShadow: "0 25px 80px rgba(0,0,0,0.15)",
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: "absolute",
                                top: 16,
                                right: 16,
                                background: "#F1F5F9",
                                border: "none",
                                borderRadius: "50%",
                                width: 36,
                                height: 36,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "#64748B",
                                transition: "all 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#E2E8F0";
                                e.currentTarget.style.color = "#0F172A";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#F1F5F9";
                                e.currentTarget.style.color = "#64748B";
                            }}
                        >
                            <X size={18} />
                        </button>

                        {!submitted ? (
                            <>
                                <div style={{ marginBottom: 28 }}>
                                    <h3
                                        className="demo-title"
                                        style={{
                                            fontSize: "1.5rem",
                                            fontWeight: 800,
                                            color: "#0F172A",
                                            marginBottom: 8,
                                            fontFamily: "var(--font-dm-sans), sans-serif",
                                        }}
                                    >
                                        Book Your Free Demo
                                    </h3>
                                    <p
                                        style={{
                                            fontSize: "0.9rem",
                                            color: "#64748B",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        See how RealEase can transform your real estate business.
                                        We&apos;ll walk you through every feature.
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 16,
                                    }}
                                >
                                    <div
                                        className="form-grid"
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: 16,
                                        }}
                                    >
                                        <div>
                                            <label style={labelStyle}>Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Jane Smith"
                                                style={inputStyle}
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                onFocus={(e) => {
                                                    e.currentTarget.style.borderColor = "#F59E0B";
                                                    e.currentTarget.style.boxShadow =
                                                        "0 0 0 3px rgba(245,158,11,0.1)";
                                                }}
                                                onBlur={(e) => {
                                                    e.currentTarget.style.borderColor = "#E2E8F0";
                                                    e.currentTarget.style.boxShadow = "none";
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Email</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="jane@realty.com"
                                                style={inputStyle}
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                onFocus={(e) => {
                                                    e.currentTarget.style.borderColor = "#F59E0B";
                                                    e.currentTarget.style.boxShadow =
                                                        "0 0 0 3px rgba(245,158,11,0.1)";
                                                }}
                                                onBlur={(e) => {
                                                    e.currentTarget.style.borderColor = "#E2E8F0";
                                                    e.currentTarget.style.boxShadow = "none";
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div
                                        className="form-grid"
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: 16,
                                        }}
                                    >
                                        <div>
                                            <label style={labelStyle}>Phone</label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="(555) 123-4567"
                                                style={inputStyle}
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }
                                                onFocus={(e) => {
                                                    e.currentTarget.style.borderColor = "#F59E0B";
                                                    e.currentTarget.style.boxShadow =
                                                        "0 0 0 3px rgba(245,158,11,0.1)";
                                                }}
                                                onBlur={(e) => {
                                                    e.currentTarget.style.borderColor = "#E2E8F0";
                                                    e.currentTarget.style.boxShadow = "none";
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Brokerage / Company</label>
                                            <input
                                                type="text"
                                                placeholder="Keller Williams"
                                                style={inputStyle}
                                                value={formData.company}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, company: e.target.value })
                                                }
                                                onFocus={(e) => {
                                                    e.currentTarget.style.borderColor = "#F59E0B";
                                                    e.currentTarget.style.boxShadow =
                                                        "0 0 0 3px rgba(245,158,11,0.1)";
                                                }}
                                                onBlur={(e) => {
                                                    e.currentTarget.style.borderColor = "#E2E8F0";
                                                    e.currentTarget.style.boxShadow = "none";
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyle}>
                                            What are you looking for? (Optional)
                                        </label>
                                        <textarea
                                            placeholder="Tell us about your needs..."
                                            rows={3}
                                            style={{
                                                ...inputStyle,
                                                resize: "none",
                                            }}
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            onFocus={(e) => {
                                                e.currentTarget.style.borderColor = "#F59E0B";
                                                e.currentTarget.style.boxShadow =
                                                    "0 0 0 3px rgba(245,158,11,0.1)";
                                            }}
                                            onBlur={(e) => {
                                                e.currentTarget.style.borderColor = "#E2E8F0";
                                                e.currentTarget.style.boxShadow = "none";
                                            }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 8,
                                            padding: "14px 32px",
                                            background:
                                                "linear-gradient(135deg, #F59E0B, #D97706)",
                                            color: "white",
                                            border: "none",
                                            borderRadius: 50,
                                            fontSize: "1rem",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            boxShadow: "0 4px 20px rgba(245,158,11,0.3)",
                                            transition: "all 0.3s ease",
                                            marginTop: 4,
                                            fontFamily: "var(--font-inter), sans-serif",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                            e.currentTarget.style.boxShadow =
                                                "0 8px 30px rgba(245,158,11,0.4)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow =
                                                "0 4px 20px rgba(245,158,11,0.3)";
                                        }}
                                    >
                                        <Send size={18} />
                                        Request Demo
                                    </button>
                                </form>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{
                                    textAlign: "center",
                                    padding: "40px 0",
                                }}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15,
                                        delay: 0.1,
                                    }}
                                >
                                    <CheckCircle
                                        size={64}
                                        style={{ color: "#10B981", marginBottom: 16 }}
                                    />
                                </motion.div>
                                <h3
                                    style={{
                                        fontSize: "1.4rem",
                                        fontWeight: 700,
                                        color: "#0F172A",
                                        marginBottom: 8,
                                    }}
                                >
                                    You&apos;re all set!
                                </h3>
                                <p style={{ color: "#64748B", fontSize: "0.95rem" }}>
                                    Our team will reach out within 24 hours to schedule your
                                    personalized demo.
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                    <style jsx>{`
                        @media (max-width: 640px) {
                            .form-grid {
                                grid-template-columns: 1fr !important;
                                gap: 12px !important;
                            }
                            .demo-title {
                                font-size: 1.25rem !important;
                            }
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
