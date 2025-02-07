import { SplitLayout } from "@/components/split-layout";
import { HomeHero } from "@/components/sections/home-hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { ContactForm } from "@/components/contact-form";
import { BadgeGrid } from "@/components/badge-grid";
import { ToolGrid } from "@/components/tool-grid";
import { EventItem } from "@/components/event-item";
import {
  TechTools,
  SoftwareTools,
  ProductSkills,
  MarketingSkills,
} from "@/lib/content";
import psmiiLogo from "/public/images/psmii_logo.png";
import yorkuLogo from "/public/images/yorku_logo.svg";

import { NeonGradientCard } from "@/components/neon-gradient-card";
import { ArticleCards } from "@/components/article-expand";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center 2xl:pt-20">
        <HomeHero />
      </div>

      <About />

      <div className="flex flex-col items-center justify-center 2xl:pt-20">
        <Experience />

        <SplitLayout section="SKILLS">
          <BadgeGrid title="Product Management" badges={ProductSkills} />
          <BadgeGrid title="Marketing" badges={MarketingSkills} />
        </SplitLayout>

        <SplitLayout section="TECH">
          <ToolGrid tools={TechTools} />
        </SplitLayout>

        <SplitLayout section="TOOLS">
          <ToolGrid tools={SoftwareTools} />
        </SplitLayout>

        {/* <SplitLayout section="POSTS">
          <ArticleCards posts={posts} />
        </SplitLayout> */}

        <SplitLayout section="EDUCATION">
          <EventItem
            title="Bachelor of Human Resources&nbsp;Management"
            body="York University, Toronto"
            timeline="2010-2014"
            image={yorkuLogo}
            disableHover={true}
          />
          <EventItem
            title="Professional Scrum Master II"
            body="Scrum.org"
            timeline="2024"
            image={psmiiLogo}
            disableHover={true}
          />
        </SplitLayout>

        <SplitLayout section="CONTACT">
          <ContactForm />
        </SplitLayout>
      </div>
    </main>
  );
}
