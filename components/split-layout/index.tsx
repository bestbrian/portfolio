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
      <aside className="font-satoshi font-medium text-center md:text-right pt-3">
        {section}
      </aside>
      <div className="col-span-12 md:col-span-11">{children}</div>
    </section>
  );
};
