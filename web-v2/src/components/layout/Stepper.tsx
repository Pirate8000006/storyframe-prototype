import Link from "next/link";
import { cn } from "@/lib/utils";
import { WORKFLOW_STEPS, StepKey, stepPath } from "@/data/workflow";
import { Typography } from "@/components/ui/Typography";

export function Stepper({
  projectId,
  current,
}: {
  projectId: string;
  current: StepKey;
}) {
  const currentIndex = WORKFLOW_STEPS.findIndex((s) => s.key === current);

  return (
    <div className="w-full bg-[var(--color-surface-card)] border-b border-[var(--color-hairline)] px-[32px] py-[16px]">
      <div className="flex items-center w-full max-w-[1200px] mx-auto overflow-x-auto no-scrollbar">
        {WORKFLOW_STEPS.map((step, i) => {
          const done = i < currentIndex;
          const active = i === currentIndex;
          return (
            <div key={step.key} className="flex items-center flex-1 last:flex-none min-w-[120px]">
              <Link
                href={stepPath(projectId, step.key)}
                className="flex items-center gap-[12px] group cursor-pointer"
              >
                <div
                  className={cn(
                    "w-[28px] h-[28px] rounded-full flex items-center justify-center text-[12px] font-semibold flex-shrink-0 transition-colors duration-200",
                    active && "bg-[var(--color-primary)] text-[var(--color-on-primary)] shadow-sm",
                    done && "bg-[var(--color-timeline-done)] text-[var(--color-on-primary)]",
                    !active && !done && "bg-[var(--color-surface-strong)] text-[var(--color-muted-soft)] group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-on-primary)]"
                  )}
                >
                  {i + 1}
                </div>
                <Typography
                  as="span"
                  variant="nav-link"
                  className={cn(
                    "whitespace-nowrap transition-all duration-200 hidden sm:inline",
                    active ? "text-[var(--color-ink)] font-semibold" : "text-[var(--color-muted)]",
                    !active && "group-hover:text-[var(--color-primary)]"
                  )}
                >
                  {step.label}
                </Typography>
              </Link>
              {i < WORKFLOW_STEPS.length - 1 && (
                <div
                  className={cn(
                    "h-px flex-1 mx-[16px] transition-colors duration-200",
                    done ? "bg-[var(--color-timeline-done)]" : "bg-[var(--color-hairline)]"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
