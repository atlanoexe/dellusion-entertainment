import { GridOverlay, HudPanel, GlassBanner, SectionLabel, NeonDivider, CornerBrackets } from "../components/CyberElements";
import { SubmitModal } from "../components/SubmitModal";
import { motion } from "motion/react";
import { Handshake, CheckCircle, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export function PartnerPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", partnershipType: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPartnership, setSelectedPartnership] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Handle click outside to deselect
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectedPartnership &&
        formRef.current &&
        cardsRef.current &&
        !formRef.current.contains(event.target as Node) &&
        !cardsRef.current.contains(event.target as Node)
      ) {
        setSelectedPartnership(null);
        setFormData({ ...formData, partnershipType: "" });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedPartnership, formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (!formData.partnershipType) newErrors.partnershipType = true;
    if (!formData.message) newErrors.message = true;
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    
    setIsSubmitting(true);
    setShowSuccess(false);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzogd570mvhmaHouZxF83NMrcuFSCax1RV_WVH8Q6Ai-fNkW1uAanoZFrwflDZtOyBusg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", company: "", partnershipType: "", message: "" });
      setErrors({}); setSelectedPartnership(null);
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

  const handleCardClick = (partnershipType: string) => {
    setFormData({ ...formData, partnershipType });
    setSelectedPartnership(partnershipType);
    setErrors({ ...errors, partnershipType: false });
    setTimeout(() => { formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }, 200);
  };

  const partnershipTypes = ["Investor","Brand sponsor","Exhibitor/vendor","Media partner","F&B partner","Artist/Performer","Technology Partner","Other"];

  const partnershipOptions = [
    { type: "Investor", title: "Investors", description: "First-mover advantage in the Asian pop culture festival space. Early-stage opportunity with massive growth potential.", image: "https://images.unsplash.com/photo-1770681381576-f1fdceb2ea01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhdGF8ZW58MXx8fHwxNzc0MjA4NjExfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { type: "Brand sponsor", title: "Brand Sponsors", description: "Connect with 15,000+ engaged Gen-Z consumers through branded activations and immersive experiences.", image: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzc0MjA4NjExfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { type: "Exhibitor/vendor", title: "Exhibitors & Vendors", description: "Showcase products to anime, K-pop, and gaming fans. 40+ stall spaces available.", image: "https://images.unsplash.com/photo-1771695399549-ac7d25432e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcmV0YWlsJTIwY2xvdGhpbmclMjBzdG9yZXxlbnwxfHx8fDE3NzQyMDg2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { type: "Media partner", title: "Media Partners", description: "Exclusive press access, interviews, and behind-the-scenes content.", image: "https://images.unsplash.com/photo-1632670467494-c7c6de897290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwY2FtZXJhJTIwcHJvZHVjdGlvbiUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3NDIwODYxMnww&ixlib=rb-4.1.0&q=80&w=1080" },
    { type: "F&B partner", title: "F&B Partners", description: "Serve authentic Asian cuisine to 15,000+ hungry festival-goers.", image: "https://images.unsplash.com/photo-1757715375851-9dcb68bcef0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZvb2QlMjBwbGF0dGVyJTIwZ291cm1ldHxlbnwxfHx8fDE3NzQyMDg2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { type: "Artist/Performer", title: "Artists & Performers", description: "Perform at India's premier anime and K-pop festival.", image: "https://images.unsplash.com/photo-1766766464722-b3c33d720732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMHBlcmZvcm1lciUyMHN0YWdlJTIwY29uY2VydCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzQyMTI1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { type: "Technology Partner", title: "Technology Partners", description: "Power the festival with cutting-edge tech solutions.", image: "https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc0MjEyNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { type: "Other", title: "Other Partnerships", description: "Have a unique collaboration idea? We're open to creative partnerships.", image: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29yayUyMGRpdmVyc2V8ZW58MXx8fHwxNzc0MjEyNTE0fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  ];

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
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-4 sm:mb-8">
            <Handshake className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 text-[#ff2d9b]" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="text-[clamp(2.5rem,7vw,6rem)] font-black tracking-tighter mb-4 sm:mb-6 font-['Orbitron',sans-serif]">
            <span className="bg-gradient-to-r from-[#ff2d9b] via-[#a855f7] to-[#00e5ff] bg-clip-text text-transparent">PARTNER WITH US</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }}
            className="text-[clamp(0.9rem,2vw,1.5rem)] text-[#6b5a8a] max-w-3xl mx-auto">
            Let's build something legendary together.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative">
        <GridOverlay />
        <div className="max-w-7xl mx-auto relative">
          <motion.div {...fadeInUp} className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-10 sm:mb-16">
              <SectionLabel>Select Module</SectionLabel>
              <h2 className="text-[clamp(1.75rem,4vw,3.75rem)] font-black tracking-tighter mb-4 sm:mb-6 font-['Orbitron',sans-serif]">
                <span className="bg-gradient-to-r from-[#ff2d9b] to-[#00e5ff] bg-clip-text text-transparent">PARTNERSHIP OPPORTUNITIES</span>
              </h2>
              <p className="text-[clamp(0.85rem,1.5vw,1.25rem)] text-[#6b5a8a] max-w-3xl mx-auto">Choose your partnership type to get started</p>
            </div>

            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
              {partnershipOptions.map((card, index) => (
                <motion.button
                  key={card.type}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleCardClick(card.type)}
                  className={`group relative text-left overflow-hidden rounded-[4px] h-full ${selectedPartnership === card.type ? "ring-1 ring-[#ff2d9b] ring-offset-2 ring-offset-[#08060f]" : ""}`}
                >
                  <div className={`relative bg-[rgba(15,11,26,0.55)] backdrop-blur-[14px] border ${selectedPartnership === card.type ? "border-[rgba(255,45,155,0.55)] shadow-[0_0_25px_rgba(255,45,155,0.15),inset_0_1px_0_rgba(255,45,155,0.08)]" : "border-[rgba(255,255,255,0.07)] group-hover:border-[rgba(255,45,155,0.35)] shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] group-hover:shadow-[0_0_20px_rgba(255,45,155,0.1),0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]"} rounded-[4px] overflow-hidden transition-all duration-300 h-full flex flex-col`}>
                    <CornerBrackets />
                    <div className="relative h-32 sm:h-40 overflow-hidden flex-shrink-0">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-70 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08060f]/95 via-[#08060f]/50 to-transparent" />
                    </div>
                    <div className="relative p-4 sm:p-5 lg:p-6 flex-grow flex flex-col">
                      <h3 className="text-[clamp(0.95rem,1.5vw,1.5rem)] font-black tracking-tight text-[#f0e6ff] mb-2 group-hover:text-[#ff2d9b] transition-colors duration-200 font-['Orbitron',sans-serif]">{card.title}</h3>
                      <p className="text-[clamp(0.75rem,1.1vw,0.95rem)] text-[#6b5a8a] leading-relaxed flex-grow">{card.description}</p>
                      {selectedPartnership === card.type && (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 text-[#00e5ff] font-bold text-[clamp(0.7rem,1vw,0.875rem)] mt-3 font-mono">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /><span>Selected</span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <NeonDivider className="max-w-4xl mx-auto mb-12" />

          {/* Form Section */}
          <div ref={formRef} className="max-w-4xl mx-auto scroll-mt-24">
            {showSuccess && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                <GlassBanner variant="cyan" className="p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#00e5ff] shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#00e5ff] text-[clamp(0.85rem,1.2vw,1rem)]">Partnership Request Sent!</h3>
                      <p className="text-[#6b5a8a] text-[clamp(0.75rem,1vw,0.875rem)]">We'll review your submission and get back to you soon.</p>
                    </div>
                  </div>
                </GlassBanner>
              </motion.div>
            )}

            {selectedPartnership && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                <GlassBanner variant="magenta" className="p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff2d9b] shrink-0" />
                    <div>
                      <h3 className="font-bold text-[#ff2d9b] text-[clamp(0.85rem,1.2vw,1rem)] font-mono">You selected: {selectedPartnership}</h3>
                      <p className="text-[#6b5a8a] text-[clamp(0.75rem,1vw,0.875rem)]">Complete the form below to submit your partnership request</p>
                    </div>
                  </div>
                </GlassBanner>
              </motion.div>
            )}

            <motion.div {...fadeInUp}>
              <HudPanel className="p-5 sm:p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {[
                    { id: "partner-name", name: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "partner-email", name: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
                    { id: "partner-phone", name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                    { id: "partner-company", name: "company", label: "Company", type: "text", placeholder: "Your company" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-[clamp(0.7rem,1vw,0.875rem)] uppercase tracking-[0.2em] text-[#00e5ff] mb-2 font-['Orbitron',sans-serif]">
                        {field.label} {field.name !== "company" && <span className="text-[#ff2d9b]">*</span>}
                      </label>
                      <motion.input whileFocus={{ boxShadow: "0 0 20px rgba(255,45,155,0.15)" }}
                        type={field.type} id={field.id} name={field.name} value={(formData as any)[field.name]} onChange={handleChange}
                        className={inputClass(field.name)} placeholder={field.placeholder} />
                      {errors[field.name] && <p className="text-red-400 text-[clamp(0.7rem,1vw,0.8rem)] mt-1">{field.label} is required</p>}
                    </div>
                  ))}

                  <div>
                    <label htmlFor="partner-type" className="block text-[clamp(0.7rem,1vw,0.875rem)] uppercase tracking-[0.2em] text-[#00e5ff] mb-2 font-['Orbitron',sans-serif]">
                      Type of Partnership <span className="text-[#ff2d9b]">*</span>
                    </label>
                    <select id="partner-type" name="partnershipType" value={formData.partnershipType} onChange={handleChange} className={inputClass("partnershipType")}>
                      <option value="" className="bg-[#08060f]">Select partnership type</option>
                      {partnershipTypes.map((t) => <option key={t} value={t} className="bg-[#08060f]">{t}</option>)}
                    </select>
                    {errors.partnershipType && <p className="text-red-400 text-[clamp(0.7rem,1vw,0.8rem)] mt-1">Please select a type</p>}
                  </div>

                  <div>
                    <label htmlFor="partner-message" className="block text-[clamp(0.7rem,1vw,0.875rem)] uppercase tracking-[0.2em] text-[#00e5ff] mb-2 font-['Orbitron',sans-serif]">
                      Message <span className="text-[#ff2d9b]">*</span>
                    </label>
                    <textarea id="partner-message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`${inputClass("message")} resize-none`} placeholder="Tell us about your partnership idea..." />
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
                      {isSubmitting ? "Submitting..." : "Submit Partnership Request"}
                      {!isSubmitting && <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-200" />}
                    </span>
                  </motion.button>
                </form>
              </HudPanel>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}