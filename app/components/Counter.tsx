"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let n = 0;
        const step = end / 60;
        const id = setInterval(() => {
            n += step;
            if (n >= end) { setCount(end); clearInterval(id); }
            else setCount(Math.floor(n));
        }, 16);
        return () => clearInterval(id);
    }, [inView, end]);
    return <span ref={ref}>{count}{suffix}</span>;
}
