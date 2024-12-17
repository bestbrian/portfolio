import { ReactNode } from "react";

export const SplitLayout = ({
  section,
  children,
}: {
  section: string;
  children?: ReactNode;
}) => {
  return (
    <section className="grid grid-cols-12 gap-4 md:gap-4 max-w-[700px] w-full">
      <aside className="font-subway font-black text-center md:text-right pt-4 relative">
        <div className="absolute right-0 whitespace-nowrap">{section}</div>
      </aside>
      <div className="font-satoshi col-span-12 md:col-span-11">{children}</div>
    </section>
  );
};
