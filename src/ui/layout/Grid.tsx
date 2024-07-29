import { styled } from "@linaria/react";

import breakpoints from "../styles/breakpoints";
import spacing from "../styles/spacing";
import widths from "../styles/widths";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100%;
  gap: ${spacing.xl.px};

  width: 100%;
  margin: 0 auto;
  padding: 0 ${spacing.xl.px};

  @media (min-width: ${breakpoints.mobile.px}) {
    grid-template-columns: repeat(6, 1fr);
    gap: ${spacing["4xl"].px};

    padding: 0 ${spacing["4xl"].px};
  }

  @media (min-width: ${breakpoints.tablet.px}) {
    grid-template-columns: repeat(12, 1fr);

    max-width: ${widths["3xl"].px};
  }
`;

export default Grid;
