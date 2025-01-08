export const EASE = {
  slideIn: [0.08, 0.65, 0.53, 0.96],
};

export const animations = {
  // Base slide-up animation
  slideUp: (
    withOpacity: boolean = true,
    duration: number = 0.3,
    distance: number = 20
  ) => ({
    hidden: {
      opacity: withOpacity ? 0 : 1,
      y: distance,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: EASE.slideIn,
      },
    },
  }),
  imageFadeIn: {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0, ease: EASE.slideIn, delay: 0 },
    },
  },
  // Container with children animations staggered (delayed by x + staggerTime)
  staggerContainer: (staggerTime: number = 0.1) => ({
    hidden: {
      transition: { when: "beforeChildren" },
    },
    show: {
      transition: {
        staggerChildren: staggerTime,
        duration: 0.3,
        ease: EASE.slideIn,
      },
    },
  }),

  fadeIn: (duration: number = 0.3) => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: duration },
    },
  }),
};
