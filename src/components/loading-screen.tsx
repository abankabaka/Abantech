"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border-t-2 border-primary shadow-[0_0_20px_rgba(26,115,232,0.3)] opacity-50"
            />
            <div className="relative flex items-center justify-center">
              <img 
                src="/images/logo.png" 
                alt="Aban Technologies Logo" 
                className="h-[80px] md:h-[100px] lg:h-[120px] w-auto object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-2 text-center">
            <motion.h2
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-sm font-bold uppercase tracking-[0.5em] text-primary"
            >
              Aban Technologies
            </motion.h2>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Initialising Secure Core...</p>
          </div>

          <div className="w-48 h-[2px] bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2 }}
              className="w-full h-full bg-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
