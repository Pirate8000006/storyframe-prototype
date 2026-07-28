"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { useAppStore } from "@/store/useAppStore";

export function TopNavBar() {
  const router = useRouter();
  const isLoggedIn = useAppStore((s) => s.isLoggedIn);
  const logout = useAppStore((s) => s.logout);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleLogout() {
    logout();
    router.push("/login");
  }

  if (!mounted) {
    return <div className="h-[65px] w-full bg-[var(--color-canvas)] border-b border-[var(--color-hairline)]" />;
  }

  return (
    <div className="w-full bg-[var(--color-canvas)] border-b border-[var(--color-hairline)]">
      <div className="h-[64px] px-[48px] flex items-center justify-between w-full">
        <Link href={isLoggedIn ? "/dashboard" : "/login"} className="text-[18px] font-bold text-[var(--color-primary)] font-sans">
          Storyframe
        </Link>
        <div className="flex items-center gap-[24px]">
          {isLoggedIn ? (
            <>
              <Typography variant="nav-link" as={Link} href="/settings" className="text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Settings
              </Typography>
              <div className="flex items-center gap-[12px] ml-[8px]">
                <div className="w-[32px] h-[32px] rounded-full bg-[var(--color-ink)] text-[var(--color-canvas)] text-[13px] font-semibold flex items-center justify-center">
                  A
                </div>
                <button onClick={handleLogout} className="text-[13px] font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer">
                  Log out
                </button>
              </div>
            </>
          ) : (
            <>
              <Typography variant="nav-link" as={Link} href="/login" className="text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">
                Log in
              </Typography>
              <ButtonLink href="/onboarding" variant="primary">
                Sign up
              </ButtonLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
