"use client";

import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { IMPACT_LADDER, MOCK_IMPACT_STATEMENTS } from "@/data/fixtures";
import { stepPath } from "@/data/workflow";

export default function ImpactPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const router = useRouter();

  return (
    <div className="px-[48px] py-[48px] max-w-[1440px] w-full mx-auto">
      <h1 className="text-[28px] font-bold text-primary">Impact Finder</h1>
      <p className="text-[14px] text-secondary mt-[8px]">
        No numbers is a proof problem, not a story problem.
      </p>

      <div className="mt-[40px] grid grid-cols-[340px_1fr] gap-[32px] items-start">
        <div>
          <p className="text-[14px] font-semibold text-primary mb-[12px]">Evidence ladder</p>
          <div className="flex flex-col gap-[4px]">
            {IMPACT_LADDER.map((level) => (
              <div
                key={level}
                className="h-[36px] px-[14px] rounded-[8px] bg-neutral-tint flex items-center text-[14px] text-primary"
              >
                {level}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[14px] font-semibold text-primary mb-[12px]">
            Generated impact statements
          </p>
          <div className="flex flex-col gap-[12px]">
            {MOCK_IMPACT_STATEMENTS.map((s) => (
              <div
                key={s.id}
                className="bg-white border border-hairline rounded-[14px] px-[20px] py-[22px] flex items-center justify-between gap-[24px]"
              >
                <p className="text-[15px] text-primary">{s.text}</p>
                <Badge variant="violet">{s.level}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[40px] flex gap-[12px]">
        <ButtonLink href={stepPath(projectId, "interview")} variant="secondary" size="sm">
          Back
        </ButtonLink>
        <Button onClick={() => router.push(stepPath(projectId, "direction"))}>
          Continue
        </Button>
      </div>
    </div>
  );
}
