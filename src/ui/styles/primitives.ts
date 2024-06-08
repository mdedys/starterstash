import { pxToUnits } from "./utils";

const base = {
  white: "#ffffff",
  black: "#000000",
  transparent: "#ffffff00",
};

const graylight = {
  25: "#FCFCFD",
  50: "#F9FAFB",
  100: "#F2F4F7",
  200: "#EAECF0",
  300: "#D0D5DD",
  400: "#98A2B3",
  500: "#667085",
  600: "#475467",
  700: "#344054",
  800: "#182230",
  900: "#101828",
  950: "#0C111D",
};

const graydark = {
  25: "#FAFAFA",
  50: "#F5F5F6",
  100: "#F0F1F1",
  200: "#ECECED",
  300: "#CECFD2",
  400: "#94969C",
  500: "#85888E",
  600: "#61646C",
  700: "#333741",
  800: "#1F242F",
  900: "#161B26",
  950: "#0C111D",
};

const brand = {
  25: "#FCFAFF",
  50: "#F9F5FF",
  100: "#F4EBFF",
  200: "#E9D7FE",
  300: "#D6BBFB",
  400: "#B692F6",
  500: "#9E77ED",
  600: "#7F56D9",
  700: "#6941C6",
  800: "#53389E",
  900: "#42307D",
  950: "#2C1C5F",
};

const error = {
  25: "#FFFBFA",
  50: "#FEF3F2",
  100: "#FEE4E2",
  200: "#FECDCA",
  300: "#FDA29B",
  400: "#F97066",
  500: "#F04438",
  600: "#D92D20",
  700: "#B42318",
  800: "#912018",
  900: "#7A271A",
  950: "#55160C",
};

const warning = {
  25: "#FFFCF5",
  50: "#FFFAEB",
  100: "#FEF0C7",
  200: "#FEDF89",
  300: "#FEC84B",
  400: "#FDB022",
  500: "#F79009",
  600: "#DC6803",
  700: "#B54708",
  800: "#93370D",
  900: "#7A2E0E",
  950: "#4E1D09",
};

const success = {
  25: "#F6FEF9",
  50: "#ECFDF3",
  100: "#DCFAE6",
  200: "#ABEFC6",
  300: "#75E0A7",
  400: "#47CD89",
  500: "#17B26A",
  600: "#079455",
  700: "#067647",
  800: "#085D3A",
  900: "#074D31",
  950: "#053321",
};

const primary = {
  base,
  graylight,
  graydark,
  brand,
  warning,
  error,
  success,
};

export const colors = {
  primary,
};

export const fonts = {
  inter: "Inter, sans-serif",
};

export const spacing = {
  0: pxToUnits(0),
  0.5: pxToUnits(2),
  1: pxToUnits(4),
  1.5: pxToUnits(6),
  2: pxToUnits(8),
  3: pxToUnits(12),
  4: pxToUnits(16),
  5: pxToUnits(20),
  6: pxToUnits(24),
  8: pxToUnits(32),
  10: pxToUnits(40),
  12: pxToUnits(48),
  16: pxToUnits(64),
  20: pxToUnits(80),
  24: pxToUnits(96),
  32: pxToUnits(128),
  40: pxToUnits(160),
  48: pxToUnits(192),
  56: pxToUnits(224),
  64: pxToUnits(256),
  80: pxToUnits(320),
  96: pxToUnits(384),
  120: pxToUnits(480),
  140: pxToUnits(560),
  160: pxToUnits(640),
  180: pxToUnits(720),
  192: pxToUnits(768),
  256: pxToUnits(1024),
  320: pxToUnits(1280),
  360: pxToUnits(1440),
  400: pxToUnits(1600),
  480: pxToUnits(1920),
};
