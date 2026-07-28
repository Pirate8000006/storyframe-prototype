"use client";

import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { IMPACT_LADDER, MOCK_IMPACT_STATEMENTS } from "@/data/fixtures";
import { stepPath } from "@/data/workflow";

export default function ImpactPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const router = useRouter();

  return (
    <div className="px-[48px] py-[48px] max-w-[1440px] w-full mx-auto relative pb-[120px]">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[28px] font-bold text-[var(--color-ink)]">Impact Finder</h1>
          <p className="text-[14px] text-[var(--color-muted)] mt-[8px]">
            No numbers is a proof problem, not a story problem.
          </p>
        </div>
        <Button 
          variant="primary" 
          onClick={() => router.push(stepPath(projectId, "direction"))}
          className="shadow-sm cursor-pointer"
        >
          Continue to Direction →
        </Button>
      </div>

      <div className="mt-[48px] grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-[32px] items-start">
        <div className="bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-[var(--radius-lg)] p-[24px]">
          <p className="text-[14px] font-semibold text-[var(--color-ink)] mb-[16px]">Evidence ladder</p>
          <div className="flex flex-col gap-[8px]">
            {IMPACT_LADDER.map((level) => (
              <div
                key={level}
                className="h-[40px] px-[16px] rounded-[var(--radius-md)] bg-[var(--color-canvas)] flex items-center text-[14px] font-medium text-[var(--color-ink)] border border-[var(--color-hairline)]"
              >
                {level}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <p className="text-[14px] font-semibold text-[var(--color-ink)]">
            Generated impact statements
          </p>
          <div className="flex flex-col gap-[16px]">
            {MOCK_IMPACT_STATEMENTS.map((s) => (
              <div
                key={s.id}
                className="bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-[var(--radius-lg)] px-[24px] py-[24px] flex items-center justify-between gap-[24px] hover:border-[var(--color-hairline-strong)] transition-colors cursor-pointer group"
              >
                <p className="text-[16px] font-medium text-[var(--color-ink)] leading-[1.5] group-hover:text-[var(--color-primary)] transition-colors">{s.text}</p>
                <Badge variant="violet">{s.level}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
