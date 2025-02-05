import AnimatedBackground from "@/app/components/AnimatedBackground";

export default function Loading() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-xl text-white animate-pulse">Loading...</div>
      </div>
    </>
  );
} 