import Image from "next/image";
import { InputForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { SplitLayout } from "@/components/split-layout";
import { EventItem } from "@/components/event-item";
import { BadgeGrid } from "@/components/badge-grid";
import { ToolGrid } from "@/components/tool-grid";
import {
  TOOLS,
  ProductManagementSkills,
  ProgrammingSkills,
} from "@/lib/content";
import betterLogo from "/public/images/better_logo.jpg";
import brandloyalLogo from "/public/images/brandloyal_logo.jpeg";
import vroomLogo from "/public/images/vroom_logo.jpeg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <h2 className="border-solid border-2 border-sky-500 font-subway font-black mt-8 mb-4 text-3xl dark:text-yellow-200 {styles.TorontoSubway} font-medium">
          TORONTO SUBWAY
        </h2>
        <section className="flex flex-col gap-12">
          <SplitLayout section="BIO">
            Customize the number of columns, rows, and gaps to fit your needs.
            <p>
              2. Click the square with + sign to add a new element to the grid.
              3. Resize the DIV using the handle in the bottom right corner.
            </p>
            <p>4. Drag and drop the DIV to reposition it as desired.</p>
            5. Finally, copy the generated HTML code and paste it into your
            project.
          </SplitLayout>

          <SplitLayout section="Experience">
            <EventItem eventImage={betterLogo} />
            <EventItem eventImage={brandloyalLogo} />
            <EventItem eventImage={vroomLogo} />
          </SplitLayout>

          <SplitLayout section="Skills">
            <BadgeGrid
              title="Product Skills"
              badges={ProductManagementSkills}
            />
            <BadgeGrid title="Programming Skills" badges={ProgrammingSkills} />
          </SplitLayout>

          <SplitLayout section="Education"></SplitLayout>

          <SplitLayout section="Stack">
            <ToolGrid tools={TOOLS} />
          </SplitLayout>

          <SplitLayout section="Contact">
            <ToolGrid tools={TOOLS} />
          </SplitLayout>

          <SplitLayout section="Stack">
            <ToolGrid tools={TOOLS} />
          </SplitLayout>
        </section>
        <InputForm />
      </div>
    </main>
  );
}
