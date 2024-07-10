import { styled } from "@linaria/react";

import spacing from "../styles/spacing";
import { cssvar, vars } from "../theme/vars";

const Divider = styled.div`
  background-color: ${cssvar(vars.colors.border.secondary)};

  height: 1px;
  width: 100%;
  margin: ${spacing.lg.rem} 0;
`;

export default Divider;
