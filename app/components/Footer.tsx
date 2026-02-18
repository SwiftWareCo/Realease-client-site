"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const columns = [
        {
            title: "Product",
            links: [
                { name: "CRM & Leads", href: "#" },
                { name: "AI Receptionist", href: "#" },
                { name: "SMS Agent", href: "#" },
                { name: "Campaigns", href: "#" },
                { name: "Calendar", href: "#" },
                { name: "Analytics", href: "#" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "About Us", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Case Studies", href: "#" },
                { name: "Help Center", href: "#" },
                { name: "API Docs", href: "#" },
            ],
        },
        {
            title: "Company",
            links: [
                { name: "Careers", href: "#" },
                { name: "Press", href: "#" },
                { name: "Partners", href: "#" },
                { name: "Contact", href: "#" },
            ],
        },
        {
            title: "Legal",
            links: [
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Cookie Policy", href: "#" },
            ],
        },
    ];

    return (
        <footer
            style={{
                background: "#0F172A",
                color: "white",
                padding: "80px 24px 40px",
            }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div
                    className="footer-grid"
                    style={{
                        marginBottom: 60,
                    }}
                >
                    {/* Brand */}
                    <div>
                        <a
                            href="#"
                            style={{
                                display: "block",
                                marginBottom: 16,
                            }}
                        >
                            <img
                                src="/realease-logo.png"
                                alt="RealEase Logo"
                                style={{ width: "150px", height: "auto" }}
                            />
                        </a>
                        <p
                            style={{
                                fontSize: "0.875rem",
                                color: "#94A3B8",
                                lineHeight: 1.7,
                                maxWidth: 260,
                            }}
                        >
                            The AI-powered command center that helps realtors close more deals
                            with less effort.
                        </p>
                    </div>

                    {/* Link Columns */}
                    {columns.map((col) => (
                        <div key={col.title} className="footer-column">
                            <h4
                                style={{
                                    fontSize: "0.8rem",
                                    fontWeight: 600,
                                    color: "#64748B",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                    marginBottom: 16,
                                    fontFamily: "var(--font-inter), sans-serif",
                                }}
                            >
                                {col.title}
                            </h4>
                            <ul
                                style={{
                                    listStyle: "none",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 10,
                                }}
                            >
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            style={{
                                                fontSize: "0.875rem",
                                                color: "#CBD5E1",
                                                textDecoration: "none",
                                                transition: "color 0.2s",
                                                fontFamily: "var(--font-inter), sans-serif",
                                            }}
                                            onMouseEnter={(e) =>
                                                (e.currentTarget.style.color = "#FFFFFF")
                                            }
                                            onMouseLeave={(e) =>
                                                (e.currentTarget.style.color = "#CBD5E1")
                                            }
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: "1px solid #1E293B",
                        paddingTop: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 16,
                    }}
                >
                    <p
                        style={{
                            fontSize: "0.8rem",
                            color: "#64748B",
                        }}
                    >
                        © {currentYear} RealEase. All rights reserved.
                    </p>
                    <div style={{ display: "flex", gap: 20 }}>
                        {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                style={{
                                    fontSize: "0.8rem",
                                    color: "#64748B",
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "#FFFFFF")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "#64748B")
                                }
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .footer-grid {
            display: grid;
            grid-template-columns: 1.5fr repeat(4, 1fr);
            gap: 40px;
            margin-bottom: 60px;
        }

        @media (max-width: 1024px) {
            .footer-grid {
                grid-template-columns: 1.5fr repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .footer-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (max-width: 480px) {
            .footer-grid {
                grid-template-columns: 1fr;
                gap: 32px;
            }
        }
      `}</style>
        </footer>
    );
}
