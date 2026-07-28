"use client";

import { usePathname, useParams } from "next/navigation";
import Link from "next/link";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { Stepper } from "@/components/layout/Stepper";
import { StepKey } from "@/data/workflow";
import { Typography } from "@/components/ui/Typography";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { projectId } = useParams<{ projectId: string }>();
  const step = pathname.split("/").pop() as StepKey;

  return (
    <div className="min-h-screen flex flex-col">
      <TopNavBar />
      
      {/* Global Project Nav Bar */}
      <div className="w-full bg-[var(--color-canvas)] px-[32px] py-[16px] border-b border-[var(--color-hairline)] flex items-center">
        <Link href="/dashboard" className="flex items-center gap-[8px] px-[16px] py-[8px] bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-[var(--radius-full)] text-[var(--color-ink)] hover:border-[var(--color-hairline-strong)] hover:shadow-sm transition-all cursor-pointer group">
          <span className="text-[16px] leading-none group-hover:-translate-x-[2px] transition-transform">←</span>
          <Typography variant="body-sm" className="font-semibold tracking-[0.2px]">Back to dashboard</Typography>
        </Link>
      </div>
      
      <Stepper projectId={projectId} current={step} />
      <main className="flex-1 bg-[var(--color-canvas-soft)] flex flex-col">{children}</main>
    </div>
  );
}
