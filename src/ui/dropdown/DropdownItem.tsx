import { styled } from "@linaria/react";
import { PropsWithChildren } from "react";

import border from "../styles/border";
import spacing from "../styles/spacing";
import { cssvar, vars } from "../theme/vars";

export const DropdownItemDivider = styled.div`
  background-color: ${cssvar(vars.colors.border.secondary)};

  height: 1px;
  width: 100%;
  margin: ${spacing.xs.px} 0;
`;

const Item = styled.div<StyledProps<DropdownItemProps>>`
  margin: 1px ${spacing.sm.px};

  &[data-header="true"] {
    margin: ${spacing.lg.px} ${spacing.xl.px};
  }

  &[data-header="false"] {
    cursor: pointer;
    padding: 9px 10px;
  }

  &:hover[data-header="false"] {
    background-color: ${cssvar(vars.colors.background.secondary.hover)};
    border-radius: ${border.sm};
  }
`;

export interface DropdownItemProps {
  header?: boolean;
}

export default function DropdownItem(
  props: PropsWithChildren<DropdownItemProps>,
) {
  return (
    <Item data-header={props.header ? "true" : "false"}>{props.children}</Item>
  );
}
