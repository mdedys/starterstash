import { styled } from "@linaria/react";
import { useState } from "react";

import StarterJar from "../../assets/starter_jar.svg";
import Logo from "../../components/Logo";
import DeleteConfirmationModal from "../../components/modals/starter/DeleteConfirmationmModal";
import StarterEditorModal from "../../components/modals/starter/StarterEditorModal";
import { Starter } from "../../state/models/Users";
import useDeleteStarter from "../../state/mutations/useDeleteStarter";
import useUpdateStarter from "../../state/mutations/useUpdateStarter";
import Button from "../../ui/button/Button";
import IconButton from "../../ui/button/IconButton";
import spacing from "../../ui/styles/spacing";
import Typography from "../../ui/typography/Typography";
import { Body, Header, Layout } from "../Layout";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${spacing.md.rem};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: ${spacing["3xl"].rem};
  width: 100%;
  max-width: 280px;
`;

const Graphic = styled.img`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

interface SingleStarterViewProps {
  uid: string;
  starter: Starter;
}

export default function SingleStarterView(props: SingleStarterViewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const edit = useUpdateStarter(props.uid);
  const del = useDeleteStarter(props.uid);

  return (
    <>
      <Layout>
        <Header>
          <Logo />
          <IconButton icon="menu" variant="tertiary" size="sm" />
        </Header>
        <Body>
          <Center>
            <Typography variant="display" size="sm" weight="600">
              {props.starter.name}
            </Typography>
            <Graphic src={StarterJar} alt="jar of sourdough starter" />
            <Typography variant="text" size="md" weight="600">
              Next Feeding
            </Typography>
            <Typography variant="text" size="md">
              {props.starter.reminder.toFormat("LLL d, yyyy H:mm a")}
            </Typography>
            <ButtonGroup>
              <Button variant="primary">Feed</Button>
              <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
                Edit
              </Button>
            </ButtonGroup>
          </Center>
        </Body>
      </Layout>
      {isModalOpen && (
        <StarterEditorModal
          mode="edit"
          starter={props.starter}
          onSave={starter => {
            edit.mutate(starter).then(() => setIsModalOpen(false));
          }}
          onDelete={() => {
            setIsModalOpen(false);
            setIsDeleteModalOpen(true);
          }}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          onDelete={() => {
            del.mutate(props.starter);
          }}
          onCancel={() => {
            setIsDeleteModalOpen(false);
            setIsModalOpen(true);
          }}
        />
      )}
    </>
  );
}
