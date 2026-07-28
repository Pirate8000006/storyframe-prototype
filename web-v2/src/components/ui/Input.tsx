import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`bg-[var(--color-surface-card)] text-[var(--color-ink)] text-[16px] leading-[1.5] rounded-[var(--radius-md)] px-[16px] py-[12px] h-[44px] border border-[var(--color-hairline-strong)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent placeholder:text-[var(--color-muted-soft)] disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
