import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { SplitLayout } from "@/components/split-layout";
import { EventItem } from "@/components/event-item";
import { BadgeGrid } from "@/components/badge-grid";
import { ToolGrid } from "@/components/tool-grid";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  TechTools,
  SoftwareTools,
  ProductSkills,
  TechnicalSkills,
  CollabSkills,
  MarketingSkills,
} from "@/lib/content";
import betterLogo from "/public/images/better_logo.jpg";
import brandloyalLogo from "/public/images/brandloyal_logo.jpeg";
import vroomLogo from "/public/images/vroom_logo.jpeg";
import musthLogo from "/public/images/musth_logo.jpg";
import psmiiLogo from "/public/images/psmii_logo.png";
import yorkuLogo from "/public/images/yorku_logo.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <h2 className="font-subway font-black mt-8 mb-4 text-3xl dark:text-yellow-200 {styles.TorontoSubway} font-medium">
          HI, MY NAME IS BRIAN AND I AM THE BEST
        </h2>
        <section className="flex flex-col gap-12">
          <SplitLayout section="BIO">
            <div className="p-4">
              <p>
                Seasoned tech professional with extensive experience in FinTech
                and SaaS startups, specializing in scalable digital solutions
                and agile team leadership.
                <br />
                <br />
                With a strong background in Scrum, I’ve led teams through sprint
                planning, backlog refinement, and daily stand-ups, ensuring
                timely delivery and alignment with business goals. My expertise
                spans product development, user experience enhancement, and
                marketing automation.
                <br />
                <br />
                Passionate about leveraging data to drive growth and streamline
                processes, I’m excited to collaborate with innovative teams.
              </p>
            </div>
          </SplitLayout>

          <SplitLayout section="EXPERIENCE">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <EventItem
                    title="Senior Product Manager"
                    body="Musth"
                    timeline="2022 – 2024"
                    image={musthLogo}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <h3>Key Achievements</h3>
                  <ul>
                    <li>
                      Developed and launched multiple key features, achieving
                      significant improvements in the efficiency and
                      accessibility of financial trading platforms, by guiding
                      the team through iterative, customer-focused delivery.
                    </li>
                    <li>
                      Played a pivotal role in adopting and implementing new
                      technologies within an Agile framework, resulting in
                      enhanced product performance and increased customer
                      satisfaction.
                    </li>
                    <li>
                      Fostered an Agile culture within the team, accelerating
                      product development cycles and improving responsiveness to
                      market changes through iterative feedback and continuous
                      improvement.
                    </li>
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <EventItem
                    title="Software Engineer"
                    body="Better"
                    timeline="2020 – 2022"
                    image={betterLogo}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <h3>Key Achievements</h3>
                  <ul>
                    <li>XXXXXXXXX</li>
                    <li>XXXXXXXXX</li>
                    <li>XXXXXXXXX</li>
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <EventItem
                    title="Co-Founder & Chief Operating Officer"
                    body="BrandLoyal"
                    timeline="2014 – 2022"
                    image={brandloyalLogo}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <h3>Key Achievements</h3>
                  <ul>
                    <li>XXXXXXXXX</li>
                    <li>XXXXXXXXX</li>
                    <li>XXXXXXXXX</li>
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <EventItem
                    title="Software Engineer"
                    body="Vroom"
                    timeline="2018 – 2020"
                    image={vroomLogo}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <h3>Key Achievements</h3>
                  <ul>
                    <li>XXXXXXXXX</li>
                    <li>XXXXXXXXX</li>
                    <li>XXXXXXXXX</li>
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SplitLayout>

          <SplitLayout section="SKILLS">
            <BadgeGrid title="Product Management" badges={ProductSkills} />
            <BadgeGrid title="Technical" badges={TechnicalSkills} />
            {/* <BadgeGrid title="Collaboration" badges={CollabSkills} /> */}
            <BadgeGrid title="Marketing" badges={MarketingSkills} />
          </SplitLayout>

          <SplitLayout section="TECH">
            <ToolGrid tools={TechTools} />
          </SplitLayout>

          <SplitLayout section="TOOLS">
            <ToolGrid tools={SoftwareTools} />
          </SplitLayout>

          <SplitLayout section="EDUCATION">
            <EventItem
              title="Bachelor of Human Resources Management"
              body="York University, Toronto"
              timeline="2010-2014"
              image={yorkuLogo}
            />
            <EventItem
              title="Professional Scrum Master II"
              body="Scrum.org"
              timeline="2024"
              image={psmiiLogo}
            />
          </SplitLayout>
        </section>
        <section className="mt-16">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
