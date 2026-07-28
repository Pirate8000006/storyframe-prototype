export type Project = {
  id: string;
  name: string;
  company: string;
  description: string;
  tags: string[];
  stage: string;
  updatedLabel: string;
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: "transitpay-transfer-flow",
    name: "TransitPay Transfer Flow",
    company: "TransitPay",
    description:
      "Redesigning the money-transfer confirmation flow to cut drop-off and build user trust.",
    tags: ["Fintech", "Mobile", "Portfolio"],
    stage: "Deck",
    updatedLabel: "Updated 2d ago",
  },
  {
    id: "onboarding-redesign",
    name: "Onboarding Redesign",
    company: "Fictional Co.",
    description:
      "Turning a fragmented 10-screen signup into a guided 4-step onboarding flow.",
    tags: ["SaaS", "Web app", "Interview"],
    stage: "Evidence",
    updatedLabel: "Updated 5d ago",
  },
  {
    id: "design-system-v2",
    name: "Design System v2",
    company: "Internal",
    description:
      "Building a shared token and component library adopted across three product teams.",
    tags: ["Design system", "Internal", "Client retro"],
    stage: "Sources",
    updatedLabel: "Updated 1w ago",
  },
];

export type SourceDoc = {
  id: string;
  name: string;
  chips: string[];
};

export const MOCK_SOURCES: SourceDoc[] = [
  { id: "s1", name: "Design brief.pdf", chips: ["PDF", "Processed"] },
  { id: "s2", name: "Research notes.docx", chips: ["DOCX", "Processed"] },
  { id: "s3", name: "Screens-v3.png", chips: ["Image", "Processed"] },
  { id: "s4", name: "Retro notes.txt", chips: ["TXT", "Processed"] },
];

export type EvidenceCategory = {
  key: string;
  label: string;
};

export const EVIDENCE_CATEGORIES: EvidenceCategory[] = [
  { key: "context", label: "Project context" },
  { key: "market", label: "User & market" },
  { key: "problem", label: "Problem" },
  { key: "goal", label: "Goal" },
  { key: "role", label: "Designer's role" },
  { key: "team", label: "Team & collaboration" },
  { key: "constraints", label: "Constraints" },
  { key: "research", label: "Research" },
  { key: "insights", label: "Key insights" },
  { key: "decisions", label: "Decisions" },
];

export type EvidenceCard = {
  id: string;
  category: string;
  claim: string;
  status: "Verified" | "2 sources" | "Estimated" | "Unverified";
  source: string;
};

export const MOCK_EVIDENCE: EvidenceCard[] = [
  {
    id: "e1",
    category: "problem",
    claim:
      "Users abandoned the confirmation step because fees and delivery timing were unclear.",
    status: "Verified",
    source: "Source: Design brief.pdf",
  },
  {
    id: "e2",
    category: "problem",
    claim: "Support team reported repeated confusion around transfer timing.",
    status: "Verified",
    source: "Source: Retro notes.txt",
  },
  {
    id: "e3",
    category: "problem",
    claim: "Two sources disagree on whether timing was the top complaint.",
    status: "2 sources",
    source: "Source: 2 sources",
  },
];

export const MOCK_INTERVIEW_QUESTION = {
  index: 3,
  total: 8,
  question: "Which decision was specifically yours?",
  helper:
    "Adaptive — prioritizes questions that materially improve the story. Max 8 per session.",
};

export const IMPACT_LADDER = [
  "Level 1 · Verified business outcome",
  "Level 2 · Verified product behaviour",
  "Level 3 · Operational efficiency",
  "Level 4 · Scope & scale",
  "Level 5 · Before / after complexity",
  "Level 6 · Qualitative validation",
  "Level 7 · Risk & trust",
  "Level 8 · Decision quality",
];

export type ImpactStatement = {
  id: string;
  text: string;
  level: string;
};

export const MOCK_IMPACT_STATEMENTS: ImpactStatement[] = [
  {
    id: "i1",
    text: "Reduced design QA from 45 minutes to approximately 1 minute through an internal QA tool.",
    level: "Level 3",
  },
  {
    id: "i2",
    text: "Replaced a fragmented ten-screen journey with a four-screen flow.",
    level: "Level 5",
  },
  {
    id: "i3",
    text: "Usability sessions showed participants could identify the next action without guidance.",
    level: "Level 6 · Verified",
  },
];

