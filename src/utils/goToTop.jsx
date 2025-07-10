import React, { useEffect, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline"; // outline style

const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg transition duration-300"
      aria-label="Go to top"
    >
      <ChevronUpIcon className="h-6 w-6" />
    </button>
  );
};

export default GoToTopButton;
