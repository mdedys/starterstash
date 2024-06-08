import { FC } from "react";

import { IconProps } from "./assets/Icon";
import UploadCloud from "./assets/UploadCloud";

type IconType = FC<Omit<IconProps, "children">>;

type IconMap = {
  UploadCloud: IconType;
};

const Icons: IconMap = {
  UploadCloud,
};

export default Icons;
