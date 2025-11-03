import { motion } from "motion/react";
import { Heart } from "lucide-react";

interface FloatingHeartsProps {
  count?: number;
}

export function FloatingHearts({ count = 20 }: FloatingHeartsProps) {
  // Reduce count on mobile for better performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const adjustedCount = isMobile ? Math.floor(count * 0.6) : count;
  
  const hearts = Array.from({ length: adjustedCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
    size: (isMobile ? 12 : 16) + Math.random() * (isMobile ? 12 : 16),
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-300"
          initial={{
            x: `${heart.x}vw`,
            y: "110vh",
            opacity: 0.7,
          }}
          animate={{
            y: -50,
            opacity: 0,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <Heart
            fill="currentColor"
            style={{ width: heart.size, height: heart.size }}
          />
        </motion.div>
      ))}
    </div>
  );
}
