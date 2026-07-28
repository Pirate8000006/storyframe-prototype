"use client";

import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MOCK_DIRECTIONS } from "@/data/fixtures";
import { stepPath } from "@/data/workflow";
import { useAppStore } from "@/store/useAppStore";

export default function DirectionPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const router = useRouter();
  const selectedId = useAppStore((s) => s.selectedDirectionId);
  const selectDirection = useAppStore((s) => s.selectDirection);

  function choose(id: string) {
    selectDirection(id);
    router.push(stepPath(projectId, "deck"));
  }

  return (
    <div className="px-[48px] py-[48px] max-w-[1440px] w-full mx-auto relative pb-[120px]">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[28px] font-bold text-[var(--color-ink)]">Choose your story direction</h1>
        </div>
      </div>

      <div className="mt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {MOCK_DIRECTIONS.map((d) => (
          <div
            key={d.id}
            className={`bg-[var(--color-surface-card)] border rounded-[var(--radius-lg)] p-[32px] flex flex-col gap-[24px] transition-colors cursor-pointer ${selectedId === d.id ? 'border-[var(--color-primary)] ring-1 ring-[var(--color-primary)] shadow-sm' : 'border-[var(--color-hairline)] hover:border-[var(--color-hairline-strong)]'}`}
            onClick={() => choose(d.id)}
          >
            <div>
              <Badge variant="violet">{d.badge}</Badge>
            </div>
            <p className="text-[20px] font-semibold text-[var(--color-ink)] leading-[1.4]">
              &ldquo;{d.quote}&rdquo;
            </p>
            <div className="mt-auto flex flex-col gap-[16px]">
              <div>
                <p className="text-[11px] font-semibold text-[var(--color-muted)] tracking-[0.88px] uppercase">
                  WHY IT&apos;S STRONG
                </p>
                <p className="text-[14px] text-[var(--color-ink)] font-medium mt-[6px]">{d.why}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[var(--color-muted)] tracking-[0.88px] uppercase">RISK</p>
                <p className="text-[14px] text-[var(--color-ink)] font-medium mt-[6px]">{d.risk}</p>
              </div>
              <Button
                fullWidth
                variant={selectedId === d.id ? "primary" : "secondary"}
                onClick={(e) => { e.stopPropagation(); choose(d.id); }}
                className="mt-[8px]"
              >
                {selectedId === d.id ? "Selected" : "Choose this direction"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
