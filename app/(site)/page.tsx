import { ContactForm } from "@/components/contact-form";
import { SplitLayout } from "@/components/split-layout";
import { EventItem } from "@/components/event-item";
import { ToolGrid } from "@/components/tool-grid";
import { TechTools, SoftwareTools } from "@/lib/content";

import psmiiLogo from "/public/images/psmii_logo.png";
import yorkuLogo from "/public/images/yorku_logo.svg";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeSummary } from "@/components/sections/home-summary";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { About } from "@/components/sections/about";
// import { fetchBySlug, fetchFeaturedPosts } from "@/lib/notion";
import { Card, CardHeader } from "@/components/ui/card";
import { NeonGradientCard } from "@/components/neon-gradient-card";
import { fetchPages } from "@/lib/notion";
import { ArticleCards } from "@/components/article-expand";

export default async function Home() {
  const posts = await fetchPages();

  return (
    <main>
      <div className="flex flex-col items-center justify-center 2xl:pt-20">
        <HomeHero />
        <HomeSummary />
      </div>

      <About />

      <div className="flex flex-col items-center justify-center 2xl:pt-20">
        <Experience />
        <Skills />

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
