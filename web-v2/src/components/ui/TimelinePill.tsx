import * as React from "react";

type Stage = "thinking" | "grep" | "read" | "edit" | "done";

export interface TimelinePillProps extends React.HTMLAttributes<HTMLDivElement> {
  stage: Stage;
  label: string;
}

export const TimelinePill = React.forwardRef<HTMLDivElement, TimelinePillProps>(
  ({ className = "", stage, label, ...props }, ref) => {
    let stageStyles = "";

    switch (stage) {
      case "thinking":
        stageStyles = "bg-[var(--color-timeline-thinking)] text-[var(--color-ink)]";
        break;
      case "grep":
        stageStyles = "bg-[var(--color-timeline-grep)] text-[var(--color-ink)]";
        break;
      case "read":
        stageStyles = "bg-[var(--color-timeline-read)] text-[var(--color-ink)]";
        break;
      case "edit":
        stageStyles = "bg-[var(--color-timeline-edit)] text-[var(--color-ink)]";
        break;
      case "done":
        stageStyles = "bg-[var(--color-timeline-done)] text-[var(--color-on-primary)]";
        break;
    }

    return (
      <div
        ref={ref}
        className={`inline-flex items-center justify-center font-sans font-semibold text-[11px] leading-[1.4] tracking-[0.88px] uppercase rounded-[var(--radius-pill)] px-[10px] py-[4px] ${stageStyles} ${className}`}
        {...props}
      >
        {label}
      </div>
    );
  }
);
TimelinePill.displayName = "TimelinePill";
