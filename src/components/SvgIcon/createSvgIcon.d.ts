import { FC } from "react";
import { SvgIconProps } from "./SvgIcon";

export const createSvgIcon: (path: React.ReactNode, name: string) => FC<SvgIconProps>