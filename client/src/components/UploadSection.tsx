import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Zap, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export function UploadSection() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [bodyType, setBodyType] = useState("lean");
  const [sessionId, setSessionId] = useState("");
  const { toast } = useToast();

  const createGeneration = useMutation({
    mutationFn: async (data: { file: File; bodyType: string; sessionId: string }) => {
      const formData = new FormData();
      formData.append("image", data.file);
      formData.append("bodyType", data.bodyType);
      formData.append("renderQuality", "hd");
      formData.append("sessionId", data.sessionId);

      const response = await fetch("/api/generations", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create generation");
      }

      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Processing Started!",
        description: `Generation ID: ${data.id}. Your transformation is being processed...`,
      });
      setFile(null);
      setPreview("");
    },
    onError: () => {
      toast({
        title: "Upload Failed",
        description: "There was an error processing your image. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (!file) return;
    
    let currentSessionId = sessionId;
    if (!currentSessionId) {
      const sessionResponse = await fetch("/api/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const sessionData = await sessionResponse.json();
      currentSessionId = sessionData.sessionId;
      setSessionId(currentSessionId);
    }

    createGeneration.mutate({ file, bodyType, sessionId: currentSessionId });
  };

  return (
    <section id="upload" className="py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-8xl font-heading font-black italic uppercase mb-6 text-white">
              TRY IT <span className="text-primary">NOW</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium">
              Upload your photo and see the AI magic happen in seconds
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-heading uppercase font-bold text-white mb-4">
                  Upload Your Photo
                </label>
                <div 
                  className={`relative border-2 border-dashed ${preview ? 'border-primary' : 'border-zinc-700'} rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors group`}
                  onClick={() => document.getElementById('file-input')?.click()}
                >
                  {preview ? (
                    <img src={preview} alt="Preview" className="w-full h-64 object-cover rounded-lg" />
                  ) : (
                    <div className="flex flex-col items-center gap-4">
                      <Upload className="w-12 h-12 text-zinc-600 group-hover:text-primary transition-colors" />
                      <p className="text-zinc-500 group-hover:text-zinc-400">Click to upload or drag & drop</p>
                    </div>
                  )}
                  <input 
                    id="file-input"
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-heading uppercase font-bold text-white mb-4">
                  Select Goal Physique
                </label>
                <div className="space-y-3">
                  {[
                    { value: "lean", label: "Lean & Shredded" },
                    { value: "mass", label: "Mass Monster" },
                    { value: "athletic", label: "Athletic Function" },
                    { value: "powerlifter", label: "Powerlifter Build" }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setBodyType(option.value)}
                      className={`w-full p-4 text-left font-heading font-bold italic uppercase border transition-all ${
                        bodyType === option.value 
                          ? 'bg-primary text-black border-primary' 
                          : 'bg-zinc-950 text-white border-zinc-800 hover:border-primary/50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button 
              onClick={handleSubmit}
              disabled={!file || createGeneration.isPending}
              className="w-full h-16 text-2xl font-heading font-black italic uppercase bg-primary text-black hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed skew-x-[-10deg]"
            >
              <span className="skew-x-[10deg] flex items-center justify-center gap-2">
                {createGeneration.isPending ? "PROCESSING..." : "GENERATE EVOLUTION"}
                {!createGeneration.isPending && <Zap className="fill-black" />}
              </span>
            </Button>

            {file && (
              <div className="mt-6 flex items-start gap-2 p-4 bg-zinc-800/50 border border-zinc-700 rounded">
                <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">
                  <strong className="text-white">Privacy Note:</strong> Your photo is processed instantly and deleted from our servers immediately after generation. We never store your images.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
