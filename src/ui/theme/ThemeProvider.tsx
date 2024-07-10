import { useLayoutEffect } from "react";

import { vars } from "./vars";
import colors from "../styles/colors";

type Theme = "light" | "dark";

function getTheme(mode: Theme) {
  const text = colors.text[mode];
  const border = colors.border[mode];
  const fg = colors.foreground[mode];
  const bg = colors.background[mode];
  const button = colors.button[mode];
  return {
    /** Text */
    [vars.colors.text.primary.main]: text.primary.main,
    [vars.colors.text.primary.brand]: text.primary.brand,
    [vars.colors.text.secondary.main]: text.secondary.main,
    [vars.colors.text.secondary.brand]: text.secondary.brand,
    [vars.colors.text.secondary.hover]: text.secondary.hover,
    [vars.colors.text.tertiary.main]: text.tertiary.main,
    [vars.colors.text.tertiary.brand]: text.tertiary.brand,
    [vars.colors.text.tertiary.hover]: text.tertiary.hover,
    [vars.colors.text.quaternary.main]: text.quaternary.main,
    [vars.colors.text.quaternary.brand]: text.quaternary.brand,
    [vars.colors.text.white]: text.white,
    [vars.colors.text.disabled]: text.disabled,
    [vars.colors.text.placeholder.main]: text.placeholder.main,
    [vars.colors.text.placeholder.subtle]: text.placeholder.subtle,
    [vars.colors.text.brand.primary]: text.brand.primary,
    [vars.colors.text.brand.secondary]: text.brand.secondary,
    [vars.colors.text.brand.tertiary]: text.brand.tertiary,
    [vars.colors.text.brand.tertirayalt]: text.brand.tertiaryalt,
    [vars.colors.text.error]: text.error,
    [vars.colors.text.warning]: text.warning,
    [vars.colors.text.success]: text.success,
    /** Border */
    [vars.colors.border.primary]: border.primary,
    [vars.colors.border.secondary]: border.secondary,
    [vars.colors.border.tertiary]: border.tertiary,
    [vars.colors.border.disabled]: border.disabled,
    [vars.colors.border.disabledsubtle]: border.disabledsubtle,
    [vars.colors.border.brand]: border.brand,
    [vars.colors.border.brandsolid]: border.brandsolid,
    [vars.colors.border.brandsolidalt]: border.brandsolidalt,
    [vars.colors.border.error]: border.error,
    [vars.colors.border.errorsolid]: border.errorsolid,
    /** Foreground */
    [vars.colors.foreground.primary]: fg.primary,
    [vars.colors.foreground.secondary.main]: fg.secondary.main,
    [vars.colors.foreground.secondary.hover]: fg.secondary.hover,
    [vars.colors.foreground.tertiary.main]: fg.tertiary.main,
    [vars.colors.foreground.tertiary.hover]: fg.tertiary.hover,
    [vars.colors.foreground.quaternary.main]: fg.quaternary.main,
    [vars.colors.foreground.quaternary.hover]: fg.quaternary.hover,
    [vars.colors.foreground.quaternary.main]: fg.quaternary.main,
    [vars.colors.foreground.quaternary.hover]: fg.quaternary.hover,
    [vars.colors.foreground.quinary.main]: fg.quinary.main,
    [vars.colors.foreground.quinary.hover]: fg.quinary.hover,
    [vars.colors.foreground.senary]: fg.senary,
    [vars.colors.foreground.white]: fg.white,
    [vars.colors.foreground.disabled.main]: fg.disabled.main,
    [vars.colors.foreground.disabled.subtle]: fg.disabled.subtle,
    [vars.colors.foreground.brand.main]: fg.brand.main,
    [vars.colors.foreground.brand.alt]: fg.brand.alt,
    [vars.colors.foreground.brand.secondary]: fg.brand.secondary,
    [vars.colors.foreground.error.main]: fg.error.main,
    [vars.colors.foreground.error.secondary]: fg.error.secondary,
    [vars.colors.foreground.warning.main]: fg.warning.main,
    [vars.colors.foreground.warning.secondary]: fg.warning.secondary,
    [vars.colors.foreground.success.main]: fg.success.main,
    [vars.colors.foreground.success.secondary]: fg.success.secondary,
    /** Background */
    [vars.colors.background.primary.main]: bg.primary.main,
    [vars.colors.background.primary.alt]: bg.primary.alt,
    [vars.colors.background.primary.hover]: bg.primary.hover,
    [vars.colors.background.primary.solid]: bg.primary.solid,
    [vars.colors.background.secondary.main]: bg.secondary.main,
    [vars.colors.background.secondary.alt]: bg.secondary.alt,
    [vars.colors.background.secondary.hover]: bg.secondary.hover,
    [vars.colors.background.secondary.solid]: bg.secondary.solid,
    [vars.colors.background.secondary.subtle]: bg.secondary.subtle,
    [vars.colors.background.tertiary]: bg.tertiary,
    [vars.colors.background.quaternary]: bg.quaternary,
    [vars.colors.background.active]: bg.active,
    [vars.colors.background.disabled.main]: bg.disabled.main,
    [vars.colors.background.disabled.subtle]: bg.disabled.subtle,
    [vars.colors.background.overlay]: bg.overlay,
    [vars.colors.background.brand.main]: bg.brand.main,
    [vars.colors.background.brand.alt]: bg.brand.alt,
    [vars.colors.background.brand.secondary]: bg.brand.secondary,
    [vars.colors.background.brand.solid]: bg.brand.solid,
    [vars.colors.background.brand.solidhover]: bg.brand.solidhover,
    [vars.colors.background.brand.section]: bg.brand.section,
    [vars.colors.background.brand.sectionsubtle]: bg.brand.sectionsubtle,
    [vars.colors.background.error.main]: bg.error.main,
    [vars.colors.background.error.secondary]: bg.error.secondary,
    [vars.colors.background.error.solid]: bg.error.solid,
    [vars.colors.background.warning.main]: bg.warning.main,
    [vars.colors.background.warning.secondary]: bg.warning.secondary,
    [vars.colors.background.warning.solid]: bg.warning.solid,
    [vars.colors.background.success.main]: bg.success.main,
    [vars.colors.background.success.secondary]: bg.success.secondary,
    [vars.colors.background.success.solid]: bg.success.solid,
    /** Buttons */
    [vars.button.primary.fg]: button.primary.fg,
    [vars.button.primary.fghover]: button.primary.fghover,
    [vars.button.primary.bg]: button.primary.bg,
    [vars.button.primary.bghover]: button.primary.bghover,
    [vars.button.primary.border]: button.primary.border,
    [vars.button.primary.borderhover]: button.primary.borderhover,
    [vars.button.secondary.fg]: button.secondary.fg,
    [vars.button.secondary.fghover]: button.secondary.fghover,
    [vars.button.secondary.bg]: button.secondary.bg,
    [vars.button.secondary.bghover]: button.secondary.bghover,
    [vars.button.secondary.border]: button.secondary.border,
    [vars.button.secondary.borderhover]: button.secondary.borderhover,
    [vars.button.tertiary.fg]: button.tertiary.fg,
    [vars.button.tertiary.fghover]: button.tertiary.fghover,
    [vars.button.tertiary.bghover]: button.tertiary.bghover,
    [vars.button.tertiarycolor.fg]: button.tertiarycolor.fg,
    [vars.button.tertiarycolor.fghover]: button.tertiarycolor.fghover,
    [vars.button.tertiarycolor.bghover]: button.tertiarycolor.bghover,
  };
}

interface ThemeProviderProps {
  theme: Theme;
}

export default function ThemeProvider(props: ThemeProviderProps) {
  useLayoutEffect(() => {
    const vars = getTheme(props.theme ?? "light");
    const content = Object.keys(vars).reduce<string>((str, key) => {
      str += `${key}: ${vars[key]}; \n`;
      return str;
    }, "");

    const existing = window.document.querySelector("#theme");
    if (existing) {
      existing.parentElement?.removeChild(existing);
    }

    const style = window.document.createElement("style");
    style.id = "theme";
    style.textContent = `
      :root {
        ${content}
      }
    `;
    window.document.head.appendChild(style);
  }, [props.theme]);
  return null;
}
