import { cva } from "class-variance-authority";
import { direction } from "@/variants/variants";

export const buttonGroupStyles = cva(["inline-flex"], {
    variants: {
        direction,
        rounded: {
            true: "",
        },
    },
    compoundVariants: [
        {
            direction: "row",
            className: "[&>button:not(:last-child)]:border-r-0 [&>button:not(:first-child)]:border-l-[1px]",
        },
        {
            direction: "column",
            className: "[&>button:not(:last-child)]:border-b-0 [&>button:not(:first-child)]:border-t-[1px]",
        },
        {
            direction: "reverseRow",
            className: "[&>button:not(:last-child)]:border-l-0 [&>button:not(:first-child)]:border-r-[1px]",
        },
        {
            direction: "reverseColumn",
            className: "[&>button:not(:last-child)]:border-t-0 [&>button:not(:first-child)]:border-b-[1px]",
        },
        {
            direction: "row",
            rounded: true,
            className: "[&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md",
        },
        {
            direction: "reverseRow",
            rounded: true,
            className: "[&>button:first-child]:rounded-r-md [&>button:last-child]:rounded-l-md",
        },
        {
            direction: "reverseColumn",
            rounded: true,
            className: "[&>button:first-child]:rounded-b-md [&>button:last-child]:rounded-t-md",
        },
        {
            direction: "column",
            rounded: true,
            className: "[&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md",
        },
    ],
    defaultVariants: {
        direction: "row",
        rounded: false,
    },
});