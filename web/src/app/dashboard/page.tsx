import { TopNavBar } from "@/components/layout/TopNavBar";
import { AccountSidebar } from "@/components/layout/AccountSidebar";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { MOCK_PROJECTS } from "@/data/fixtures";

export default function DashboardPage() {
  return (
    <>
      <TopNavBar loggedIn />
      <div className="flex-1 flex">
        <AccountSidebar />
        <main
          className="flex-1 px-[48px] py-[48px]"
          style={{
            backgroundImage:
              "radial-gradient(at 100% 0%, rgba(139,124,246,0.06) 0%, transparent 45%), radial-gradient(at 0% 100%, rgba(240,180,41,0.05) 0%, transparent 45%)",
          }}
        >
          <div className="flex items-center justify-between mb-[40px]">
            <h1 className="text-[28px] font-bold text-primary">Your projects</h1>
            <ButtonLink href="/projects/new">+ New project</ButtonLink>
          </div>
          <div
            className="grid gap-[24px]"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 360px))" }}
          >
            {MOCK_PROJECTS.map((p) => (
              <ProjectCard
                key={p.id}
                id={p.id}
                name={p.name}
                description={p.description}
                tags={p.tags}
                stage={p.stage}
                updatedLabel={p.updatedLabel}
              />
            ))}
          </div>
          <p className="mt-[48px] text-[14px] text-secondary max-w-[700px]">
            Your best project story is probably still sitting inside six Figma
            pages and one forgotten Slack thread.
          </p>
        </main>
      </div>
    </>
  );
}
