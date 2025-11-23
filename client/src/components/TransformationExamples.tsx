import stage1 from "@assets/generated_images/stage_1:_overweight_man_(uploaded_photo).png";
import stage2 from "@assets/generated_images/stage_2:_weight_loss_progress.png";
import stage3 from "@assets/generated_images/stage_3:_athletic_physique.png";
import stage4 from "@assets/generated_images/stage_4:_muscular_physique.png";
import stage5 from "@assets/generated_images/stage_5:_peak_bodybuilder_physique.png";
import { motion } from "framer-motion";

function StageCard({ image, label, index }: { image: string, label: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 relative shadow-2xl">
        <img 
          src={image} 
          alt={label} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
        
        {/* Label */}
        <div className="absolute bottom-4 left-2 right-2 md:left-4 md:right-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-1">
            <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary text-black font-heading font-black flex items-center justify-center text-xs md:text-sm border-2 border-black shrink-0">
              {index + 1}
            </span>
            <span className="text-white font-heading font-bold uppercase tracking-wider text-xs md:text-sm shadow-black drop-shadow-md leading-tight">
              {label}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TransformationExamples() {
  const stages = [
    { image: stage1, label: "Uploaded Photo" },
    { image: stage2, label: "Weight Loss" },
    { image: stage3, label: "Athletic" },
    { image: stage4, label: "Muscular" }
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-black italic uppercase mb-6 text-white">
            THE <span className="text-primary">JOURNEY</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium">
            From where you are, to where you want to be.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-[1400px] mx-auto">
          {stages.map((stage, index) => (
            <StageCard 
              key={index}
              image={stage.image}
              label={stage.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
