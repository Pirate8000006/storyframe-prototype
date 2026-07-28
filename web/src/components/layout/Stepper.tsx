import Link from "next/link";
import { cn } from "@/lib/utils";
import { WORKFLOW_STEPS, StepKey, stepPath } from "@/data/workflow";

export function Stepper({
  projectId,
  current,
}: {
  projectId: string;
  current: StepKey;
}) {
  const currentIndex = WORKFLOW_STEPS.findIndex((s) => s.key === current);

  return (
    <div className="w-full h-[65px] bg-white border-b border-hairline flex items-center px-[32px]">
      <div className="flex items-center w-full max-w-[1000px] mx-auto">
        {WORKFLOW_STEPS.map((step, i) => {
          const done = i < currentIndex;
          const active = i === currentIndex;
          return (
            <div key={step.key} className="flex items-center flex-1 last:flex-none">
              <Link
                href={stepPath(projectId, step.key)}
                className="flex items-center gap-[8px] group"
              >
                <span
                  className={cn(
                    "w-[24px] h-[24px] rounded-full flex items-center justify-center text-[12px] font-semibold flex-shrink-0",
                    active && "bg-primary text-on-dark",
                    done && "bg-violet/15 text-violet",
                    !active && !done && "bg-neutral-tint text-secondary"
                  )}
                >
                  {i + 1}
                </span>
                <span
                  className={cn(
                    "text-[13px] font-medium whitespace-nowrap hidden sm:inline",
                    active ? "text-primary" : "text-secondary",
                    "group-hover:text-primary"
                  )}
                >
                  {step.label}
                </span>
              </Link>
              {i < WORKFLOW_STEPS.length - 1 && (
                <div
                  className={cn(
                    "h-px flex-1 mx-[12px]",
                    done ? "bg-violet/40" : "bg-hairline"
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
