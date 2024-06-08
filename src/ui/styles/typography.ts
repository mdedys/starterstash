import { pxToUnits } from "./utils";

const typography = {
  display: {
    "2xl": {
      fontsize: pxToUnits(72),
      lineheight: pxToUnits(90),
      letterspacing: "-0.02em",
    },
    xl: {
      fontsize: pxToUnits(60),
      lineheight: pxToUnits(72),
      letterspacing: "-0.02em",
    },
    lg: {
      fontsize: pxToUnits(48),
      lineheight: pxToUnits(60),
      letterspacing: "-0.02em",
    },
    md: {
      fontsize: pxToUnits(36),
      lineheight: pxToUnits(44),
    },
    sm: {
      fontsize: pxToUnits(30),
      lineheight: pxToUnits(38),
    },
    xs: {
      fontsize: pxToUnits(24),
      lineheight: pxToUnits(32),
    },
  },
  text: {
    "2xl": {
      fontsize: pxToUnits(24),
      lineheight: pxToUnits(32),
    },
    xl: {
      fontsize: pxToUnits(20),
      lineheight: pxToUnits(30),
    },
    lg: {
      fontsize: pxToUnits(18),
      lineheight: pxToUnits(28),
    },
    md: {
      fontsize: pxToUnits(16),
      lineheight: pxToUnits(24),
    },
    sm: {
      fontsize: pxToUnits(14),
      lineheight: pxToUnits(20),
    },
    xs: {
      fontsize: pxToUnits(12),
      lineheight: pxToUnits(18),
    },
  },
};

export default typography;
