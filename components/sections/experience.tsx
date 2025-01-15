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
import { ExperienceCards } from "../card-expand";

export const Experience = () => {
  return (
    <section className="flex flex-col gap-12">
      <SplitLayout section="EXPERIENCE">
        <ExperienceCards />
      </SplitLayout>
    </section>
  );
};
