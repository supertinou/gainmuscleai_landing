import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Crosshair } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EvolutionDemo } from "./EvolutionDemo";
import heroBg from "@assets/generated_images/raw_concrete_tech_texture.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-background text-foreground">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover grayscale contrast-125" 
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Glitch Overlay Elements */}
      <div className="absolute top-20 right-10 font-mono text-xs text-primary/50 pointer-events-none hidden lg:block">
        SYSTEM.READY<br/>
        v2.0.45-BETA<br/>
        MEM: 64GB OK
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-12 gap-8 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="border-l-2 border-primary pl-4 py-1">
            <h1 className="text-6xl md:text-8xl font-heading font-bold leading-[0.85] tracking-tighter uppercase">
              Biometrics <br />
              <span className="text-outline-primary">Evolved</span>
            </h1>
          </div>
          
          <div className="font-mono text-sm text-primary tracking-widest uppercase mb-4 border border-primary/20 inline-block px-2 py-1 bg-primary/5">
            /// AI-Powered Morphological Projection
          </div>
          
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-md">
            Upload physiological data via imagery. <span className="text-white font-medium">Our neural engine renders your genetic potential</span> in real-time. No filters. Pure data visualization.
          </p>

          <div className="flex flex-col gap-4 pt-4">
            <Button size="lg" className="h-16 px-8 text-lg font-heading uppercase font-bold bg-primary text-black hover:bg-white hover:text-black rounded-none border border-transparent hover:border-black transition-all">
              <Terminal className="mr-2 h-5 w-5" />
              Execute Simulation
            </Button>
            <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              <span className="flex items-center gap-2"><Cpu size={14}/> Neural Net V4</span>
              <span className="flex items-center gap-2"><Crosshair size={14}/> 99.8% Accuracy</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Demo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 relative"
        >
          <div className="relative border border-white/10 bg-black/50 backdrop-blur-sm p-2">
            {/* HUD Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary z-20"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary z-20"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary z-20"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary z-20"></div>
            
            <EvolutionDemo />
            
            {/* Data Overlay */}
            <div className="absolute top-8 right-8 bg-black/80 border border-primary/30 p-4 font-mono text-xs text-primary hidden md:block">
              <div className="flex justify-between gap-8 mb-1">
                <span>MUSCLE_MASS</span>
                <span>+14.2%</span>
              </div>
              <div className="flex justify-between gap-8 mb-1">
                <span>ADIPOSE_TISSUE</span>
                <span>-8.4%</span>
              </div>
              <div className="w-full h-1 bg-gray-800 mt-2">
                <div className="h-full bg-primary w-[84%] animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
