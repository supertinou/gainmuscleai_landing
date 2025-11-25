import { Facebook, Instagram, Twitter, Dumbbell } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-800">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
        <div className="space-y-4">
           <div className="flex items-center gap-2 text-white">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="font-heading font-bold text-2xl tracking-tighter">
              GAINMUSCLE<span className="text-primary">AI</span>
            </span>
          </div>
          <p className="text-sm">
            The world's most advanced AI body composition visualization engine. Visualize your potential, achieve your goals.
          </p>
        </div>

        <div>
          <h4 className="text-white font-heading font-bold text-lg mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Transformations</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading font-bold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-heading font-bold text-lg mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Data Protection</a></li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-zinc-900 text-center text-xs">
        © 2024 GainMuscleAI Inc. All rights reserved.
      </div>
    </footer>
  );
}
