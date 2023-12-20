const hoverColor = "#303030";


export const sideMainMenuVariants = {
  sizeIncrease: {
    scale: 1.1,
    originX: 0,
    backgroundColor: hoverColor,
    transition: {
      duration: 0.2,
    },
  },
};
export const sideSubMenuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    scale: 0.3,
    filter: "blur(20px)",
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeIn",
    },
  },
  sizeIncrease: {
    scale: 1.1,
    originX: 0,
    backgroundColor: hoverColor,
    transition: {
      duration: 0.2,
    },
  },
};

export const menuPositionLeftVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeOut",
    },
  },
  closed: {
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  initial: {
    x: "-100vh",
    opacity: 0,
  },
};

export const menuPositionRightVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    x: "+100vh",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  initial: {
    right: '0px',
    left: 'auto',
    opacity: 0,
  },
};