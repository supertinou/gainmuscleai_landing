import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent mix-blend-difference text-white",
        isScrolled
          ? "bg-background/95 border-border py-3 backdrop-blur-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary text-black p-1 rounded-none group-hover:bg-white transition-colors">
              <Zap className="h-6 w-6 fill-current" />
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight uppercase">
              GAINMUSCLE<span className="text-primary">.AI</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {["Features", "System", "Pricing", "Enterprise"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="px-4 py-2 text-sm font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors border border-transparent hover:border-white"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="font-mono uppercase text-xs tracking-widest hover:bg-white hover:text-black rounded-none">
            [ Login ]
          </Button>
          <Button className="font-heading font-bold uppercase tracking-wide bg-primary text-black hover:bg-white hover:text-black rounded-none border border-primary hover:border-white transition-all">
            Initialize <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white border border-white/20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-0 flex flex-col animate-in slide-in-from-top-5">
          {["Features", "System", "Pricing", "Enterprise"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-xl font-heading uppercase font-bold p-6 border-b border-border hover:bg-primary hover:text-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="w-full font-heading uppercase rounded-none h-16 text-lg bg-white text-black hover:bg-primary">Initialize System</Button>
        </div>
      )}
    </nav>
  );
}
