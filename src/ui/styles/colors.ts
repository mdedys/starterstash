import { colors as _colors } from "./primitives";

const text = {
  light: {
    primary: {
      main: _colors.primary.graylight[900],
      brand: _colors.primary.base.white,
    },
    secondary: {
      main: _colors.primary.graylight[700],
      hover: _colors.primary.graylight[800],
      brand: _colors.primary.brand[200],
    },
    tertiary: {
      main: _colors.primary.graylight[600],
      hover: _colors.primary.graylight[700],
      brand: _colors.primary.brand[200],
    },
    quaternary: {
      main: _colors.primary.graylight[500],
      brand: _colors.primary.brand[300],
    },
    white: _colors.primary.base.white,
    disabled: _colors.primary.graylight[500],
    placeholder: {
      main: _colors.primary.graylight[500],
      subtle: _colors.primary.graylight[300],
    },
    brand: {
      primary: _colors.primary.brand[900],
      secondary: _colors.primary.brand[700],
      tertiary: _colors.primary.brand[600],
      tertiaryalt: _colors.primary.brand[600],
    },
    error: _colors.primary.error[600],
    warning: _colors.primary.warning[600],
    success: _colors.primary.success[600],
  },
  dark: {
    primary: {
      main: _colors.primary.graydark[50],
      brand: _colors.primary.graydark[50],
    },
    secondary: {
      main: _colors.primary.graydark[300],
      hover: _colors.primary.graydark[200],
      brand: _colors.primary.graydark[300],
    },
    tertiary: {
      main: _colors.primary.graydark[400],
      hover: _colors.primary.graydark[300],
      brand: _colors.primary.graydark[400],
    },
    quaternary: {
      main: _colors.primary.graydark[400],
      brand: _colors.primary.graydark[400],
    },
    white: _colors.primary.base.white,
    disabled: _colors.primary.graydark[500],
    placeholder: {
      main: _colors.primary.graydark[400],
      subtle: _colors.primary.graydark[700],
    },
    brand: {
      primary: _colors.primary.graydark[50],
      secondary: _colors.primary.graydark[300],
      tertiary: _colors.primary.graydark[400],
      tertiaryalt: _colors.primary.graydark[50],
    },
    error: _colors.primary.error[400],
    warning: _colors.primary.warning[400],
    success: _colors.primary.success[400],
  },
};

const border = {
  light: {
    primary: _colors.primary.graylight[300],
    secondary: _colors.primary.graylight[200],
    tertiary: _colors.primary.graylight[100],
    disabled: _colors.primary.graylight[300],
    disabledsubtle: _colors.primary.graylight[200],
    brand: _colors.primary.brand[300],
    brandsolid: _colors.primary.brand[600],
    brandsolidalt: _colors.primary.brand[700],
    error: _colors.primary.error[300],
    errorsolid: _colors.primary.error[600],
  },
  dark: {
    primary: _colors.primary.graydark[700],
    secondary: _colors.primary.graydark[800],
    tertiary: _colors.primary.graydark[800],
    disabled: _colors.primary.graydark[700],
    disabledsubtle: _colors.primary.graydark[800],
    brand: _colors.primary.brand[400],
    brandsolid: _colors.primary.brand[500],
    brandsolidalt: _colors.primary.graydark[700],
    error: _colors.primary.error[400],
    errorsolid: _colors.primary.error[500],
  },
};

const foreground = {
  light: {
    primary: _colors.primary.graylight[900],
    secondary: {
      main: _colors.primary.graylight[700],
      hover: _colors.primary.graylight[800],
    },
    tertiary: {
      main: _colors.primary.graylight[600],
      hover: _colors.primary.graylight[700],
    },
    quaternary: {
      main: _colors.primary.graylight[500],
      hover: _colors.primary.graylight[600],
    },
    quinary: {
      main: _colors.primary.graylight[400],
      hover: _colors.primary.graylight[500],
    },
    senary: _colors.primary.graylight[300],
    white: _colors.primary.base.white,
    disabled: {
      main: _colors.primary.graylight[400],
      subtle: _colors.primary.graylight[300],
    },
    brand: {
      main: _colors.primary.brand[600],
      alt: _colors.primary.brand[600],
      secondary: _colors.primary.brand[500],
    },
    error: {
      main: _colors.primary.error[600],
      secondary: _colors.primary.error[500],
    },
    warning: {
      main: _colors.primary.warning[600],
      secondary: _colors.primary.warning[500],
    },
    success: {
      main: _colors.primary.success[600],
      secondary: _colors.primary.success[500],
    },
  },
  dark: {
    primary: _colors.primary.base.white,
    secondary: {
      main: _colors.primary.graydark[300],
      hover: _colors.primary.graydark[200],
    },
    tertiary: {
      main: _colors.primary.graydark[400],
      hover: _colors.primary.graydark[300],
    },
    quaternary: {
      main: _colors.primary.graydark[400],
      hover: _colors.primary.graydark[300],
    },
    quinary: {
      main: _colors.primary.graydark[500],
      hover: _colors.primary.graydark[400],
    },
    senary: _colors.primary.graydark[600],
    white: _colors.primary.base.white,
    disabled: {
      main: _colors.primary.graydark[500],
      subtle: _colors.primary.graydark[600],
    },
    brand: {
      main: _colors.primary.brand[500],
      alt: _colors.primary.graydark[300],
      secondary: _colors.primary.brand[500],
    },
    error: {
      main: _colors.primary.error[500],
      secondary: _colors.primary.error[400],
    },
    warning: {
      main: _colors.primary.warning[500],
      secondary: _colors.primary.warning[400],
    },
    success: {
      main: _colors.primary.success[500],
      secondary: _colors.primary.success[400],
    },
  },
};

