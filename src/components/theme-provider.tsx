
"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'cyber' | 'arctic' | 'matrix';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('cyber');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('aban-theme') as Theme;
    if (savedTheme) {
      setThemeState(savedTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    root.classList.remove('theme-arctic', 'theme-matrix');
    
    if (theme === 'arctic') root.classList.add('theme-arctic');
    if (theme === 'matrix') root.classList.add('theme-matrix');
    
    localStorage.setItem('aban-theme', theme);
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => setThemeState(newTheme);

  // We must always wrap the children in the Provider to prevent useTheme hooks 
  // from throwing errors during initial hydration. We use a visibility toggle 
  // to prevent theme flickering before the stored preference is loaded.
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={mounted ? "" : "invisible"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
