import { CSSProperties, PropsWithChildren } from "react";

export interface IconProps {
  size?: number;
  style?: CSSProperties;
}

export default function Icon(props: PropsWithChildren<IconProps>) {
  const { children, size, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height={size ?? 24}
      width={size ?? 24}
      {...rest}
    >
      {children}
    </svg>
  );
}
