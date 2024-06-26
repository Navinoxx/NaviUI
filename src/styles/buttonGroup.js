import { cva } from "class-variance-authority";
import { direction } from "@/variants/variants";

export const buttonGroupStyles = cva(["flex"], {
    variants: {
        direction: direction,
        rounded: {
            true: "",
        },
        space: {
            true: "space-x-0.5",
        },
    },
    compoundVariants: [
        {
            direction: "row",
            space: false,
            className: "[&>button:not(:last-child)]:border-r-0",
        },
        {
            direction: "column",
            space: false,
            className: "[&>button:not(:last-child)]:border-b-0",
        },
        {
            direction: "column",
            space: true,
            className: "space-y-0.5 space-x-0",
        },
        {
            direction: "column",
            rounded: true,
            className: "[&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md",
        },
        {
            direction: "row",
            rounded: true,
            className: "[&>button:first-child]:rounded-l-md [&>button:last-child]:rounded-r-md",
        },
    ],
    defaultVariants: {
        direction: "row",
        rounded: false,
        space: false,
    },
});