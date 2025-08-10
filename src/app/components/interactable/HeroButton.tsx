import { PropsWithChildren } from "react";

interface HeroButtonProps extends PropsWithChildren {
  href?: string;
  variant: "hero" | "secondary";
}

export const HeroButton = ({ href, variant, children }: HeroButtonProps) => {
  return (
    <a
      href={href}
      className={`cursor-pointer px-6 py-3 text-center rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
        variant === "hero"
          ? "bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700 hover:border-neutral-600 shadow-lg hover:shadow-xl hover:shadow-neutral-900/50 focus:ring-neutral-600"
          : variant === "secondary"
          ? "text-neutral-300 border-2 border-neutral-600 hover:bg-neutral-800 hover:text-white hover:border-neutral-500 focus:ring-neutral-500"
          : ""
      }`}
    >
      {children}
    </a>
  );
};
