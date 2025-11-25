import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Dumbbell, ChevronRight } from "lucide-react";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-white/10 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-1 group cursor-pointer">
            <Dumbbell className="h-8 w-8 text-primary -rotate-12" />
            <span className="font-heading font-black text-3xl italic tracking-tighter text-white group-hover:text-primary transition-colors">
              GAINMUSCLE<span className="text-primary">AI</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Upload", "Pricing"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-white font-bold uppercase tracking-wider hover:text-primary hover:bg-transparent" asChild>
            <a href="/users/sign_in">Sign In</a>
          </Button>
          <Button className="font-heading font-black text-xl italic uppercase bg-primary text-black hover:bg-white hover:text-black transition-all skew-x-[-10deg] px-8 h-12" asChild>
            <a href="/users/sign_up"><span className="skew-x-[10deg]">Get Started</span></a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 h-screen">
          {["Upload", "Pricing"].map((item) => (
            <a href={`#${item.toLowerCase()}`} className="text-2xl font-heading italic font-bold text-white uppercase py-2" onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <Button className="w-full font-heading font-black uppercase text-xl bg-primary text-black mt-4 h-14" asChild>
            <a href="/users/sign_up">Get Started</a>
          </Button>
          <Button variant="ghost" className="w-full font-heading font-bold uppercase text-lg text-white" asChild>
            <a href="/users/sign_in">Sign In</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
