import { IconButton } from "@dedees/ui-kit/button";
import {
  Dropdown,
  DropdownItem,
  DropdownItemDivider,
} from "@dedees/ui-kit/dropdown";
import { Icon } from "@dedees/ui-kit/icons";
import { spacing } from "@dedees/ui-kit/styles";
import { cssvar, vars } from "@dedees/ui-kit/theme";
import { Typography } from "@dedees/ui-kit/typography";
import { useRef, useState } from "react";
import { styled } from "styled-components";

import { useAuth } from "../../auth/AuthProvider";

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
