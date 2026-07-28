import { cn } from "@/lib/utils";

type BadgeVariant = "violet" | "gold" | "green" | "red" | "neutral" | "accent";

const variantClasses: Record<BadgeVariant, string> = {
  violet: "bg-info-tint text-violet",
  gold: "bg-warning-tint text-[#8a6f1f]",
  green: "bg-success-tint text-success",
  red: "bg-danger-tint text-danger",
  neutral: "bg-neutral-tint text-secondary border border-hairline",
  accent: "bg-gradient-to-r from-violet to-gold text-primary",
};

export function Badge({
  variant = "neutral",
  children,
  className,
}: {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center h-[27px] px-[14px] rounded-full text-[12px] font-semibold whitespace-nowrap",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
