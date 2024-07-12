import { styled } from "@linaria/react";
import { CSSProperties } from "react";

import StarterStash from "../assets/starterstash.svg";
import border from "../ui/styles/border";
import spacing from "../ui/styles/spacing";
import { cssvar, vars } from "../ui/theme/vars";
import Typography from "../ui/typography/Typography";

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
}

export default function Logo(props: LogoProps) {
  const { height = 28, width = 180, style } = props;
  return (
    <Flex>
      <Image
        src={StarterStash}
        alt="starterstash"
        width={`${width}px`}
        height={`${height}px`}
        style={{ ...style, height, width }}
      />
      <Beta>
        <Typography variant="text" size="xs" weight="700">
          BETA
        </Typography>
      </Beta>
    </Flex>
  );
}
