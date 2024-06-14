import { cx, css } from "@linaria/core";
import { styled } from "@linaria/react";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import * as styles from "./styles";
import Icons from "../icons/Icons";
import border from "../styles/border";
import typography from "../styles/typography";

interface Props {
  variant?: styles.Variant;
  size?: styles.Size;
}

const sizeVariant = {
  sm: css`
    gap: 4px;
    font-size: ${typography.text.sm};
    padding: 0.5rem 12px;
  `,
  md: css`
    gap: 4px;
    font-size: ${typography.text.sm};
    padding: 0.625rem 14px;
  `,
  lg: css`
    gap: 6px;
    font-size: ${typography.text.md};
    padding: 0.625rem 16px;
  `,
  xl: css`
    gap: 6px;
    font-size: ${typography.text.md};
    padding: 0.75rem 18px;
  `,
  "2xl": css`
    gap: 10px;
    font-size: ${typography.text.lg};
    padding: 1rem 22px;
  `,
};

const _Button = styled.button<StyledProps<Props>>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${border.md};
  font-weight: 600;

  width: 100%;
`;

export interface ButtonProps extends Props, ComponentPropsWithoutRef<"button"> {
  leadingIcon?: keyof typeof Icons;
  trailingIcon?: keyof typeof Icons;
}

function Button(props: PropsWithChildren<ButtonProps>) {
  const {
    className,
    variant = "primary",
    size = "lg",
    children,
    leadingIcon,
    trailingIcon,
    ...rest
  } = props;

  const Leading = leadingIcon ? Icons[leadingIcon] : null;
  const Trailing = trailingIcon ? Icons[trailingIcon] : null;

  return (
    <_Button
      className={cx(className, sizeVariant[size], styles.color[variant])}
      $variant={variant}
      $size={size}
      {...rest}
    >
      {Leading && <Leading />}
      {children}
      {Trailing && <Trailing />}
    </_Button>
  );
}

export default Button;
