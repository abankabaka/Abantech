"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { X, Send, Bot, User, Loader2, RotateCcw } from 'lucide-react';
import { abanAssistant } from '@/ai/flows/aban-assistant';
import { cn } from '@/lib/utils';

// ─── Types ───────────────────────────────────────────────────────────────────

type Message = {
  role: 'user' | 'model';
  content: string;
};

// ─── WhatsApp Contacts ────────────────────────────────────────────────────────

const whatsappContacts = [
  {
    name: 'Aban (Support)',
    description: 'AbanTechnologies Support',
    phone: '+256701949311',
    status: 'Available',
  },
  {
    name: 'Aban (CEO)',
    description: 'AbanTechnologies CEO',
    phone: '+256763180375',
    status: 'Available',
  },
];

// ─── Suggested Prompts ────────────────────────────────────────────────────────

const SUGGESTED_PROMPTS = [
  "What services do you offer?",
  "I need a website for my business",
  "Tell me about your system development",
  "How can I contact AbanTechnologies?",
];

// ─── WhatsApp SVG ─────────────────────────────────────────────────────────────

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// ─── Spark / AI Icon ──────────────────────────────────────────────────────────

const SparkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M12 4c0 4.418 3.582 8 8 8-4.418 0-8 3.582-8 8 0-4.418-3.582-8-8-8 4.418 0 8-3.582 8-8z" />
    <path d="M19 4v4M17 6h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="6" cy="18" r="1.5" />
  </svg>
);

// ─── Message Bubble ───────────────────────────────────────────────────────────

function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === 'user';

  // Render line breaks and basic formatting
  const formatted = msg.content
    .split('\n')
    .map((line, i) => <span key={i}>{line}<br /></span>);

  return (
    <div className={cn("flex gap-2.5 items-end", isUser ? "flex-row-reverse" : "")}>
      {/* Avatar */}
      <div className={cn(
        "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mb-0.5",
        isUser
          ? "bg-primary/20 border border-primary/30"
          : "bg-blue-500/20 border border-blue-500/30"
      )}>
        {isUser
          ? <User className="w-3.5 h-3.5 text-primary" />
          : <SparkIcon className="w-3.5 h-3.5 text-blue-400" />
        }
      </div>

      {/* Bubble */}
      <div className={cn(
        "max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed",
        isUser
          ? "bg-primary text-primary-foreground rounded-br-sm"
          : "bg-secondary/70 border border-white/5 text-foreground rounded-bl-sm"
      )}>
        {formatted}
      </div>
    </div>
  );
}

// ─── Typing Indicator ─────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex gap-2.5 items-end">
      <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
        <SparkIcon className="w-3.5 h-3.5 text-blue-400" />
      </div>
      <div className="bg-secondary/70 border border-white/5 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0ms]" />
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:150ms]" />
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function AIArchitect() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const whatsappRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Click-outside to close WhatsApp picker
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (whatsappRef.current && !whatsappRef.current.contains(e.target as Node)) {
        setIsWhatsAppOpen(false);
      }
    };
    if (isWhatsAppOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isWhatsAppOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: text.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }));
      const { reply } = await abanAssistant({ message: text.trim(), history });
      setMessages(prev => [...prev, { role: 'model', content: reply }]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'model',
          content: "I'm sorry, I encountered an issue. Please try again, or reach out to us directly at abantechnologies1@gmail.com or +256701949311.",
        },
      ]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleReset = () => {
    setMessages([]);
    setInput('');
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  return (
    <>
      {/* ── Floating Action Button Stack ── */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-3 items-center">

        {/* AI Chatbot Button */}
        <button
          onClick={() => { setIsOpen(!isOpen); setIsWhatsAppOpen(false); }}
          className="w-14 h-14 rounded-full glass-morphism flex items-center justify-center border border-white/10 hover:border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300 relative group"
          title="Chat with Aban AI"
          aria-label="Open AI Assistant"
        >
          <SparkIcon className="w-6 h-6 text-blue-400" />
          {/* Online indicator */}
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-background z-20 animate-pulse" />
        </button>
      </div>

      {/* ── Chat Window ── */}
      {isOpen && (
        <Card className="fixed z-[100] w-[calc(100vw-32px)] sm:w-[420px] h-[75vh] sm:h-[620px] bottom-36 sm:bottom-8 right-4 sm:right-28 glass-morphism shadow-2xl border-blue-500/20 flex flex-col animate-in slide-in-from-bottom-4 duration-300 overflow-hidden">

          {/* Header */}
          <CardHeader className="border-b border-border/50 p-4 bg-gradient-to-r from-blue-500/10 to-primary/5 flex flex-row items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center relative">
                <SparkIcon className="w-4 h-4 text-blue-400" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border border-background" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-sm leading-tight">Aban AI</h3>
                <p className="text-[10px] text-muted-foreground tracking-wide">AbanTechnologies Assistant · Online</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground"
                  onClick={handleReset}
                  title="Clear conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          {/* Messages Area */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin" ref={scrollRef}>
            {/* Welcome message (always shown) */}
            <MessageBubble msg={{
              role: 'model',
              content: "Hello! I'm Aban AI, the official assistant of AbanTechnologies.\n\nI can help you learn about our services, answer technology questions, or guide you toward the right digital solution for your business.\n\nHow can I help you today?",
            }} />

            {/* Suggested prompts (only when no messages) */}
            {messages.length === 0 && (
              <div className="space-y-2 pt-1">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold px-1">Suggested</p>
                <div className="grid grid-cols-1 gap-2">
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="text-left text-xs px-3.5 py-2.5 rounded-xl bg-secondary/40 border border-white/5 hover:border-blue-500/30 hover:bg-secondary/60 text-muted-foreground hover:text-foreground transition-all duration-200"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Messages */}
            {messages.map((msg, i) => (
              <MessageBubble key={i} msg={msg} />
            ))}

            {/* Typing indicator */}
            {isLoading && <TypingIndicator />}
          </CardContent>

          {/* Input Area */}
          <CardFooter className="p-3 border-t border-border/50 bg-background/30 shrink-0">
            <form onSubmit={handleSubmit} className="flex gap-2 w-full">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about AbanTechnologies..."
                disabled={isLoading}
                className="flex-1 bg-secondary/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all disabled:opacity-50 min-w-0"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(input);
                  }
                }}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 rounded-xl bg-blue-500 hover:bg-blue-600 text-white shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.3)] disabled:opacity-40 disabled:shadow-none transition-all"
              >
                {isLoading
                  ? <Loader2 className="w-4 h-4 animate-spin" />
                  : <Send className="w-4 h-4" />
                }
              </Button>
            </form>
            <p className="text-[9px] text-muted-foreground/50 text-center w-full mt-2">
              Powered by AbanTechnologies AI · Responses may vary
            </p>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
