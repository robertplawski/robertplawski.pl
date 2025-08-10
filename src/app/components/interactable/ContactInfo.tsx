"use client";
import { ReactElement, useEffect, useState } from "react";

interface ContactInfoProps {
  icon: ReactElement;
  label: string;
  href?: string;
  value: string;
  fallback?: string;
  variant?: "small" | "medium" | "large";
}

export const ContactInfo = ({
  label,
  icon,
  href,
  value,
  fallback,
  variant = "medium",
}: ContactInfoProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizeClasses = {
    small: "text-sm gap-2",
    medium: "text-base gap-3",
    large: "text-lg gap-4",
  };

  const iconSizes = {
    small: "text-base",
    medium: "text-lg",
    large: "text-xl",
  };

  return (
    <a
      className={`flex items-center ${sizeClasses[variant]} text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors group`}
      title={label}
      href={mounted ? href : ""}
      target={
        href && !href.startsWith("mailto:") && !href.startsWith("tel:")
          ? "_blank"
          : undefined
      }
      rel={
        href && !href.startsWith("mailto:") && !href.startsWith("tel:")
          ? "noopener noreferrer"
          : undefined
      }
    >
      <span
        className={`transition-transform group-hover:scale-110 ${iconSizes[variant]}`}
      >
        {icon}
      </span>
      <span>{mounted ? value : fallback || value}</span>
    </a>
  );
};
