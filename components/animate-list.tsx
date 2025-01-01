"use client";

import { useAnimate } from "motion/react";
import React from "react";
import { useEffect } from "react";

interface AnimateListProps {
  children: React.ReactNode;
}

export const AnimateList = ({ children }: AnimateListProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const controls = animate([
      [scope.current, { opacity: 1 }],
      ["div", { x: [-20, 0] }, { delay: 0.2 }],
    ]);

    controls.speed = 0.8;

    return () => controls.stop();
  }, [animate]);

  return (
    <div ref={scope}>
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
};
