import { FC } from "react";

import Calendar from "./assets/Calendar";
import Clock from "./assets/Clock";
import Edit from "./assets/Edit";
import GoogleLogo from "./assets/GoogleLogo";
import { IconProps } from "./assets/Icon";
import InfoCircle from "./assets/InfoCircle";
import Menu from "./assets/Menu";
import Plus from "./assets/Plus";
import UploadCloud from "./assets/UploadCloud";

type IconType = FC<Omit<IconProps, "children">>;

type IconMap = {
  calendar: IconType;
  clock: IconType;
  edit: IconType;
  "google-logo": IconType;
  "info-circle": IconType;
  menu: IconType;
  plus: IconType;
  "upload-cloud": IconType;
};

const Icons: IconMap = {
  calendar: Calendar,
  clock: Clock,
  edit: Edit,
  "google-logo": GoogleLogo,
  "info-circle": InfoCircle,
  menu: Menu,
  plus: Plus,
  "upload-cloud": UploadCloud,
};

export default Icons;
