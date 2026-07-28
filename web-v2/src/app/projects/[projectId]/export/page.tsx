"use client";

import { ButtonLink } from "@/components/ui/Button";
import { EXPORT_FORMATS, MOCK_SLIDES } from "@/data/fixtures";
import { stepPath } from "@/data/workflow";
import { useParams } from "next/navigation";

export default function ExportPage() {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <div className="px-[48px] py-[48px] max-w-[1440px] w-full mx-auto relative pb-[120px]">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[28px] font-bold text-[var(--color-ink)]">Export your deck</h1>
        </div>
        <ButtonLink href="/dashboard" variant="secondary" className="cursor-pointer">
          Done & Return to Dashboard
        </ButtonLink>
      </div>

      <div className="mt-[48px] grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {EXPORT_FORMATS.map((f) => (
          <div key={f.id} className="bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-[var(--radius-lg)] p-[32px] flex flex-col hover:border-[var(--color-hairline-strong)] transition-colors cursor-pointer group">
            <p className="text-[20px] font-semibold text-[var(--color-ink)]">{f.name}</p>
            <p className="text-[14px] font-medium text-[var(--color-muted)] mt-[8px] flex-1">{f.description}</p>
            <button className="mt-[24px] w-full h-[44px] rounded-[var(--radius-md)] bg-[var(--color-canvas)] text-[var(--color-ink)] border border-[var(--color-hairline)] group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-on-primary)] group-hover:border-[var(--color-primary)] text-[14px] font-medium transition-colors cursor-pointer">
              {f.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-[48px]">
        <p className="text-[11px] font-semibold text-[var(--color-muted)] tracking-[0.88px] uppercase mb-[12px]">
          OUTLINE PREVIEW
        </p>
        <div className="bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-[var(--radius-lg)] py-[16px] shadow-sm">
          {MOCK_SLIDES.map((s) => (
            <p key={s.id} className="px-[32px] py-[10px] text-[15px] font-medium text-[var(--color-ink)]">
              {s.index}. {s.headline}
            </p>
          ))}
        </div>
      </div>

      <p className="mt-[24px] text-[13px] font-medium text-[var(--color-muted-soft)]">
        JSON export available for internal / debug use only.
      </p>
    </div>
  );
}
