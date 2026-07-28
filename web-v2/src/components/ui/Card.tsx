import * as React from "react";

type CardVariant = "feature" | "pricing" | "pricing-featured" | "testimonial" | "ide-mockup";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "feature", ...props }, ref) => {
    let variantStyles = "";

    switch (variant) {
      case "feature":
        // Background {colors.surface-card}, text {colors.ink}, type {typography.title-md}, rounded {rounded.lg}, padding 24px. 1px {colors.hairline} border.
        variantStyles = "bg-[var(--color-surface-card)] text-[var(--color-ink)] rounded-[var(--radius-lg)] p-[24px] border border-[var(--color-hairline)]";
        break;
      case "pricing":
        // Background {colors.surface-card}, rounded {rounded.lg}, padding 32px, 1px {colors.hairline} border.
        variantStyles = "bg-[var(--color-surface-card)] text-[var(--color-ink)] rounded-[var(--radius-lg)] p-[32px] border border-[var(--color-hairline)]";
        break;
      case "pricing-featured":
        // Background {colors.ink}, text {colors.canvas}. Same shape, dark inversion signals "highlighted" without colored ribbon.
        variantStyles = "bg-[var(--color-ink)] text-[var(--color-canvas)] rounded-[var(--radius-lg)] p-[32px]";
        break;
      case "testimonial":
        // Quote card. Background {colors.surface-card}, text {colors.body}, rounded {rounded.lg}, padding 24px.
        variantStyles = "bg-[var(--color-surface-card)] text-[var(--color-body)] rounded-[var(--radius-lg)] p-[24px]";
        break;
      case "ide-mockup":
        // A white card containing a multi-pane IDE mockup (sidebar + main editor + chat panel + terminal). Background {colors.surface-card}, rounded {rounded.lg} (12px), 1px {colors.hairline} border, no padding.
        variantStyles = "bg-[var(--color-surface-card)] text-[var(--color-ink)] rounded-[var(--radius-lg)] border border-[var(--color-hairline)] overflow-hidden";
        break;
    }

    return (
      <div
        ref={ref}
        className={`${variantStyles} ${className}`}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export interface IDEPaneProps extends React.HTMLAttributes<HTMLDivElement> {}

export const IDEPane = React.forwardRef<HTMLDivElement, IDEPaneProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-[var(--color-canvas-soft)] text-[var(--color-body)] font-mono text-[13px] rounded-[var(--radius-md)] p-[16px] ${className}`}
        {...props}
      />
    );
  }
);
IDEPane.displayName = "IDEPane";
