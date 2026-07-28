"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { TextField } from "@/components/ui/TextField";
import { ChipGroup } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/store/useAppStore";

const STATUS_OPTIONS = [
  { value: "shipped", label: "Shipped" },
  { value: "in-progress", label: "In progress" },
  { value: "concept", label: "Concept" },
];

const CONFIDENTIALITY_OPTIONS = [
  { value: "public", label: "Public" },
  { value: "private", label: "Private" },
  { value: "nda", label: "NDA / Restricted" },
  { value: "unsure", label: "Unsure" },
];

const GOAL_OPTIONS = [
  { value: "portfolio", label: "Portfolio" },
  { value: "interview", label: "Interview" },
  { value: "internal", label: "Internal review" },
  { value: "client-retro", label: "Client retro" },
];

const DURATION_OPTIONS = [
  { value: "5", label: "5 min" },
  { value: "10", label: "10 min" },
  { value: "15", label: "15 min" },
  { value: "custom", label: "Custom" },
];

export default function NewProjectPage() {
  const router = useRouter();
  const newProject = useAppStore((s) => s.newProject);
  const setNewProject = useAppStore((s) => s.setNewProject);

  const [status, setStatus] = useState("in-progress");
  const [confidentiality, setConfidentiality] = useState("private");
  const [goal, setGoal] = useState("portfolio");
  const [duration, setDuration] = useState("10");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setNewProject({ status, confidentiality, goal, duration });
    router.push("/projects/transitpay-transfer-flow/sources");
  }

  return (
    <>
      <TopNavBar loggedIn />
      <main className="flex-1 px-[48px] py-[48px] max-w-[1440px] w-full mx-auto">
        <h1 className="text-[28px] font-bold text-primary">Create a new project</h1>
        <p className="text-[14px] text-secondary mt-[8px]">
          Set the context so the story engine writes for the right audience.
        </p>

        <form onSubmit={handleSubmit} className="mt-[40px]">
          <div className="grid grid-cols-2 gap-[40px]">
            <div className="flex flex-col gap-[24px]">
              <TextField
                label="Project name"
                placeholder="TransitPay Transfer Flow"
                value={newProject.name}
                onChange={(e) => setNewProject({ name: e.target.value })}
              />
              <TextField
                label="Company or client"
                placeholder="TransitPay"
                value={newProject.company}
                onChange={(e) => setNewProject({ company: e.target.value })}
              />
              <TextField
                label="Project type"
                placeholder="Mobile app, web app, design system…"
                value={newProject.type}
                onChange={(e) => setNewProject({ type: e.target.value })}
              />
              <ChipGroup
                label="Project status"
                options={STATUS_OPTIONS}
                value={status}
                onChange={setStatus}
              />
              <TextField
                label="Date range"
                placeholder="Jan 2024 – Mar 2024"
                value={newProject.audience}
                onChange={() => {}}
              />
            </div>
            <div className="flex flex-col gap-[24px]">
              <ChipGroup
                label="Confidentiality level"
                options={CONFIDENTIALITY_OPTIONS}
                value={confidentiality}
                onChange={setConfidentiality}
              />
              <ChipGroup
                label="Presentation goal"
                options={GOAL_OPTIONS}
                value={goal}
                onChange={setGoal}
              />
              <TextField
                label="Audience"
                placeholder="Hiring managers, design leadership…"
                value={newProject.audience}
                onChange={(e) => setNewProject({ audience: e.target.value })}
              />
              <ChipGroup
                label="Target duration"
                options={DURATION_OPTIONS}
                value={duration}
                onChange={setDuration}
              />
            </div>
          </div>

          <div className="mt-[40px]">
            <Button type="submit">Create project</Button>
          </div>
        </form>
      </main>
    </>
  );
}
