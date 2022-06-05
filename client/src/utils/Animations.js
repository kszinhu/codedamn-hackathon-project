export const Animations = {
  fadeRightIn: {
    initial: {
      opacity: 0,
      x: "100%",
    },
    animate: {
      opacity: 1,
      x: 0,
    },

    transition: {
      duration: 1.2,
      type: "spring",
      bouce: 0.4,
    },
  },

  fadeLeftIn: {
    initial: {
      opacity: 0,
      x: "-100%",
    },

    animate: {
      opacity: 1,
      x: 0,
    },

    transition: {
      duration: 1.2,
      type: "spring",
      bouce: 0.4,
    },
  },

  scaleIn: {
    initial: {
      scale: 0.9,
      opacity: 0,
    },

    animate: {
      scale: 1,
      opacity: 1,
    },

    transition: {
      duration: 1.2,
      type: "spring",
      bouce: 0.4,
    },
  },

  scaleOut: {
    initial: {
      scale: 1,
      opacity: 1,
    },

    animate: {
      scale: 0,
      opacity: 0,
    },
  },
};
