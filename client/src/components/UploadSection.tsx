import { Upload, Image as ImageIcon, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function UploadSection() {
  return (
    <section id="upload" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-black italic uppercase mb-6 text-white">
            SEE THE <span className="text-primary">FUTURE YOU</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium">
            Upload a photo. Our AI projects your fitness results instantly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-zinc-900/50 border-2 border-dashed border-zinc-700 rounded-3xl p-12 text-center hover:border-primary/50 transition-all cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center gap-6">
              <div className="w-24 h-24 rounded-full bg-zinc-800 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                <Upload className="w-10 h-10 text-gray-400 group-hover:text-primary transition-colors" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-heading font-bold text-white">Drop your photo here</h3>
                <p className="text-gray-500">or click to browse files</p>
              </div>

              <div className="flex items-center gap-8 mt-4 text-sm text-gray-500 font-medium">
                <span className="flex items-center gap-2"><ImageIcon size={16} /> JPG, PNG, WEBP</span>
                <span className="flex items-center gap-2"><Sparkles size={16} /> AI Enhanced</span>
              </div>

              <Button className="mt-6 bg-primary text-black hover:bg-white font-heading font-black italic uppercase px-8 h-12 text-lg skew-x-[-10deg]" asChild>
                <a href="/users/sign_up"><span className="skew-x-[10deg]">Upload Now</span></a>
              </Button>
            </div>
          </motion.div>

          <div className="mt-8 text-center space-y-2">
            <p className="text-gray-400 font-medium">
              Next step: Select a flexible Monthly or Yearly plan.
            </p>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              100% Private & Secure. Photos are deleted after processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
