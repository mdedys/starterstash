import Icons, { IconProps } from "./Icon";

export default function InfoCircle(props: IconProps) {
  return (
    <Icons {...props}>
      <path
        d="M11 15V11M11 7H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icons>
  );
}
