import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import beforeImage from "@assets/generated_images/average_male_body_for_before_comparison.png";
import afterImage from "@assets/generated_images/muscular_male_body_for_after_comparison.png";

export function EvolutionDemo() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    
    const relativeX = clientX - containerRect.left;
    const percentage = Math.min(Math.max((relativeX / containerRect.width) * 100, 0), 100);
    
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] overflow-hidden select-none group bg-zinc-900 grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
      {/* Scanlines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
      
      {/* Background (After Image) */}
      <img 
        src={afterImage} 
        alt="Muscular Physique" 
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      
      <div className="absolute top-4 right-4 bg-black text-primary border border-primary text-[10px] font-mono font-bold px-2 py-1 z-20">
        TARGET_STATE::T+12W
      </div>

      {/* Foreground (Before Image) - Clip Path */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Starting Physique" 
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute top-4 left-4 bg-black text-white border border-white/20 text-[10px] font-mono font-bold px-2 py-1">
          CURRENT_STATE::NOW
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-primary z-30 cursor-ew-resize flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        ref={containerRef}
      >
        <div className="w-10 h-10 bg-black border border-primary flex items-center justify-center text-primary -ml-[19px] hover:bg-primary hover:text-black transition-colors">
          <MoveHorizontal size={20} />
        </div>
      </div>
    </div>
  );
}
