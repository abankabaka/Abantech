
"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { 
  Bot, 
  User, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Calendar,
  MessageSquare
} from 'lucide-react';
import { aiSolutionArchitect, AISolutionArchitectOutput } from '@/ai/flows/ai-solution-architect';
import { cn } from '@/lib/utils';

export function AIArchitect() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AISolutionArchitectOutput | null>(null);
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, result]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setChatHistory(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await aiSolutionArchitect({ businessNeeds: userMsg });
      setResult(response);
      setChatHistory(prev => [...prev, { role: 'assistant', content: response.summaryOfNeeds }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { role: 'assistant', content: "I encountered an error analyzing your request. Please try again or contact us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[100]">
        <Button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full shadow-2xl shadow-primary/40 p-0 flex items-center justify-center group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary group-hover:scale-110 transition-transform" />
          <Bot className="w-8 h-8 relative z-10 text-primary-foreground" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background z-20" />
        </Button>
      </div>

      {isOpen && (
        <Card className="fixed bottom-28 right-8 w-[400px] h-[600px] z-[100] glass-morphism shadow-2xl border-primary/20 flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          <CardHeader className="border-b border-border/50 p-4 bg-primary/5 flex flex-row items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <Sparkles className="text-primary w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg">Solution Architect</h3>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">AI Powered by AbanTechnologies</p>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-secondary/50 p-3 rounded-2xl rounded-tl-none text-sm max-w-[85%]">
                Hello! I'm the AbanTechnologies Solution Architect. Describe your business challenge, and I'll recommend the perfect technical stack.
              </div>
            </div>

            {chatHistory.map((msg, i) => (
              <div key={i} className={cn("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "")}>
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                  msg.role === 'user' ? "bg-primary" : "bg-secondary"
                )}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-primary-foreground" /> : <Bot className="w-4 h-4 text-primary" />}
                </div>
                <div className={cn(
                  "p-3 rounded-2xl text-sm max-w-[85%]",
                  msg.role === 'user' ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-secondary/50 rounded-tl-none"
                )}>
                  {msg.content}
                </div>
              </div>
            ))}

            {result && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="w-3 h-3" /> Recommended Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.potentialTechStack.map((tech, i) => (
                      <span key={i} className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-md border border-primary/20">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3" /> Proposed Solutions
                  </h4>
                  <ul className="space-y-1">
                    {result.recommendedSolutions.map((sol, i) => (
                      <li key={i} className="text-[11px] flex items-start gap-2 text-muted-foreground">
                        <span className="w-1 h-1 bg-primary rounded-full mt-1.5 shrink-0" />
                        {sol}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-primary/5 border border-primary/20 rounded-xl space-y-2">
                  <h4 className="text-xs font-bold text-primary flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> Book Consultation
                  </h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {result.nextSteps}
                  </p>
                  <Button size="sm" className="w-full text-[11px] h-8 font-headline">Schedule Now</Button>
                </div>
              </div>
            )}

            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center animate-pulse">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-secondary/50 p-3 rounded-2xl rounded-tl-none text-sm flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-100" />
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-200" />
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="p-4 border-t border-border/50 bg-background/50">
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your needs..."
                className="bg-secondary/50 border-none focus-visible:ring-1 focus-visible:ring-primary h-10"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading} className="shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
