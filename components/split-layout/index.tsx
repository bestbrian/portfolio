import { ReactNode } from "react";
import { SlidePhase } from "../slide-phase";

export const SplitLayout = ({
  section,
  children,
}: {
  section?: string;
  children?: ReactNode;
}) => {
  return (
    <section
      className="
        grid grid-cols-12 
        gap-13        /* uses 3.25rem for gap */
        mt-13         /* 3.25rem top margin */
        max-w-[700px]
        w-full
      "
    >
      <aside
        className="
          col-span-12 md:col-span-1
          pt-13       /* 3.25rem top padding */
          relative
        "
      >
        <SlidePhase>{section}</SlidePhase>
      </aside>
      <div
        className="
          col-span-12 md:col-span-11 
          mt-13 md:mt-0 /* 3.25rem top margin on mobile only */
        "
      >
        {children}
      </div>
    </section>
  );
};
