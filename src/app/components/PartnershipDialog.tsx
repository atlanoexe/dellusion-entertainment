import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PartnershipOption {
  type: string;
  title: string;
  description: string;
  image: string;
}

interface PartnershipDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPartnership: (type: string) => void;
  partnerships: PartnershipOption[];
}

export function PartnershipDialog({
  isOpen,
  onClose,
  onSelectPartnership,
  partnerships,
}: PartnershipDialogProps) {
  const handleCardClick = (type: string) => {
    onSelectPartnership(type);
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            {/* Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
              />
            </Dialog.Overlay>

            {/* Content */}
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] max-w-6xl max-h-[90vh] overflow-y-auto"
              >
                {/* Dialog Container with gradient background */}
                <div className="relative bg-gradient-to-br from-[#1a0a2e] via-[#16213e] to-[#0f0c29] rounded-3xl border border-violet-500/30 shadow-[0_0_80px_rgba(139,92,246,0.3)] overflow-hidden">
                  {/* Background gradient orbs */}
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600 rounded-full blur-[150px] opacity-20"></div>
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full blur-[150px] opacity-20"></div>

                  {/* Close Button */}
                  <Dialog.Close asChild>
                    <button
                      className="absolute top-6 right-6 p-3 bg-white/5 backdrop-blur-xl border border-violet-500/30 rounded-xl hover:bg-white/10 hover:border-violet-400/50 transition-all duration-300 z-10 group"
                      aria-label="Close"
                    >
                      <X className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                    </button>
                  </Dialog.Close>

                  {/* Content */}
                  <div className="relative p-8 md:p-12 lg:p-16">
                    {/* Header */}
                    <div className="text-center mb-12">
                      <Dialog.Title asChild>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4">
                          <span className="text-white">Partnership </span>
                          <span className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                            Opportunities
                          </span>
                        </h2>
                      </Dialog.Title>
                      <Dialog.Description asChild>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                          Join us in shaping India's biggest Asian pop culture experience.
                        </p>
                      </Dialog.Description>
                    </div>

                    {/* Partnership Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {partnerships.map((partnership, index) => (
                        <motion.button
                          key={partnership.type}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          onClick={() => handleCardClick(partnership.type)}
                          className="group relative text-left overflow-hidden rounded-2xl bg-gradient-to-br from-violet-950/40 via-fuchsia-950/20 to-violet-950/40 backdrop-blur-xl border border-violet-500/30 hover:border-violet-400/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:-translate-y-2"
                        >
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden">
                            <ImageWithFallback
                              src={partnership.image}
                              alt={partnership.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <h3 className="text-xl md:text-2xl font-black tracking-tight text-white mb-3 group-hover:text-violet-300 transition-colors">
                              {partnership.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                              {partnership.description}
                            </p>
                          </div>

                          {/* Hover glow effect */}
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
