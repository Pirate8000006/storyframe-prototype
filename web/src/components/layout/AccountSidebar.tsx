"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ITEMS = [
  { href: "/dashboard", label: "Projects" },
  { href: "/settings", label: "Settings" },
];

export function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] shrink-0 border-r border-hairline py-[32px] px-[24px] flex flex-col gap-[4px]">
      {ITEMS.map((item) => {
        const active = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "h-[38px] pl-[11px] pr-[14px] rounded-[8px] text-[14px] flex items-center border-l-[3px] transition-colors",
              active
                ? "bg-info-tint text-violet font-semibold border-violet"
                : "text-secondary font-medium border-transparent hover:bg-neutral-tint hover:text-primary"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </aside>
  );
}
