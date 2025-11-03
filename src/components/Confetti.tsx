import { motion } from "motion/react";

interface ConfettiProps {
  count?: number;
}

export function Confetti({ count = 50 }: ConfettiProps) {
  // Reduce count on mobile for better performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const adjustedCount = isMobile ? Math.floor(count * 0.6) : count;
  
  const confettiPieces = Array.from({ length: adjustedCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    rotate: Math.random() * 360,
    color: [
      "bg-pink-400",
      "bg-purple-400",
      "bg-blue-400",
      "bg-yellow-400",
      "bg-red-400",
    ][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className={`absolute w-2 h-2 ${piece.color} rounded-sm`}
          initial={{
            x: `${piece.x}vw`,
            y: -20,
            rotate: 0,
            opacity: 1,
          }}
          animate={{
            y: "110vh",
            rotate: piece.rotate,
            opacity: 0,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
