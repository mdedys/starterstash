import { spacing, border } from "@dedees/ui-kit/styles";
import { cssvar, vars } from "@dedees/ui-kit/theme";
import { Typography } from "@dedees/ui-kit/typography";
import { CSSProperties } from "react";
import { styled } from "styled-components";

import StarterStash from "../assets/starterstash.svg";

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md.px};
`;

const Image = styled.img``;

const Beta = styled.div`
  background-color: ${cssvar(vars.colors.background.warning.solid)};
  border-radius: ${border.md};
  color: ${cssvar(vars.colors.text.white)};

  padding: ${spacing.xs.px} ${spacing.md.px};
`;

interface LogoProps {
  height?: number;
  width?: number;
  style?: Omit<CSSProperties, "width" | "height">;
  beta?: boolean;
}

export default function Logo(props: LogoProps) {
  const { height = 28, width = 180, style, beta = true } = props;
  return (
    <Flex>
      <Image
        src={StarterStash}
        alt="starterstash"
        width={`${width}px`}
        height={`${height}px`}
        style={{ ...style, height, width }}
      />
      {beta && (
        <Beta>
          <Typography variant="text" size="xs" weight="700">
            BETA
          </Typography>
        </Beta>
      )}
    </Flex>
  );
}