const background = {
  light: {
    primary: {
      main: _colors.primary.base.white,
      alt: _colors.primary.base.white,
      hover: _colors.primary.graylight[50],
      solid: _colors.primary.graylight[950],
    },
    secondary: {
      main: _colors.primary.graylight[50],
      alt: _colors.primary.graylight[50],
      hover: _colors.primary.graylight[100],
      subtle: _colors.primary.graylight[25],
      solid: _colors.primary.graylight[600],
    },
    tertiary: _colors.primary.graylight[100],
    quaternary: _colors.primary.graylight[200],
    active: _colors.primary.graylight[50],
    disabled: {
      main: _colors.primary.graylight[100],
      subtle: _colors.primary.graylight[50],
    },
    overlay: _colors.primary.graylight[950],
    brand: {
      main: _colors.primary.brand[50],
      alt: _colors.primary.brand[50],
      secondary: _colors.primary.brand[100],
      solid: _colors.primary.brand[600],
      solidhover: _colors.primary.brand[700],
      section: _colors.primary.brand[800],
      sectionsubtle: _colors.primary.brand[700],
    },
    error: {
      main: _colors.primary.error[50],
      secondary: _colors.primary.error[100],
      solid: _colors.primary.error[600],
    },
    warning: {
      main: _colors.primary.warning[50],
      secondary: _colors.primary.warning[100],
      solid: _colors.primary.warning[600],
    },
    success: {
      main: _colors.primary.success[50],
      secondary: _colors.primary.success[100],
      solid: _colors.primary.success[600],
    },
  },
  dark: {
    primary: {
      main: _colors.primary.graydark[950],
      alt: _colors.primary.graydark[900],
      hover: _colors.primary.graydark[800],
      solid: _colors.primary.graydark[900],
    },
    secondary: {
      main: _colors.primary.graydark[900],
      alt: _colors.primary.graydark[950],
      hover: _colors.primary.graydark[800],
      subtle: _colors.primary.graydark[900],
      solid: _colors.primary.graydark[600],
    },
    tertiary: _colors.primary.graydark[800],
    quaternary: _colors.primary.graydark[700],
    active: _colors.primary.graydark[800],
    disabled: {
      main: _colors.primary.graydark[800],
      subtle: _colors.primary.graydark[900],
    },
    overlay: _colors.primary.graydark[800],
    brand: {
      main: _colors.primary.brand[500],
      alt: _colors.primary.graydark[800],
      secondary: _colors.primary.brand[600],
      solid: _colors.primary.brand[600],
      solidhover: _colors.primary.brand[500],
      section: _colors.primary.graydark[800],
      sectionsubtle: _colors.primary.graydark[950],
    },
    error: {
      main: _colors.primary.error[500],
      secondary: _colors.primary.error[600],
      solid: _colors.primary.error[600],
    },
    warning: {
      main: _colors.primary.warning[500],
      secondary: _colors.primary.warning[600],
      solid: _colors.primary.warning[600],
    },
    success: {
      main: _colors.primary.success[500],
      secondary: _colors.primary.success[600],
      solid: _colors.primary.success[600],
    },
  },
};

const button = {
  light: {
    primary: {
      fg: _colors.primary.base.white,
      fghover: _colors.primary.base.white,
      bg: _colors.primary.brand[600],
      bghover: _colors.primary.brand[700],
      border: _colors.primary.brand[600],
      borderhover: _colors.primary.brand[700],
    },
    secondary: {
      fg: _colors.primary.graylight[700],
      fghover: _colors.primary.graylight[800],
      bg: _colors.primary.base.white,
      bghover: _colors.primary.graylight[50],
      border: _colors.primary.graylight[300],
      borderhover: _colors.primary.graylight[300],
    },
    tertiary: {
      fg: _colors.primary.graylight[600],
      fghover: _colors.primary.graylight[700],
      bghover: _colors.primary.graylight[50],
    },
    tertiarycolor: {
      fg: _colors.primary.brand[700],
      fghover: _colors.primary.brand[800],
      bghover: _colors.primary.brand[50],
    },
  },
  dark: {
    primary: {
      fg: _colors.primary.base.white,
      fghover: _colors.primary.base.white,
      bg: _colors.primary.brand[600],
      bghover: _colors.primary.brand[700],
      border: _colors.primary.brand[600],
      borderhover: _colors.primary.brand[700],
    },
    secondary: {
      fg: _colors.primary.graydark[300],
      fghover: _colors.primary.graydark[100],
      bg: _colors.primary.graydark[900],
      bghover: _colors.primary.graydark[800],
      border: _colors.primary.graydark[700],
      borderhover: _colors.primary.graydark[700],
    },
    tertiary: {
      fg: _colors.primary.graydark[400],
      fghover: _colors.primary.graydark[200],
      bghover: _colors.primary.graydark[800],
    },
    tertiarycolor: {
      fg: _colors.primary.graydark[300],
      fghover: _colors.primary.graydark[100],
      bghover: _colors.primary.graydark[800],
    },
  },
};

const colors = {
  text,
  border,
  foreground,
  background,
  button,
};

export default colors;
