"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { TextField } from "@/components/ui/TextField";
import { ChipGroup } from "@/components/ui/Chip";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/store/useAppStore";

const EXPERIENCE_OPTIONS = [
  { value: "mid", label: "Mid" },
  { value: "senior", label: "Senior" },
  { value: "lead", label: "Lead" },
];

const USE_CASE_OPTIONS = [
  { value: "portfolio", label: "Portfolio" },
  { value: "interview", label: "Interview" },
  { value: "client-retro", label: "Client retro" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const completeOnboarding = useAppStore((s) => s.completeOnboarding);

  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [useCase, setUseCase] = useState("");
  const [consent, setConsent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    completeOnboarding({ role, experience, useCase, consent });
    router.push("/dashboard");
  }

  return (
    <>
      <TopNavBar loggedIn />
      <main className="flex-1 flex items-start justify-center gap-[64px] px-[24px] pt-[96px] pb-[40px]">
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-hairline rounded-[20px] p-[40px] flex flex-col w-full max-w-[480px]"
        >
          <div className="mb-[20px]">
            <h1 className="text-[28px] font-bold text-primary">Tell us about you</h1>
            <p className="text-[14px] text-secondary mt-[8px]">
              This helps tailor the story engine to your experience.
            </p>
          </div>

          <div className="flex flex-col gap-[24px]">
            <TextField
              label="Role"
              placeholder="Product designer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />

            <ChipGroup
              label="Experience level"
              options={EXPERIENCE_OPTIONS}
              value={experience}
              onChange={setExperience}
            />

            <ChipGroup
              label="Primary use case"
              options={USE_CASE_OPTIONS}
              value={useCase}
              onChange={setUseCase}
            />

            <Checkbox
              checked={consent}
              onChange={setConsent}
              label="I consent to my project data being processed to generate my case study."
            />

            <Button
              type="submit"
              fullWidth
              disabled={!role || !experience || !useCase || !consent}
            >
              Continue
            </Button>
          </div>
        </form>

        <div className="hidden lg:flex flex-col gap-[24px] w-full max-w-[320px]">
          {[
            {
              title: "Tailored to your level",
              body: "Senior and lead answers get more room to talk about trade-offs and system thinking.",
            },
            {
              title: "Shapes your first draft",
              body: "Your use case sets tone and length — an interview story reads differently than a portfolio piece.",
            },
            {
              title: "Nothing is shared without consent",
              body: "Your source material stays private until you choose to export it.",
            },
          ].map((f) => (
            <div key={f.title}>
              <p className="text-[14px] font-semibold text-primary">{f.title}</p>
              <p className="text-[13px] text-secondary mt-[4px]">{f.body}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
