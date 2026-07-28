"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { EVIDENCE_CATEGORIES, MOCK_EVIDENCE } from "@/data/fixtures";
import { stepPath } from "@/data/workflow";

const STATUS_BADGE: Record<string, "green" | "gold" | "neutral"> = {
  Verified: "green",
  "2 sources": "gold",
  Estimated: "gold",
  Unverified: "neutral",
};

export default function EvidencePage() {
  const { projectId } = useParams<{ projectId: string }>();
  const router = useRouter();
  const [category, setCategory] = useState("problem");

  const cards = MOCK_EVIDENCE.filter((c) => c.category === category);
  const categoryLabel =
    EVIDENCE_CATEGORIES.find((c) => c.key === category)?.label ?? "";

  return (
    <div className="flex h-full min-h-[calc(100vh-130px)]">
      <nav className="w-[240px] py-[32px] flex flex-col gap-[4px] border-r border-[var(--color-hairline)] bg-[var(--color-canvas)]">
        {EVIDENCE_CATEGORIES.map((c) => (
          <button
            key={c.key}
            onClick={() => setCategory(c.key)}
            className={cn(
              "text-left h-[40px] px-[16px] rounded-[var(--radius-md)] text-[14px] font-medium mx-[16px] transition-colors cursor-pointer",
              c.key === category
                ? "bg-[var(--color-surface-strong)] text-[var(--color-ink)] font-semibold"
                : "text-[var(--color-muted)] hover:bg-[var(--color-canvas-soft)] hover:text-[var(--color-ink)]"
            )}
          >
            {c.label}
          </button>
        ))}
      </nav>

      <div className="flex-1 px-[48px] py-[48px] max-w-[1200px] relative pb-[120px]">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[28px] font-bold text-[var(--color-ink)]">{categoryLabel}</h1>
          </div>
          <Button 
            variant="primary" 
            onClick={() => router.push(stepPath(projectId, "interview"))}
            className="shadow-sm cursor-pointer"
          >
            Continue to Interviews →
          </Button>
        </div>

        <div className="mt-[48px] flex flex-col gap-[16px]">
          {cards.length === 0 && (
            <div className="border border-dashed border-[var(--color-hairline-strong)] rounded-[var(--radius-lg)] p-[48px] text-center bg-[var(--color-surface-card)]">
              <p className="text-[14px] text-[var(--color-muted)]">
                No extracted evidence in this category yet.
              </p>
            </div>
          )}
          {cards.map((c) => (
            <div key={c.id} className="bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-[var(--radius-lg)] p-[24px] hover:border-[var(--color-hairline-strong)] transition-colors">
              <div className="flex items-start justify-between gap-[24px]">
                <p className="text-[16px] font-medium text-[var(--color-ink)] leading-[1.5]">{c.claim}</p>
                <p className="text-[13px] font-medium text-[var(--color-muted)] whitespace-nowrap cursor-pointer hover:text-[var(--color-ink)] transition-colors">
                  Edit · Merge · Remove
                </p>
              </div>
              <div className="mt-[16px] flex items-center gap-[12px]">
                <Badge variant={STATUS_BADGE[c.status] ?? "neutral"}>{c.status}</Badge>
                <span className="text-[13px] font-medium text-[var(--color-muted-soft)]">{c.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
