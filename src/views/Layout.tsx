import { styled } from "@linaria/react";

import spacing from "../ui/styles/spacing";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: header;

  padding: 0 ${spacing.xl.px};
  padding-top: ${spacing["3xl"].px};
  height: 64px;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 64px auto;
  grid-template-areas:
    "header"
    "body";

  height: 100%;
`;

export const Body = styled.div`
  grid-area: body;
  overflow-y: auto;
  overflow-x: hidden;
`;
