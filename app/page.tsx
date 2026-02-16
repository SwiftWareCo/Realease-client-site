import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        background: "#FAFBFE",
        padding: 24,
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          marginBottom: 8,
          fontFamily: "var(--font-dm-sans), sans-serif",
          letterSpacing: "-0.03em",
        }}
      >
        <span
          style={{
            background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          real
        </span>
        ease
      </h1>
      <p style={{ color: "#64748B", marginBottom: 40, fontSize: "1rem" }}>
        Choose a landing page design to preview:
      </p>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { href: "/1", label: "Design 1", desc: "Gradient Minimalism" },
          { href: "/2", label: "Design 2", desc: "Bold Editorial" },
          { href: "/3", label: "Design 3", desc: "Dashboard-First" },
        ].map((d) => (
          <Link
            key={d.href}
            href={d.href}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "36px 48px",
              background: "white",
              borderRadius: 16,
              border: "1.5px solid #E2E8F0",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <span
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#0F172A",
                marginBottom: 4,
              }}
            >
              {d.label}
            </span>
            <span style={{ fontSize: "0.85rem", color: "#94A3B8" }}>
              {d.desc}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
