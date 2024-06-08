import { styled } from "@linaria/react";

import breakpoints from "../styles/breakpoints";
import widths from "../styles/widths";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100%;
  gap: 16px;

  width: 100%;
  padding: 0 16px;

  @media (min-width: ${breakpoints.mobile.px}) {
    grid-template-columns: repeat(6, 1fr);
    gap: 32px;

    padding: 0 32px;
  }

  @media (min-width: ${breakpoints.tablet.px}) {
    grid-template-columns: repeat(12, 1fr);

    max-width: ${widths["3xl"].px};
  }
`;

export default Grid;
