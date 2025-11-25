import { motion } from "framer-motion";
import { Play, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EvolutionDemo } from "./EvolutionDemo";
import heroBg from "@assets/generated_images/dynamic_gym_motion_blur_background.png";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur rounded-full border border-white/10">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-bold uppercase tracking-wider text-white">AI Performance Visualization</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-heading font-black italic leading-[0.85] tracking-tighter text-white drop-shadow-2xl">
            SEE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
              FUTURE BODY
            </span>
            <br />
            <span className="text-stroke text-white/10">INSTANTLY</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-xl font-medium leading-relaxed border-l-4 border-primary pl-6">
            Stop guessing. Start visualizing. See exactly how your workouts, cardio, and diet will sculpt your future body in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Button size="lg" className="h-16 px-10 text-2xl font-heading font-black italic uppercase bg-primary text-black hover:bg-white hover:text-black transition-all skew-x-[-10deg]" asChild>
              <a href="/users/sign_up">
                <span className="skew-x-[10deg] flex items-center gap-2">
                  Upload Photo <Zap className="fill-black" />
                </span>
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-8 opacity-60">
            {["Instant Result", "AI Powered", "Private"].map(brand => (
              <span key={brand} className="text-lg font-heading italic font-black uppercase text-white">{brand}</span>
            ))}
          </div>
        </motion.div>

        {/* Visual Demo */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative w-full max-w-md mx-auto aspect-[3/4] hidden lg:block"
        >
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10"></div>
          <EvolutionDemo />
        </motion.div>
      </div>
    </section>
  );
}
