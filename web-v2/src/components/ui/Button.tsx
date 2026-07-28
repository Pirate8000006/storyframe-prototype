import * as React from "react";
import Link, { LinkProps } from "next/link";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "download" | "ghost" | "accent";

export interface CommonProps {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  size?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, CommonProps {}

function getButtonClasses(variant: ButtonVariant = "primary", fullWidth: boolean = false, className: string = "") {
  let baseStyles = "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-50 disabled:pointer-events-none";
  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles = "bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-active)] active:bg-[var(--color-primary-active)] text-[14px] leading-none px-[18px] py-[10px] h-[40px] rounded-[var(--radius-md)]";
      break;
    case "secondary":
      variantStyles = "bg-[var(--color-surface-card)] text-[var(--color-ink)] hover:bg-[var(--color-canvas-soft)] border border-[var(--color-hairline-strong)] text-[14px] leading-none px-[17px] py-[9px] h-[40px] rounded-[var(--radius-md)]";
      break;
    case "tertiary":
      variantStyles = "bg-transparent text-[var(--color-ink)] hover:text-[var(--color-primary)] text-[14px] leading-none";
      break;
    case "download":
      variantStyles = "bg-[var(--color-ink)] text-[var(--color-canvas)] hover:opacity-90 text-[14px] leading-none px-[20px] py-[12px] h-[44px] rounded-[var(--radius-md)]";
      break;
    case "ghost":
      variantStyles = "bg-transparent text-[var(--color-muted)] hover:bg-[var(--color-canvas-soft)] hover:text-[var(--color-ink)] text-[14px] leading-none px-[17px] py-[9px] h-[40px] rounded-[var(--radius-md)]";
      break;
    case "accent":
      variantStyles = "bg-[var(--color-timeline-edit)] text-[var(--color-ink)] hover:opacity-90 text-[14px] leading-none px-[18px] py-[10px] h-[40px] rounded-[var(--radius-md)]";
      break;
  }

  let widthStyles = fullWidth ? "w-full" : "";

  return `${baseStyles} ${variantStyles} ${widthStyles} ${className}`.trim();
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", fullWidth = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={getButtonClasses(variant, fullWidth, className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export const ButtonLink = React.forwardRef<HTMLAnchorElement, CommonProps & LinkProps & { className?: string; children: React.ReactNode }>(
  ({ className = "", variant = "primary", fullWidth = false, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className={getButtonClasses(variant, fullWidth, className)}
        {...props}
      />
    );
  }
);
ButtonLink.displayName = "ButtonLink";
