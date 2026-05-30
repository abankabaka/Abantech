"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing out quadratic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOut * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export function AnimatedStats() {
  const stats = [
    { label: "Projects Completed", value: 150, suffix: "+" },
    { label: "Systems Built", value: 45, suffix: "+" },
    { label: "Services Offered", value: 12, suffix: "" },
    { label: "Technologies Used", value: 30, suffix: "+" },
  ];

  return (
    <section className="py-20 relative border-y border-white/5 bg-background">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 sm:p-6 rounded-2xl bg-secondary/30 border border-white/5 hover:border-primary/30 hover:-translate-y-1 active:scale-95 transition-all duration-300 group relative overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl md:text-6xl font-headline font-bold text-primary mb-1 sm:mb-2 flex justify-center items-baseline drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                  <Counter from={0} to={stat.value} duration={2.5} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
