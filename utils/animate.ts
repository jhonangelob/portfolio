const duration = { duration: 0.5 };

export const animate = {
  up: {
    opacity: [0, 1],
    y: [60, 0],
    transition: duration,
  },
  right: {
    opacity: [0, 1],
    x: [-60, 0],
    transition: duration,
  },
  left: {
    opacity: [0, 1],
    x: [60, 0],
    transition: duration,
  },
};

export const translate = {
  left: { x: -500, opacity: 0, scale: 0.5 },
  right: { x: 500, opacity: 0, scale: 0.5 },
  animate: { x: 0, opacity: 1, scale: 1 },
  transition: { duration: 0.75 },
};
