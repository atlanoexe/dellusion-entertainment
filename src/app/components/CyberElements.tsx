/** Reusable goth-cyberpunk UI decorative elements */

/** Corner brackets for HUD panels */
export function CornerBrackets({ color = "rgba(255,45,155,0.4)" }: { color?: string }) {
  const style = { borderColor: color };
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2" style={style} />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2" style={style} />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2" style={style} />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2" style={style} />
    </div>
  );
}

/**
 * HUD-style glass panel wrapper.
 * Uses glassmorphism: semi-transparent bg + backdrop-blur + inner highlight shadow.
 * Higher importance = less transparent (use className to override).
 */
export function HudPanel({
  children,
  className = "",
  glowOnHover = false,
}: {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}) {
  return (
    <div
      className={`relative bg-[rgba(15,11,26,0.55)] backdrop-blur-[14px] border border-[rgba(255,45,155,0.13)] rounded-[4px] shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] ${
        glowOnHover
          ? "transition-all duration-300 hover:bg-[rgba(15,11,26,0.72)] hover:border-[rgba(255,45,155,0.38)] hover:shadow-[0_0_25px_rgba(255,45,155,0.12),0_0_50px_rgba(0,229,255,0.06),0_12px_40px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.07)]"
          : ""
      } ${className}`}
    >
      <CornerBrackets />
      {children}
    </div>
  );
}

/**
 * Pure glass card — no HUD brackets, suitable for image cards, partner cards,
 * notification banners, dropdowns. Intensity controls opacity level.
 */
export function GlassCard({
  children,
  className = "",
  intensity = "mid",
  accentColor,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "mid" | "high";
  accentColor?: "magenta" | "cyan" | "purple";
}) {
  const bgMap = {
    low:  "bg-[rgba(15,11,26,0.35)]",
    mid:  "bg-[rgba(15,11,26,0.55)]",
    high: "bg-[rgba(15,11,26,0.82)]",
  };
  const borderMap = {
    magenta: "border-[rgba(255,45,155,0.2)]",
    cyan:    "border-[rgba(0,229,255,0.2)]",
    purple:  "border-[rgba(168,85,247,0.2)]",
    default: "border-[rgba(255,255,255,0.07)]",
  };
  const border = accentColor ? borderMap[accentColor] : borderMap.default;

  return (
    <div
      className={`${bgMap[intensity]} backdrop-blur-[14px] border ${border} rounded-[4px] shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Glass notification / alert banner.
 * Used for success messages, selection indicators, etc.
 */
export function GlassBanner({
  children,
  className = "",
  variant = "cyan",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "cyan" | "magenta" | "purple";
}) {
  const variantStyles = {
    cyan:    "bg-[rgba(0,229,255,0.07)] border-[rgba(0,229,255,0.25)] shadow-[0_4px_20px_rgba(0,229,255,0.08),inset_0_1px_0_rgba(0,229,255,0.08)]",
    magenta: "bg-[rgba(255,45,155,0.07)] border-[rgba(255,45,155,0.25)] shadow-[0_4px_20px_rgba(255,45,155,0.08),inset_0_1px_0_rgba(255,45,155,0.08)]",
    purple:  "bg-[rgba(168,85,247,0.07)] border-[rgba(168,85,247,0.25)] shadow-[0_4px_20px_rgba(168,85,247,0.08),inset_0_1px_0_rgba(168,85,247,0.08)]",
  };
  return (
    <div
      className={`backdrop-blur-[12px] border rounded-[4px] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );
}

/** Subtle grid overlay for sections */
export function GridOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,45,155,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,229,255,1) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

/** Thin neon divider line — dual color */
export function NeonDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-px ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff2d9b]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00e5ff]/15 to-transparent translate-y-px" />
    </div>
  );
}

/** Section label with decorative dashes */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="text-[#00e5ff]/50 font-mono text-xs tracking-widest">{"//>>"}</span>
      <span className="text-[#00e5ff]/70 font-mono text-xs uppercase tracking-[0.3em]">
        {children}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-[#00e5ff]/15 to-transparent" />
    </div>
  );
}