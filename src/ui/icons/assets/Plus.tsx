import Icons, { IconProps } from "./Icon";

export default function Plus(props: IconProps) {
  return (
    <Icons {...props}>
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icons>
  );
}
