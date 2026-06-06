export default function AmbientLights() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Top-left -- Ice Blue */}
      <div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-cyan-500/30"
        style={{
          filter: "blur(140px)",
          animation: "breathe1 20s ease-in-out infinite",
        }}
      />

      {/* Bottom-right -- Soft Violet */}
      <div
        className="absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full bg-blue-500/25"
        style={{
          filter: "blur(130px)",
          animation: "breathe2 25s ease-in-out infinite",
        }}
      />

      {/* Center-right -- Mixed accent */}
      <div
        className="absolute top-1/3 -right-20 h-[450px] w-[450px] rounded-full bg-cyan-400/15"
        style={{
          filter: "blur(150px)",
          animation: "breathe3 30s ease-in-out infinite",
        }}
      />
    </div>
  );
}
