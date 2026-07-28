import Link from "next/link";
import { TimelinePill } from "@/components/ui/TimelinePill";
import { Typography } from "@/components/ui/Typography";

const STAGE_MAP: Record<string, "read" | "thinking" | "edit" | "grep" | "done"> = {
  Sources: "read",
  Evidence: "thinking",
  Interview: "edit",
  Impact: "grep",
  Direction: "edit",
  Deck: "done",
  Review: "grep",
  Export: "done",
};

export function ProjectCard({
  id,
  name,
  stage,
  updatedLabel,
  description,
  meshGradient,
}: {
  id: string;
  name: string;
  stage: string;
  updatedLabel: string;
  description: string;
  meshGradient: string;
}) {
  return (
    <Link
      href={`/projects/${id}/${stage.toLowerCase()}`}
      className="block bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-[var(--radius-lg)] hover:border-[var(--color-primary)] hover:shadow-sm transition-all duration-200 cursor-pointer group overflow-hidden flex flex-col h-full"
    >
      <div 
        className="h-[120px] w-full" 
        style={{ backgroundImage: meshGradient, backgroundColor: "var(--color-canvas-soft)" }} 
      />
      
      <div className="p-[24px] flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <Typography variant="title-md" className="text-[var(--color-ink)]">{name}</Typography>
          <span className="text-[var(--color-primary)] opacity-0 group-hover:opacity-100 group-hover:translate-x-[4px] transition-all font-semibold">→</span>
        </div>
        
        <Typography variant="body-sm" className="mt-[8px] text-[var(--color-muted)] line-clamp-1">
          {description}
        </Typography>
        
        <div className="mt-[24px] flex-1">
          <div className="flex items-center gap-[8px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[var(--color-primary)] opacity-80" />
            <span className="text-[13px] font-medium text-[var(--color-ink)]">{stage}</span>
          </div>
        </div>
        
        <Typography variant="caption" className="mt-[16px] text-[var(--color-muted-soft)]">
          {updatedLabel}
        </Typography>
      </div>
    </Link>
  );
}
