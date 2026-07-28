"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { TextField } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { useAppStore } from "@/store/useAppStore";

export default function OnboardingPage() {
  const router = useRouter();
  const completeOnboarding = useAppStore((s) => s.completeOnboarding);
  const [role, setRole] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    completeOnboarding({ role, experience: "", useCase: "", consent: true });
    router.push("/dashboard");
  }

  return (
    <>
      <TopNavBar loggedIn />
      <main className="flex-1 flex items-center justify-center px-[24px] py-[80px]">
        <Card className="w-full max-w-[480px] p-[48px] flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[8px]">
            <Typography variant="display-sm">Welcome to Storyframe</Typography>
            <Typography variant="body-sm" className="text-[var(--color-body)]">
              Let&apos;s get your account set up. This helps us tailor the story formats to your experience level.
            </Typography>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
            <TextField
              label="Your role"
              placeholder="e.g. Product Designer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
            
            <div className="flex flex-col gap-[12px] bg-[var(--color-canvas-soft)] p-[16px] rounded-[var(--radius-md)]">
              <Typography variant="title-sm">Terms & Privacy</Typography>
              <Typography variant="caption" className="text-[var(--color-muted)]">
                By continuing, you agree to our Terms of Service and Privacy Policy. Your data is stored securely and never used to train public models without consent.
              </Typography>
            </div>
            
            <Button type="submit" fullWidth>
              Complete setup
            </Button>
          </form>
        </Card>
      </main>
    </>
  );
}
