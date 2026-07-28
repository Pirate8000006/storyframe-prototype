"use client";

import { ButtonLink } from "@/components/ui/Button";
import { EXPORT_FORMATS, MOCK_SLIDES } from "@/data/fixtures";
import { stepPath } from "@/data/workflow";
import { useParams } from "next/navigation";

export default function ExportPage() {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <div className="px-[48px] py-[48px] max-w-[1440px] w-full mx-auto">
      <h1 className="text-[28px] font-bold text-primary">Export your deck</h1>

      <div className="mt-[32px] grid grid-cols-3 gap-[24px]">
        {EXPORT_FORMATS.map((f) => (
          <div key={f.id} className="bg-white border border-hairline rounded-[16px] p-[24px]">
            <p className="text-[18px] font-bold text-primary">{f.name}</p>
            <p className="text-[14px] text-secondary mt-[8px]">{f.description}</p>
            <button className="mt-[20px] w-full h-[44px] rounded-[8px] bg-primary text-on-dark text-[14px] font-medium hover:bg-[#332c24]">
              {f.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-[40px]">
        <p className="text-[11px] font-semibold text-secondary tracking-wide mb-[10px]">
          OUTLINE PREVIEW
        </p>
        <div className="bg-white border border-hairline rounded-[14px] py-[8px]">
          {MOCK_SLIDES.map((s) => (
            <p key={s.id} className="px-[24px] py-[10px] text-[14px] text-primary">
              {s.index}. {s.headline}
            </p>
          ))}
        </div>
      </div>

      <p className="mt-[24px] text-[13px] text-placeholder">
        JSON export available for internal / debug use only.
      </p>

      <div className="mt-[40px] flex gap-[12px]">
        <ButtonLink href={stepPath(projectId, "review")} variant="secondary" size="sm">
          Back
        </ButtonLink>
        <ButtonLink href="/dashboard">Back to dashboard</ButtonLink>
      </div>
    </div>
  );
}
