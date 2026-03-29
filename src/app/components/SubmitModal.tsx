import { motion, AnimatePresence } from "motion/react";
import { Loader2, CheckCircle2 } from "lucide-react";

interface SubmitModalProps {
  isSubmitting: boolean;
  isSuccess: boolean;
  onClose: () => void;
}

export function SubmitModal({ isSubmitting, isSuccess, onClose }: SubmitModalProps) {
  const isOpen = isSubmitting || isSuccess;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          onClick={() => { if (isSuccess) onClose(); }}
        >
          <div className="absolute inset-0 bg-[#08060f]/80 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative w-full max-w-sm bg-[#0d0a14] border border-[#ff2d9b]/20 rounded-lg p-8 sm:p-10 text-center shadow-[0_0_60px_rgba(255,45,155,0.1)]"
            onClick={(e) => e.stopPropagation()}
          >
            {isSubmitting && !isSuccess && (
              <div className="flex flex-col items-center gap-5">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                  <Loader2 className="w-12 h-12 text-[#ff2d9b]" />
                </motion.div>
                <p className="text-[#d4c0f0] text-[clamp(1rem,2vw,1.25rem)] font-['Orbitron',sans-serif] tracking-wider">
                  SUBMITTING...
                </p>
                <p className="text-[#6b5a8a] text-[clamp(0.8rem,1.2vw,0.9rem)]">
                  Please wait while we process your request
                </p>
              </div>
            )}

            {isSuccess && (
              <div className="flex flex-col items-center gap-5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <CheckCircle2 className="w-14 h-14 text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]" />
                </motion.div>
                <p className="text-[#f0e6ff] text-[clamp(1.1rem,2vw,1.4rem)] font-['Orbitron',sans-serif] tracking-wider">
                  SUBMITTED!
                </p>
                <p className="text-[#6b5a8a] text-[clamp(0.8rem,1.2vw,0.9rem)]">
                  We'll get back to you soon
                </p>
                <p className="text-[#4a3d66] text-[clamp(0.7rem,1vw,0.8rem)] mt-2">
                  Tap anywhere to close
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
