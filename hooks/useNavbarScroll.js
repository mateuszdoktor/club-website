import { useEffect, useState } from "react";

export function useNavbarScroll(isOpen) {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      if (isOpen) return;
      const currentY = window.scrollY;
      setScrolled(currentY > 50);
      setShowNavbar(currentY < 100 || currentY < lastY);
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return { scrolled, showNavbar };
}
