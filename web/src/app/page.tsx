import Link from "next/link";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const FEATURES = [
  {
    title: "Evidence before eloquence",
    body: "We build a truth layer before writing a single slide.",
  },
  {
    title: "Every claim has a status",
    body: "Verified, estimated, observed, inferred, unknown, or restricted.",
  },
  {
    title: "One slide, one point",
    body: "Every generated slide makes exactly one point.",
  },
];

export default function LandingPage() {
  return (
    <>
      <TopNavBar />
      <main className="flex-1 flex flex-col items-center gap-[96px] py-[96px] px-[24px]">
        <div className="flex flex-col items-center gap-[20px] max-w-[760px] text-center">
          <p className="text-[12px] font-medium text-violet tracking-wide">
            AI-ASSISTED CASE STUDY BUILDER
          </p>
          <h1 className="text-[48px] leading-[1.1] font-bold text-primary text-balance">
            Dump the project. Find the story. Build the presentation.
          </h1>
          <p className="text-[18px] text-secondary">
            A case study is not a museum of screens. It is evidence of how you think.
          </p>
          <div className="flex items-center gap-[24px] mt-[4px]">
            <ButtonLink href="/login">Sign up</ButtonLink>
            <Link href="/login" className="text-[14px] font-medium text-secondary hover:text-primary">
              View example →
            </Link>
          </div>
        </div>

        <div className="flex gap-[24px] w-full max-w-[1200px]">
          {FEATURES.map((f) => (
            <Card key={f.title} className="flex-1 p-[20px] flex flex-col gap-[8px] justify-center shadow-none">
              <p className="text-[16px] font-bold text-primary">{f.title}</p>
              <p className="text-[14px] text-secondary">{f.body}</p>
            </Card>
          ))}
        </div>
      </main>
      <footer className="border-t border-hairline py-[32px] flex items-center justify-center">
        <p className="text-[12px] text-secondary">
          Privacy &nbsp;·&nbsp; Terms &nbsp;·&nbsp; © Storyframe
        </p>
      </footer>
    </>
  );
}
