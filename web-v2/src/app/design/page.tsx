import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { Badge } from "@/components/ui/Badge";
import { Chip } from "@/components/ui/Chip";
import { Checkbox } from "@/components/ui/Checkbox";
import { TimelinePill } from "@/components/ui/TimelinePill";

export default function DesignSystemShowcase() {
  return (
    <div className="min-h-screen bg-[var(--color-canvas)] p-[48px]">
      <div className="max-w-[800px] mx-auto flex flex-col gap-[64px]">
        
        <div>
          <Typography variant="display-lg" className="mb-[16px]">Cursor Design System</Typography>
          <Typography variant="body-md" className="text-[var(--color-muted)]">
            A comprehensive showcase of all the core UI tokens, colors, and components used across the application.
          </Typography>
        </div>

        <section className="flex flex-col gap-[24px]">
          <Typography variant="title-lg" className="border-b border-[var(--color-hairline)] pb-[8px]">Typography</Typography>
          <div className="flex flex-col gap-[16px]">
            <Typography variant="display-lg">Display Large</Typography>
            <Typography variant="display-sm">Display Small</Typography>
            <Typography variant="title-lg">Title Large</Typography>
            <Typography variant="title-md">Title Medium</Typography>
            <Typography variant="title-sm">Title Small</Typography>
            <Typography variant="body-md">Body Medium</Typography>
            <Typography variant="body-sm">Body Small</Typography>
            <Typography variant="caption">Caption text</Typography>
            <Typography variant="code">const code = "monospaced";</Typography>
          </div>
        </section>

        <section className="flex flex-col gap-[24px]">
          <Typography variant="title-lg" className="border-b border-[var(--color-hairline)] pb-[8px]">Buttons</Typography>
          <div className="flex gap-[16px] flex-wrap items-center">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="tertiary">Tertiary Button</Button>
            <Button variant="accent">Accent Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </section>

        <section className="flex flex-col gap-[24px]">
          <Typography variant="title-lg" className="border-b border-[var(--color-hairline)] pb-[8px]">Inputs & Forms</Typography>
          <div className="flex flex-col gap-[16px] max-w-[400px]">
            <TextField label="Standard Input" placeholder="Type something..." />
            <TextField label="Search Input" placeholder="Search..." type="search" />
            <div className="flex items-center gap-[12px]">
              <Checkbox id="c1" />
              <label htmlFor="c1" className="text-[14px] font-medium text-[var(--color-ink)] cursor-pointer">Accept terms and conditions</label>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-[24px]">
          <Typography variant="title-lg" className="border-b border-[var(--color-hairline)] pb-[8px]">Badges & Pills</Typography>
          <div className="flex gap-[16px] flex-wrap">
            <Badge variant="default">Default Badge</Badge>
            <Badge variant="success">Success Badge</Badge>
            <Badge variant="warning">Warning Badge</Badge>
            <Badge variant="error">Error Badge</Badge>
            <Badge variant="draft">Draft Badge</Badge>
          </div>
        </section>

        <section className="flex flex-col gap-[24px]">
          <Typography variant="title-lg" className="border-b border-[var(--color-hairline)] pb-[8px]">Chips (Selectable)</Typography>
          <div className="flex gap-[16px] flex-wrap">
            <Chip selected={false}>Inactive Chip</Chip>
            <Chip selected={true}>Active Chip</Chip>
          </div>
        </section>

        <section className="flex flex-col gap-[24px]">
          <Typography variant="title-lg" className="border-b border-[var(--color-hairline)] pb-[8px]">Timeline Pills</Typography>
          <div className="flex gap-[16px] flex-wrap">
            <TimelinePill stage="read" label="Gathering Info" />
            <TimelinePill stage="thinking" label="Processing" />
            <TimelinePill stage="edit" label="Drafting" />
            <TimelinePill stage="done" label="Completed" />
          </div>
        </section>
        
      </div>
    </div>
  );
}
