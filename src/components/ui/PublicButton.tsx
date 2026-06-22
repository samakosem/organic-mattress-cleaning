import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PublicButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "white" | "white-outline";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidthMobile?: boolean;
  align?: "left" | "center";
  className?: string;
}

export function PublicButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidthMobile = false,
  align,
  className,
}: PublicButtonProps) {
  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";
  return (
    <Link
      href={href}
      className={cn(
        "btn",
        `btn-${variant}`,
        sizeClass,
        fullWidthMobile && "w-full sm:w-auto",
        align === "center" && "mx-auto",
        className
      )}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Link>
  );
}
