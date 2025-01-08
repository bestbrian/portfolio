import {
  DOMKeyframesDefinition,
  DynamicAnimationOptions,
  useAnimate,
} from "motion/react";
import { useRef, useEffect } from "react";
type ElementOrSelector = Element | Element[] | NodeListOf<Element> | string;

type AnimateParams = [
  ElementOrSelector,
  DOMKeyframesDefinition,
  (DynamicAnimationOptions | undefined)?,
];

type Animation = AnimateParams | Animation[];

export const useMotionTimeline = (
  keyframes: Animation[],
  count: number = Infinity
) => {
  const mounted = useRef(true);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    mounted.current = true;

    handleAnimate();

    return () => {
      mounted.current = false;
    };
  }, []);

  const processAnimation = async (animation: Animation) => {
    // If list of animations, run all concurrently
    if (Array.isArray(animation[0])) {
      await Promise.all(
        animation.map(async (a) => {
          await processAnimation(a as Animation);
        })
      );
    } else {
      // Else run the single animation
      await animate(...(animation as AnimateParams));
    }
  };

  const handleAnimate = async () => {
    for (let i = 0; i < count; i++) {
      for (const animation of keyframes) {
        if (!mounted.current) return;
        await processAnimation(animation);
      }
    }
  };

  return scope;
};
