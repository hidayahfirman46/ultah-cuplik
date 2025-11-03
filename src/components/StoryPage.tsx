import { motion } from "motion/react";
import { ReactNode } from "react";

interface StoryPageProps {
  title?: string;
  content: ReactNode;
  backgroundImage?: string;
  backgroundOverlay?: string;
  children?: ReactNode;
}

export function StoryPage({
  title,
  content,
  backgroundImage,
  backgroundOverlay = "rgba(0, 0, 0, 0.3)",
  children,
}: StoryPageProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: backgroundOverlay }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 py-8 md:px-12 md:py-12 overflow-y-auto">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-4 md:mb-8 text-white drop-shadow-lg"
          >
            {title}
          </motion.h2>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-center w-full"
        >
          {content}
        </motion.div>

        {children}
      </div>
    </div>
  );
}
