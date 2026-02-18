"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    products: { name: string; href: string }[];
    resources: { name: string; href: string }[];
    openCalendly: () => void;
}

const MobileMenu = ({ isOpen, onClose, products, resources, openCalendly }: MobileMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    style={{
                        position: "fixed",
                        top: 60,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(255,255,255,0.98)",
                        backdropFilter: "blur(20px)",
                        zIndex: 999,
                        padding: "32px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                    }}
                >
                    <p
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: "#94A3B8",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginBottom: 4,
                        }}
                    >
                        Products
                    </p>
                    {products.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            style={{
                                fontSize: "1rem",
                                color: "#334155",
                                textDecoration: "none",
                                padding: "10px 0",
                                borderBottom: "1px solid #F1F5F9",
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                    <p
                        style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: "#94A3B8",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginTop: 16,
                            marginBottom: 4,
                        }}
                    >
                        Resources
                    </p>
                    {resources.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            style={{
                                fontSize: "1rem",
                                color: "#334155",
                                textDecoration: "none",
                                padding: "10px 0",
                                borderBottom: "1px solid #F1F5F9",
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href="#pricing"
                        onClick={onClose}
                        style={{
                            fontSize: "1rem",
                            color: "#334155",
                            textDecoration: "none",
                            padding: "10px 0",
                            marginTop: 16,
                            borderBottom: "1px solid #F1F5F9",
                        }}
                    >
                        Pricing
                    </a>
                    <button
                        onClick={() => {
                            onClose();
                            openCalendly();
                        }}
                        style={{
                            marginTop: 24,
                            padding: "14px 32px",
                            background: "linear-gradient(135deg, #F59E0B, #D97706)",
                            color: "white",
                            border: "none",
                            borderRadius: 50,
                            fontSize: "1rem",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        See It in Action
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
