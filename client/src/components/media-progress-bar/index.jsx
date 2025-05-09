import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

function MediaProgressbar({ isMediaUploading, progress }) {
  const [showProgress, setShowProgress] = useState(false);
  
  // Convert progress to a percentage string for width
  const progressPercent = `${progress}%`;
  
  const motionProgress = useMotionValue("0%");
  const animatedProgress = useSpring(motionProgress, {
    stiffness: 50,  // Reduced stiffness for smoother completion
    damping: 20,    // Reduced damping to allow full extension
  });

  useEffect(() => {
    if (isMediaUploading) {
      setShowProgress(true);
      motionProgress.set(progressPercent);
    } else if (progress >= 100) {
      const timer = setTimeout(() => {
        setShowProgress(false);
        motionProgress.set("0%");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isMediaUploading, progress, motionProgress, progressPercent]);

  if (!showProgress) return null;

  return (
    <div
      className="w-full bg-gray-300 rounded-full h-4 mt-6 mb-6 relative overflow-hidden shadow-inner"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
    >
      <motion.div
        className="h-4 rounded-full"
        style={{
          width: animatedProgress,
          background: "linear-gradient(90deg, #3b82f6, #6366f1)",
          boxShadow: "0 0 10px rgba(99, 102, 241, 0.6)",
        }}
      >
        {progress >= 100 && isMediaUploading && (
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-20"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

export default MediaProgressbar;
