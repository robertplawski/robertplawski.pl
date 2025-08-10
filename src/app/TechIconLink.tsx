import Link from "next/link";
import { ReactNode } from "react";

interface TechIconLinkProps {
  icon: ReactNode;
  href: string;
  label: string;
  className?: string;
}

export function TechIconLink({
  icon,
  href,
  label,
  className = "",
}: TechIconLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`text-4xl hover:text-neutral-400 transition-colors duration-200 ${className}`}
    >
      {icon}
    </Link>
  );
}
