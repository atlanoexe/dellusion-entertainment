import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GridOverlay } from "../components/CyberElements";

// BANKAI BEATS logo
const bankaiBeatsLogo = "https://media.discordapp.net/attachments/876112969476493332/1487728798383210536/HORIZONTAL_White_Red_Eyes.png?ex=69ca32ea&is=69c8e16a&hm=09714bafcfa5588c490a676328b58463d3859c3ae34c37b87f24f797c1e9710b&=&format=webp&quality=lossless&width=2333&height=731";

export function BankaiBeatsPage() {
  const bankaiBeatsWebsiteUrl = "https://www.bankaibeatsfest.com";

  return (
    <div className="bg-[#08060f] text-[#d4c0f0]">
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1698614083129-15e976a503fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXZlJTIwcGFydHklMjBwdXJwbGUlMjBuZW9uJTIwbGlnaHRzfGVufDF8fHx8MTc3NDIwMjUwMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="BANKAI BEATS Festival"
            className="w-full h-full object-cover opacity-25 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08060f]/85 via-[#08060f]/75 to-[#08060f]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(255,45,155,0.1),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,_rgba(0,229,255,0.06),transparent_50%)]" />
        </div>
        <GridOverlay />

        <div className="absolute top-1/4 left-1/4 w-[min(30rem,60vw)] aspect-square bg-[#ff2d9b] rounded-full blur-[140px] opacity-[0.08] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[min(30rem,60vw)] aspect-square bg-[#a855f7] rounded-full blur-[140px] opacity-[0.06] animate-pulse [animation-delay:1.5s]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.a
            href={bankaiBeatsWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-8 sm:mb-12 lg:mb-16 cursor-pointer group mt-8"
            whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 50px rgba(255,45,155,0.7))" }}
          >
            <img
              src={bankaiBeatsLogo}
              alt="BANKAI BEATS"
              className="h-[clamp(6rem,18vw,14rem)] w-auto drop-shadow-[0_0_40px_rgba(255,45,155,0.5)] transition-all duration-300"
            />
          </motion.a>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-[clamp(1.25rem,4vw,3rem)] text-[#6b5a8a] max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16 font-light leading-tight tracking-wider"
          >
            India's first anime and K-pop music festival
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-[clamp(0.9rem,2vw,1.35rem)] text-[#d4c0f0] max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed"
          >
            A full-scale, 12-hour live experience designed for the generation that grew up on anime, K-pop, 
            and Asian pop culture. This is not a borrowed format—this is a festival built by fans, for fans, 
            rooted in community and designed to scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <motion.a
              href={bankaiBeatsWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-[#ff2d9b] to-[#a855f7] rounded-[4px] font-black uppercase tracking-wider text-white overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255,45,155,0.5)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <span className="relative text-[clamp(0.9rem,2vw,1.5rem)]">Visit BANKAI BEATS Website</span>
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}