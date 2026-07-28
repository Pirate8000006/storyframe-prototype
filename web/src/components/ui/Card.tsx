import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-white border border-hairline rounded-[16px] shadow-card-sm",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
