import { FC } from "react";

import Calendar from "./assets/Calendar";
import Clock from "./assets/Clock";
import GoogleLogo from "./assets/GoogleLogo";
import { IconProps } from "./assets/Icon";
import InfoCircle from "./assets/InfoCircle";
import Plus from "./assets/Plus";
import UploadCloud from "./assets/UploadCloud";

type IconType = FC<Omit<IconProps, "children">>;

type IconMap = {
  calendar: IconType;
  clock: IconType;
  "google-logo": IconType;
  "info-circle": IconType;
  plus: IconType;
  "upload-cloud": IconType;
};

const Icons: IconMap = {
  calendar: Calendar,
  clock: Clock,
  "google-logo": GoogleLogo,
  "info-circle": InfoCircle,
  plus: Plus,
  "upload-cloud": UploadCloud,
};

export default Icons;
