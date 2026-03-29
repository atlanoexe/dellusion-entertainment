import { motion } from "motion/react";
import { GridOverlay, HudPanel, SectionLabel, NeonDivider } from "../components/CyberElements";

// DARKCORE logo
const darkCoreLogo = "https://media.discordapp.net/attachments/876112969476493332/1487728798861623306/Horizontal_White_Red_Eyes.png?ex=69ca32ea&is=69c8e16a&hm=a2651769d083c90a8f70d1af42121d5494af08b1070c2692b6208498aa44a413&=&format=webp&quality=lossless&width=2333&height=726";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export function DarkCorePage() {
  const categories = [
    { title: "Dark Music", description: "Black metal, darkwave, industrial techno, witch house, doom metal, goth rock, dark psytrance, and everything in between. DARKCORE spotlights DJs, bands, and producers who create with weight and intent." },
    { title: "Alternative Fashion", description: "Gothic, leather, techwear, vampirecore, devilcore, occult streetwear, and alt accessories. Fashion here is identity, not trend. We feature independent labels and designers who build through craft and subversion." },
    { title: "Dark Art", description: "Occult illustration, macabre photography, dark surrealism, gothic tattoo art, and body modification. DARKCORE is a platform for visual creators who work in the grotesque, the eerie, and the beautifully strange." },
  ];

  return (
    <div className="bg-[#08060f] text-[#d4c0f0] min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#08060f] via-[#1a0a2e]/20 to-[#08060f]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.08),transparent_70%)]" />
        </div>
        <GridOverlay />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 flex justify-center"
          >
            <motion.img
              src={darkCoreLogo} alt="DARKCORE"
              className="h-[clamp(8rem,20vw,16rem)] w-auto drop-shadow-[0_0_40px_rgba(168,85,247,0.5)]"
              whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 60px rgba(168,85,247,0.7))" }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tighter mb-6 sm:mb-8 font-['Orbitron',sans-serif]"
          >
            <span className="bg-gradient-to-r from-[#a855f7] via-[#ff2d9b] to-[#a855f7] bg-clip-text text-transparent">ABOUT DARKCORE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.3 }}
            className="text-[clamp(1rem,2vw,1.5rem)] text-[#6b5a8a] max-w-5xl mx-auto leading-relaxed"
          >
            DARKCORE is India's largest dark culture community, built and operated by Dellusion Entertainment. It exists as a single platform for artists, musicians, designers, brands, and fans who create and live within the dark aesthetic.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.4 }}
            className="text-[clamp(1.1rem,2.2vw,1.75rem)] font-black text-[#a855f7] mt-6 sm:mt-8 font-['Orbitron',sans-serif]"
          >
            This is not a trend. It is a movement.
          </motion.p>
        </div>
      </section>

      <NeonDivider className="max-w-7xl mx-auto" />

      {/* What It Includes */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          <GridOverlay />
          <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16">
            <SectionLabel>Subsystems</SectionLabel>
            <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-black tracking-tighter mb-4 sm:mb-6 font-['Orbitron',sans-serif]">
              <span className="bg-gradient-to-r from-[#a855f7] to-[#ff2d9b] bg-clip-text text-transparent">WHAT IT INCLUDES</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                className="group relative"
              >
                <HudPanel glowOnHover className="p-6 sm:p-8 h-full">
                  <h3 className="text-[clamp(1.25rem,2vw,2rem)] font-black tracking-tight text-[#f0e6ff] mb-4 group-hover:text-[#a855f7] transition-colors duration-200 font-['Orbitron',sans-serif]">
                    {category.title}
                  </h3>
                  <p className="text-[clamp(0.9rem,1.3vw,1.125rem)] text-[#6b5a8a] leading-relaxed">{category.description}</p>
                </HudPanel>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-12 sm:mt-16 text-center">
            <p className="text-[clamp(0.85rem,1.3vw,1.125rem)] text-[#4a3d66] italic font-mono">
              DARKCORE is an original IP owned and operated by Dellusion Entertainment.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}