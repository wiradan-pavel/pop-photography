// unique
// header
export const headerAni = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.7 } },
};
export const headerNavAni = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delayChildren: 0.5, staggerChildren: 0.2 } },
};
// home
export const homeHeaderImgsAni = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delayChildren: 0.5, staggerChildren: 0.07 } },
};

export const homeHeaderSocialsAni = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delayChildren: 1, staggerChildren: 0.5 } },
};

export const homeHeaderSocialLine1Ani = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
};

export const homeHeaderSocialLine2Ani = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, delay: 3 } },
};

export const homeHeaderImgDecAni = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { duration: 1, delay: 0.5 } },
};
// logo
export const logoAni = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// list
export const defaultListAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

export const quicklyListAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

// item
export const opacityItemAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const opacityXNegative50ItemAnimation = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

export const opacityYNegative50ItemAnimation = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
};

export const opacityXNegative100ItemAnimation = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

export const scaleItemAnimation = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export const scaleXPositive100ItemAnimation = {
  hidden: { scale: 0, x: 100 },
  show: { scale: 1, x: 0 },
};
