"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
import LocalTime from "../local-time";

export function Nav() {
  // State to control navbar visibility
  const [show, setShow] = React.useState(true);
  // Using a ref to store the last scroll position
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // If scrolling down (and past a small threshold), hide the navbar;
      // otherwise, show it
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 md:sticky md:top-4 md:bottom-auto w-full max-w-screen-2xl mx-auto z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full md:translate-y-0"
      }`}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center m-4 px-4 py-2 rounded-full supports-[backdrop-filter]:bg-secondary/60 backdrop-blur">
        <div className="flex items-center justify-start">
          <Link href="/" className="flex items-center">
            <svg
              className="ml-2 logo-svg w-6 h-6 md:w-8 md:h-8"
              viewBox="0 0 13 9"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.264 8.036C11.264 7.852 11.328 7.7 11.456 7.58C11.584 7.452 11.74 7.388 11.924 7.388C12.108 7.388 12.264 7.452 12.392 7.58C12.52 7.7 12.584 7.852 12.584 8.036C12.584 8.22 12.52 8.376 12.392 8.504C12.264 8.624 12.108 8.684 11.924 8.684C11.74 8.684 11.584 8.624 11.456 8.504C11.328 8.376 11.264 8.22 11.264 8.036Z" />
              <path d="M7.54002 3.992C7.93202 3.992 8.24402 3.872 8.47602 3.632C8.71602 3.384 8.83602 3.08 8.83602 2.72C8.83602 2.544 8.80002 2.38 8.72802 2.228C8.66402 2.068 8.57202 1.932 8.45202 1.82C8.34002 1.7 8.20402 1.608 8.04402 1.544C7.88402 1.472 7.71602 1.436 7.54002 1.436H6.60402V3.992H7.54002ZM9.11202 4.316C9.28002 4.388 9.43202 4.492 9.56802 4.628C9.71202 4.756 9.83202 4.908 9.92802 5.084C10.032 5.26 10.112 5.448 10.168 5.648C10.232 5.848 10.264 6.048 10.264 6.248C10.264 6.56 10.204 6.856 10.084 7.136C9.96402 7.408 9.80002 7.648 9.59202 7.856C9.39202 8.056 9.15202 8.216 8.87202 8.336C8.59202 8.448 8.29602 8.504 7.98402 8.504H5.63202V0.5H7.60002C7.91202 0.5 8.20002 0.56 8.46402 0.680001C8.73602 0.792001 8.97202 0.948 9.17202 1.148C9.38002 1.348 9.54002 1.584 9.65202 1.856C9.77202 2.12 9.83202 2.404 9.83202 2.708C9.83202 3.02 9.76402 3.324 9.62802 3.62C9.49202 3.916 9.32002 4.136 9.11202 4.28V4.316ZM6.60402 4.904V7.568H7.92402C8.10802 7.568 8.28002 7.532 8.44002 7.46C8.60802 7.388 8.75202 7.292 8.87202 7.172C8.99202 7.052 9.08802 6.912 9.16002 6.752C9.23202 6.592 9.26802 6.42 9.26802 6.236C9.26802 6.052 9.23202 5.88 9.16002 5.72C9.08802 5.56 8.99202 5.42 8.87202 5.3C8.75202 5.18 8.60802 5.084 8.44002 5.012C8.28002 4.94 8.10802 4.904 7.92402 4.904H6.60402Z" />
              <path d="M1.908 3.992C2.3 3.992 2.612 3.872 2.844 3.632C3.084 3.384 3.204 3.08 3.204 2.72C3.204 2.544 3.168 2.38 3.096 2.228C3.032 2.068 2.94 1.932 2.82 1.82C2.708 1.7 2.572 1.608 2.412 1.544C2.252 1.472 2.084 1.436 1.908 1.436H0.972V3.992H1.908ZM3.48 4.316C3.648 4.388 3.8 4.492 3.936 4.628C4.08 4.756 4.2 4.908 4.296 5.084C4.4 5.26 4.48 5.448 4.536 5.648C4.6 5.848 4.632 6.048 4.632 6.248C4.632 6.56 4.572 6.856 4.452 7.136C4.332 7.408 4.168 7.648 3.96 7.856C3.76 8.056 3.52 8.216 3.24 8.336C2.96 8.448 2.664 8.504 2.352 8.504H0V0.5H1.968C2.28 0.5 2.568 0.56 2.832 0.680001C3.104 0.792001 3.34 0.948 3.54 1.148C3.748 1.348 3.908 1.584 4.02 1.856C4.14 2.12 4.2 2.404 4.2 2.708C4.2 3.02 4.132 3.324 3.996 3.62C3.86 3.916 3.688 4.136 3.48 4.28V4.316ZM0.972 4.904V7.568H2.292C2.476 7.568 2.648 7.532 2.808 7.46C2.976 7.388 3.12 7.292 3.24 7.172C3.36 7.052 3.456 6.912 3.528 6.752C3.6 6.592 3.636 6.42 3.636 6.236C3.636 6.052 3.6 5.88 3.528 5.72C3.456 5.56 3.36 5.42 3.24 5.3C3.12 5.18 2.976 5.084 2.808 5.012C2.648 4.94 2.476 4.904 2.292 4.904H0.972Z" />
            </svg>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <NavigationMenu className="mr-2">
            <NavigationMenuList>
              <NavigationMenuItem className="hidden md:flex">
                <NavigationMenuTrigger className="hover:bg-background/75">
                  <p className="font-bold">TLDR</p>
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
                      SaaS products, I blend strategy, design, and development
                      to drive measurable growth.
                    </ListItem>
                    <ListItem title="Builder of Solutions">
                      I design, launch, and optimize digital platforms -
                      delivering impactful 0-1 projects in FinTech, marketing
                      automation, and&nbsp;UX.
                    </ListItem>
                    <ListItem title="Agile Champion">
                      Certified Scrum Master enabling teams to ship user-focused
                      solutions, sprint by sprint.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className="font-bold">Projects</p>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className="font-bold">Contact</p>
                  </NavigationMenuLink>
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center justify-end gap-2">
          <div className="hidden md:block">
            <LocalTime />
          </div>
          <ModeSwitcher />
        </div>
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
