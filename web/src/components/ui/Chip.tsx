"use client";

import { cn } from "@/lib/utils";

type ChipGroupProps<T extends string> = {
  label?: string;
  options: { value: T; label: string }[];
  value: T | "";
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
        <span className="text-[12px] font-medium text-secondary">{label}</span>
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
                "h-[38px] px-[16px] rounded-[8px] text-[14px] font-medium border transition-colors",
                selected
                  ? "bg-primary text-on-dark border-primary"
                  : "bg-white text-secondary border-border hover:bg-neutral-tint"
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
