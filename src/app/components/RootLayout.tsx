import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GridOverlay } from "./CyberElements";

// Dellusion Entertainment Logo
const dellusionLogo = "https://media.discordapp.net/attachments/876112969476493332/1487728799482384394/DELLUSION_LOGO_HORIZONTAL_WHITE.png?ex=69ca32ea&is=69c8e16a&hm=cbc46c24d49cee7c8a22888501edb296fddba2656dc4da1aa8101c9b052c1d13&=&format=webp&quality=lossless&width=1782&height=1265";

export function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "BANKAI BEATS", path: "/bankai-beats" },
    { name: "DARKCORE", path: "/darkcore" },
    { name: "Past Events", path: "/past-events" },
    { name: "Partner With Us", path: "/partner" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#08060f] text-[#d4c0f0]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(8,6,15,0.65)] backdrop-blur-[28px] border-b border-[rgba(255,255,255,0.07)] shadow-[0_1px_0_0_rgba(255,45,155,0.12),0_4px_30px_rgba(0,0,0,0.55)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center -ml-3 sm:-ml-4 lg:-ml-6 -mt-1 group">
              <motion.img
                src={dellusionLogo}
                alt="Dellusion Entertainment"
                className="h-[80px] sm:h-[95px] lg:h-[110px] w-auto"
                whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 12px rgba(255,45,155,0.5))" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative group text-[clamp(0.65rem,0.8vw,0.875rem)] uppercase tracking-[0.15em] font-['Rajdhani',sans-serif]"
                  >
                    <motion.span
                      className={`inline-block ${isActive ? "text-[#ff2d9b]" : "text-[#6b5a8a]"}`}
                      whileHover={{ color: "#ff2d9b", y: -2, textShadow: "0 0 8px rgba(255,45,155,0.5)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                    <span
                      className={`absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-[#ff2d9b] to-[#00e5ff] transition-all duration-300 ${
                        isActive
                          ? "w-full opacity-100 shadow-[0_0_8px_rgba(255,45,155,0.6)]"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(255,45,155,0.6)]"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 border border-[#ff2d9b]/20 rounded-[4px]"
              whileHover={{ borderColor: "rgba(255,45,155,0.6)", boxShadow: "0 0 12px rgba(255,45,155,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#ff2d9b]" />
              ) : (
                <Menu className="w-6 h-6 text-[#ff2d9b]" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-[rgba(8,6,15,0.88)] backdrop-blur-[28px] border-t border-[rgba(255,255,255,0.06)] shadow-[inset_0_-1px_0_rgba(255,45,155,0.08)] overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-base sm:text-lg uppercase tracking-[0.15em] transition-colors duration-200 font-['Rajdhani',sans-serif] ${
                        location.pathname === link.path
                          ? "text-[#ff2d9b]"
                          : "text-[#6b5a8a]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-16 sm:pt-18 lg:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-[#08060f] border-t border-[rgba(255,255,255,0.05)] relative overflow-hidden">
        <GridOverlay />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start text-center">
            <div className="sm:text-left flex flex-col items-center sm:items-start order-2 sm:order-1 mt-2 sm:mt-0">
              <h4 className="text-[clamp(0.7rem,1vw,0.875rem)] uppercase tracking-[0.3em] text-[#00e5ff] mb-3 font-['Orbitron',sans-serif]">
                Connect
              </h4>
              <div className="flex gap-4 text-[#6b5a8a]">
                <motion.a
                  href="https://www.instagram.com/dellusion.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block p-2.5 bg-[rgba(15,11,26,0.55)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.07)] rounded-[4px]"
                  aria-label="Instagram"
                  whileHover={{
                    borderColor: "rgba(255,45,155,0.6)",
                    color: "#ff2d9b",
                    boxShadow: "0 0 15px rgba(255,45,155,0.2), inset 0 1px 0 rgba(255,45,155,0.1)",
                    y: -3,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
                <motion.button
                  onClick={() => {
                    try {
                      const textArea = document.createElement("textarea");
                      textArea.value = "contact@dellusion.in";
                      textArea.style.position = "fixed";
                      textArea.style.left = "-999999px";
                      textArea.style.top = "-999999px";
                      document.body.appendChild(textArea);
                      textArea.focus();
                      textArea.select();
                      try {
                        document.execCommand("copy");
                        alert("Email address copied to clipboard: contact@dellusion.in");
                      } catch (err) {
                        alert("Could not copy email address. Contact us at: contact@dellusion.in");
                      }
                      textArea.remove();
                    } catch (e) {
                      alert("Could not copy email address. Contact us at: contact@dellusion.in");
                    }
                  }}
                  className="inline-block cursor-pointer p-2.5 bg-[rgba(15,11,26,0.55)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.07)] rounded-[4px]"
                  aria-label="Copy Email Address"
                  whileHover={{
                    borderColor: "rgba(0,229,255,0.6)",
                    color: "#00e5ff",
                    boxShadow: "0 0 15px rgba(0,229,255,0.2), inset 0 1px 0 rgba(0,229,255,0.1)",
                    y: -3,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center order-1 sm:order-2">
              <h3 className="mb-3 flex items-center justify-center">
                <img src={dellusionLogo} alt="Dellusion Entertainment" className="h-[203px] sm:h-[270px] w-auto mx-auto block py-4" />
              </h3>
            </div>

            <div className="sm:text-right flex flex-col items-center sm:items-end order-3 mt-2 sm:mt-0">
              <h4 className="text-[clamp(0.7rem,1vw,0.875rem)] uppercase tracking-[0.3em] text-[#00e5ff] mb-3 font-['Orbitron',sans-serif]">
                Navigation
              </h4>
              <div className="space-y-1.5">
                {navLinks.map((link) => (
                  <motion.div key={link.path} whileHover={{ x: -4 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
                    <Link
                      to={link.path}
                      className="block text-[#6b5a8a] hover:text-[#ff2d9b] text-[clamp(0.75rem,1.2vw,0.875rem)] transition-colors duration-200 font-['Rajdhani',sans-serif] tracking-wider"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.04)] text-center text-[#4a3d66] text-[clamp(0.7rem,1vw,0.8rem)] font-mono tracking-wider">
            © 2026 Dellusion Entertainment. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}