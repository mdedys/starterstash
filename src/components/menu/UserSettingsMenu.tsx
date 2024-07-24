import { styled } from "@linaria/react";

import IconButton from "../../ui/button/IconButton";
import SlideOutMenu from "../../ui/menu/SlideOutMenu";
import Logo from "../Logo";
import { useAuth } from "../../auth/AuthProvider";
import spacing from "../../ui/styles/spacing";
import Icons from "../../ui/icons/Icons";
import Icon from "../../ui/icons/Icon";
import Typography from "../../ui/typography/Typography";
import Button from "../../ui/button/Button";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg.px};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md.px};
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
`;

interface UserSettingsMenuProps {
  isOpen: boolean;
  onClickClose(): void;
}

export default function UserSettingsMenu(props: UserSettingsMenuProps) {
  const { user } = useAuth();

  if (!props.isOpen) {
    return null;
  }

  return (
    <SlideOutMenu>
      {{
        header: (
          <Header>
            <Logo height={20} width={160} beta={false} />
            <IconButton
              icon="x-close"
              size="sm"
              variant="tertiary"
              onClick={props.onClickClose}
            />
          </Header>
        ),
        body: <></>,
        footer: (
          <Footer>
            <UserInfo>
              <Icon name="google-logo" />
              <Name>
                <Typography variant="text" size="md" weight="600">
                  {user?.displayName}
                </Typography>
                <Typography variant="text" size="sm">
                  {user?.email}
                </Typography>
              </Name>
            </UserInfo>
            <Button variant="primary" size="sm">
              Logout
            </Button>
          </Footer>
        ),
      }}
    </SlideOutMenu>
  );
}
