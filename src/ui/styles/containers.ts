import { pxToUnits } from "./utils";

const containers = {
  padding: {
    mobile: pxToUnits(16),
    desktop: pxToUnits(32),
  },
  maxwidth: {
    desktop: pxToUnits(1280),
    paragraph: pxToUnits(720),
  },
};

export default containers;
