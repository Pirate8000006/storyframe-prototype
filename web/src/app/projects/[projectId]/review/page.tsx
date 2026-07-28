"use client";

import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { MOCK_REVIEW_CHECKS } from "@/data/fixtures";
import { stepPath } from "@/data/workflow";
import { useAppStore, useUnresolvedChecks } from "@/store/useAppStore";

const SEVERITY_BADGE: Record<string, "red" | "gold" | "neutral"> = {
  Blocker: "red",
  Warning: "gold",
  Notice: "neutral",
};

export default function ReviewPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const router = useRouter();
  const checks = useUnresolvedChecks();
  const resolveCheck = useAppStore((s) => s.resolveCheck);

  const blockers = checks.filter((c) => c.severity === "Blocker").length;
  const warnings = checks.filter((c) => c.severity === "Warning").length;

  return (
    <div className="px-[48px] py-[48px] max-w-[1440px] w-full mx-auto">
      <h1 className="text-[28px] font-bold text-primary">Review & verify</h1>
      <div className="mt-[16px] flex gap-[10px]">
        <Badge variant={blockers > 0 ? "red" : "green"}>
          {blockers} blocker{blockers === 1 ? "" : "s"}
        </Badge>
        <Badge variant={warnings > 0 ? "gold" : "green"}>
          {warnings} warning{warnings === 1 ? "" : "s"}
        </Badge>
      </div>

      <div className="mt-[24px] flex flex-col">
        {checks.length === 0 && (
          <p className="text-[14px] text-secondary py-[24px]">
            All checks resolved. You&apos;re ready to export.
          </p>
        )}
        {checks.map((c) => (
          <div
            key={c.id}
            className="h-[55px] flex items-center gap-[16px] border-b border-hairline last:border-0"
          >
            <Badge variant={SEVERITY_BADGE[c.severity]}>{c.severity}</Badge>
            <p className="flex-1 text-[14px] text-primary">{c.message}</p>
            <button
              onClick={() => resolveCheck(c.id)}
              className="text-[13px] font-medium text-violet hover:underline whitespace-nowrap"
            >
              {c.slide ? `Go to slide ${c.slide} →` : "Resolve →"}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-[40px] flex gap-[12px]">
        <ButtonLink href={stepPath(projectId, "deck")} variant="secondary" size="sm">
          Back
        </ButtonLink>
        <Button
          disabled={
            MOCK_REVIEW_CHECKS.filter((c) => c.severity === "Blocker").some(
              (c) => checks.some((cc) => cc.id === c.id)
            )
          }
          onClick={() => router.push(stepPath(projectId, "export"))}
        >
          Continue to export
        </Button>
      </div>
    </div>
  );
}
