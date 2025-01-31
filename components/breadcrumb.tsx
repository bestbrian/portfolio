"use client";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";
import { useMemo } from "react";

function formatSegment(segment: string): string {
  if (!segment) return "";
  // Replace hyphens, underscore, etc. and title-case each word
  return segment
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export const Breadcrumb = () => {
  const pathname = usePathname();
  console.log(pathname);

  const segments: string[] = useMemo(() => {
    return pathname.split("/").filter(Boolean);
  }, [pathname]);

  const pathArray = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    return {
      segment,
      href,
    };
  });

  return (
    <BreadcrumbList className="flex justify-center items-center">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      {pathArray.map((item, index) => {
        const isLast = index === pathArray.length - 1;
        const formatted = formatSegment(item.segment);
        return (
          <React.Fragment key={item.href}>
            <BreadcrumbItem>
              {isLast ? (
                <BreadcrumbPage>{formatted}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href}>{formatted}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {!isLast && <BreadcrumbSeparator />}
          </React.Fragment>
        );
      })}
    </BreadcrumbList>
  );
};
