import { fonts } from "@dedees/ui-kit/styles";
import { cssvar, vars } from "@dedees/ui-kit/theme";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  body {
    background-color: ${cssvar(vars.colors.background.primary.main)};
    color: ${cssvar(vars.colors.text.primary.main)};
    font-family: ${fonts.inter};
    font-size: 100%;
    font-synthesis: none;
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    isolation: isolate;
    height: 100dvh;
  }
`;

export default Global;
