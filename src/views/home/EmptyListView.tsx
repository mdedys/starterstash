import { styled } from "@linaria/react";
import { useState } from "react";

import StarterJar from "../../assets/starter_jar.svg";
import Logo from "../../components/Logo";
import StarterEditorModal from "../../components/modals/starter/StarterEditorModal";
import useAddStarter from "../../state/mutations/useAddStarter";
import Button from "../../ui/button/Button";
import IconButton from "../../ui/button/IconButton";
import Typography from "../../ui/typography/Typography";
import { Body, Header, Layout } from "../Layout";

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

interface EmptyListViewProps {
  uid: string;
}

export default function EmptyListView(props: EmptyListViewProps) {
  const add = useAddStarter(props.uid);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Layout>
        <Header>
          <Logo width={140} />
          <IconButton icon="menu" variant="tertiary" size="sm" />
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
              No active sourdough starters have been found. Click the button
              below to add a sourdough starer.
            </Typography>
            <Button
              variant="primary"
              size="sm"
              leadingIcon="plus"
              onClick={() => setIsOpen(true)}
            >
              Add Stater
            </Button>
          </Content>
        </Body>
      </Layout>
      {isOpen && (
        <StarterEditorModal
          mode="new"
          onCancel={() => setIsOpen(false)}
          onSave={starter =>
            add
              .mutate(starter)
              .then(() => setIsOpen(false))
              .catch(err => console.log(err))
          }
        />
      )}
    </>
  );
}
