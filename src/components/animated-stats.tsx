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
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              className="perspective-[1000px]"
            >
              <div className="h-full p-6 sm:p-8 rounded-[2rem] bg-secondary/30 border border-white/5 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)] transition-all duration-700 group relative overflow-hidden cursor-default glass-morphism">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute inset-0 bg-primary/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>
                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-blue-400 group-hover:to-white mb-2 flex justify-center items-baseline drop-shadow-[0_0_15px_rgba(var(--primary),0.3)] group-hover:drop-shadow-[0_0_25px_rgba(var(--primary),0.6)] transition-all duration-500">
                    <Counter from={0} to={stat.value} duration={2.5} />
                    <span>{stat.suffix}</span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground group-hover:text-primary/90 font-medium uppercase tracking-widest transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
