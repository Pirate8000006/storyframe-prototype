"use client";

import { useParams, useRouter } from "next/navigation";
import { TextArea } from "@/components/ui/TextField";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { MOCK_SOURCES } from "@/data/fixtures";
import { stepPath } from "@/data/workflow";

export default function SourcesPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const router = useRouter();

  return (
    <div className="px-[48px] py-[48px] max-w-[1440px] w-full mx-auto relative pb-[120px]">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[28px] font-bold text-[var(--color-ink)]">Dump everything</h1>
          <p className="text-[14px] text-[var(--color-muted)] mt-[8px] max-w-[900px]">
            Paste the messy version — meeting notes, brief, decisions, screenshots,
            outcomes, complaints, random numbers, things that went wrong.
          </p>
        </div>
        <Button 
          variant="primary" 
          onClick={() => router.push(stepPath(projectId, "evidence"))}
          className="shadow-sm cursor-pointer"
        >
          Continue to Evidence →
        </Button>
      </div>

      <div className="mt-[48px] grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-[32px] items-start">
        <div className="flex flex-col gap-[16px]">
          <TextArea
            rows={7}
            placeholder="Paste anything: brief, Slack thread, retro notes, launch update…"
          />
          <div className="border border-dashed border-[var(--color-hairline-strong)] rounded-[var(--radius-lg)] px-[24px] py-[48px] text-center bg-[var(--color-surface-card)] hover:bg-[var(--color-canvas)] transition-colors cursor-pointer group">
            <p className="text-[14px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Drag files here or browse</p>
            <p className="text-[13px] text-[var(--color-muted-soft)] mt-[8px]">
              PDF · DOCX · TXT · Markdown · JPG · PNG · WebP — up to 20MB each
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[16px] bg-[var(--color-surface-card)] p-[24px] rounded-[var(--radius-lg)] border border-[var(--color-hairline)]">
          <p className="text-[14px] font-semibold text-[var(--color-ink)]">Sources in this project</p>
          <div className="flex flex-col gap-[8px]">
            {MOCK_SOURCES.map((s) => (
              <div
                key={s.id}
                className="bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-[var(--radius-md)] px-[16px] py-[12px] flex items-center justify-between group cursor-pointer hover:border-[var(--color-hairline-strong)] transition-colors"
              >
                <span className="text-[14px] font-medium text-[var(--color-ink)]">{s.name}</span>
                <div className="flex gap-[6px]">
                  {s.chips.map((c) => (
                    <Badge key={c} variant="neutral">
                      {c}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
