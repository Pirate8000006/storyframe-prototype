import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-on-dark hover:bg-[#332c24]",
  secondary:
    "bg-transparent text-primary border border-border hover:bg-[#f5eada]",
  ghost: "bg-transparent text-secondary hover:bg-neutral-tint hover:text-primary",
  accent:
    "bg-gradient-to-r from-violet to-gold text-primary hover:brightness-105",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-[13px] px-[14px] py-[9px]",
  md: "text-[14px] px-[24px] py-[13px]",
  lg: "text-[15px] px-[30px] py-[16px]",
};

function buttonClasses(opts: {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
}) {
  const { variant = "primary", size = "md", fullWidth, className } = opts;
  return cn(
    "inline-flex items-center justify-center gap-[10px] rounded-[8px] font-medium whitespace-nowrap transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className
  );
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
};

export function Button({
  variant,
  size,
  fullWidth,
  className,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={buttonClasses({ variant, size, fullWidth, className })}
      {...rest}
    />
  );
}

export function ButtonLink({
  variant,
  size,
  fullWidth,
  className,
  ...rest
}: CommonProps & LinkProps & { className?: string; children: React.ReactNode }) {
  return (
    <Link
      className={buttonClasses({ variant, size, fullWidth, className })}
      {...rest}
    />
  );
}
