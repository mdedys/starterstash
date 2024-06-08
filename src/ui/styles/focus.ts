import { colors } from "./primitives";

const focus = {
  ring: {
    brand: `0px 0px 0px 4px ${colors.primary.brand[500]}3D`,
    gray: `0px 0px 0px 4px ${colors.primary.graylight[400]}24`,
    secondary: `0px 0px 0px 4px ${colors.primary.graylight[400]}33`,
    error: `0px 0px 0px 4px ${colors.primary.error[500]}24`,
  },
  shadow: {
    brandxs: `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${colors.primary.brand[500]}3D`,
    brandsm: `0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06), 0px 0px 0px 4px ${colors.primary.brand[500]}3D`,
    grayxs: `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${colors.primary.graylight[400]}33`,
    graysm: `0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06), 0px 0px 0px 4px ${colors.primary.graylight[400]}33`,
    errorxs: `0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px ${colors.primary.error[500]}24`,
  },
};

export default focus;
