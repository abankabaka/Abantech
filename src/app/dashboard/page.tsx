"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Mail, Users, Calendar } from "lucide-react";
import { format } from "date-fns";

type Subscriber = { id: string; email: string; createdAt: string };
type Message = { id: string; name: string; email: string; subject: string; message: string; createdAt: string };

export default function DashboardPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages);
        setSubscribers(data.subscribers);
        setIsAuthenticated(true);
      } else {
        setError("Invalid password. Access denied.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-headline font-bold">Admin Portal</h1>
            <p className="text-muted-foreground mt-2">Enter your master password to access encrypted data.</p>
          </div>
          
          <Card className="glass-morphism border-white/5">
            <CardContent className="p-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Input 
                    type="password" 
                    placeholder="Enter password..." 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-secondary/50 border-white/5 h-12 text-center text-lg tracking-widest"
                    autoFocus
                  />
                </div>
                {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}
                <Button type="submit" className="w-full h-12 font-headline" disabled={isLoading || !password}>
                  {isLoading ? "Decrypting..." : "Unlock Vault"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <Badge variant="outline" className="border-primary/50 text-primary uppercase tracking-widest font-bold mb-2">Authenticated</Badge>
              <h1 className="text-4xl font-headline font-bold">Command Center</h1>
            </div>
            <div className="flex gap-4">
              <Card className="bg-secondary/50 border-white/5 px-6 py-3 flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Messages</p>
                  <p className="text-xl font-bold">{messages.length}</p>
                </div>
              </Card>
              <Card className="bg-secondary/50 border-white/5 px-6 py-3 flex items-center gap-4">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Subscribers</p>
                  <p className="text-xl font-bold">{subscribers.length}</p>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Messages Table */}
            <Card className="glass-morphism border-white/5 flex flex-col h-[600px]">
              <div className="p-6 border-b border-white/5 shrink-0">
                <h3 className="text-xl font-headline font-bold flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" /> Contact Messages
                </h3>
              </div>
              <CardContent className="p-0 overflow-y-auto flex-1">
                {messages.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">No messages received yet.</div>
                ) : (
                  <div className="divide-y divide-white/5">
                    {messages.map((msg) => (
                      <div key={msg.id} className="p-6 hover:bg-white/[0.02] transition-colors space-y-3">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <p className="font-bold">{msg.name}</p>
                            <a href={`mailto:${msg.email}`} className="text-sm text-primary hover:underline">{msg.email}</a>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                            <Calendar className="w-3 h-3" />
                            {msg.createdAt ? format(new Date(msg.createdAt), "MMM d, h:mm a") : "Unknown"}
                          </div>
                        </div>
                        <div className="bg-secondary/30 p-4 rounded-lg border border-white/5">
                          <p className="text-xs font-bold uppercase text-muted-foreground mb-1">{msg.subject}</p>
                          <p className="text-sm text-gray-300 whitespace-pre-wrap">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Subscribers Table */}
            <Card className="glass-morphism border-white/5 flex flex-col h-[600px]">
              <div className="p-6 border-b border-white/5 shrink-0">
                <h3 className="text-xl font-headline font-bold flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" /> Newsletter Subscribers
                </h3>
              </div>
              <CardContent className="p-0 overflow-y-auto flex-1">
                {subscribers.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">No subscribers yet.</div>
                ) : (
                  <div className="divide-y divide-white/5">
                    {subscribers.map((sub) => (
                      <div key={sub.id} className="p-6 flex justify-between items-center hover:bg-white/[0.02] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Mail className="w-4 h-4 text-primary" />
                          </div>
                          <a href={`mailto:${sub.email}`} className="font-medium hover:text-primary transition-colors">{sub.email}</a>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {sub.createdAt ? format(new Date(sub.createdAt), "MMM d, yyyy") : "Unknown"}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
