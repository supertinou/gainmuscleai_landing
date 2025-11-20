import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, Users, BarChart3, Check, ArrowRight } from "lucide-react";

export function B2BSection() {
  return (
    <section id="enterprise" className="py-32 bg-black text-white relative overflow-hidden border-y border-border">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-24">
            <div className="flex items-center gap-2 mb-8">
               <div className="h-px w-12 bg-primary"></div>
               <span className="font-mono text-primary text-xs tracking-widest uppercase">Enterprise Solutions</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-[0.85] uppercase">
              Conversion <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Velocity</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 font-light max-w-md font-mono">
              Integrate our visualization engine directly into your sales pipeline. 
              <br/><br/>
              <span className="text-white">{">"} Gyms report 340% ROI within 30 days.</span>
            </p>

            <Button size="lg" className="bg-white text-black hover:bg-primary hover:text-black font-heading font-bold h-16 px-10 rounded-none text-lg group">
              DEPLOY SOLUTION <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid gap-8">
            {[
              {
                icon: Building2,
                title: "Franchise Integration",
                desc: "Deploy kiosks in lobby environments. Leads scan QR -> Upload -> Visualize -> Sign Up.",
                stat: "45s Avg. Session"
              },
              {
                icon: Users,
                title: "Coach Dashboard",
                desc: "Generate 'What If' scenarios for cold outreach. Show clients their future.",
                stat: "+28% Reply Rate"
              },
              {
                icon: BarChart3,
                title: "Retention Protocol",
                desc: "Visual roadmap generation for existing members to reduce churn.",
                stat: "-15% Churn"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="bg-zinc-900/50 border-l-4 border-zinc-800 hover:border-primary p-8 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                  <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-1">{item.stat}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2 uppercase">{item.title}</h3>
                <p className="text-gray-500 font-mono text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
