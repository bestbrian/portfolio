import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { SplitLayout } from "@/components/split-layout";
import { EventItem } from "@/components/event-item";
import { BadgeGrid } from "@/components/badge-grid";
import { ToolGrid } from "@/components/tool-grid";
import { TechTools, SoftwareTools } from "@/lib/content";

import psmiiLogo from "/public/images/psmii_logo.png";
import yorkuLogo from "/public/images/yorku_logo.jpg";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeSummary } from "@/components/sections/home-summary";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <HomeHero />
        <HomeSummary />
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
        <section className="flex">
          <About />
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
