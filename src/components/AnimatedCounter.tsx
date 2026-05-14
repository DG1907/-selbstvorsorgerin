"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true });

  // Extract numeric part and suffix
  const match = value.match(/^([\d,.]+)(.*)$/);
  const numericStr = match ? match[1].replace(",", ".") : null;
  const suffix = match ? match[2] : null;
  const numeric = numericStr ? parseFloat(numericStr) : null;

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (isInView && numeric !== null) {
      motionVal.set(numeric);
    }
  }, [isInView, motionVal, numeric]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current && numeric !== null) {
        const display = numeric % 1 === 0 ? Math.round(v) : v.toFixed(0);
        ref.current.textContent = display + (suffix ?? "");
      }
    });
  }, [spring, numeric, suffix]);

  // Non-numeric values (like "1 von 3") just show as-is
  if (numeric === null) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={inViewRef} className={className}>
      <span ref={ref}>0{suffix}</span>
    </span>
  );
}
