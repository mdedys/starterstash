import { styled } from "@linaria/react";
import { useRef, useState } from "react";

import { useAuth } from "../../auth/AuthProvider";
import IconButton from "../../ui/button/IconButton";
import Dropdown from "../../ui/dropdown/Dropdown";
import DropdownItem, {
  DropdownItemDivider,
} from "../../ui/dropdown/DropdownItem";
import Icon from "../../ui/icons/Icon";
import spacing from "../../ui/styles/spacing";
import { cssvar, vars } from "../../ui/theme/vars";
import Typography from "../../ui/typography/Typography";

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md.px};
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
`;

const MediumFlex = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md.px};
`;

export default function UserSettingsMenu() {
  const { user } = useAuth();

  const anchor = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        ref={anchor}
        icon="menu"
        variant="tertiary"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
      />

      <Dropdown isOpen={isOpen} anchor={anchor.current}>
        <DropdownItem header>
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
        </DropdownItem>
        <DropdownItemDivider />
        <DropdownItem>
          <MediumFlex>
            <Icon
              name="logout"
              style={{
                color: cssvar(vars.colors.foreground.quaternary.main),
              }}
            />
            <Typography
              variant="text"
              size="sm"
              weight="500"
              style={{ color: cssvar(vars.colors.text.secondary.main) }}
            >
              Log out
            </Typography>
          </MediumFlex>
        </DropdownItem>
      </Dropdown>
    </>
  );
}
