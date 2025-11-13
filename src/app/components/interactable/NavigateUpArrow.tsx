"use client"
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LucideArrowUp } from "lucide-react";

export default function NavigateUpArrow() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "border-1 p-4 bg-neutral-950/50 backdrop-blur-lg fixed bottom-8 right-8 rounded-full z-100 shadow-lg cursor-pointer hover:scale-[1.1] transition-all hover:bg-neutral-800/50",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <LucideArrowUp />
    </button>
  );
}

