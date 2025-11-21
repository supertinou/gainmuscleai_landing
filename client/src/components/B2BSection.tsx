import { motion } from "framer-motion";
import { Trophy, Users } from "lucide-react";
import { EnterpriseForm } from "./EnterpriseForm";

export function B2BSection() {
  return (
    <section id="b2b" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-zinc-900 skew-y-3 transform origin-bottom-left pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block bg-primary text-black font-bold px-3 py-1 uppercase transform -skew-x-12 mb-6">
              <span className="block skew-x-12">For Professionals</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-black italic uppercase mb-6 leading-none">
              Dominating <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">The Industry</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium border-l-2 border-primary/50 pl-6">
              Gyms, Coaches, and Supplement Brands use GainMuscleAI to visualize the finish line for their customers. It's the ultimate closing tool.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { title: "Increase Conversion", val: "+340%" },
                { title: "Client Retention", val: "+85%" },
                { title: "Upsell Volume", val: "2.5x" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between bg-zinc-900/50 p-4 border border-zinc-800 rounded-r-xl">
                  <span className="text-xl font-heading italic font-bold uppercase text-gray-300">{stat.title}</span>
                  <span className="text-3xl font-heading italic font-black text-primary">{stat.val}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-6 mt-12">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 border border-zinc-800 p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Trophy size={120} />
                </div>
                <h3 className="text-3xl font-heading font-black italic uppercase text-white mb-2 relative z-10">Gym Chains</h3>
                <p className="text-gray-400 relative z-10">Install "Future You" kiosks in your lobby. Let walk-ins visualize their potential before they even sign the contract.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 border border-zinc-800 p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Users size={120} />
                </div>
                <h3 className="text-3xl font-heading font-black italic uppercase text-white mb-2 relative z-10">Online Coaches</h3>
                <p className="text-gray-400 relative z-10">"I can get you there." Don't just say it, show it. Send personalized transformation previews in your cold DMs.</p>
              </motion.div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <EnterpriseForm />
          </div>
        </div>
      </div>
    </section>
  );
}
