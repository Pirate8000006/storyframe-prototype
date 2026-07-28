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
    <div className="px-[48px] py-[48px] max-w-[1440px] w-full mx-auto relative pb-[120px]">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[28px] font-bold text-[var(--color-ink)]">Review & verify</h1>
          <div className="mt-[16px] flex gap-[10px]">
            <Badge variant={blockers > 0 ? "red" : "green"}>
              {blockers} blocker{blockers === 1 ? "" : "s"}
            </Badge>
            <Badge variant={warnings > 0 ? "gold" : "green"}>
              {warnings} warning{warnings === 1 ? "" : "s"}
            </Badge>
          </div>
        </div>
        <Button
          disabled={
            MOCK_REVIEW_CHECKS.filter((c) => c.severity === "Blocker").some(
              (c) => checks.some((cc) => cc.id === c.id)
            )
          }
          onClick={() => router.push(stepPath(projectId, "export"))}
          variant="primary"
          className="shadow-sm cursor-pointer"
        >
          Continue to Export →
        </Button>
      </div>

      <div className="mt-[48px] flex flex-col bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-[var(--radius-lg)] p-[24px]">
        {checks.length === 0 && (
          <p className="text-[14px] font-medium text-[var(--color-muted)] py-[24px] text-center">
            All checks resolved. You&apos;re ready to export.
          </p>
        )}
        {checks.map((c) => (
          <div
            key={c.id}
            className="h-[55px] flex items-center gap-[16px] border-b border-[var(--color-hairline)] last:border-0"
          >
            <Badge variant={SEVERITY_BADGE[c.severity]}>{c.severity}</Badge>
            <p className="flex-1 text-[14px] font-medium text-[var(--color-ink)]">{c.message}</p>
            <button
              onClick={() => resolveCheck(c.id)}
              className="text-[13px] font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-active)] hover:underline whitespace-nowrap cursor-pointer transition-colors"
            >
              {c.slide ? `Go to slide ${c.slide} →` : "Resolve →"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
