import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "neutral" | "gold" | "green" | "red" | "violet" | "blue" | string;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = "neutral", children, ...props }, ref) => {
    let variantStyles = "bg-[var(--color-surface-strong)] text-[var(--color-ink)]";

    switch (variant) {
      case "gold":
        variantStyles = "bg-[var(--color-timeline-done)] text-[var(--color-on-primary)]";
        break;
      case "green":
        variantStyles = "bg-[var(--color-timeline-grep)] text-[var(--color-ink)]";
        break;
      case "red":
        variantStyles = "bg-[var(--color-semantic-error)] text-[var(--color-on-primary)]";
        break;
      case "violet":
      case "blue":
        variantStyles = "bg-[var(--color-timeline-edit)] text-[var(--color-ink)]";
        break;
    }

    return (
      <div
        ref={ref}
        className={`inline-flex items-center justify-center font-sans font-semibold text-[11px] leading-[1.4] tracking-[0.88px] uppercase rounded-[var(--radius-pill)] px-[10px] py-[4px] ${variantStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Badge.displayName = "Badge";
