const colors = {
  text: {
    primary: {
      main: "--color-text-primary",
      brand: "--color-text-primary-brand",
    },
    secondary: {
      main: "--color-text-secondary",
      hover: "--color-text-secondary-hover",
      brand: "--color-text-secondary-brand",
    },
    tertiary: {
      main: "--color-text-tertiary",
      hover: "--color-text-tertiary-hover",
      brand: "--color-text-tertiary-brand",
    },
    quaternary: {
      main: "--color-text-quaternary",
      brand: "--color-text-quaternary-brand",
    },
    white: "--color-text-white",
    disabled: "--color-text-disabled",
    placeholder: {
      main: "--color-text-placeholder",
      subtle: "--color-text-placeholder-subtle",
    },
    brand: {
      primary: "--color-text-brand-primary",
      secondary: "--color-text-brand-secondary",
      tertiary: "--color-text-brand-tertiary",
      tertirayalt: "--color-text-brand-tertirayalt",
    },
    error: "--color-text-error",
    warning: "--color-text-warning",
    success: "--color-text-success",
  },
  border: {
    primary: "--color-border-primary",
    secondary: "--color-border-secondary",
    tertiary: "--color-border-tertiary",
    disabled: "--color-border-disabled",
    disabledsubtle: "--color-border-disabled-subtle",
    brand: "--color-border-brand",
    brandsolid: "--color-border-brand-solid",
    brandsolidalt: "--color-border-brand-solid-alt",
    error: "--color-border-error",
    errorsolid: "--color-border-error-solid",
  },
  foreground: {
    primary: "--color-fg-primary",
    secondary: {
      main: "--color-fg-secondary",
      hover: "--color-fg-secondary-hover",
    },
    tertiary: {
      main: "--color-fg-tertiary",
      hover: "--color-fg-tertiary-hover",
    },
    quaternary: {
      main: "--color-fg-quaternary",
      hover: "--color-fg-quaternary-hover",
    },
    quinary: {
      main: "--color-fg-quinary",
      hover: "--color-fg-secondary-hover",
    },
    senary: "--color-fg-senary",
    white: "--color-fg-white",
    disabled: {
      main: "--color-fg-disabled",
      subtle: "--color-fg-disabled-subtle",
    },
    brand: {
      main: "--color-fg-brand",
      alt: "--color-fg-brand-alt",
      secondary: "--color-fg-brand-secondary",
    },
    error: {
      main: "--color-fg-error",
      secondary: "--color-fg-error-secondary",
    },
    warning: {
      main: "--color-fg-warning",
      secondary: "--color-fg-warning-secondary",
    },
    success: {
      main: "--color-fg-success",
      secondary: "--color-fg-success-secondary",
    },
  },
  background: {
    primary: {
      main: "--color-bg-primary",
      alt: "--color-bg-primary-alt",
      hover: "--color-bg-primary-hover",
      solid: "--color-bg-primary-solid",
    },
    secondary: {
      main: "--color-bg-secondary",
      alt: "--color-bg-secondary-alt",
      hover: "--color-bg-secondary-hover",
      solid: "--color-bg-secondary-solid",
      subtle: "--color-bg-secondary-subtle",
    },
    tertiary: "--color-bg-tertiary",
    quaternary: "--color-bg-quaternary",
    active: "--color-bg-active",
    disabled: {
      main: "--color-bg-disabled",
      subtle: "--color-bg-subtle",
    },
    overlay: "--color-bg-overlay",
    brand: {
      main: "--color-bg-brand",
      alt: "--color-bg-brand-alt",
      secondary: "--color-bg-brand-secondary",
      solid: "--color-bg-brand-solid",
      solidhover: "--color-bg-brand-solid-hover",
      section: "--color-bg-brand-section",
      sectionsubtle: "--color-bg-brand-section-subtle",
    },
    error: {
      main: "--color-fg-error",
      secondary: "--color-error-secondary",
      solid: "--color-bg-error-solid",
    },
    warning: {
      main: "--color-fg-warning",
      secondary: "--color-warning-secondary",
      solid: "--color-bg-success-solid",
    },
    success: {
      main: "--color-fg-success",
      secondary: "--color-success-secondary",
      solid: "--color-bg-success-solid",
    },
  },
};

const button = {
  primary: {
    fg: "--button-color-primary-fg",
    fghover: "--button-color-primary-fg-hover",
    bg: "--button-color-primary-bg",
    bghover: "--button-color-primary-bg-hover",
    border: "--button-color-primary-border",
    borderhover: "--button-color-primary-border-hover",
  },
  secondary: {
    fg: "--button-color-secondary-fg",
    fghover: "--button-color-secondary-fg-hover",
    bg: "--button-color-secondary-bg",
    bghover: "--button-color-secondary-bg-hover",
    border: "--button-color-secondary-border",
    borderhover: "--button-color-secondary-border-hover",
  },
  tertiary: {
    fg: "--button-color-tertiary-fg",
    fghover: "--button-color-tertiary-fg-hover",
    bghover: "--button-color-tertiary-bg-hover",
  },
  tertiarycolor: {
    fg: "--button-color-tertiarycolor-fg",
    fghover: "--button-color-tertiarycolor-fg-hover",
    bghover: "--button-color-tertiarycolor-bg-hover",
  },
};

export const vars = {
  button,
  colors,
};

export function cssvar(name: string) {
  return `var(${name})`;
}
