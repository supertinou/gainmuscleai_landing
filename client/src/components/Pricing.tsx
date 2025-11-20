import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="pricing" className="py-32 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-border pb-8">
        <div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none">
            Access<br/>Levels
          </h2>
        </div>
        <p className="text-muted-foreground font-mono text-sm max-w-xs mt-8 md:mt-0 text-right">
          // SELECT YOUR CONFIGURATION<br/>
          // UPGRADE ANYTIME
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Plan 1 */}
        <div className="border border-border p-8 hover:border-primary/50 transition-colors relative group bg-card">
          <div className="mb-8">
            <h3 className="font-mono text-sm text-muted-foreground mb-2 uppercase tracking-widest">Single_Instance</h3>
            <div className="text-5xl font-heading font-bold">$9<span className="text-lg text-muted-foreground font-normal">/scan</span></div>
          </div>
          
          <ul className="space-y-4 mb-12 font-mono text-sm text-gray-400">
            <li className="flex items-center gap-3"><span className="text-primary">●</span> 3 Variations</li>
            <li className="flex items-center gap-3"><span className="text-primary">●</span> HD Render (1080p)</li>
            <li className="flex items-center gap-3"><span className="text-primary">●</span> Standard Processing</li>
          </ul>

          <Button variant="outline" className="w-full rounded-none border-white/20 hover:bg-white hover:text-black font-heading uppercase tracking-wider">
            Execute
          </Button>
        </div>

        {/* Plan 2 - Featured */}
        <div className="border-2 border-primary p-8 relative bg-zinc-900 transform md:-translate-y-4">
          <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold font-mono px-3 py-1 uppercase">
            Recommended
          </div>
          
          <div className="mb-8">
            <h3 className="font-mono text-sm text-primary mb-2 uppercase tracking-widest">Pro_Subscription</h3>
            <div className="text-5xl font-heading font-bold text-white">$19<span className="text-lg text-gray-500 font-normal">/mo</span></div>
          </div>
          
          <ul className="space-y-4 mb-12 font-mono text-sm text-gray-300">
            <li className="flex items-center gap-3"><span className="text-primary">■</span> Unlimited Scans</li>
            <li className="flex items-center gap-3"><span className="text-primary">■</span> 4K Ultra-HD Renders</li>
            <li className="flex items-center gap-3"><span className="text-primary">■</span> All Body Archetypes</li>
            <li className="flex items-center gap-3"><span className="text-primary">■</span> Priority Queue</li>
          </ul>

          <Button className="w-full rounded-none bg-primary text-black hover:bg-white hover:text-black font-heading uppercase tracking-wider font-bold h-12">
            Activate Pro
          </Button>
        </div>

        {/* Plan 3 */}
        <div className="border border-border p-8 hover:border-primary/50 transition-colors relative bg-card">
           <div className="mb-8">
            <h3 className="font-mono text-sm text-muted-foreground mb-2 uppercase tracking-widest">Trainer_Node</h3>
            <div className="text-5xl font-heading font-bold">$49<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
          </div>
          
          <ul className="space-y-4 mb-12 font-mono text-sm text-gray-400">
            <li className="flex items-center gap-3"><span className="text-primary">▲</span> 20 Client Profiles</li>
            <li className="flex items-center gap-3"><span className="text-primary">▲</span> White-label Reports</li>
            <li className="flex items-center gap-3"><span className="text-primary">▲</span> Admin Dashboard</li>
          </ul>

          <Button variant="outline" className="w-full rounded-none border-white/20 hover:bg-white hover:text-black font-heading uppercase tracking-wider">
            Start Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
