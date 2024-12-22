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
        <section className="flex flex-col gap-12 my-20">
          <SplitLayout>
            <div className="flex justify-center">
              <Image
                src="/images/brian_image.jpeg"
                alt="Brian Best"
                height={360}
                width={360}
                className="object-center object-cover rounded-md"
                priority
              />
            </div>
            <h2 className="text-center font-subway mt-8 mb-4 text-3xl dark:text-white">
              HI, MY NAME IS BRIAN
              {/* <br></br>AND I AM THE BEST */}
            </h2>
          </SplitLayout>
        </section>
        <section className="flex flex-col gap-12">
          <SplitLayout section="SUMMARY">
            <div className="p-4">
              <p>
                Data-driven product leader and Y Combinator alum who builds
                tools and platforms that solve real problems, simplify
                workflows, and drive measurable impact. From co-founding
                BrandLoyal, where I pioneered retail feedback automation, to
                leading product and systems development at Better, Vroom, and
                Musth, I specialize in creating scalable, user-centric solutions
                that deliver results.
                <br />
                <br />
                Some of my highlights include:
                <br />
              </p>
              <ul className="list-disc pt-2 pl-4 space-y-2">
                <li>
                  <b>BrandLoyal</b>: Transformed the way retail businesses
                  collect and automate customer feedback by developing a
                  tablet-based system that integrated tracking pixels and
                  automated follow-ups. Scaled the platform to serve 500+
                  locations across five countries, enabling businesses to
                  improve customer satisfaction, increase retention, and
                  modernize in-store experiences.
                </li>
                <li>
                  <b>Better</b>: Designed and implemented modular email systems
                  during a decade-defining mortgage boom, boosting refinance
                  signups by 200%+ and pre-approval rates by 300%+. Built drip
                  automations for strategic partners like Amex, NerdWallet, and
                  Credit Karma, increasing stickiness and ROI.
                </li>
                <li>
                  <b>Vroom</b>: Built a reusable email snippet library and
                  audience segmentation systems, allowing marketing teams to
                  deliver targeted campaigns with no-code flexibility and
                  increased conversion rates.
                </li>
                <li>
                  <b>Musth</b>: Developed internal tools that eliminated human
                  error and increased team efficiency. Led data collection
                  initiatives to round out user profiles and automated campaigns
                  to deliver timely, personalized content.
                </li>
              </ul>
              <p>
                <br />
                I’m passionate about turning insights into action—using data,
                design, and strategy to craft products that delight users and
                drive business growth.
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
                    timeline="2022 &mdash; 2024"
                    image={musthLogo}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <h3>Key Achievements</h3>
                  <ul className="list-disc pt-2 pl-4 space-y-2">
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
                    timeline="2020 &mdash; 2022"
                    image={betterLogo}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <h3>Key Achievements</h3>
                  <ul className="list-disc pt-2 pl-4 space-y-2">
                    <li>
                      Enhanced email engagement through advanced tracking and
                      data analytics, enabling the team to make informed
                      decisions for ongoing improvements.
                    </li>
                    <li>
                      Streamlined production processes to ensure high-quality,
                      on-time campaign delivery, consistently meeting or
                      exceeding key performance benchmarks.
                    </li>
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <EventItem
                    title="Co-Founder & Chief&nbsp;Operating&nbsp;Officer"
                    body="BrandLoyal"
                    timeline="2014 &mdash; 2022"
                    image={brandloyalLogo}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <h3>Key Achievements</h3>
                  <ul className="list-disc pt-2 pl-4 space-y-2">
                    <li>
                      Product Innovation: Designed the core product features and
                      systems, focusing on creating sustainable competitive
                      advantages and establishing a significant competitive
                      moat.
                    </li>
                    <li>
                      UI/UX Design: Developed a comprehensive design system for
                      core products, emphasizing intuitive user interfaces and
                      seamless user experiences to boost customer satisfaction.
                    </li>
                    <li>
                      Data-Driven Dashboard: Engineered a sophisticated product
                      dashboard that aggregates application data and business
                      metrics, facilitating data-driven decisions.
                    </li>
                    <li>
                      Marketing Strategy: Pioneered various experimental
                      marketing strategies that significantly increased customer
                      acquisition and propelled company growth.
                    </li>
                    <li>
                      API Development: Architected and refined the API and
                      dashboard integration, facilitating seamless functionality
                      across numerous business locations.
                    </li>
                    <li>
                      Customer Success: Implemented effective onboarding and
                      customer success strategies, utilizing drip campaigns to
                      enhance retention and attract new business.
                    </li>
                    <li>
                      Digital Transformation: Created a &quot;Smart
                      Display&quot; Web App and developed automation tools,
                      converting physical interactions into digital touchpoints
                      for advanced pixel retargeting and analytics.
                    </li>
                    <li>
                      Project Leadership: Managed diverse teams, including
                      contractors and consultants, adhering to agile
                      methodologies to meet strategic goals.
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
                    body="Vroom"
                    timeline="2018 &mdash; 2020"
                    image={vroomLogo}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <h3>Key Achievements</h3>
                  <ul className="list-disc pt-2 pl-4 space-y-2">
                    <li>
                      Built a Component-Based Email System: Streamlined the
                      creation of transactional and promotional emails with
                      modular templates, reducing production time and increasing
                      campaign efficiency.
                    </li>
                    <li>
                      Developed an Internal Email Signature Generator:
                      Standardized email branding across teams, improving
                      professionalism and consistency in communications leading
                      up to the IPO.
                    </li>
                    <li>
                      Optimized Customer Communication: Improved email workflows
                      and segmentation strategies, boosting engagement and
                      conversion rates.
                    </li>
                    <li>
                      Enhanced Email Development Processes: Ensured
                      cross-platform compatibility and improved deliverability
                      through best practices in coding and testing.
                    </li>
                    <li>
                      Supported IPO Readiness: Contributed to scalable internal
                      tools and customer outreach systems that aligned with
                      Vroom&apos;s growth goals.
                    </li>
                  </ul>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SplitLayout>

          <SplitLayout section="SKILLS">
            <BadgeGrid title="Product Management" badges={ProductSkills} />
            {/* <BadgeGrid title="Technical" badges={TechnicalSkills} /> */}
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
        <section className="mt-16">
          <SplitLayout section="CONTACT">
            <ContactForm />
          </SplitLayout>
        </section>
      </div>
    </main>
  );
}
