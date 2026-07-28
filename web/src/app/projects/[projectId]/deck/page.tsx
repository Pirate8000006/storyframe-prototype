"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { TextField, TextArea } from "@/components/ui/TextField";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { MOCK_SLIDES, REGENERATE_OPTIONS } from "@/data/fixtures";
import { stepPath } from "@/data/workflow";

export default function DeckPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const router = useRouter();
  const [activeId, setActiveId] = useState(MOCK_SLIDES[2].id);
  const slide = MOCK_SLIDES.find((s) => s.id === activeId)!;

  return (
    <div className="flex flex-col" style={{ minHeight: "calc(100vh - 138px)" }}>
      <div className="flex items-center justify-between px-[32px] h-[64px] border-b border-hairline shrink-0">
        <ButtonLink href={stepPath(projectId, "impact")} variant="secondary" size="sm">
          ← Back
        </ButtonLink>
        <Button size="sm" onClick={() => router.push(stepPath(projectId, "review"))}>
          Continue to review →
        </Button>
      </div>

      <div className="flex-1 flex max-w-[1400px] w-full mx-auto">
        <aside className="w-[240px] border-r border-hairline py-[24px] shrink-0">
          <div className="px-[16px] mb-[14px]">
            <p className="text-[11px] font-semibold text-secondary tracking-wide">
              SLIDES
            </p>
            <p className="text-[12px] text-placeholder mt-[4px]">
              Jump to any slide to edit it.
            </p>
          </div>
          <div className="flex flex-col gap-[4px] px-[16px]">
            {MOCK_SLIDES.map((s) => {
              const active = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={cn(
                    "h-[36px] pl-[9px] pr-[10px] rounded-[8px] flex items-center gap-[9px] text-left border-l-[3px] transition-colors",
                    active
                      ? "bg-info-tint border-violet"
                      : "border-transparent hover:bg-neutral-tint/60"
                  )}
                >
                  <span className={cn("text-[14px]", active ? "text-violet" : "text-placeholder")}>
                    {s.index}
                  </span>
                  <span
                    className={cn(
                      "text-[14px] truncate",
                      active ? "text-violet font-semibold" : "text-primary"
                    )}
                  >
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <section className="flex-1 border-r border-hairline px-[32px] py-[32px]">
          <h2 className="text-[20px] font-semibold text-primary">
            Slide {slide.index} · {slide.title}
          </h2>
          <p className="text-[13px] text-secondary mt-[4px]">
            Edit the headline, copy, and visual direction generated for this slide.
          </p>
          <div className="mt-[24px] flex flex-col gap-[20px] max-w-[560px]">
            <TextArea label="Headline" rows={2} defaultValue={slide.headline} />
            <TextField label="Supporting copy" defaultValue={slide.supporting} />
            <TextField label="Visual recommendation" defaultValue={slide.visual} />
            <TextArea label="Speaker notes" rows={2} defaultValue={slide.notes} />
            {slide.evidenceUsed.length > 0 && (
              <div>
                <p className="text-[12px] font-semibold text-secondary mb-[8px]">
                  EVIDENCE USED
                </p>
                <div className="flex flex-wrap gap-[6px]">
                  {slide.evidenceUsed.map((e) => (
                    <Badge key={e} variant="neutral">
                      {e}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {slide.warning && (
              <div className="bg-warning-tint rounded-[10px] px-[14px] py-[10px]">
                <p className="text-[13px] text-[#8a6f1f]">⚠ {slide.warning}</p>
              </div>
            )}
          </div>
        </section>

        <aside className="w-[320px] py-[24px] shrink-0">
          <div className="px-[24px] mb-[14px]">
            <p className="text-[11px] font-semibold text-secondary tracking-wide">
              REGENERATE
            </p>
            <p className="text-[12px] text-placeholder mt-[4px]">
              Ask AI to rewrite this slide with a different angle.
            </p>
          </div>
          <div className="flex flex-col gap-[4px] px-[24px]">
            {REGENERATE_OPTIONS.map((opt) => (
              <button
                key={opt}
                className="h-[36px] px-[14px] rounded-[8px] text-left text-[14px] text-primary hover:bg-neutral-tint"
              >
                {opt}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
