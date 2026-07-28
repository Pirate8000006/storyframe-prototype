import * as React from "react";

type TypographyVariant = 
  | "display-mega" 
  | "display-lg" 
  | "display-md" 
  | "display-sm" 
  | "title-md" 
  | "title-sm" 
  | "body-md" 
  | "body-tracked" 
  | "body-sm" 
  | "caption" 
  | "code"
  | "nav-link";

export interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement> {
  variant: TypographyVariant;
  as?: React.ElementType;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className = "", variant, as, ...props }, ref) => {
    let Component: React.ElementType = as || "p";
    let variantStyles = "";

    switch (variant) {
      case "display-mega":
        Component = as || "h1";
        variantStyles = "text-[72px] font-semibold leading-[1.1] tracking-[-2.16px]";
        break;
      case "display-lg":
        Component = as || "h2";
        variantStyles = "text-[36px] font-semibold leading-[1.2] tracking-[-0.72px]";
        break;
      case "display-md":
        Component = as || "h3";
        variantStyles = "text-[26px] font-semibold leading-[1.25] tracking-[-0.325px]";
        break;
      case "display-sm":
        Component = as || "h4";
        variantStyles = "text-[22px] font-semibold leading-[1.3] tracking-[-0.11px]";
        break;
      case "title-md":
        variantStyles = "text-[18px] font-bold leading-[1.4]";
        break;
      case "title-sm":
        variantStyles = "text-[16px] font-bold leading-[1.4]";
        break;
      case "body-md":
        variantStyles = "text-[16px] font-medium leading-[1.5]";
        break;
      case "body-tracked":
        variantStyles = "text-[16px] font-medium leading-[1.5] tracking-[0.08px]";
        break;
      case "body-sm":
        variantStyles = "text-[15px] font-medium leading-[1.5]"; // Bumped size and weight
        break;
      case "caption":
        variantStyles = "text-[14px] font-medium leading-[1.4]"; // Bumped size and weight
        break;
      case "code":
        Component = as || "code";
        variantStyles = "font-mono text-[14px] font-medium leading-[1.5]"; // Bumped size and weight
        break;
      case "nav-link":
        Component = as || "a";
        variantStyles = "text-[14px] font-medium leading-[1.5]";
        break;
    }

    return (
      <Component
        ref={ref as any}
        className={`${variantStyles} ${className}`}
        {...props}
      />
    );
  }
);
Typography.displayName = "Typography";
