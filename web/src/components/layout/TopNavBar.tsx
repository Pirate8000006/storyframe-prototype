import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export function TopNavBar({ loggedIn = false }: { loggedIn?: boolean }) {
  return (
    <div className="w-full bg-white">
      <div className="h-[72px] px-[32px] flex items-center justify-between">
        <Link href={loggedIn ? "/dashboard" : "/"} className="text-[20px] font-bold text-primary">
          Storyframe
        </Link>
        <div className="flex items-center gap-[24px]">
          {loggedIn ? (
            <div
              className="w-[32px] h-[32px] rounded-full bg-primary text-on-dark text-[13px] font-semibold flex items-center justify-center"
              aria-label="Account"
            >
              A
            </div>
          ) : (
            <>
              <Link href="/login" className="text-[14px] font-medium text-secondary hover:text-primary">
                Log in
              </Link>
              <ButtonLink href="/login" size="sm">
                Sign up
              </ButtonLink>
            </>
          )}
        </div>
      </div>
      <div className="h-px w-full bg-hairline" />
    </div>
  );
}
