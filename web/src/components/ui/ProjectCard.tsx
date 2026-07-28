import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { meshGradient } from "@/lib/meshGradient";

const STAGE_BADGE: Record<string, "violet" | "gold" | "green" | "neutral"> = {
  Sources: "neutral",
  Evidence: "gold",
  Interview: "gold",
  Impact: "gold",
  Direction: "violet",
  Deck: "violet",
  Review: "green",
  Export: "green",
};

export function ProjectCard({
  id,
  name,
  description,
  tags,
  stage,
  updatedLabel,
}: {
  id: string;
  name: string;
  description: string;
  tags: string[];
  stage: string;
  updatedLabel: string;
}) {
  return (
    <Link
      href={`/projects/${id}/${stage.toLowerCase()}`}
      className="flex flex-col bg-white border border-hairline rounded-[16px] overflow-hidden hover:shadow-card-md transition-shadow"
    >
      <div className="h-[120px]" style={meshGradient(id)} />

      <div className="flex flex-col gap-[10px] p-[20px]">
        <div className="flex items-center justify-between gap-[12px]">
          <h3 className="text-[16px] font-semibold text-primary leading-snug">
            {name}
          </h3>
          <Badge variant={STAGE_BADGE[stage] ?? "neutral"} className="shrink-0">
            {stage}
          </Badge>
        </div>

        <p className="text-[13px] text-secondary leading-snug line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-[6px] mt-[2px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center h-[22px] px-[10px] rounded-full text-[11px] font-medium text-secondary bg-neutral-tint"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-[12px] text-placeholder mt-[4px]">{updatedLabel}</p>
      </div>
    </Link>
  );
}
