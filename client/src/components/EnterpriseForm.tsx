import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Building2, CheckCircle2 } from "lucide-react";

export function EnterpriseForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "demo",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const submitLead = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("/api/enterprise-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      return response.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      toast({
        title: "Request Received!",
        description: "Our team will contact you within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead.mutate(formData);
  };

  if (submitted) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 p-12 text-center">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="text-3xl font-heading font-black italic uppercase text-white mb-4">
          REQUEST RECEIVED!
        </h3>
        <p className="text-gray-400 text-lg">
          Our enterprise team will reach out within 24 hours to discuss your needs.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-8">
      <div className="flex items-center gap-3 mb-8">
        <Building2 className="w-8 h-8 text-primary" />
        <h3 className="text-3xl font-heading font-black italic uppercase text-white">
          Enterprise Inquiry
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-heading uppercase font-bold text-white mb-2">
            Full Name *
          </label>
          <Input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-zinc-950 border-zinc-800 text-white h-12"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label className="block text-sm font-heading uppercase font-bold text-white mb-2">
            Work Email *
          </label>
          <Input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-zinc-950 border-zinc-800 text-white h-12"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-heading uppercase font-bold text-white mb-2">
            Company
          </label>
          <Input
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="bg-zinc-950 border-zinc-800 text-white h-12"
            placeholder="Acme Fitness Inc."
          />
        </div>

        <div>
          <label className="block text-sm font-heading uppercase font-bold text-white mb-2">
            I'm Interested In
          </label>
          <select
            value={formData.inquiryType}
            onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
            className="w-full bg-zinc-950 border border-zinc-800 text-white h-12 px-4 font-heading font-bold italic uppercase"
          >
            <option value="demo">Request Demo</option>
            <option value="coach_access">Coach Access</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-heading uppercase font-bold text-white mb-2">
            Message
          </label>
          <Textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-zinc-950 border-zinc-800 text-white min-h-32"
            placeholder="Tell us about your needs..."
          />
        </div>

        <Button
          type="submit"
          disabled={submitLead.isPending}
          className="w-full h-14 text-xl font-heading font-black italic uppercase bg-primary text-black hover:bg-white skew-x-[-10deg]"
        >
          <span className="skew-x-[10deg]">
            {submitLead.isPending ? "SENDING..." : "SUBMIT REQUEST"}
          </span>
        </Button>
      </div>
    </form>
  );
}
