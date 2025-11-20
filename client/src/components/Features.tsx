import { motion } from "framer-motion";
import { Scan, Database, Activity, Lock, Zap, Smartphone } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Lidar Mapping",
    description: "Algorithm maps 400+ insertion points to your skeletal structure."
  },
  {
    icon: Activity,
    title: "Phase Sequence",
    description: "Generate T+4, T+8, and T+12 week progression models."
  },
  {
    icon: Database,
    title: "Archetype Select",
    description: "Target parameters: Hypertrophy, Strength, or Endurance builds."
  },
  {
    icon: Lock,
    title: "Ephemeral Data",
    description: "Zero-retention policy. Source imagery deleted post-processing."
  },
  {
    icon: Zap,
    title: "Latency < 15s",
    description: "High-velocity rendering pipeline for instant visualization."
  },
  {
    icon: Smartphone,
    title: "Mobile Terminal",
    description: "Full functionality via browser interface. No binary download."
  }
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
             <h2 className="text-5xl font-heading font-bold mb-4 uppercase leading-none">
              Core<br/>
              System<br/>
              <span className="text-primary">Specs</span>
            </h2>
          </div>
          <div className="md:col-span-8 border-l border-border pl-8 flex items-end">
            <p className="text-muted-foreground font-mono text-sm max-w-xl">
              {">"} INITIATING FEATURE OVERVIEW sequence...<br/>
              {">"} LOADING MODULES...<br/>
              {">"} GainMuscleAI utilizes proprietary computer vision to analyze anatomical potential. It is not a filter. It is a prediction engine.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-background p-10 hover:bg-secondary/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 font-mono text-xs text-muted-foreground opacity-30 group-hover:opacity-100">
                0{index + 1}
              </div>
              
              <div className="w-12 h-12 border border-primary/30 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-all rounded-none">
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-heading font-bold mb-3 uppercase tracking-wide">{feature.title}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed font-mono">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
