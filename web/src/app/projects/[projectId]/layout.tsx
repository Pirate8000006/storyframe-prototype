"use client";

import { usePathname, useParams } from "next/navigation";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { Stepper } from "@/components/layout/Stepper";
import { StepKey } from "@/data/workflow";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { projectId } = useParams<{ projectId: string }>();
  const step = pathname.split("/").pop() as StepKey;

  return (
    <>
      <TopNavBar loggedIn />
      <Stepper projectId={projectId} current={step} />
      <main className="flex-1">{children}</main>
    </>
  );
}
