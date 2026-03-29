import { motion } from "motion/react";
import { Target, Lightbulb, Users, Send, CheckCircle, Heart, Sparkles, Zap, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { GridOverlay, HudPanel, CornerBrackets, SectionLabel, NeonDivider, GlassBanner } from "../components/CyberElements";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
};

export function AboutPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", interestedAs: "", message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (!formData.interestedAs) newErrors.interestedAs = true;
    if (!formData.message) newErrors.message = true;
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    console.log("Form submitted:", formData);
    setShowSuccess(true);
    setFormData({ name: "", email: "", phone: "", company: "", interestedAs: "", message: "" });
    setErrors({});
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: false });
  };

  const interestedOptions = ["Investor","Brand sponsor","Client","Exhibitor/vendor","Media partner","Artist/performer","Fan/attendee","Other"];

  const inputClass = (field: string) =>
    `w-full px-4 sm:px-5 py-3 sm:py-4 bg-[rgba(8,6,15,0.7)] backdrop-blur-[8px] border ${ 
      errors[field] ? "border-red-500/50" : "border-[rgba(255,45,155,0.15)]"
    } rounded-[4px] text-[#d4c0f0] placeholder-[#4a3d66] focus:outline-none focus:border-[rgba(255,45,155,0.5)] focus:shadow-[0_0_15px_rgba(255,45,155,0.12),inset_0_1px_0_rgba(255,45,155,0.05)] transition-all duration-200 text-[clamp(0.8rem,1.2vw,1rem)] font-mono`;

  return (
    <div className="bg-[#08060f] text-[#d4c0f0]">
      {/* Hero */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e]/30 via-[#08060f]/80 to-[#08060f]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,45,155,0.06),transparent_60%)]" />
        </div>
        <GridOverlay />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-center py-16 sm:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,7vw,6rem)] font-black tracking-tighter mt-[-12px] mb-[23px] font-['Orbitron',sans-serif]"
          >
            <span className="bg-gradient-to-r from-[#ff2d9b] to-[#00e5ff] bg-clip-text text-transparent">ABOUT US</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }}
            className="text-[clamp(0.9rem,2vw,1.5rem)] text-[#6b5a8a] max-w-3xl mx-auto">
            Building the next generation of live entertainment in India
          </motion.p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#08060f] relative">
        <GridOverlay />
        <div className="max-w-5xl mx-auto relative">
          <motion.div {...fadeInUp}>
            <SectionLabel>Identity</SectionLabel>
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#00e5ff] shrink-0" />
              <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tighter bg-gradient-to-r from-[#ff2d9b] to-[#00e5ff] bg-clip-text text-transparent font-['Orbitron',sans-serif]">
                WHO WE ARE
              </h2>
            </div>
            <p className="text-[clamp(0.95rem,1.8vw,1.5rem)] text-[#6b5a8a] leading-relaxed">
              Dellusion Entertainment is a live experience company built around one belief: that India's youth culture deserves festivals built for it, not borrowed from somewhere else. We build large-format live events from the ground up, rooted in community, driven by culture, and designed to scale.
            </p>
          </motion.div>
        </div>
      </section>

      <NeonDivider className="max-w-5xl mx-auto" />

      {/* WHAT WE DO */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#08060f] relative">
        <GridOverlay />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <motion.div
                className="relative rounded-[4px] overflow-hidden border border-[#ff2d9b]/15"
                whileHover={{ boxShadow: "0 0 40px rgba(255,45,155,0.15)" }}
              >
                <CornerBrackets />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1571435763834-4d6fbb550bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2QlMjBoYW5kcyUyMHVwfGVufDF8fHx8MTc3NDIwMjUwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Festival Crowd"
                  className="w-full h-[clamp(250px,45vw,600px)] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060f]/60 to-transparent" />
              </motion.div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <SectionLabel>Operations</SectionLabel>
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#ff2d9b] shrink-0" />
                <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tighter bg-gradient-to-r from-[#ff2d9b] to-[#a855f7] bg-clip-text text-transparent font-['Orbitron',sans-serif]">
                  WHAT WE DO
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6 text-[clamp(0.9rem,1.5vw,1.25rem)] text-[#6b5a8a] leading-relaxed">
                <p>We identify high-growth youth subcultures, build genuine community traction from the ground up, and scale them into commercially viable large-format live experiences.</p>
                <p>Our flagship property, <span className="text-[#ff2d9b] font-bold">BANKAI BEATS</span>, is India's first anime and K-pop music festival.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <NeonDivider className="max-w-5xl mx-auto" />

      {/* OUR STORY */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#08060f] relative overflow-hidden">
        <GridOverlay />
        <div className="max-w-5xl mx-auto relative">
          <motion.div {...fadeInUp}>
            <SectionLabel>Origin</SectionLabel>
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tighter mb-8 sm:mb-12 bg-gradient-to-r from-[#ff2d9b] to-[#00e5ff] bg-clip-text text-transparent font-['Orbitron',sans-serif]">OUR STORY</h2>
            <div className="space-y-6 sm:space-y-8 text-[clamp(0.9rem,1.8vw,1.5rem)] text-[#6b5a8a] leading-relaxed">
              <p>Dellusion Entertainment was born inside the fandom, not outside it. We are anime watchers, K-pop listeners, and culture obsessives who realised that the community we were part of deserved a festival built by people who actually understood it.</p>
              <p>We started in 2024 with a 9-city club tour. No investors. No guarantees. Just a belief that the audience existed and would show up. They did.</p>
              <p className="text-[clamp(1.1rem,2vw,1.75rem)] font-black text-[#ff2d9b] font-['Orbitron',sans-serif]">BANKAI BEATS is what we have been building toward.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <NeonDivider className="max-w-5xl mx-auto" />

      {/* OUR MISSION */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#08060f] relative overflow-hidden">
        <GridOverlay />
        <div className="max-w-5xl mx-auto relative">
          <motion.div {...fadeInUp}>
            <motion.div whileHover={{ boxShadow: "0 0 50px rgba(255,45,155,0.12), 0 0 80px rgba(0,229,255,0.06)" }} transition={{ duration: 0.3 }}>
              <HudPanel className="p-6 sm:p-10 lg:p-16">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="p-3 sm:p-4 bg-[#ff2d9b]/10 rounded-[4px] border border-[#ff2d9b]/20">
                    <Target className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#ff2d9b]" />
                  </div>
                  <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tighter text-[#f0e6ff] font-['Orbitron',sans-serif]">OUR MISSION</h2>
                </div>
                <p className="text-[clamp(0.9rem,1.8vw,1.5rem)] text-[#6b5a8a] leading-relaxed">
                  To build India's defining live entertainment properties for youth culture, starting with the communities that have been underserved the longest, and scaling them into experiences worthy of the passion they represent.
                </p>
              </HudPanel>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THE VISION */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#08060f] relative overflow-hidden">
        <GridOverlay />
        <div className="max-w-6xl mx-auto relative">
          <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-16">
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tighter mb-4 sm:mb-8 font-['Orbitron',sans-serif]">
              <span className="text-[#f0e6ff]">The </span>
              <span className="text-[#00e5ff]">Vision</span>
            </h2>
          </motion.div>
          <motion.div {...fadeInUp} className="space-y-6 sm:space-y-8 text-[clamp(0.85rem,1.5vw,1.25rem)] text-[#6b5a8a] leading-relaxed text-center max-w-5xl mx-auto">
            <p>India is at an inflection point. The anime and K-pop fandom here is not just growing. It is becoming one of the most powerful youth culture forces in the world.</p>
            <p>BANKAI BEATS starts in Delhi. But the vision goes far beyond one city and one festival. We are building a live entertainment brand that grows with the community.</p>
            <p>More cities. Bigger headliners. New experiences that have never been done before in this country.</p>
            <p className="text-[clamp(1rem,1.8vw,1.5rem)] font-black text-[#ff2d9b] font-['Orbitron',sans-serif]">The fandom built this culture. We are here to give it the stage it deserves.</p>
          </motion.div>
        </div>
      </section>

      <NeonDivider className="max-w-6xl mx-auto" />

      {/* OUR VALUES */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#08060f] relative overflow-hidden">
        <GridOverlay />
        <div className="max-w-7xl mx-auto relative">
          <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-12 lg:mb-14">
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tighter font-['Orbitron',sans-serif]">
              <span className="text-[#f0e6ff]">Our </span><span className="text-[#a855f7]">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: <Heart className="w-8 h-8 sm:w-10 sm:h-10" />, title: "Community First", description: "Every decision we make starts with what's best for the fans.", accent: "#ff2d9b" },
              { icon: <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />, title: "Inclusivity", description: "Whether you're a cosplayer or a hardcore K-pop stan, there's a place for you.", accent: "#00e5ff" },
              { icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />, title: "Authenticity", description: "No watered-down experiences. Real artists, real food, real culture.", accent: "#a855f7" },
              { icon: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />, title: "Innovation", description: "Blending cutting-edge tech with grassroots community energy.", accent: "#ff2d9b" },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                className="group relative"
              >
                <HudPanel glowOnHover className="p-5 sm:p-6 lg:p-8 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-[4px] border mb-4 sm:mb-6"
                    style={{ borderColor: `${value.accent}33`, backgroundColor: `${value.accent}0d` }}>
                    <div className="transition-transform duration-200 group-hover:scale-110" style={{ color: value.accent }}>{value.icon}</div>
                  </div>
                  <h3 className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-black tracking-tighter text-[#f0e6ff] mb-2 sm:mb-4 font-['Orbitron',sans-serif]">{value.title}</h3>
                  <p className="text-[clamp(0.8rem,1.2vw,1rem)] text-[#6b5a8a] leading-relaxed">{value.description}</p>
                </HudPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NeonDivider className="max-w-5xl mx-auto" />

      {/* CONTACT US */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#08060f] relative overflow-hidden">
        <GridOverlay />
        <div className="max-w-4xl mx-auto relative">
          <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-12">
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tighter mb-4 sm:mb-8 bg-gradient-to-r from-[#ff2d9b] to-[#00e5ff] bg-clip-text text-transparent font-['Orbitron',sans-serif]">GET IN TOUCH</h2>
            <p className="text-[clamp(0.9rem,2vw,1.5rem)] text-[#6b5a8a]">Let's create something legendary together.</p>
          </motion.div>

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
                  { id: "about-name", name: "name", label: "Name", type: "text", placeholder: "Your name", required: true },
                  { id: "about-email", name: "email", label: "Email", type: "email", placeholder: "your.email@example.com", required: true },
                  { id: "about-phone", name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX", required: true },
                  { id: "about-company", name: "company", label: "Company Name", type: "text", placeholder: "Your company (if applicable)", required: false },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-[clamp(0.7rem,1vw,0.875rem)] uppercase tracking-[0.2em] text-[#00e5ff] mb-2 font-['Orbitron',sans-serif]">
                      {field.label} {field.required ? <span className="text-[#ff2d9b]">*</span> : <span className="text-[#4a3d66] text-xs">(Optional)</span>}
                    </label>
                    <motion.input whileFocus={{ boxShadow: "0 0 20px rgba(255,45,155,0.15)" }}
                      type={field.type} id={field.id} name={field.name} value={(formData as any)[field.name]} onChange={handleChange}
                      className={field.required ? inputClass(field.name) : `w-full px-4 sm:px-5 py-3 sm:py-4 bg-[rgba(8,6,15,0.7)] backdrop-blur-[8px] border border-[rgba(255,45,155,0.15)] rounded-[4px] text-[#d4c0f0] placeholder-[#4a3d66] focus:outline-none focus:border-[rgba(255,45,155,0.5)] focus:shadow-[0_0_15px_rgba(255,45,155,0.1)] transition-all duration-200 text-[clamp(0.8rem,1.2vw,1rem)] font-mono`}
                      placeholder={field.placeholder} />
                    {field.required && errors[field.name] && <p className="text-red-400 text-[clamp(0.7rem,1vw,0.8rem)] mt-1">{field.label} is required</p>}
                  </div>
                ))}

                <div>
                  <label htmlFor="about-interestedAs" className="block text-[clamp(0.7rem,1vw,0.875rem)] uppercase tracking-[0.2em] text-[#00e5ff] mb-2 font-['Orbitron',sans-serif]">
                    I am interested as <span className="text-[#ff2d9b]">*</span>
                  </label>
                  <select id="about-interestedAs" name="interestedAs" value={formData.interestedAs} onChange={handleChange} className={inputClass("interestedAs")}>
                    <option value="" className="bg-[#08060f]">Select an option</option>
                    {interestedOptions.map((o) => <option key={o} value={o} className="bg-[#08060f]">{o}</option>)}
                  </select>
                  {errors.interestedAs && <p className="text-red-400 text-[clamp(0.7rem,1vw,0.8rem)] mt-1">Please select an option</p>}
                </div>

                <div>
                  <label htmlFor="about-message" className="block text-[clamp(0.7rem,1vw,0.875rem)] uppercase tracking-[0.2em] text-[#00e5ff] mb-2 font-['Orbitron',sans-serif]">
                    Message <span className="text-[#ff2d9b]">*</span>
                  </label>
                  <textarea id="about-message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`${inputClass("message")} resize-none`} placeholder="Tell us about your project or inquiry..." />
                  {errors.message && <p className="text-red-400 text-[clamp(0.7rem,1vw,0.8rem)] mt-1">Message is required</p>}
                </div>

                <motion.button
                  type="submit"
                  className="group relative w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#ff2d9b] to-[#a855f7] rounded-[4px] font-black uppercase tracking-wider text-white overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,45,155,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <span className="relative flex items-center justify-center gap-3 text-[clamp(0.85rem,1.3vw,1.125rem)]">
                    Send Message
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-200" />
                  </span>
                </motion.button>
              </form>
            </HudPanel>
          </motion.div>
        </div>
      </section>
    </div>
  );
}