import clsx from "clsx";
import { PropsWithChildren } from "react";

export default function Nav() {
  return (
    <nav className="md:flex md:gap-3 md:px-[5.21%] lg:flex-col lg:gap-6 lg:px-0">
      <NavSection className="bg-purple-400 text-white lg:min-h-32">
        Brand
      </NavSection>
      <NavSection className="bg-white text-slate-600 lg:min-h-40">
        Categories
      </NavSection>
      <NavSection className="bg-white text-slate-600 lg:min-h-40">
        Roadmap summary
      </NavSection>
    </nav>
  );
}

type NavSectionProps = { className?: string };

function NavSection({
  className,
  children,
}: PropsWithChildren<NavSectionProps>) {
  return (
    <div
      className={clsx(
        "flex h-44 flex-1 items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
}
