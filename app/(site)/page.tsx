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
import { fetchBySlug, fetchFeaturedPosts } from "@/lib/notion";
import { Card, CardHeader } from "@/components/ui/card";
import { NeonGradientCard } from "@/components/neon-gradient-card";

export default async function Home() {
  const { results } = await fetchFeaturedPosts();
  console.log(
    "Featured post(s):",
    results[0].properties.Title.title[0].plain_text
  );
  return (
    <main>
      <div className="flex flex-col items-center justify-center 2xl:pt-20">
        <HomeHero />
        <HomeSummary />
      </div>
      <section>
        <About />
      </section>

      <SplitLayout section="WORK">
        <div className="flex">
          {results.map((result, i) => {
            if ("properties" in result && "Title" in result.properties) {
              return (
                <Card key={i}>
                  <CardHeader>
                    {result.properties.Title.title[0].plain_text}
                  </CardHeader>
                </Card>
              );
            }
            return null;
          })}
        </div>
      </SplitLayout>
      <div className="flex flex-col items-center justify-center 2xl:pt-20">
        <Experience />
        <Skills />
        <section className="flex flex-col gap-12">
          <SplitLayout section="TECH">
            <ToolGrid tools={TechTools} />
          </SplitLayout>
        </section>
        <section className="flex flex-col gap-12">
          <SplitLayout section="TOOLS">
            <ToolGrid tools={SoftwareTools} />
          </SplitLayout>
        </section>
        <section className="flex flex-col gap-12">
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
        </section>
        <section id="contact">
          <SplitLayout section="CONTACT">
            <ContactForm />
          </SplitLayout>
        </section>
      </div>
    </main>
  );
}
