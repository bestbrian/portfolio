import { SplitLayout } from "../split-layout";
import { BadgeGrid } from "@/components/badge-grid";
import { ProductSkills, MarketingSkills } from "@/lib/content";

export const Skills = () => {
  return (
    <section className="flex flex-col gap-12">
      <SplitLayout section="SKILLS">
        <BadgeGrid title="Product Management" badges={ProductSkills} />
        <BadgeGrid title="Marketing" badges={MarketingSkills} />
      </SplitLayout>
    </section>
  );
};
