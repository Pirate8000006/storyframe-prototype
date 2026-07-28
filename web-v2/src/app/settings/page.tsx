"use client";

import { TopNavBar } from "@/components/layout/TopNavBar";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/store/useAppStore";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
  const onboarding = useAppStore((s) => s.onboarding);
  const resetMockData = useAppStore((s) => s.resetMockData);

  return (
    <>
      <TopNavBar loggedIn />
      <main className="flex-1 px-[48px] py-[48px] max-w-[640px] w-full mx-auto">
        <h1 className="text-[28px] font-bold text-primary">Settings</h1>

        <div className="mt-[32px] bg-white border border-hairline rounded-[16px] p-[24px] flex flex-col gap-[12px]">
          <p className="text-[14px] text-secondary">Role: {onboarding.role || "—"}</p>
          <p className="text-[14px] text-secondary">
            Experience: {onboarding.experience || "—"}
          </p>
          <p className="text-[14px] text-secondary">
            Primary use case: {onboarding.useCase || "—"}
          </p>
        </div>

        <div className="mt-[24px]">
          <Button
            variant="secondary"
            onClick={() => {
              resetMockData();
              router.push("/");
            }}
          >
            Reset mock data & log out
          </Button>
        </div>
      </main>
    </>
  );
}
