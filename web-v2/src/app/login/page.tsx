"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { TextField } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { useAppStore } from "@/store/useAppStore";

export default function LoginPage() {
  const router = useRouter();
  const login = useAppStore((s) => s.login);
  const isLoggedIn = useAppStore((s) => s.isLoggedIn);
  const hasOnboarded = useAppStore((s) => s.hasOnboarded);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      router.push(hasOnboarded ? "/dashboard" : "/onboarding");
    }
  }, [isLoggedIn, hasOnboarded, router]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    login();
    setTimeout(() => {
      router.push(hasOnboarded ? "/dashboard" : "/onboarding");
    }, 600);
  }

  return (
    <>
      <TopNavBar />
      <main className="flex-1 flex items-center justify-center px-[24px]">
        <Card className="w-full max-w-[480px] p-[48px] flex flex-col gap-[24px]">
          <Typography variant="title-sm" className="text-[var(--color-primary)]">
            Storyframe
          </Typography>
          <div className="flex flex-col gap-[8px]">
            <Typography variant="display-sm">Log in</Typography>
            <Typography variant="body-sm" className="text-[var(--color-body)]">
              We&apos;ll email you a magic link. No password needed.
            </Typography>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] mt-[16px]">
            <TextField
              label="Email address"
              type="email"
              placeholder="you@studio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" fullWidth disabled={sent}>
              {sent ? "Check your email…" : "Send magic link"}
            </Button>
            <Typography variant="caption" className="text-[var(--color-muted)] text-center mt-[8px]">
              Trouble receiving it? <span className="text-[var(--color-ink)] cursor-pointer hover:underline">Resend link.</span>
            </Typography>
          </form>
        </Card>
      </main>
    </>
  );
}
