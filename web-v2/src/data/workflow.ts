export type StepKey =
  | "sources"
  | "evidence"
  | "interview"
  | "impact"
  | "direction"
  | "deck"
  | "review"
  | "export";

export const WORKFLOW_STEPS: { key: StepKey; label: string }[] = [
  { key: "sources", label: "Sources" },
  { key: "evidence", label: "Evidence" },
  { key: "interview", label: "Interview" },
  { key: "impact", label: "Impact" },
  { key: "direction", label: "Direction" },
  { key: "deck", label: "Deck" },
  { key: "review", label: "Review" },
  { key: "export", label: "Export" },
];

export function stepPath(projectId: string, step: StepKey) {
  return `/projects/${projectId}/${step}`;
}
