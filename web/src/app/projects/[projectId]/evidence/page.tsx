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
    <div className="flex">
      <nav className="w-[220px] py-[24px] flex flex-col gap-[2px]">
        {EVIDENCE_CATEGORIES.map((c) => {
          const active = c.key === category;
          return (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={cn(
                "text-left h-[36px] pl-[13px] pr-[14px] rounded-[8px] text-[14px] mx-[20px] border-l-[3px] transition-colors",
                active
                  ? "bg-info-tint text-violet font-semibold border-violet"
                  : "text-secondary font-medium border-transparent hover:bg-neutral-tint hover:text-primary"
              )}
            >
              {c.label}
            </button>
          );
        })}
      </nav>

      <div className="flex-1 px-[48px] py-[48px]">
        <h1 className="text-[24px] font-bold text-primary">{categoryLabel}</h1>

        <div className="mt-[24px] flex flex-col gap-[16px]">
          {cards.length === 0 && (
            <p className="text-[14px] text-secondary">
              No extracted evidence in this category yet.
            </p>
          )}
          {cards.map((c) => (
            <div key={c.id} className="bg-white border border-hairline rounded-[14px] p-[20px]">
              <div className="flex items-start justify-between gap-[24px]">
                <p className="text-[16px] text-primary">{c.claim}</p>
                <p className="text-[13px] text-secondary whitespace-nowrap">
                  Edit · Merge · Remove
                </p>
              </div>
              <div className="mt-[12px] flex items-center gap-[10px]">
                <Badge variant={STATUS_BADGE[c.status] ?? "neutral"}>{c.status}</Badge>
                <span className="text-[13px] text-secondary">{c.source}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[40px] flex gap-[12px]">
          <ButtonLink href={stepPath(projectId, "sources")} variant="secondary" size="sm">
            Back
          </ButtonLink>
          <Button onClick={() => router.push(stepPath(projectId, "interview"))}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
