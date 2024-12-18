"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeSwitcher } from "../mode-switcher";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Nav() {
  return (
    <nav className="flex items-center justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>TLDR</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md relative">
                      <Image
                        src="/images/brian_image.jpeg"
                        alt="Brian Best"
                        fill
                        className="object-cover rounded-md"
                        priority
                      />
                      <div className="font-subway mt-4 text-lg font-medium relative z-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
                        BRIAN BEST
                      </div>
                      <p className="font-satoshi text-xs leading-tight relative z-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
                        Product Manager, Software Engineer
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem title="Innovative Leader">
                  {/* Y Combinator alum driving SaaS growth through strategy,
                  design, and development. */}
                  From co-founding Y Combinator &apos;18 startups to scaling
                  SaaS products, I blend strategy, design, and development to
                  drive measurable growth.
                </ListItem>
                <ListItem title="Builder of Solutions">
                  {/* From 0-1 ideas to scalable platforms, I deliver impactful
                  digital products. */}
                  I design, launch, and optimize digital platforms - delivering
                  impactful 0-1 projects in FinTech, marketing automation, and
                  UX.
                </ListItem>
                <ListItem title="Agile Champion">
                  Certified Scrum Master enabling teams to ship user-focused
                  solutions, sprint by sprint.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-10">
        <ModeSwitcher />
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <div className="pb-2 text-sm font-medium leading-none">{title}</div>
      <p className="text-sm leading-snug text-muted-foreground">{children}</p>
    </li>
  );
});
ListItem.displayName = "ListItem";
