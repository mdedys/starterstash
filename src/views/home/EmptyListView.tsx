import { styled } from "@linaria/react";

import StarterJar from "../../assets/starter_jar.svg";
import Logo from "../../components/Logo";
import { Body, Header, Layout } from "../Layout";
import Typography from "../../ui/typography/Typography";
import Button from "../../ui/button/Button";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  padding: 0 32px;
`;

const Graphic = styled.img`
  margin-bottom: 1.5rem;
`;

export default function EmptyListView() {
  return (
    <Layout>
      <Header>
        <Logo width={140} />
      </Header>
      <Body>
        <Content>
          <Graphic src={StarterJar} alt="jar of sourdough starter" />
          <Typography size="md" variant="text" weight="600">
            No Sourdough Starters Found
          </Typography>
          <Typography
            variant="text"
            size="sm"
            style={{
              textAlign: "center",
              marginTop: "0.25rem",
              marginBottom: "1.5rem",
            }}
          >
            No active sourdough starters have been found. Click the button below
            to add a sourdough starer.
          </Typography>
          <Button variant="primary" size="sm" leadingIcon="plus">
            Add Stater
          </Button>
        </Content>
      </Body>
    </Layout>
  );
}
