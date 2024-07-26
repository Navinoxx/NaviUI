import { cva } from "class-variance-authority";

export const dividerStyles = cva([
    "relative",
    "flex",
    "whitespace-nowrap",
    "text-center",
], {
    variants: {
        variant: {
            full: "",
            inset: "",
            middle: "",
        },
        orientation: {
            vertical: "border-r",
            horizontal: "",
        },
        textAlign: {
            left: " before:w-[10%] after:w-[90%]",
            center: "before:w-full after:w-full",
            right: "before:w-[90%] after:w-[10%]",
        }
    },
    compoundVariants: [
        {
            variant: "full",
            orientation: "horizontal",
            className: "w-full"
        },
        {
            variant: "inset",
            orientation: "horizontal",
            className: "w-[calc(100%-64px)] ml-16"
        },
        {
            variant: "middle",
            orientation: "horizontal",
            className: "mx-auto w-[calc(100%-32px)]"
        },
        {
            variant: "full",
            orientation: "vertical",
            className: "h-full"
        },
        {
            variant: "inset",
            orientation: "vertical",
            className: "h-[calc(100%-64px)] mt-16"
        },
        {
            variant: "middle",
            orientation: "vertical",
            className: "my-auto h-[calc(100%-32px)]"
        },
        {
            textAlign: ["left", "center", "right"],
            className: "before:content-[''] before:border-t before:self-center after:content-[''] after:border-t after:self-center"
        },
    ],
    defaultVariants: {
        variant: "full",
        orientation: "horizontal",
        textAlign: "center"
    }
})

export const dividerTextStyles = cva([
    "text-gray-500",
    "text-sm",
    "inline-block",
    "px-4",
], {})