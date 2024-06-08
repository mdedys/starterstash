import { css } from "@linaria/core";

import focus from "../styles/focus";
import { cssvar, vars } from "../theme/vars";

export type Variant = "primary" | "secondary" | "link";
export type Size = "sm" | "md" | "lg" | "xl" | "2xl";

export const color = {
  primary: css`
    background: ${cssvar(vars.button.primary.bg)};
    border: 1px solid ${cssvar(vars.button.primary.border)};
    color: ${cssvar(vars.button.primary.fg)};
    &:hover {
      background: ${cssvar(vars.button.primary.bghover)};
      border: 1px solid ${cssvar(vars.button.primary.borderhover)};
      color: ${cssvar(vars.button.primary.fghover)};
    }
    &:active {
      background: ${cssvar(vars.button.primary.bg)};
      border: 1px solid ${cssvar(vars.button.primary.border)};
      box-shadow: ${focus.shadow.brandxs};
      color: ${cssvar(vars.button.primary.fg)};
    }
  `,
  secondary: css`
    background: ${cssvar(vars.button.secondary.bg)};
    border: 1px solid ${cssvar(vars.button.secondary.border)};
    color: ${cssvar(vars.button.secondary.fg)};
    &:hover {
      background: ${cssvar(vars.button.secondary.bghover)};
      border: 1px solid ${cssvar(vars.button.secondary.borderhover)};
      color: ${cssvar(vars.button.secondary.fghover)};
    }
    &:active {
      background: ${cssvar(vars.button.secondary.bg)};
      border: 1px solid ${cssvar(vars.button.secondary.border)};
      box-shadow: ${focus.shadow.grayxs};
      color: ${cssvar(vars.button.secondary.fg)};
    }
  `,
  link: css`
    background: none;
    border: none;
    color: ${cssvar(vars.button.tertiarycolor.fg)};
    padding: 0 !important;
    &:hover {
      color: ${cssvar(vars.button.tertiarycolor.fghover)};
    }
    &:active {
      color: ${cssvar(vars.button.tertiarycolor.fg)};
    }
  `,
};
