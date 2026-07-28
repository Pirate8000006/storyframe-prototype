import * as React from "react";
import { Input, InputProps } from "./Input";
import { Typography } from "./Typography";

export interface TextFieldProps extends InputProps {
  label?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, className = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-[8px] w-full ${className}`}>
        {label && (
          <Typography variant="title-sm" className="text-[var(--color-ink)]">
            {label}
          </Typography>
        )}
        <Input ref={ref} {...props} />
      </div>
    );
  }
);
TextField.displayName = "TextField";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, className = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col gap-[8px] w-full ${className}`}>
        {label && (
          <Typography variant="title-sm" className="text-[var(--color-ink)]">
            {label}
          </Typography>
        )}
        <textarea
          ref={ref}
          className={`bg-[var(--color-surface-card)] text-[var(--color-ink)] text-[16px] leading-[1.5] rounded-[var(--radius-md)] px-[16px] py-[12px] min-h-[120px] border border-[var(--color-hairline-strong)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent placeholder:text-[var(--color-muted-soft)] disabled:opacity-50 disabled:cursor-not-allowed resize-y`}
          {...props}
        />
      </div>
    );
  }
);
TextArea.displayName = "TextArea";
