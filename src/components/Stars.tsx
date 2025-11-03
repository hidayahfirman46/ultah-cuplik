import { motion } from "motion/react";

interface StarsProps {
  count?: number;
}

export function Stars({ count = 100 }: StarsProps) {
  // Reduce count on mobile for better performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const adjustedCount = isMobile ? Math.floor(count * 0.5) : count;
  
  const stars = Array.from({ length: adjustedCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (isMobile ? 2 : 3) + 1,
    delay: Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
