import { motion } from "motion/react";
import { Mail, Send, CheckCircle, Instagram } from "lucide-react";
import { useState } from "react";
import { GridOverlay, HudPanel, GlassBanner } from "../components/CyberElements";
import { SubmitModal } from "../components/SubmitModal";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", interestedAs: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (!formData.interestedAs) newErrors.interestedAs = true;
    if (!formData.message) newErrors.message = true;
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    
    setIsSubmitting(true);
    setShowSuccess(false);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxvXIWg2yJnTOQ19VGqU0iG-oXaGAoLHE3f5xz2486t2y0FcOyOoaSmt029eI6LhNlFMg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", company: "", interestedAs: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("Submission failed:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: false });
  };

  const interestedOptions = ["Investor","Brand sponsor","Client","Exhibitor/vendor","Media partner","Artist/performer","Fan/attendee","Other"];

  const inputClass = (field: string) =>
    `w-full px-4 sm:px-5 py-3 sm:py-4 bg-[rgba(8,6,15,0.7)] backdrop-blur-[8px] border ${errors[field] ? "border-red-500/50" : "border-[rgba(255,45,155,0.15)]"} rounded-[4px] text-[#d4c0f0] placeholder-[#4a3d66] focus:outline-none focus:border-[rgba(255,45,155,0.5)] focus:shadow-[0_0_15px_rgba(255,45,155,0.12),inset_0_1px_0_rgba(255,45,155,0.05)] transition-all duration-200 text-[clamp(0.8rem,1.2vw,1rem)] font-mono`;

  return (
    <div className="bg-[#08060f] text-[#d4c0f0] min-h-screen">
      <SubmitModal
        isSubmitting={isSubmitting}
        isSuccess={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
      {/* Hero */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e]/30 via-[#08060f]/80 to-[#08060f]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,45,155,0.06),transparent_60%)]" />
        </div>
        <GridOverlay />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-center py-16 sm:py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-4 sm:mb-8">
            <Mail className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 text-[#00e5ff]" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="text-[clamp(2.5rem,7vw,6rem)] font-black tracking-tighter mb-4 sm:mb-8 font-['Orbitron',sans-serif]">
            <span className="bg-gradient-to-r from-[#ff2d9b] to-[#00e5ff] bg-clip-text text-transparent">GET IN TOUCH</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }}
            className="text-[clamp(0.9rem,2vw,1.5rem)] text-[#6b5a8a] max-w-3xl mx-auto">
            We'd love to hear from you. Let's create something legendary.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative">
        <GridOverlay />
        <div className="max-w-4xl mx-auto relative">
          {showSuccess && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
              <GlassBanner variant="cyan" className="p-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#00e5ff] shrink-0" />
                  <div>
                    <h3 className="font-bold text-[#00e5ff] text-[clamp(0.85rem,1.2vw,1rem)]">Message Sent Successfully!</h3>
                    <p className="text-[#6b5a8a] text-[clamp(0.75rem,1vw,0.875rem)]">We'll get back to you within 48 hours.</p>
                  </div>
                </div>
              </GlassBanner>
            </motion.div>
          )}

          <motion.div {...fadeInUp}>
            <HudPanel className="p-5 sm:p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {[
                  { id: "contact-name", name: "name", label: "Name", type: "text", placeholder: "Your name", required: true },
                  { id: "contact-email", name: "email", label: "Email", type: "email", placeholder: "your.email@example.com", required: true },
                  { id: "contact-phone", name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true },
                  { id: "contact-company", name: "company", label: "Company Name", type: "text", placeholder: "Your company (if applicable)", required: false },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-[clamp(0.7rem,1vw,0.875rem)] uppercase tracking-[0.2em] text-[#00e5ff] mb-2 font-['Orbitron',sans-serif]">
                      {field.label} {field.required ? <span className="text-[#ff2d9b]">*</span> : <span className="text-[#4a3d66] text-xs">(Optional)</span>}
                    </label>
                    <motion.input whileFocus={{ boxShadow: "0 0 20px rgba(255,45,155,0.15)" }}
                      type={field.type} id={field.id} name={field.name} value={(formData as any)[field.name]} onChange={handleChange}
                      className={field.required ? inputClass(field.name) : `w-full px-4 sm:px-5 py-3 sm:py-4 bg-[rgba(8,6,15,0.7)] backdrop-blur-[8px] border border-[rgba(255,45,155,0.15)] rounded-[4px] text-[#d4c0f0] placeholder-[#4a3d66] focus:outline-none focus:border-[rgba(255,45,155,0.5)] focus:shadow-[0_0_15px_rgba(255,45,155,0.12)] transition-all duration-200 text-[clamp(0.8rem,1.2vw,1rem)] font-mono`}
                      placeholder={field.placeholder} />
                    {field.required && errors[field.name] && <p className="text-red-400 text-[clamp(0.7rem,1vw,0.8rem)] mt-1">{field.label} is required</p>}
                  </div>
                ))}

                <div>
                  <label htmlFor="contact-interestedAs" className="block text-[clamp(0.7rem,1vw,0.875rem)] uppercase tracking-[0.2em] text-[#00e5ff] mb-2 font-['Orbitron',sans-serif]">
                    I am interested as <span className="text-[#ff2d9b]">*</span>
                  </label>
                  <select id="contact-interestedAs" name="interestedAs" value={formData.interestedAs} onChange={handleChange} className={inputClass("interestedAs")}>
                    <option value="" className="bg-[#08060f]">Select an option</option>
                    {interestedOptions.map((o) => <option key={o} value={o} className="bg-[#08060f]">{o}</option>)}
                  </select>
                  {errors.interestedAs && <p className="text-red-400 text-[clamp(0.7rem,1vw,0.8rem)] mt-1">Please select an option</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[clamp(0.7rem,1vw,0.875rem)] uppercase tracking-[0.2em] text-[#00e5ff] mb-2 font-['Orbitron',sans-serif]">
                    Message <span className="text-[#ff2d9b]">*</span>
                  </label>
                  <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`${inputClass("message")} resize-none`} placeholder="Tell us about your project or inquiry..." />
                  {errors.message && <p className="text-red-400 text-[clamp(0.7rem,1vw,0.8rem)] mt-1">Message is required</p>}
                </div>

                <motion.button type="submit"
                  className="group relative w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#ff2d9b] to-[#a855f7] rounded-[4px] font-black uppercase tracking-wider text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: isSubmitting ? "none" : "0 0 40px rgba(255,45,155,0.4)" }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  disabled={isSubmitting}
                >
                  <span className="relative flex items-center justify-center gap-3 text-[clamp(0.85rem,1.3vw,1.125rem)]">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-200" />}
                  </span>
                </motion.button>
              </form>
            </HudPanel>
          </motion.div>

          {/* Social Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="mt-8 sm:mt-12 text-center">
            <h3 className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-black tracking-tighter text-[#f0e6ff] mb-4 sm:mb-6 font-['Orbitron',sans-serif]">Or Connect Directly</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <motion.a href="mailto:contact@dellusion.in"
                className="group flex items-center gap-3 px-5 sm:px-6 py-3 bg-[rgba(15,11,26,0.55)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.07)] rounded-[4px] text-[#6b5a8a]"
                whileHover={{ borderColor: "rgba(0,229,255,0.5)", color: "#00e5ff", y: -3, boxShadow: "0 0 15px rgba(0,229,255,0.15), inset 0 1px 0 rgba(0,229,255,0.06)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#00e5ff]" />
                <span className="text-[clamp(0.8rem,1.2vw,1rem)] font-mono">contact@dellusion.in</span>
              </motion.a>
              <motion.a href="https://www.instagram.com/dellusion.in/" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 sm:px-6 py-3 bg-[rgba(15,11,26,0.55)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.07)] rounded-[4px] text-[#6b5a8a]"
                whileHover={{ borderColor: "rgba(255,45,155,0.5)", color: "#ff2d9b", y: -3, boxShadow: "0 0 15px rgba(255,45,155,0.15), inset 0 1px 0 rgba(255,45,155,0.06)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff2d9b]" />
                <span className="text-[clamp(0.8rem,1.2vw,1rem)] font-mono">@dellusion.in</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}