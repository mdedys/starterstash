import { FC } from "react";

import GoogleLogo from "./assets/GoogleLogo";
import { IconProps } from "./assets/Icon";
import Plus from "./assets/Plus";
import UploadCloud from "./assets/UploadCloud";

type IconType = FC<Omit<IconProps, "children">>;

type IconMap = {
  "google-logo": IconType;
  "upload-cloud": IconType;
  plus: IconType;
};

const Icons: IconMap = {
  "google-logo": GoogleLogo,
  "upload-cloud": UploadCloud,
  plus: Plus,
};

export default Icons;
