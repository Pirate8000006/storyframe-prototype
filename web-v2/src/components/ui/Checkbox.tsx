"use client";

import { cn } from "@/lib/utils";

export function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
}) {
  return (
    <label className="flex items-start gap-[12px] cursor-pointer select-none group">
      <span
        onClick={() => onChange(!checked)}
        className={cn(
          "mt-[2px] flex-shrink-0 w-[20px] h-[20px] rounded-[6px] border-2 flex items-center justify-center transition-colors",
          checked 
            ? "bg-[var(--color-primary)] border-[var(--color-primary)]" 
            : "bg-[var(--color-surface-card)] border-[var(--color-hairline-strong)] group-hover:border-[var(--color-ink)]"
        )}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path
              d="M1 4L3.5 6.5L9 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="text-[14px] font-medium text-[var(--color-ink)] leading-snug">{label}</span>
    </label>
  );
}
