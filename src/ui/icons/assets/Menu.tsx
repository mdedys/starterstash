import Icons, { IconProps } from "./Icon";

export default function Menu(props: IconProps) {
  return (
    <Icons {...props}>
      <path
        d="M3 12H21M3 6H21M9 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icons>
  );
}