export type Direction = {
  id: string;
  badge: string;
  quote: string;
  why: string;
  risk: string;
};

export const MOCK_DIRECTIONS: Direction[] = [
  {
    id: "d1",
    badge: "Trust-first",
    quote:
      "We redesigned the moment a user decides whether to trust the product.",
    why: "Clear tension with strong before/after evidence.",
    risk: "Step count verified, no conversion metric",
  },
  {
    id: "d2",
    badge: "User tension",
    quote:
      "The hardest part of sending money was not the transfer. It was believing what would happen next.",
    why: "Strong user tension with verified evidence.",
    risk: "No verified conversion metric",
  },
  {
    id: "d3",
    badge: "System thinking",
    quote:
      "The biggest design output was not a screen. It was a system that stopped 16 flows from being rebuilt.",
    why: "Clear reuse story across the design system.",
    risk: "Adoption partially verified",
  },
];

export type Slide = {
  id: string;
  index: number;
  title: string;
  headline: string;
  supporting: string;
  visual: string;
  notes: string;
  evidenceUsed: string[];
  warning?: string;
};

export const MOCK_SLIDES: Slide[] = [
  {
    id: "sl1",
    index: 1,
    title: "Opening outcome",
    headline: "The moment a user decides whether to trust the product",
    supporting: "TransitPay's confirmation step lost more users than any other.",
    visual: "Before/after confirmation screen comparison",
    notes: "Open with the tension, not the company history.",
    evidenceUsed: ["Design brief.pdf", "Retro notes.txt"],
  },
  {
    id: "sl2",
    index: 2,
    title: "Slide 2",
    headline: "Slide 2 headline placeholder",
    supporting: "Supporting copy placeholder.",
    visual: "Visual recommendation placeholder",
    notes: "",
    evidenceUsed: [],
  },
  {
    id: "sl3",
    index: 3,
    title: "User tension",
    headline: "Users abandoned the confirmation step",
    supporting: "Fees and delivery timing were unclear at the exact moment of commitment.",
    visual: "Annotated screenshot of the old confirmation screen",
    notes: "Land on the emotional stakes before showing the fix.",
    evidenceUsed: ["Design brief.pdf", "2 sources"],
    warning: "This number does not have a source yet.",
  },
  ...Array.from({ length: 7 }, (_, i) => ({
    id: `sl${i + 4}`,
    index: i + 4,
    title: `Slide ${i + 4}`,
    headline: `Slide ${i + 4} headline placeholder`,
    supporting: "Supporting copy placeholder.",
    visual: "Visual recommendation placeholder",
    notes: "",
    evidenceUsed: [] as string[],
  })),
];

export const REGENERATE_OPTIONS = [
  "Shorter",
  "Clearer",
  "More specific",
  "Stronger contrast",
  "Focus on user",
  "Focus on business",
  "Rewrite with selected evidence",
];

export type ReviewCheck = {
  id: string;
  severity: "Blocker" | "Warning" | "Notice";
  message: string;
  slide?: number;
};

export const MOCK_REVIEW_CHECKS: ReviewCheck[] = [
  { id: "c1", severity: "Blocker", message: "Slide 8 contains a number without a source.", slide: 8 },
  { id: "c2", severity: "Blocker", message: "Restricted evidence appears in a public-facing slide.", slide: 4 },
  { id: "c3", severity: "Warning", message: "Slides 4 and 7 repeat the same idea.", slide: 4 },
  { id: "c4", severity: "Warning", message: "Slide 6 exceeds the recommended length.", slide: 6 },
  { id: "c5", severity: "Warning", message: "Your role is unclear on slide 3.", slide: 3 },
  { id: "c6", severity: "Notice", message: "Transition between slide 2 and 3 feels abrupt.", slide: 2 },
];

export const EXPORT_FORMATS = [
  { id: "markdown", name: "Markdown", description: "Editable outline for any tool", cta: "Export as Markdown" },
  { id: "structured", name: "Structured copy", description: "Paste-ready per-slide text", cta: "Copy structured text" },
  { id: "pdf", name: "PDF", description: "Shareable static document", cta: "Export as PDF" },
];
