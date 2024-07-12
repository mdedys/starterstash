import { css } from "@linaria/core";

import focus from "../styles/focus";
import { cssvar, vars } from "../theme/vars";

export type Variant = "primary" | "secondary" | "link" | "tertiary";
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
    &.destructive {
      border-color: ${cssvar(vars.button.error.primary.border)};
      background-color: ${cssvar(vars.button.error.primary.bg)};
      color: ${cssvar(vars.colors.foreground.white)};
    }

    &:hover.destructive {
      border-color: ${cssvar(vars.button.error.primary.borderhover)};
      background-color: ${cssvar(vars.button.error.primary.bghover)};
      color: ${cssvar(vars.colors.foreground.white)};
    }

    &.destructive:active {
      border-color: ${cssvar(vars.button.error.primary.border)};
      background-color: ${cssvar(vars.button.error.primary.bg)};
      color: ${cssvar(vars.colors.foreground.white)};
      box-shadow: ${focus.shadow.errorxs};
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

    &.destructive {
      border-color: ${cssvar(vars.button.error.secondary.border)};
      background-color: ${cssvar(vars.button.error.secondary.bg)};
      color: ${cssvar(vars.button.error.secondary.fg)};
    }

    &:hover.destructive {
      border-color: ${cssvar(vars.button.error.secondary.borderhover)};
      background-color: ${cssvar(vars.button.error.secondary.bghover)};
      color: ${cssvar(vars.button.error.secondary.fghover)};
    }

    &.destructive:active {
      border-color: ${cssvar(vars.button.error.secondary.border)};
      background-color: ${cssvar(vars.button.error.secondary.bg)};
      color: ${cssvar(vars.button.error.secondary.fg)};
      box-shadow: ${focus.shadow.errorxs};
    }
  `,
  tertiary: css`
    background: transparent;
    border: none;
    color: ${cssvar(vars.button.tertiary.fg)};
    &:hover {
      background: ${cssvar(vars.button.secondary.bghover)};
      color: ${cssvar(vars.button.tertiary.fghover)};
    }
    &:active {
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
