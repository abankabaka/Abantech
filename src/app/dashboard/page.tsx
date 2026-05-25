
"use client";

import { Navbar } from "@/components/navbar";
import { SidebarProvider, SidebarInset, Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  FolderLock, 
  Headset, 
  CreditCard, 
  Settings,
  Bell,
  Search,
  Plus,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Clock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <SidebarProvider>
          <div className="flex w-full">
            <Sidebar className="border-r border-border mt-20">
              <SidebarHeader className="p-4">
                <div className="flex items-center gap-3 p-2 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">JD</div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold font-headline">Enterprise Client</span>
                    <span className="text-[10px] uppercase text-muted-foreground">ID: 884-293</span>
                  </div>
                </div>
              </SidebarHeader>
              <SidebarContent className="p-2">
                <SidebarMenu>
                  {[
                    { name: 'Nexus Core', icon: LayoutDashboard, active: true },
                    { name: 'Secure Vault', icon: FolderLock },
                    { name: 'Support Grid', icon: Headset },
                    { name: 'Commerce Hub', icon: CreditCard },
                    { name: 'Node Config', icon: Settings },
                  ].map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton isActive={item.active} className="rounded-xl h-11">
                        <item.icon />
                        <span className="font-headline font-medium">{item.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>

            <SidebarInset className="p-6 space-y-8 bg-secondary/10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                  <h1 className="text-3xl font-headline font-bold">Project Nexus</h1>
                  <p className="text-muted-foreground">Monitor infrastructure development and system health.</p>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Bell className="w-4 h-4" />
                  </Button>
                  <Button className="rounded-xl font-headline group">
                    <Plus className="w-4 h-4 mr-2" />
                    Deploy New Node
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Active Nodes", value: "4", sub: "+1 this month", icon: Zap, color: "text-yellow-500" },
                  { label: "Security Level", value: "MAX", sub: "Protocols Active", icon: ShieldCheck, color: "text-green-500" },
                  { label: "Engineering Hours", value: "1,240", sub: "Current Project Cycle", icon: Clock, color: "text-blue-500" },
                ].map((stat, i) => (
                  <Card key={i} className="glass-morphism border-white/5">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className={cn("p-3 rounded-xl bg-secondary", stat.color)}>
                          <stat.icon className="w-6 h-6" />
                        </div>
                        <Badge variant="secondary" className="text-[10px]">+12.5%</Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                        <div className="text-3xl font-headline font-bold">{stat.value}</div>
                        <div className="text-[10px] text-muted-foreground">{stat.sub}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="glass-morphism border-white/5">
                  <CardHeader>
                    <CardTitle className="font-headline">Ongoing Engineering</CardTitle>
                    <CardDescription>Development status of your primary ecosystem.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { name: "Hospital Ecosystem v2.0", progress: 85, status: "Testing Phase" },
                      { name: "Cyber-Security Mesh Implementation", progress: 40, status: "Integration Phase" },
                      { name: "Global Payment Gateway", progress: 95, status: "Final Review" },
                    ].map((proj, i) => (
                      <div key={i} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="font-bold text-sm">{proj.name}</div>
                          <div className="text-xs text-primary font-bold">{proj.progress}%</div>
                        </div>
                        <Progress value={proj.progress} className="h-1.5" />
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                          Status: {proj.status}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="glass-morphism border-white/5">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="font-headline">Recent Documents</CardTitle>
                      <CardDescription>Secure file exchange history.</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm">View All</Button>
                  </CardHeader>
                  <CardContent className="p-0">
                    {[
                      { name: "Infrastructure_Roadmap.pdf", size: "2.4 MB", date: "2h ago" },
                      { name: "System_Vulnerability_Audit.xlsx", size: "1.8 MB", date: "5h ago" },
                      { name: "Brand_Visual_Identity_v3.zip", size: "45.0 MB", date: "Yesterday" },
                      { name: "SLA_Agreement_2024.pdf", size: "1.2 MB", date: "Jan 12" },
                    ].map((doc, i) => (
                      <div key={i} className="flex items-center justify-between p-4 hover:bg-secondary/50 border-b border-white/5 last:border-0 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                            <FolderLock className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div>
                            <div className="text-sm font-bold">{doc.name}</div>
                            <div className="text-[10px] text-muted-foreground uppercase">{doc.size} • {doc.date}</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ArrowUpRight className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
