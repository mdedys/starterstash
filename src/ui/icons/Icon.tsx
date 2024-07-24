import Icons from "./Icons";
import { IconProps } from "./assets/Icon";

interface _IconProps extends IconProps {
  name: keyof typeof Icons;
}

export default function Icon(props: _IconProps) {
  const _Icon = Icons[props.name];
  return <_Icon size={props.size} style={props.style} />;
}
