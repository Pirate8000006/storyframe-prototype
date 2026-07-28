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
    <div className="px-[48px] py-[48px] max-w-[1440px] w-full mx-auto">
      <h1 className="text-[28px] font-bold text-primary">Dump everything</h1>
      <p className="text-[14px] text-secondary mt-[8px] max-w-[900px]">
        Paste the messy version — meeting notes, brief, decisions, screenshots,
        outcomes, complaints, random numbers, things that went wrong.
      </p>

      <div className="mt-[40px] grid grid-cols-[1fr_360px] gap-[32px] items-start">
        <div className="flex flex-col gap-[16px]">
          <TextArea
            rows={7}
            placeholder="Paste anything: brief, Slack thread, retro notes, launch update…"
          />
          <div className="border-2 border-dashed border-border rounded-[16px] px-[24px] py-[32px] text-center">
            <p className="text-[14px] text-primary">Drag files here or browse</p>
            <p className="text-[13px] text-placeholder mt-[6px]">
              PDF · DOCX · TXT · Markdown · JPG · PNG · WebP — up to 20MB each
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[12px]">
          <p className="text-[14px] font-semibold text-primary">Sources in this project</p>
          {MOCK_SOURCES.map((s) => (
            <div
              key={s.id}
              className="bg-white border border-hairline rounded-[10px] px-[14px] py-[14px] flex items-center justify-between"
            >
              <span className="text-[14px] text-primary">{s.name}</span>
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

      <div className="mt-[40px] flex gap-[12px]">
        <ButtonLink href="/dashboard" variant="secondary" size="sm">
          Back
        </ButtonLink>
        <Button onClick={() => router.push(stepPath(projectId, "evidence"))}>
          Continue
        </Button>
      </div>
    </div>
  );
}
