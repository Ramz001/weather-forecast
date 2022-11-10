export const containerVarients = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    height: "18rem",
    transition: {
      duration: 0.75,
      ease: "linear",
    },
  },
  closed: {
    y: 0,
    opacity: 1,
    height: "9rem",
    justifyContent: "center",
    transition: {
      duration: 0.75,
      ease: "linear",
    },
  },
};
