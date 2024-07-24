import Icons, { IconProps } from "./Icon";

export default function XClose(props: IconProps) {
  return (
    <Icons {...props}>
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icons>
  );
}
