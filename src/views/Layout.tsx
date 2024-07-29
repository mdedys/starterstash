import { styled } from "@linaria/react";
import { PropsWithChildren } from "react";

import Logo from "../components/Logo";
import UserSettingsMenu from "../components/menu/UserSettingsMenu";
import Grid from "../ui/layout/Grid";
import spacing from "../ui/styles/spacing";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: header;
  grid-column: 1 / -1;

  padding: 0 ${spacing.xl.px};
  padding-top: ${spacing["3xl"].px};
  height: 64px;
`;

export const Layout = styled(Grid)`
  display: grid;
  grid-template-rows: 64px auto;
  grid-template-areas:
    "header"
    "body";

  height: 100%;
`;

export const Body = styled.div`
  grid-area: body;
  grid-column: 1 / -1;
  overflow-y: auto;
  overflow-x: hidden;

  width: 100%;
`;

export function View(props: PropsWithChildren) {
  return (
    <Layout>
      <Header>
        <Logo width={140} />
        <UserSettingsMenu />
      </Header>
      <Body>{props.children}</Body>
    </Layout>
  );
}
