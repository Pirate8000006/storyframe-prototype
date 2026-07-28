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
    <div className="px-[48px] py-[48px] max-w-[1440px] w-full mx-auto">
      <h1 className="text-[28px] font-bold text-primary">Choose your story direction</h1>

      <div className="mt-[32px] grid grid-cols-3 gap-[24px]">
        {MOCK_DIRECTIONS.map((d) => (
          <div
            key={d.id}
            className="bg-white border border-hairline rounded-[16px] p-[24px] flex flex-col gap-[16px]"
          >
            <Badge variant="violet">{d.badge}</Badge>
            <p className="text-[18px] font-semibold text-primary leading-snug">
              &ldquo;{d.quote}&rdquo;
            </p>
            <div>
              <p className="text-[11px] font-semibold text-secondary tracking-wide">
                WHY IT&apos;S STRONG
              </p>
              <p className="text-[14px] text-primary mt-[4px]">{d.why}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-secondary tracking-wide">RISK</p>
              <p className="text-[14px] text-primary mt-[4px]">{d.risk}</p>
            </div>
            <Button
              fullWidth
              variant={selectedId === d.id ? "primary" : "secondary"}
              onClick={() => choose(d.id)}
            >
              Choose this direction
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
