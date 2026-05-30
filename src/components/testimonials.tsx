"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function Testimonials() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const testimonials = [
    {
      name: "Samuel Kato",
      role: "Head Teacher, Bright Future Secondary School",
      content: "Aban Technologies transformed the way we manage student records, fees, and academic reports. The system is fast, reliable, and easy for both teachers and administrators to use. It has significantly improved our daily operations.",
      rating: 5,
    },
    {
      name: "Dr. Grace Namutebi",
      role: "Medical Director, LifeCare Medical Centre",
      content: "We needed a secure and efficient healthcare platform. Aban Technologies delivered a complete hospital management system that streamlined patient records, appointments, and reporting. Their attention to detail was outstanding.",
      rating: 5,
    },
    {
      name: "Brian Mugisha",
      role: "Operations Manager, Prime Retail Stores",
      content: "The POS solution developed by Aban Technologies has improved our sales tracking and inventory management. The system is stable, modern, and exactly what our growing business needed.",
      rating: 5,
    },
    {
      name: "Patricia Nankya",
      role: "Executive Director, Inspire Uganda Foundation",
      content: "Our organization needed a professional online presence. Aban Technologies designed our website and branding package beautifully. The final product exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Ronald Tumusiime",
      role: "Managing Director, Nexus Logistics Uganda",
      content: "From planning to deployment, the team demonstrated professionalism and technical expertise. They built a custom platform that automated many of our manual processes.",
      rating: 5,
    },
    {
      name: "Joseph Ssemanda",
      role: "CEO, Vertex Business Solutions",
      content: "Aban Technologies understands business needs. Their ecosystem approach helped us integrate our website, internal systems, and customer management tools into one seamless platform.",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Client Success</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">What Industry Leaders Say</h2>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full glass-morphism border-white/5 hover:border-primary/20 transition-all duration-300 relative overflow-hidden group">
                    <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                    <CardContent className="p-5 sm:p-8 flex flex-col h-full">
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-lg italic leading-relaxed mb-6 sm:mb-8 flex-1">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 rounded-full bg-secondary border border-white/10 flex items-center justify-center font-bold text-lg text-foreground">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold font-headline text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-primary">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="position-static transform-none bg-secondary/50 border-border hover:bg-primary hover:text-white" />
            <CarouselNext className="position-static transform-none bg-secondary/50 border-border hover:bg-primary hover:text-white" />
          </div>
        </Carousel>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xs text-muted-foreground/60 italic">
            * Client testimonials shown are representative examples of the solutions we provide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
