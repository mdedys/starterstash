import { styled } from "@linaria/react";
import { CSSProperties, PropsWithChildren } from "react";

import typography from "../styles/typography";

type FontWeight = "400" | "500" | "600" | "700";
type Variant = "display" | "text";
type Size = "2xl" | "xl" | "lg" | "md" | "sm" | "xs";

interface Props {
  size?: Size;
  variant?: Variant;
  weight?: FontWeight;
}

const variant = (props: StyledProps<Props>) =>
  typography[props.$variant ?? "text"][props.$size ?? "md"];

const Text = styled.span<StyledProps<Props>>`
  font-size: ${props => variant(props).fontsize.rem};
  font-weight: ${props => props.$weight ?? 400};
  line-height: ${props => variant(props).lineheight.rem};
`;

interface TypographyProps extends Props {
  style?: CSSProperties;
}

export default function Typography(props: PropsWithChildren<TypographyProps>) {
  const { size, variant, weight, children, ...rest } = props;
  return (
    <Text $size={size} $variant={variant} $weight={weight} {...rest}>
      {children}
    </Text>
  );
}
