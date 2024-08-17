import { cva } from "class-variance-authority";

export const avatarGroupStyles = cva([
    "flex",
    "flex-row-reverse",
    "[&>*]:border-2",
    "[&>*]:box-content",
    "[&>*]:-ml-2",
], {})