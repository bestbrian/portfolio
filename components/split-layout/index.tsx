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
    <section className="grid grid-cols-12 gap-4 mt-16 md:gap-4 max-w-[700px] w-full">
      <aside className="col-span-12 md:col-span-1 font-subway font-black text-center md:text-right pt-4 relative">
        <div className="absolute md:right-0 text-2xl md:text-base w-full md:w-auto whitespace-nowrap md:pb-12">
          <SlidePhase>{section}</SlidePhase>
        </div>
      </aside>
      <div className="font-satoshi col-span-12 md:col-span-11 mt-8 md:mt-0">
        {children}
      </div>
    </section>
  );
};
