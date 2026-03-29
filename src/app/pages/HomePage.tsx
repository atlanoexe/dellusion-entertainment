import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowRight,
  Music,
  Users,
  Zap,
  Calendar,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GridOverlay, HudPanel, CornerBrackets, SectionLabel, NeonDivider } from "../components/CyberElements";
import dellusionLogo from "figma:asset/98fd0357d543cf7a2ac209cef3aaba60987da768.png";
import bankaiBeatsLogo from "figma:asset/02034364a16495b7fbe46117839758e1f588b630.png";
import darkCoreLogo from "figma:asset/09aba90697fa65668019a215b58eed2ee055b779.png";

const fast = { duration: 0.4, ease: [0.16, 1, 0.3, 1] };
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
};

const hoverLift = {
  whileHover: { y: -6, transition: { type: "spring", stiffness: 400, damping: 20 } },
};

export function HomePage() {
  return (
    <div className="bg-[#08060f]">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1766592585929-7bab0c0fb8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMHN0YWdlJTIwbGlnaHRzJTIwY3Jvd2QlMjBlbmVyZ3l8ZW58MXx8fHwxNzc0MjAyNTAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Festival Energy"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08060f]/80 via-[#08060f]/70 to-[#08060f]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(255,45,155,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(0,229,255,0.05),transparent_50%)]" />
        </div>
        <GridOverlay />

        {/* Ambient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[min(24rem,50vw)] aspect-square bg-[#ff2d9b] rounded-full blur-[120px] opacity-[0.07] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[min(20rem,40vw)] aspect-square bg-[#00e5ff] rounded-full blur-[120px] opacity-[0.05] animate-pulse [animation-delay:1.5s]" />
        <div className="absolute top-1/2 right-1/3 w-[min(16rem,30vw)] aspect-square bg-[#a855f7] rounded-full blur-[100px] opacity-[0.06] animate-pulse [animation-delay:0.8s]" />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={fast}
            className="flex justify-center"
          >
            <img
              src={dellusionLogo}
              alt="Dellusion Entertainment"
              className="h-[clamp(14rem,30vw,28rem)] w-auto max-w-[95vw] opacity-95 drop-shadow-[0_0_50px_rgba(255,45,155,0.3)] -mb-[clamp(2rem,5vw,5rem)] -mt-[clamp(3rem,6vw,8rem)]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fast, delay: 0.15 }}
            className="font-black tracking-tighter mb-4 sm:mb-6 leading-none font-['Orbitron',sans-serif]"
          >
            <span className="block bg-gradient-to-r from-[#ff2d9b] via-[#a855f7] to-[#00e5ff] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,45,155,0.4)] text-[clamp(2.5rem,8vw,6rem)]">
              WHERE FANDOM
            </span>
            <span className="block text-[#f0e6ff] mt-2 sm:mt-4 text-[clamp(2.5rem,8vw,6rem)]">
              BECOMES FESTIVAL
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fast, delay: 0.3 }}
            className="text-[clamp(1rem,2.5vw,1.75rem)] text-[#6b5a8a] max-w-3xl mx-auto mb-4 sm:mb-6 font-light tracking-wider"
          >
            Live entertainment rooted in youth subcultures
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fast, delay: 0.4 }}
            className="text-[clamp(0.8rem,1.5vw,1.125rem)] text-[#4a3d66] max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium"
          >
            From the underground to the arena, Dellusion Entertainment is building India's most culturally diverse festivals, club tours, concerts, and live experiences, one fandom at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...fast, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,45,155,0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="rounded-[4px]"
            >
              <Link
                to="/bankai-beats"
                className="relative block px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#ff2d9b] to-[#a855f7] rounded-[4px] font-black uppercase tracking-wider text-white"
              >
                <span className="flex items-center justify-center gap-2 text-[clamp(0.8rem,1.2vw,1rem)]">
                  Explore BANKAI BEATS
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,229,255,0.3)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="rounded-[4px]"
            >
              <Link
                to="/partner"
                className="block px-6 sm:px-10 py-4 sm:py-5 bg-transparent border border-[#00e5ff]/40 rounded-[4px] font-black uppercase tracking-wider text-[#00e5ff] hover:bg-[#00e5ff]/10 hover:border-[#00e5ff]/70 transition-colors duration-300 text-[clamp(0.8rem,1.2vw,1rem)]"
              >
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#08060f] relative overflow-hidden">
        <GridOverlay />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,45,155,0.04),transparent_50%)]" />

        <div className="max-w-7xl mx-auto relative">
          <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-12 lg:mb-14">
            <SectionLabel>System Overview</SectionLabel>
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tighter mb-4 sm:mb-6 font-['Orbitron',sans-serif]">
              <span className="bg-gradient-to-r from-[#ff2d9b] to-[#00e5ff] bg-clip-text text-transparent">
                WHAT WE DO
              </span>
            </h2>
            <p className="text-[clamp(0.9rem,2vw,1.5rem)] text-[#6b5a8a] max-w-3xl mx-auto">
              Building India's defining live entertainment
              properties for youth culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: <Music className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
                title: "Music Festivals",
                description: "Large-format festivals celebrating anime, K-pop, and Asian pop culture",
                accent: "#ff2d9b",
              },
              {
                icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
                title: "Club Tours",
                description: "Intimate club experiences bringing communities together",
                accent: "#00e5ff",
              },
              {
                icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
                title: "Live Events",
                description: "High-energy experiences designed for Gen Z audiences",
                accent: "#a855f7",
              },
              {
                icon: <Calendar className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
                title: "Annual Properties",
                description: "Scalable events designed to grow with the community",
                accent: "#ff2d9b",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                className="group relative"
              >
                <HudPanel glowOnHover className="p-5 sm:p-6 lg:p-8 h-full">
                  <div className="relative">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-[4px] border mb-4 sm:mb-6"
                      style={{ borderColor: `${item.accent}33`, backgroundColor: `${item.accent}0d` }}
                      whileHover={{ boxShadow: `0 0 20px ${item.accent}40` }}
                    >
                      <div className="transition-transform duration-200 group-hover:scale-110" style={{ color: item.accent }}>
                        {item.icon}
                      </div>
                    </motion.div>

                    <h3 className="text-[clamp(1.1rem,1.8vw,1.5rem)] font-black tracking-tighter text-[#f0e6ff] mb-2 sm:mb-4 font-['Orbitron',sans-serif]">
                      {item.title}
                    </h3>
                    <p className="text-[clamp(0.8rem,1.2vw,1rem)] text-[#6b5a8a] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </HudPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NeonDivider className="max-w-7xl mx-auto" />

      {/* Featured: BANKAI BEATS */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#08060f] relative overflow-hidden">
        <GridOverlay />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,_rgba(0,229,255,0.04),transparent_60%)]" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              {...fadeInUp}
              className="order-2 lg:order-1"
            >
              <motion.div
                className="relative rounded-[4px] overflow-hidden border border-[#ff2d9b]/15 group"
                whileHover={{ boxShadow: "0 0 40px rgba(255,45,155,0.15), 0 0 80px rgba(0,229,255,0.08)" }}
                transition={{ duration: 0.3 }}
              >
                <CornerBrackets />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1698614083129-15e976a503fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXZlJTIwcGFydHklMjBwdXJwbGUlMjBuZW9uJTIwbGlnaHRzfGVufDF8fHx8MTc3NDIwMjUwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="BANKAI BEATS Festival"
                  className="w-full h-[clamp(280px,50vw,600px)] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060f]/80 via-[#08060f]/30 to-transparent" />
              </motion.div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <SectionLabel>Featured Property</SectionLabel>
              <div className="mb-6 sm:mb-8">
                <img
                  src={bankaiBeatsLogo}
                  alt="BANKAI BEATS"
                  className="h-[clamp(4rem,10vw,8rem)] w-auto drop-shadow-[0_0_30px_rgba(255,45,155,0.4)]"
                />
              </div>

              <p className="text-[clamp(1rem,2vw,1.5rem)] text-[#d4c0f0] mb-4 sm:mb-6 leading-relaxed uppercase">
                INDIA'S FIRST ANIME &amp; K-POP MUSIC FESTIVAL
              </p>

              <p className="text-[clamp(0.85rem,1.3vw,1.125rem)] text-[#6b5a8a] mb-6 sm:mb-8 leading-relaxed">
                A full-scale, 12-hour live experience designed
                for the generation that grew up on anime, K-pop,
                and Asian pop culture. This is not a borrowed
                format. This is a festival built by fans, for
                fans - rooted in community and designed to
                scale.
              </p>

              <motion.div
                whileHover={{ x: 4, boxShadow: "0 0 25px rgba(0,229,255,0.3)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-block rounded-[4px]"
              >
                <Link
                  to="/bankai-beats"
                  className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-[#00e5ff]/40 rounded-[4px] font-black uppercase tracking-wider text-[#00e5ff] hover:bg-[#00e5ff]/10 transition-colors duration-300"
                >
                  <span className="text-[clamp(0.8rem,1.2vw,1rem)]">Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <NeonDivider className="max-w-7xl mx-auto" />

      {/* Featured: DARKCORE */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#08060f] relative overflow-hidden">
        <GridOverlay />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,_rgba(168,85,247,0.05),transparent_60%)]" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="order-1 lg:order-1"
            >
              <SectionLabel>Featured Community</SectionLabel>
              <div className="mb-6 sm:mb-8">
                <img
                  src={darkCoreLogo}
                  alt="DARKCORE"
                  className="h-[clamp(4rem,10vw,8rem)] w-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
                />
              </div>

              <p className="text-[clamp(1rem,2vw,1.5rem)] text-[#d4c0f0] mb-4 sm:mb-6 leading-relaxed uppercase">
                INDIA'S LARGEST DARK CULTURE COMMUNITY
              </p>

              <p className="text-[clamp(0.85rem,1.3vw,1.125rem)] text-[#6b5a8a] mb-6 sm:mb-8 leading-relaxed">
                DARKCORE is a platform for artists, musicians, 
                designers, brands, and fans who create and live 
                within the dark aesthetic. From black metal and 
                darkwave to gothic fashion and occult art, this 
                is where India's underground culture comes 
                together. This is not a trend. It is a movement.
              </p>

              <motion.div
                whileHover={{ x: 4, boxShadow: "0 0 25px rgba(168,85,247,0.3)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-block rounded-[4px]"
              >
                <Link
                  to="/darkcore"
                  className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-[#a855f7]/40 rounded-[4px] font-black uppercase tracking-wider text-[#a855f7] hover:bg-[#a855f7]/10 transition-colors duration-300"
                >
                  <span className="text-[clamp(0.8rem,1.2vw,1rem)]">Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="order-2 lg:order-2"
            >
              <motion.div
                className="relative rounded-[4px] overflow-hidden border border-[#a855f7]/15 group"
                whileHover={{ boxShadow: "0 0 40px rgba(168,85,247,0.15), 0 0 80px rgba(255,45,155,0.08)" }}
                transition={{ duration: 0.3 }}
              >
                <CornerBrackets color="rgba(168,85,247,0.4)" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ290aGljJTIwY29uY2VydCUyMGF0bW9zcGhlcmV8ZW58MXx8fHwxNzc0MjAyNTAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="DARKCORE Community"
                  className="w-full h-[clamp(280px,50vw,600px)] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060f]/80 via-[#08060f]/30 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <NeonDivider className="max-w-7xl mx-auto" />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#08060f] relative overflow-hidden">
        <GridOverlay />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.05),transparent_60%)]" />

        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div {...fadeInUp}>
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tighter mb-4 sm:mb-8 font-['Orbitron',sans-serif]">
              <span className="bg-gradient-to-r from-[#ff2d9b] via-[#a855f7] to-[#00e5ff] bg-clip-text text-transparent">
                JOIN THE MOVEMENT
              </span>
            </h2>
            <p className="text-[clamp(0.9rem,2vw,1.5rem)] text-[#6b5a8a] mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
              Whether you're a brand, investor, artist, or fan,
              we're building something bigger than events. We're
              building culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,45,155,0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="rounded-[4px]"
              >
                <Link
                  to="/partner"
                  className="block px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-[#ff2d9b] to-[#a855f7] rounded-[4px] font-black uppercase tracking-wider text-white text-[clamp(0.8rem,1.2vw,1rem)]"
                >
                  Partner With Us
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,229,255,0.3)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="rounded-[4px]"
              >
                <Link
                  to="/contact"
                  className="block px-8 sm:px-12 py-4 sm:py-6 bg-transparent border border-[#00e5ff]/40 rounded-[4px] font-black uppercase tracking-wider text-[#00e5ff] hover:bg-[#00e5ff]/10 transition-colors duration-300 text-[clamp(0.8rem,1.2vw,1rem)]"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}