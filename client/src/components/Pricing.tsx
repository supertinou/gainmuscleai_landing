import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 container mx-auto px-4 bg-zinc-950 border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl md:text-7xl font-heading font-black italic uppercase mb-6 text-white">
          CHOOSE YOUR <span className="text-primary">PLAN</span>
        </h2>
        <p className="text-gray-400 text-xl font-medium">
          Flexible options. Same great features.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Monthly Plan */}
        <div className="bg-zinc-900 border border-zinc-800 p-8 flex flex-col relative hover:border-primary/50 transition-all rounded-2xl group">
          <div className="mb-8 mt-4">
            <h3 className="font-heading font-black italic uppercase text-3xl text-white mb-2">Monthly</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-heading font-black text-white">$7.99</span>
              <span className="text-xl font-sans font-bold text-gray-500">/mo</span>
            </div>
            <p className="text-gray-400 font-medium mt-2">Billed monthly</p>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              "20 Transformations / month",
              "High Definition Results",
              "Instant Processing",
              "Private & Secure",
              "Cancel Anytime"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300 font-bold text-lg">
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <Check size={14} strokeWidth={3}/>
                </div>
                {item}
              </li>
            ))}
          </ul>

          <Button className="w-full mt-auto bg-zinc-800 text-white hover:bg-white hover:text-black font-heading font-black italic uppercase h-16 text-xl skew-x-[-10deg]">
             <span className="skew-x-[10deg]">Subscribe Monthly</span>
          </Button>
        </div>

        {/* Yearly Plan */}
        <div className="bg-zinc-900 border-2 border-primary p-8 flex flex-col relative shadow-[0_0_50px_-10px_rgba(250,204,21,0.2)] rounded-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black font-heading font-black italic uppercase px-6 py-2 skew-x-[-10deg] shadow-lg w-max">
            <span className="block skew-x-[10deg]">Best Value • Save 58%</span>
          </div>
          
          <div className="mb-8 mt-4">
            <h3 className="font-heading font-black italic uppercase text-3xl text-primary mb-2">Annual</h3>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-heading font-black text-white">$39.99</span>
              <span className="text-xl font-sans font-bold text-gray-500">/yr</span>
            </div>
            <p className="text-gray-400 font-medium mt-2">Billed annually</p>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              "20 Transformations / month",
              "High Definition Results",
              "Instant Processing",
              "Private & Secure",
              "Priority Support"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white font-bold text-lg">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black">
                  <Check size={14} strokeWidth={4}/>
                </div>
                {item}
              </li>
            ))}
          </ul>

          <Button className="w-full mt-auto bg-primary text-black hover:bg-white font-heading font-black italic uppercase h-16 text-xl skew-x-[-10deg] shadow-lg shadow-primary/20">
             <span className="skew-x-[10deg]">Subscribe Yearly</span>
          </Button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-12 text-center">
        <p className="text-center text-xs text-gray-500 font-medium mb-2">
          Secure payment processing. 30-day money-back guarantee on annual plans.
        </p>
      </div>
    </section>
  );
}
