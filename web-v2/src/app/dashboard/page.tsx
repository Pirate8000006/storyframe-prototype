"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Typography } from "@/components/ui/Typography";
import { MOCK_PROJECTS } from "@/data/fixtures";
import { useAppStore } from "@/store/useAppStore";
import { cn } from "@/lib/utils";

export default function DashboardPage() {
  const router = useRouter();
  const pathname = usePathname();
  const isLoggedIn = useAppStore((s) => s.isLoggedIn);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  if (!mounted || !isLoggedIn) return null;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-canvas)]">
      <TopNavBar />
      <div className="flex-1 flex w-full">
        <aside className="w-[240px] border-r border-[var(--color-hairline)] py-[48px] pl-[48px] pr-[24px] flex flex-col gap-[8px]">
          <Link
            href="/dashboard"
            className={cn(
              "h-[40px] px-[16px] rounded-[var(--radius-md)] text-[14px] flex items-center transition-all duration-200 cursor-pointer",
              pathname === "/dashboard" 
                ? "bg-[#e060311a] text-[var(--color-primary)] font-bold" 
                : "text-[var(--color-body)] font-medium hover:bg-[var(--color-canvas-soft)] hover:text-[var(--color-ink)]"
            )}
          >
            Projects
          </Link>
          <Link
            href="/settings"
            className={cn(
              "h-[40px] px-[16px] rounded-[var(--radius-md)] text-[14px] flex items-center transition-all duration-200 cursor-pointer",
              pathname === "/settings" 
                ? "bg-[#e060311a] text-[var(--color-primary)] font-bold" 
                : "text-[var(--color-body)] font-medium hover:bg-[var(--color-canvas-soft)] hover:text-[var(--color-ink)]"
            )}
          >
            Settings
          </Link>
        </aside>
        <main className="flex-1 pl-[48px] pr-[48px] py-[48px]">
          <div className="flex items-center justify-between mb-[48px]">
            <Typography variant="display-sm">Your projects</Typography>
            <ButtonLink href="/projects/new" variant="primary" className="cursor-pointer">
              <span className="mr-[6px] text-[16px] font-medium leading-none mb-[2px]">+</span> New project
            </ButtonLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {MOCK_PROJECTS.map((p) => (
              <ProjectCard
                key={p.id}
                id={p.id}
                name={p.name}
                stage={p.stage}
                updatedLabel={p.updatedLabel}
                description={p.description}
                meshGradient={p.meshGradient}
              />
            ))}
          </div>
          <Typography variant="body-sm" className="mt-[64px] text-[var(--color-muted)] max-w-[600px]">
            Your best project story is probably still sitting inside six Figma
            pages and one forgotten Slack thread.
          </Typography>
        </main>
      </div>
    </div>
  );
}
