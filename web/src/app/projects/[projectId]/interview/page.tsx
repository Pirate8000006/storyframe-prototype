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
    <div className="flex items-start justify-center px-[24px] py-[64px]">
      <div className="bg-white border border-hairline rounded-[20px] p-[40px] w-full max-w-[640px] flex flex-col gap-[20px]">
        <p className="text-[12px] font-semibold text-secondary tracking-wide">
          QUESTION {q.index} OF {q.total}
        </p>
        <h1 className="text-[24px] font-bold text-primary">{q.question}</h1>
        <TextArea
          rows={6}
          placeholder="Type your answer…"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <div className="flex gap-[12px]">
          <Button variant="secondary" size="sm" onClick={goNext}>
            Skip
          </Button>
          <Button variant="secondary" onClick={() => setAnswer("")}>
            Not sure
          </Button>
          <Button onClick={goNext} disabled={!answer}>
            Next
          </Button>
        </div>
        <p className="text-[12px] text-secondary">{q.helper}</p>
      </div>
    </div>
  );
}
