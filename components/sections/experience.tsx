"use client";

import { SplitLayout } from "../split-layout";
import { ExperienceCards } from "../card-expand";

export const Experience = () => {
  return (
    <section className="flex flex-col gap-12">
      <SplitLayout section="EXPERIENCE">
        <ExperienceCards />
      </SplitLayout>
    </section>
  );
};
