import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TimelineScrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 h-full flex flex-col items-center">
      {/* Timeline */}
      <div className="relative w-4 h-full  overflow-hidden">
        <motion.div
          className="absolute top-0 w-4 bg-rosso"
          initial={{ height: 0 }}
          animate={{ height: `${scrollProgress}%` }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />
      </div>

    
    </div>
  );
};

export default TimelineScrollbar;
