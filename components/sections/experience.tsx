"use client";

import { SplitLayout } from "../split-layout";
import betterLogo from "/public/images/better_logo.jpg";
import brandloyalLogo from "/public/images/brandloyal_logo.jpeg";
import vroomLogo from "/public/images/vroom_logo.jpeg";
import musthLogo from "/public/images/musth_logo.jpg";
import { EventItem } from "@/components/event-item";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { ExpandableCardDemo } from "../card-expand";

export const Experience = () => {
  return (
    <section className="flex flex-col gap-12">
      <SplitLayout section="EXPERIENCE">
        <Drawer>
          <DrawerTrigger className="w-full">
            <EventItem
              title="Senior Product Manager"
              body="Musth"
              timeline="2022 &mdash; 2024"
              image={musthLogo}
            />
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto max-w-xl p-4">
              <h3>Key Achievements</h3>
              <ul className="list-disc pt-2 pl-4 space-y-2">
                <li>
                  Developed and launched multiple key features, achieving
                  significant improvements in the efficiency and accessibility
                  of financial trading platforms, by guiding the team through
                  iterative, customer-focused delivery.
                </li>
                <li>
                  Played a pivotal role in adopting and implementing new
                  technologies within an Agile framework, resulting in enhanced
                  product performance and increased customer satisfaction.
                </li>
                <li>
                  Fostered an Agile culture within the team, accelerating
                  product development cycles and improving responsiveness to
                  market changes through iterative feedback and continuous
                  improvement.
                </li>
              </ul>
            </div>
          </DrawerContent>
        </Drawer>
        <ExpandableCardDemo />

        <Drawer>
          <DrawerTrigger className="w-full">
            <EventItem
              title="Software Engineer"
              body="Better"
              timeline="2020 &mdash; 2022"
              image={betterLogo}
            />
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto max-w-xl p-4">
              <h3>Key Achievements</h3>
              <ul className="list-disc pt-2 pl-4 space-y-2">
                <li>
                  Enhanced email engagement through advanced tracking and data
                  analytics, enabling the team to make informed decisions for
                  ongoing improvements.
                </li>
                <li>
                  Streamlined production processes to ensure high-quality,
                  on-time campaign delivery, consistently meeting or exceeding
                  key performance benchmarks.
                </li>
              </ul>
            </div>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger className="w-full">
            <EventItem
              title="Co-Founder & Chief&nbsp;Operating&nbsp;Officer"
              body="BrandLoyal"
              timeline="2014 &mdash; 2022"
              image={brandloyalLogo}
            />
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto max-w-xl p-4">
              <h3>Key Achievements</h3>
              <ul className="list-disc pt-2 pl-4 space-y-2">
                <li>
                  Product Innovation: Designed the core product features and
                  systems, focusing on creating sustainable competitive
                  advantages and establishing a significant competitive moat.
                </li>
                <li>
                  UI/UX Design: Developed a comprehensive design system for core
                  products, emphasizing intuitive user interfaces and seamless
                  user experiences to boost customer satisfaction.
                </li>
                <li>
                  Data-Driven Dashboard: Engineered a sophisticated product
                  dashboard that aggregates application data and business
                  metrics, facilitating data-driven decisions.
                </li>
                <li>
                  Marketing Strategy: Pioneered various experimental marketing
                  strategies that significantly increased customer acquisition
                  and propelled company growth.
                </li>
                <li>
                  API Development: Architected and refined the API and dashboard
                  integration, facilitating seamless functionality across
                  numerous business locations.
                </li>
                <li>
                  Customer Success: Implemented effective onboarding and
                  customer success strategies, utilizing drip campaigns to
                  enhance retention and attract new business.
                </li>
                <li>
                  Digital Transformation: Created a &quot;Smart Display&quot;
                  Web App and developed automation tools, converting physical
                  interactions into digital touchpoints for advanced pixel
                  retargeting and analytics.
                </li>
                <li>
                  Project Leadership: Managed diverse teams, including
                  contractors and consultants, adhering to agile methodologies
                  to meet strategic goals.
                </li>
              </ul>
            </div>
          </DrawerContent>
        </Drawer>
        <Drawer>
          <DrawerTrigger className="w-full">
            <EventItem
              title="Software Engineer"
              body="Vroom"
              timeline="2018 &mdash; 2020"
              image={vroomLogo}
            />
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto max-w-xl p-4">
              <h3>Key Achievements</h3>
              <ul className="list-disc pt-2 pl-4 space-y-2">
                <li>
                  Built a Component-Based Email System: Streamlined the creation
                  of transactional and promotional emails with modular
                  templates, reducing production time and increasing campaign
                  efficiency.
                </li>
                <li>
                  Developed an Internal Email Signature Generator: Standardized
                  email branding across teams, improving professionalism and
                  consistency in communications leading up to the IPO.
                </li>
                <li>
                  Optimized Customer Communication: Improved email workflows and
                  segmentation strategies, boosting engagement and conversion
                  rates.
                </li>
                <li>
                  Enhanced Email Development Processes: Ensured cross-platform
                  compatibility and improved deliverability through best
                  practices in coding and testing.
                </li>
                <li>
                  Supported IPO Readiness: Contributed to scalable internal
                  tools and customer outreach systems that aligned with
                  Vroom&apos;s growth goals.
                </li>
              </ul>
            </div>
          </DrawerContent>
        </Drawer>
      </SplitLayout>
    </section>
  );
};
