import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"; // Importa React Router

const TimelineScrollbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation(); // Ottieni la route attuale

  useEffect(() => {
    // Resetta lo scroll quando cambia pagina
    window.scrollTo(0, 0);
    setScrollProgress(0);
  }, [location.pathname]); // Triggera il reset quando cambia la route

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
      <div className="relative w-4 h-full overflow-hidden">
        <motion.div
          className="absolute top-0 w-4 bg-red-rosso" // Cambiato bg-rosso con bg-red-500 per Tailwind
          initial={{ height: 0 }}
          animate={{ height: `${scrollProgress}%` }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default TimelineScrollbar;
