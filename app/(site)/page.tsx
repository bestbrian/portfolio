import Image from "next/image";
import { InputForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { SplitLayout } from "@/components/split-layout";
import { EventItem } from "@/components/event-item";
import { BadgeGrid } from "@/components/badge-grid";
import { ToolGrid } from "@/components/tool-grid";
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
        <h2 className="border-solid border-2 border-sky-500 font-subway font-black mt-8 mb-4 text-3xl dark:text-yellow-200 {styles.TorontoSubway} font-medium">
          WELCOME, BRIAN BEST
        </h2>
        <section className="flex flex-col gap-12">
          <SplitLayout section="Bio">
            <div className="p-4">
              Customize the number of columns, rows, and gaps to fit your needs.
              <p>
                2. Click the square with + sign to add a new element to the
                grid. 3. Resize the DIV using the handle in the bottom right
                corner.
              </p>
              <p>4. Drag and drop the DIV to reposition it as desired.</p>
              5. Finally, copy the generated HTML code and paste it into your
              project.
            </div>
          </SplitLayout>

          <SplitLayout section="Experience">
            <EventItem
              title="Senior Product Manager"
              body="Musth"
              timeline="2022 –– 2024"
              image={musthLogo}
            />
            <EventItem
              title="Software Engineer"
              body="Better"
              timeline="2020 –– 2022"
              image={betterLogo}
            />
            <EventItem
              title="Co-Founder & Chief Operating Officer"
              body="BrandLoyal"
              timeline="2014 –– 2022"
              image={brandloyalLogo}
            />
            <EventItem
              title="Software Engineer"
              body="Vroom"
              timeline="2018 –– 2020"
              image={vroomLogo}
            />
          </SplitLayout>

          <SplitLayout section="Skills">
            <BadgeGrid title="Product Management" badges={ProductSkills} />
            <BadgeGrid title="Technical" badges={TechnicalSkills} />
            <BadgeGrid title="Collaboration" badges={CollabSkills} />
            <BadgeGrid title="Marketing" badges={MarketingSkills} />
          </SplitLayout>

          <SplitLayout section="Education">
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

          <SplitLayout section="Stack">
            <ToolGrid tools={TechTools} />
          </SplitLayout>

          <SplitLayout section="Contact">
            <ToolGrid tools={SoftwareTools} />
          </SplitLayout>
        </section>
        <InputForm />
      </div>
    </main>
  );
}
