"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Download, Linkedin } from "lucide-react";
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
import { Button } from "../ui/button";

export function Nav() {
  return (
    <div className="flex items-center justify-center font-satoshi sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-background/60 hover:bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              TLDR
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md outline-none focus:shadow-md relative">
                      <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 outline-none focus:shadow-md relative px-4">
                        <Image
                          src="/images/brian_image.jpeg"
                          alt="Brian Best"
                          fill
                          className="object-cover rounded-md"
                          priority
                        />
                        <div
                          className="font-subway mt-4 text-lg font-medium relative z-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]"
                          style={{ color: "white" }}
                        >
                          BRIAN BEST
                        </div>
                        <p
                          className="font-satoshi text-xs leading-tight relative z-10 [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]"
                          style={{ color: "white" }}
                        >
                          Product Manager, Software Engineer
                        </p>
                      </div>

                      <div className="flex gap-2 mt-2 w-full">
                        <Button
                          className="flex-1 gap-2"
                          onClick={() =>
                            window.open("/BrianBestResume.pdf", "_blank")
                          }
                        >
                          <Download size={16} />
                          Download CV
                        </Button>
                        <Button
                          className="flex-1 gap-2"
                          onClick={() =>
                            window.open(
                              "https://linkedin.com/in/bestbrian",
                              "_blank"
                            )
                          }
                        >
                          <Linkedin size={16} />
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </NavigationMenuLink>
                </li>
                <ListItem title="Innovative Leader">
                  From co-founding Y Combinator &apos;18 startups to scaling
                  SaaS products, I blend strategy, design, and development to
                  drive measurable growth.
                </ListItem>
                <ListItem title="Builder of Solutions">
                  I design, launch, and optimize digital platforms - delivering
                  impactful 0-1 projects in FinTech, marketing automation,
                  and&nbsp;UX.
                </ListItem>
                <ListItem title="Agile Champion">
                  Certified Scrum Master enabling teams to ship user-focused
                  solutions, sprint by sprint.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-background/60 hover:bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60"
                )}
              >
                Contact
              </NavigationMenuLink>
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-7 mr-2">
        <ModeSwitcher />
      </div>
    </div>
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
