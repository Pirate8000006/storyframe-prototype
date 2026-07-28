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
    <div className="flex h-full min-h-[calc(100vh-130px)] bg-[var(--color-canvas-soft)]">
      <aside className="w-[240px] border-r border-[var(--color-hairline)] bg-[var(--color-canvas)] py-[32px]">
        <p className="text-[11px] font-semibold text-[var(--color-muted)] tracking-[0.88px] uppercase px-[24px] mb-[16px]">
          SLIDES
        </p>
        <div className="flex flex-col gap-[4px] px-[16px]">
          {MOCK_SLIDES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={cn(
                "h-[40px] px-[16px] rounded-[var(--radius-md)] flex items-center gap-[12px] text-left transition-all duration-200 cursor-pointer",
                s.id === activeId 
                  ? "bg-[#e060311a] text-[var(--color-primary)] font-bold" 
                  : "text-[var(--color-body)] font-medium hover:bg-[var(--color-canvas-soft)] hover:text-[var(--color-ink)] hover:translate-x-[4px]"
              )}
            >
              <span className="text-[14px] opacity-60">{s.index}</span>
              <span className="text-[14px] truncate">{s.title}</span>
            </button>
          ))}
        </div>
      </aside>

      <section className="flex-1 px-[48px] py-[48px] max-w-[960px] mx-auto relative pb-[120px]">
        <div className="flex items-start justify-between mb-[32px]">
          <h2 className="text-[24px] font-bold text-[var(--color-ink)]">
            Slide {slide.index} <span className="text-[var(--color-muted)]">·</span> {slide.title}
          </h2>
          <Button 
            variant="primary" 
            onClick={() => router.push(stepPath(projectId, "review"))}
            className="shadow-sm cursor-pointer"
          >
            Continue to Review →
          </Button>
        </div>

        <div className="flex flex-col bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-[var(--radius-lg)] shadow-sm overflow-hidden">
          <div className="p-[32px] flex flex-col gap-[24px]">
            {slide.warning && (
              <div className="bg-[var(--color-semantic-warning)] bg-opacity-10 rounded-[var(--radius-md)] px-[16px] py-[12px] border border-[var(--color-semantic-warning)] border-opacity-30 flex items-start justify-between gap-[16px]">
                <div className="flex gap-[12px]">
                  <span className="text-[14px] mt-[2px]">💡</span>
                  <div>
                    <p className="text-[13px] font-semibold text-[var(--color-ink)] mb-[2px]">Review Note</p>
                    <p className="text-[13px] text-[var(--color-muted)]">{slide.warning}</p>
                  </div>
                </div>
                <button className="text-[12px] font-semibold bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-[var(--radius-md)] px-[12px] py-[6px] hover:bg-[var(--color-canvas-soft)] transition-colors cursor-pointer text-[var(--color-ink)] shrink-0">
                  Resolve
                </button>
              </div>
            )}
            
            <TextArea label="Headline" rows={2} defaultValue={slide.headline} />
            <TextField label="Supporting copy" defaultValue={slide.supporting} />
            <TextField label="Visual recommendation" defaultValue={slide.visual} />
            <TextArea label="Speaker notes" rows={2} defaultValue={slide.notes} />
            
            {slide.evidenceUsed.length > 0 && (
              <div className="pt-[16px] border-t border-[var(--color-hairline)] mt-[8px]">
                <p className="text-[12px] font-semibold text-[var(--color-muted)] tracking-[0.88px] uppercase mb-[12px]">
                  EVIDENCE USED
                </p>
                <div className="flex flex-wrap gap-[8px]">
                  {slide.evidenceUsed.map((e) => (
                    <Badge key={e} variant="neutral">
                      {e}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* AI Assist Toolbar */}
          <div className="bg-[var(--color-canvas-soft)] border-t border-[var(--color-hairline)] px-[32px] py-[16px] flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <span className="text-[13px] font-semibold text-[var(--color-primary)]">✨ AI Assist</span>
              <span className="text-[13px] text-[var(--color-muted)]">Rewrite slide:</span>
            </div>
            <div className="flex items-center gap-[8px]">
              {REGENERATE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  className="text-[13px] font-medium bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-[var(--radius-full)] px-[16px] py-[6px] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all cursor-pointer shadow-sm text-[var(--color-ink)]"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
