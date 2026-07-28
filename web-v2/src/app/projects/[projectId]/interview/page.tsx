"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { TextArea } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";
import { MOCK_INTERVIEW_QUESTION } from "@/data/fixtures";
import { stepPath } from "@/data/workflow";

export default function InterviewPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const q = MOCK_INTERVIEW_QUESTION;

  function goNext() {
    router.push(stepPath(projectId, "impact"));
  }

  return (
    <div className="flex items-start justify-center px-[24px] py-[64px] min-h-[calc(100vh-130px)]">
      <div className="bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-[var(--radius-lg)] p-[48px] w-full max-w-[720px] flex flex-col gap-[24px] shadow-sm">
        <p className="text-[12px] font-semibold text-[var(--color-muted)] tracking-[0.88px] uppercase">
          QUESTION {q.index} OF {q.total}
        </p>
        <h1 className="text-[28px] font-bold text-[var(--color-ink)] leading-[1.3]">{q.question}</h1>
        <TextArea
          rows={8}
          placeholder="Type your answer…"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <div className="flex items-center gap-[12px] mt-[8px]">
          <Button variant="secondary" onClick={goNext} className="cursor-pointer">
            Skip
          </Button>
          <Button variant="secondary" onClick={() => setAnswer("")} className="cursor-pointer">
            Not sure
          </Button>
          <Button onClick={goNext} disabled={!answer} className="ml-auto cursor-pointer">
            Next Question →
          </Button>
        </div>
        <p className="text-[13px] text-[var(--color-muted-soft)] mt-[12px]">{q.helper}</p>
      </div>
    </div>
  );
}
