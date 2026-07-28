"use client";

import { cn } from "@/lib/utils";

type ChipGroupProps<T extends string> = {
  label?: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
};

export function ChipGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: ChipGroupProps<T>) {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      {label && (
        <span className="text-[14px] font-semibold text-[var(--color-ink)]">{label}</span>
      )}
      <div className="flex flex-wrap gap-[8px]">
        {options.map((opt) => {
          const selected = opt.value === value;
          return (
            <button
              type="button"
              key={opt.value}
              onClick={() => onChange(opt.value)}
              className={cn(
                "h-[38px] px-[16px] rounded-[var(--radius-md)] text-[14px] font-medium border transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                selected
                  ? "bg-[var(--color-primary)] text-[var(--color-on-primary)] border-[var(--color-primary)] shadow-sm"
                  : "bg-[var(--color-surface-card)] text-[var(--color-muted)] border-[var(--color-hairline)] hover:bg-[var(--color-canvas-soft)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:shadow-sm"
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
