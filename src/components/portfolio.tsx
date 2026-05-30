"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      title: "DEVS (Digital Evidence Verification System)",
      description: "An elite cybersecurity framework engineered to guarantee the integrity, authenticity, and legal admissibility of digital evidence for law enforcement and enterprise security.",
      longDescription: "DEVS is a modern cybersecurity framework designed for forensic investigators and enterprise security teams to track and protect digital evidence chain-of-custody. Utilizing cryptographic hash chaining and distributed ledger hashes, it ensures that once evidence is uploaded, any modifications or tampering attempts are instantly flagged and logged, making files fully admissible in court.",
      image: "/images/devs.png",
      category: "Cybersecurity & Blockchain",
      tags: ["Next.js", "Blockchain", "AES-256", "TypeScript"],
      status: "Deployed",
      statusIcon: ShieldCheck,
      color: "from-blue-500/20 to-primary/5",
      challenges: [
        "Preventing administrative tampering of sensitive digital forensic assets.",
        "Providing simple, verifiable chain of custody reports for courtroom presentation.",
        "Handling massive multi-gigabyte files securely over unstable network uploads."
      ],
      features: [
        "Immutable cryptographic hashes",
        "Granular role-based access",
        "SHA-256 integrity checks",
        "Detailed automated audit trails"
      ],
      metrics: [
        { value: "100%", label: "Tamper Proof Integrity" },
        { value: "< 5ms", label: "Hash Verification" }
      ],
      architecture: {
        frontend: ["Next.js", "Tailwind CSS"],
        backend: ["Node.js", "Express"],
        ledger: ["Hyperledger API", "Web Crypto"],
        security: ["AES-256 GCM", "TLS 1.3"]
      }
    },
    {
      title: "Enterprise Hospital System",
      description: "A comprehensive, HIPAA-compliant healthcare management platform integrating patient records, billing, pharmacy inventory, and real-time doctor scheduling.",
      longDescription: "A comprehensive EHR (Electronic Health Record) and facility orchestration system. It connects patient registration, medical history charts, billing departments, automated laboratory tests, and ward scheduling into a unified, secure system. Features modern security architectures to remain strictly HIPAA-compliant.",
      image: "/images/hospital.png",
      category: "HealthTech Ecosystem",
      tags: ["React", "Node.js", "PostgreSQL", "HL7"],
      status: "Active",
      statusIcon: Zap,
      color: "from-green-500/20 to-emerald-500/5",
      challenges: [
        "Syncing live pharmacy inventory levels with doctor prescriptions.",
        "Ensuring low-latency doctor availability scheduling under heavy triage loads.",
        "Encrypting patient data both at rest and in transit."
      ],
      features: [
        "EHR management portal",
        "Automated invoicing & billing",
        "Laboratory module integration",
        "Patient portal access"
      ],
      metrics: [
        { value: "40%", label: "Triage Wait Time Drop" },
        { value: "100%", label: "Billing Accuracy Rate" }
      ],
      architecture: {
        frontend: ["React", "Shadcn UI"],
        backend: ["Node.js", "NestJS"],
        database: ["PostgreSQL", "Redis Cache"],
        standards: ["HL7 FHIR", "HIPAA Safeguards"]
      }
    },
    {
      title: "Modern POS System",
      description: "A lightning-fast, cloud-synced Point of Sale application designed for multi-branch retail chains. Features real-time analytics, inventory tracking, and offline support.",
      longDescription: "A lightning-fast point-of-sale platform created for multi-branch retail operations. The system features a custom local-first synchronization engine, enabling uninterrupted sales during internet or power blackouts. As soon as connectivity is restored, the terminal syncs inventory levels, tax reports, and sales data seamlessly with the cloud.",
      image: "/images/pos.png",
      category: "Retail & FinTech",
      tags: ["Electron", "React", "Firebase", "Stripe"],
      status: "Active",
      statusIcon: CheckCircle2,
      color: "from-purple-500/20 to-pink-500/5",
      challenges: [
        "Operating offline seamlessly during regional power or ISP failures.",
        "Synchronizing complex inventory counts across multiple branches simultaneously.",
        "Integrating direct card and mobile money hardware readers."
      ],
      features: [
        "Offline-first sync ledger",
        "Multi-branch stock sync",
        "Mobile money terminal integration",
        "Intelligent daily tax reporting"
      ],
      metrics: [
        { value: "< 1s", label: "Offline Sync Link" },
        { value: "99.99%", label: "Operational Uptime" }
      ],
      architecture: {
        desktop: ["Electron", "React"],
        cloud: ["Node.js", "Firebase functions"],
        database: ["SQLite (Local)", "Firestore (Cloud)"],
        payments: ["Stripe Reader SDK", "MTN MoMo API"]
      }
    },
    {
      title: "School Management System",
      description: "An all-in-one educational platform automating student grading, fee collection, attendance tracking, and parent-teacher communication portals.",
      longDescription: "An all-in-one administrative hub designed to streamline educational institutions across Uganda and East Africa. It manages student profiles, grade ledgers, fee collections with local mobile money automated payments, and automatic SMS-driven performance reports directly to parents.",
      image: "/images/school.png",
      category: "EdTech Platform",
      tags: ["Next.js", "Tailwind", "MongoDB", "AWS"],
      status: "Deployed",
      statusIcon: CheckCircle2,
      color: "from-orange-500/20 to-red-500/5",
      challenges: [
        "Automating fee collection matching to prevent accounting discrepancies.",
        "Managing highly structured, complex academic curriculum grading rules.",
        "Distributing mass SMS notifications cost-effectively to parents."
      ],
      features: [
        "Automated report card generator",
        "Mobile Money fee billing API",
        "Parent SMS alert manager",
        "Teacher-student portal"
      ],
      metrics: [
        { value: "65%", label: "Fee Overhead Reduction" },
        { value: "15,000+", label: "Students Managed" }
      ],
      architecture: {
        frontend: ["Next.js", "Tailwind CSS"],
        backend: ["Express.js", "Node.js"],
        database: ["MongoDB", "Mongoose"],
        messaging: ["AWS SES", "AfricasTalking API"]
      }
    },
    {
      title: "Luxury Hotel Booking",
      description: "A premium, conversion-optimized booking website for luxury resorts. Features immersive UI/UX, dynamic pricing algorithms, and seamless payment gateways.",
      longDescription: "A high-conversion hotel booking ecosystem designed for premium resorts. It offers users high-fidelity interactive site previews, customized checkout funnels, dynamic pricing algorithms based on occupancy, and direct integrations with multiple localized card gateways.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      category: "Web Application",
      tags: ["Next.js", "Framer Motion", "Prisma"],
      status: "Active",
      statusIcon: Zap,
      color: "from-amber-500/20 to-yellow-500/5",
      challenges: [
        "Optimizing heavy high-res imagery for responsive mobile screens.",
        "Preventing double-booking issues under high simultaneous checkout request spikes.",
        "Implementing complex dynamic rate adjustments for peak holidays."
      ],
      features: [
        "Dynamic calendar grid",
        "Currency swap converter",
        "Integrated payment gates",
        "Interactive room manager"
      ],
      metrics: [
        { value: "+35%", label: "Direct Conversions" },
        { value: "0%", label: "Double Bookings" }
      ],
      architecture: {
        frontend: ["Next.js", "Framer Motion"],
        backend: ["Serverless API routes"],
        database: ["Prisma", "PostgreSQL"],
        analytics: ["Vercel Analytics", "GA4"]
      }
    },
    {
      title: "Real-time Chess Application",
      description: "A high-performance multiplayer chess engine with Elo rating systems, live spectator modes, and AI-powered move analysis.",
      longDescription: "A state-of-the-art web-based chess client allowing players to compete in real-time matchmaking. Utilizes full-duplex WebSockets to stream chess moves instantly with sub-50ms latency. Integrates Stockfish AI engines for post-match step analysis.",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80",
      category: "Gaming & WebSockets",
      tags: ["React", "Socket.io", "Redis", "Stockfish AI"],
      status: "Deployed",
      statusIcon: CheckCircle2,
      color: "from-slate-500/20 to-gray-500/5",
      challenges: [
        "Achieving sub-50ms connection latency for real-time move validation.",
        "Preventing client-side cheating or board state manipulation.",
        "Spinning up scalable WebSocket servers for active lobbies."
      ],
      features: [
        "Instant WebSocket matchmaker",
        "Stockfish live move evaluator",
        "Spectator lobby rooms",
        "Elo ranking matchmaking"
      ],
      metrics: [
        { value: "30ms", label: "Average Move Latency" },
        { value: "50k+", label: "Matches Completed" }
      ],
      architecture: {
        frontend: ["React", "Chess.js"],
        backend: ["Node.js", "Socket.io"],
        cache: ["Redis (Lobby states)"],
        engines: ["Stockfish Web Worker"]
      }
    },
    {
      title: "Advanced Calculator App",
      description: "A beautifully designed, cross-platform mobile application featuring scientific computing, graphing capabilities, and history tracking.",
      longDescription: "A highly complex mathematical utility app compiled natively for iOS and Android. Built to serve engineers, scientists, and students, the app supports multi-line algebraic formula graphing, currency conversion matrices updated hourly, and offline history databases.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&q=80",
      category: "Mobile Engineering",
      tags: ["React Native", "Expo", "TypeScript"],
      status: "Active",
      statusIcon: Zap,
      color: "from-teal-500/20 to-cyan-500/5",
      challenges: [
        "Designing a custom math formula rendering engine on mobile screens.",
        "Performing intensive math computation loops without draining battery life.",
        "Supporting 100+ offline conversions seamlessly."
      ],
      features: [
        "Scientific graphing UI",
        "Unit & currency converter",
        "History calculation memory",
        "Mathematical parse engine"
      ],
      metrics: [
        { value: "0s", label: "Execution Latency" },
        { value: "4.9/5", label: "App Store Rating" }
      ],
      architecture: {
        platform: ["React Native", "Expo"],
        language: ["TypeScript"],
        parser: ["Math.js Core Engine"],
        database: ["WatermelonDB (Local)"]
      }
    }
  ];

  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-background" id="portfolio">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="text-primary font-headline font-bold uppercase tracking-widest text-sm mb-4 flex items-center justify-center gap-2">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/80"></span>
            <span className="animate-pulse">Our Vault</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/80"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-6">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-gradient">Deployments</span></h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Explore a selection of our most robust systems, applications, and digital platforms engineered for scale and security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
              className="group perspective-[1000px]"
            >
              <div 
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer relative rounded-[2rem] overflow-hidden glass-morphism border border-white/10 hover:border-primary/50 transition-all duration-700 h-full flex flex-col bg-secondary/20 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(var(--primary),0.4)]"
              >
                {/* Glow behind the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                
                {/* Image Section (Mockup Style) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/50 p-6 flex items-end justify-center z-10">
                  <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-50 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  
                  {/* Laptop Mockup Frame */}
                  <div className="relative w-[90%] h-[90%] bg-background rounded-t-xl border-x-4 border-t-4 border-white/10 shadow-2xl overflow-hidden transform group-hover:-translate-y-4 transition-transform duration-700 ease-out z-10 group-hover:shadow-[0_0_40px_rgba(var(--primary),0.5)] border-b-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
                  </div>
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-md text-xs font-semibold border-white/10 shadow-lg">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <Badge variant="outline" className="bg-black/60 backdrop-blur-md border-white/20 text-white flex items-center gap-1">
                      <project.statusIcon className="w-3 h-3 text-green-400" />
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col relative z-20 bg-background/50 backdrop-blur-sm border-t border-white/5">
                  <h3 className="text-2xl font-bold font-headline mb-3 group-hover:text-primary transition-colors text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-sm md:text-base">
                    {project.description}
                  </p>
                  
                  <div className="space-y-6 mt-auto">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-mono text-primary/80 bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-6 border-t border-white/5 flex gap-4">
                      <Button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="flex-1 rounded-xl bg-white/5 hover:bg-primary text-foreground hover:text-white border border-white/10 hover:border-primary/50 transition-all group/btn shadow-[0_0_15px_rgba(var(--primary),0)] hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-xl border-white/10 hover:bg-white/10 hover:text-foreground text-muted-foreground glass-morphism"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 rounded-3xl border-white/10 bg-background text-foreground shadow-2xl glass-morphism">
            {/* Immersive Top Banner */}
            <div className="relative aspect-[16/6] w-full overflow-hidden bg-black/60">
              <div className={`absolute inset-0 bg-gradient-to-b ${selectedProject.color} opacity-80 z-10`}></div>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover object-top opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20"></div>

              {/* ✕ Close Button — always on top */}
              <DialogClose asChild>
                <button
                  aria-label="Close"
                  className="absolute top-4 right-4 z-[50] w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/80 hover:border-white/40 active:scale-90 transition-all duration-200"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </DialogClose>

              {/* Overlay Badges */}
              <div className="absolute bottom-6 left-8 z-30 space-y-2">
                <div className="flex gap-2 items-center">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-md text-xs font-semibold border-white/10">
                    {selectedProject.category}
                  </Badge>
                  <Badge variant="outline" className="bg-black/60 backdrop-blur-md border-white/20 text-white flex items-center gap-1">
                    <selectedProject.statusIcon className="w-3 h-3 text-green-400" />
                    {selectedProject.status}
                  </Badge>
                </div>
                <DialogTitle className="text-3xl font-bold font-headline drop-shadow-md text-foreground">
                  {selectedProject.title}
                </DialogTitle>
              </div>
            </div>

            {/* Immersive Grid Details */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column: Case Study */}
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-3">
                  <h4 className="font-headline font-bold text-lg text-primary">Systems Overview</h4>
                  <DialogDescription className="text-muted-foreground leading-relaxed text-base">
                    {selectedProject.longDescription}
                  </DialogDescription>
                </div>

                <div className="space-y-3">
                  <h4 className="font-headline font-bold text-lg text-primary">Core Challenges Solved</h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {selectedProject.challenges.map((challenge, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-headline font-bold text-lg text-primary">Key Platform Capabilities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2.5 bg-secondary/30 p-3 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Tech Specs & CTA */}
              <div className="space-y-6">
                {/* Impact Metrics */}
                <div className="bg-primary/5 border border-primary/20 p-5 rounded-2xl space-y-4">
                  <h4 className="font-headline font-bold text-sm tracking-wider uppercase text-primary">Performance Impact</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedProject.metrics.map((metric, i) => (
                      <div key={i} className="text-center bg-background/50 border border-white/5 p-3 rounded-xl">
                        <div className="text-xl font-bold font-headline text-foreground">{metric.value}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Breakdown */}
                <div className="space-y-4">
                  <h4 className="font-headline font-bold text-sm tracking-wider uppercase text-muted-foreground">Architectural Stack</h4>
                  <div className="space-y-3">
                    {Object.entries(selectedProject.architecture).map(([layer, techs]) => (
                      <div key={layer} className="text-xs">
                        <span className="font-bold uppercase text-primary/80 tracking-wider block mb-1">{layer}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {(techs as string[]).map((tech) => (
                            <span key={tech} className="bg-secondary/50 text-foreground px-2 py-0.5 rounded border border-white/5 font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* demo CTA */}
                <div className="pt-4">
                  <Button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-headline flex items-center justify-center gap-2 group/cta shadow-[0_0_20px_rgba(var(--primary),0.3)]" asChild>
                    <a href="/contact">
                      Request Live System Demo
                      <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
