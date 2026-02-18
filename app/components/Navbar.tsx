"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowLeft } from "lucide-react";
import MobileMenu from "./MobileMenu";

declare global {
    interface Window {
        Calendly?: { initPopupWidget: (opts: { url: string }) => void };
    }
}


import CalendlyButton from "./common/CalendlyButton";

export default function Navbar({ showBack = false }: { showBack?: boolean }) {
    const [scrolled, setScrolled] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);

            // Fallback if hero logo doesn't exist (e.g. other pages)
            if (!document.getElementById("hero-logo-container")) {
                setShowLogo(window.scrollY > 20);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        // Intersection Observer for Hero Logo
        const heroLogo = document.getElementById("hero-logo-container");
        let observer: IntersectionObserver;

        if (heroLogo) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    // Show navbar logo when less than 50% of the hero logo is visible
                    setShowLogo(!entry.isIntersecting);
                },
                { threshold: 0.5 }
            );
            observer.observe(heroLogo);
        } else {
            // Initial check for non-hero pages
            setShowLogo(window.scrollY > 20);
        }

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (observer) observer.disconnect();
        };
    }, []);

    const products = [
        { name: "CRM & Lead Management", href: "/products/crm" },
        { name: "AI Receptionist", href: "/products/ai-receptionist" },
        { name: "SMS Agent", href: "/products/sms-bot" },
        { name: "Smart Campaigns", href: "/products/smart-campaigns" },
        { name: "Calendar & Tasks", href: "/products/calendar" },
    ];

    const resources = [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "#blog" },
        { name: "Case Studies", href: "#cases" },
        { name: "Help Center", href: "#help" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="navbar"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: scrolled ? "12px 24px" : "18px 24px",
                    background: scrolled
                        ? "rgba(255,255,255,0.85)"
                        : "rgba(255,255,255,0.5)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderBottom: scrolled
                        ? "1px solid rgba(226,232,240,0.6)"
                        : "1px solid transparent",
                    transition: "all 0.3s ease",
                }}
            >
                <div
                    style={{
                        maxWidth: 1200,
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo & Back Button */}
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                        <AnimatePresence>
                            {showBack && (
                                <motion.a
                                    href="/"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        fontSize: "0.85rem",
                                        color: "#F59E0B",
                                        textDecoration: "none",
                                        fontWeight: 600,
                                        background: "white",
                                        padding: "6px 12px",
                                        borderRadius: 50,
                                        border: "1px solid rgba(245,158,11,0.2)",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                                    }}
                                >
                                    <ArrowLeft size={16} /> <span className="hidden sm:inline">Back</span>
                                </motion.a>
                            )}
                        </AnimatePresence>

                        <div style={{ width: 140, height: 50, display: "flex", alignItems: "center" }}>
                            <AnimatePresence>
                                {(showLogo || showBack) && (
                                    <motion.a
                                        href="/"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            textDecoration: "none",
                                        }}
                                    >
                                        <img
                                            src="/realease-logo.png"
                                            alt="RealEase Logo"
                                            style={{ width: "140px", height: "auto" }}
                                        />
                                    </motion.a>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div
                        className="desktop-nav"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 32,
                        }}
                    >
                        {/* Products Dropdown */}
                        <div
                            style={{ position: "relative" }}
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >
                            <button
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 4,
                                    background: "none",
                                    border: "none",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    color: "#475569",
                                    cursor: "pointer",
                                    padding: "8px 0",
                                    fontFamily: "var(--font-inter), sans-serif",
                                }}
                            >
                                Products <ChevronDown size={14} />
                            </button>
                            <AnimatePresence>
                                {productsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.2 }}
                                        style={{
                                            position: "absolute",
                                            top: "100%",
                                            left: -16,
                                            background: "white",
                                            borderRadius: 12,
                                            boxShadow:
                                                "0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)",
                                            padding: "8px",
                                            minWidth: 220,
                                            border: "1px solid rgba(226,232,240,0.6)",
                                        }}
                                    >
                                        {products.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                style={{
                                                    display: "block",
                                                    padding: "10px 16px",
                                                    fontSize: "0.875rem",
                                                    color: "#334155",
                                                    textDecoration: "none",
                                                    borderRadius: 8,
                                                    transition: "background 0.15s",
                                                    fontFamily: "var(--font-inter), sans-serif",
                                                }}
                                                onMouseEnter={(e) =>
                                                    (e.currentTarget.style.background = "#F1F5F9")
                                                }
                                                onMouseLeave={(e) =>
                                                    (e.currentTarget.style.background = "transparent")
                                                }
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Resources Dropdown */}
                        <div
                            style={{ position: "relative" }}
                            onMouseEnter={() => setResourcesOpen(true)}
                            onMouseLeave={() => setResourcesOpen(false)}
                        >
                            <button
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 4,
                                    background: "none",
                                    border: "none",
                                    fontSize: "0.9rem",
                                    fontWeight: 500,
                                    color: "#475569",
                                    cursor: "pointer",
                                    padding: "8px 0",
                                    fontFamily: "var(--font-inter), sans-serif",
                                }}
                            >
                                Resources <ChevronDown size={14} />
                            </button>
                            <AnimatePresence>
                                {resourcesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.2 }}
                                        style={{
                                            position: "absolute",
                                            top: "100%",
                                            left: -16,
                                            background: "white",
                                            borderRadius: 12,
                                            boxShadow:
                                                "0 20px 60px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)",
                                            padding: "8px",
                                            minWidth: 180,
                                            border: "1px solid rgba(226,232,240,0.6)",
                                        }}
                                    >
                                        {resources.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                style={{
                                                    display: "block",
                                                    padding: "10px 16px",
                                                    fontSize: "0.875rem",
                                                    color: "#334155",
                                                    textDecoration: "none",
                                                    borderRadius: 8,
                                                    transition: "background 0.15s",
                                                    fontFamily: "var(--font-inter), sans-serif",
                                                }}
                                                onMouseEnter={(e) =>
                                                    (e.currentTarget.style.background = "#F1F5F9")
                                                }
                                                onMouseLeave={(e) =>
                                                    (e.currentTarget.style.background = "transparent")
                                                }
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <a
                            href="#pricing"
                            style={{
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                color: "#475569",
                                textDecoration: "none",
                                padding: "8px 0",
                                fontFamily: "var(--font-inter), sans-serif",
                            }}
                        >
                            Pricing
                        </a>

                        <a
                            href="#contact"
                            style={{
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                color: "#475569",
                                textDecoration: "none",
                                padding: "8px 0",
                                fontFamily: "var(--font-inter), sans-serif",
                            }}
                        >
                            Contact
                        </a>

                        <CalendlyButton
                            style={{
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
                            }}
                        />
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{
                            display: "none",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "#0F172A",
                        }}
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={mobileOpen}
                onClose={() => setMobileOpen(false)}
                products={products}
                resources={resources}
            />

            <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
        </>
    );
}
