import { styled } from "@linaria/react";
import { CSSProperties } from "react";

import StarterStash from "../assets/starterstash.svg";

const Image = styled.img``;

interface LogoProps {
  height?: number;
  width?: number;
  style?: Omit<CSSProperties, "width" | "height">;
}

export default function Logo(props: LogoProps) {
  const { height = 28, width = 180, style } = props;
  return (
    <Image
      src={StarterStash}
      alt="starterstash"
      width={`${width}px`}
      height={`${height}px`}
      style={{ ...style, height, width }}
    />
  );
}
