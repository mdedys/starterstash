import { FC } from "react";

import GoogleLogo from "./assets/GoogleLogo";
import { IconProps } from "./assets/Icon";
import UploadCloud from "./assets/UploadCloud";

type IconType = FC<Omit<IconProps, "children">>;

type IconMap = {
  "google-logo": IconType;
  "upload-cloud": IconType;
};

const Icons: IconMap = {
  "google-logo": GoogleLogo,
  "upload-cloud": UploadCloud,
};

export default Icons;
