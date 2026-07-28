"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { TextField } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/store/useAppStore";

export default function LoginPage() {
  const router = useRouter();
  const login = useAppStore((s) => s.login);
  const hasOnboarded = useAppStore((s) => s.hasOnboarded);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

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
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-hairline rounded-[20px] p-[48px] flex flex-col gap-[20px] w-full max-w-[480px]"
        >
          <p className="text-[16px] font-bold text-violet">Storyframe</p>
          <h1 className="text-[28px] font-bold text-primary">Log in</h1>
          <p className="text-[14px] text-secondary">
            We&apos;ll email you a magic link. No password needed.
          </p>
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
          <p className="text-[12px] text-secondary text-center">
            Trouble receiving it? Resend link.
          </p>
        </form>
      </main>
    </>
  );
}
