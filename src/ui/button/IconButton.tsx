import { cx, css } from "@linaria/core";
import { styled } from "@linaria/react";
import { ComponentPropsWithoutRef } from "react";

import * as styles from "./styles";
import Icons from "../icons/Icons";
import border from "../styles/border";

interface Props {
  variant?: Omit<styles.Variant, "link">;
  size?: styles.Size;
}

const sizeVariant = {
  sm: css`
    padding: 0.5rem;
  `,
  md: css`
    padding: 0.625rem;
  `,
  lg: css`
    padding: 0.75rem;
  `,
  xl: css`
    padding: 0.875rem;
  `,
  "2xl": css`
    padding: 1rem;
  `,
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${border.md};
`;

interface IconButtonProps extends Props, ComponentPropsWithoutRef<"button"> {
  icon: keyof typeof Icons;
}

export default function IconButton(props: IconButtonProps) {
  const { className, icon, variant = "primary", size = "lg", ...rest } = props;
  const Icon = Icons[icon];

  // @ts-expect-error - We are omitting link on purpose
  const colorVariant = styles.color[variant];

  return (
    <Button
      className={cx(className, sizeVariant[size], colorVariant)}
      {...rest}
    >
      <Icon />
    </Button>
  );
}
