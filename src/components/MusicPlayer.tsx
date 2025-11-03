import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "motion/react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a romantic piano background music URL
    // Using a royalty-free music URL (placeholder - in production, use actual music file)
    audioRef.current = new Audio("music/bg.mp4");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // In a real implementation, you would have an actual audio file
        // For now, we'll just toggle the state
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log("Autoplay prevented");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      onClick={toggleMusic}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
      ) : (
        <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-white" />
      )}
    </motion.button>
  );
}
