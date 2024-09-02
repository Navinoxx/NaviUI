import { combineClasses } from "@/utils/combineClasses";
import { bgColor, borderColor, hoverBgColor } from "@/variants/variants";
import { cva } from "class-variance-authority";

export const accordionStyles = cva([
    "block",
    "relative",
    "w-full",
    "first:rounded-t-md",
    "last:rounded-b-md",
    "overflow-hidden",
    "mb-[1px]",
], {
    variants: {
        variant: {
            solid: "border",
            outlined: "border",
            ghost: "",
        },
        color: borderColor,
    },
    defaultVariants: {
        variant: "solid",
        color: "blue",
    }
});

export const accordionHeaderStyles = cva(["font-semibold", "flex", "items-center", "justify-center", "cursor-pointer", "px-4", "py-2", "transition-all", "duration-200"], {
    variants: {
        variant: {
            solid: "text-white",
            outlined: "",
            ghost: "border-b",
        },
        color: combineClasses(bgColor, hoverBgColor),
    },
    compoundVariants: [
        {
            variant: ["ghost", "outlined"],
            className: "bg-transparent",    
        },
        {
            variant: "outlined",
            color: "blue",
            className: "text-blue-500 hover:bg-blue-500 hover:text-white",
        },
        {
            variant: "outlined",
            color: "green",
            className: "text-green-500 hover:bg-green-500 hover:text-white",
        },
        {
            variant: "outlined",
            color: "red",
            className: "text-red-500 hover:bg-red-500 hover:text-white",
        },
        {
            variant: "outlined",
            color: "indigo",
            className: "text-indigo-500 hover:bg-indigo-500 hover:text-white",
        },
        {
            variant: "outlined",
            color: "purple",
            className: "text-purple-500 hover:bg-purple-500 hover:text-white",
        },
        {
            variant: "outlined",
            color: "pink",
            className: "text-pink-500 hover:bg-pink-500 hover:text-white",
        },
        {
            variant: "outlined",
            color: "black",
            className: "text-black hover:bg-black hover:text-white",
        },
        {
            variant: "ghost",
            color: "blue",
            className: "text-blue-500 hover:bg-blue-100",
        },
        {
            variant: "ghost",
            color: "green",
            className: "text-green-500 hover:bg-green-100",
        },
        {
            variant: "ghost",
            color: "red",
            className: "text-red-500 hover:bg-red-100",
        },
        {
            variant: "ghost",
            color: "indigo",
            className: "text-indigo-500 hover:bg-indigo-100",
        },
        {
            variant: "ghost",
            color: "purple",
            className: "text-purple-500 hover:bg-purple-100",
        },
        {
            variant: "ghost",
            color: "pink",
            className: "text-pink-500 hover:bg-pink-100",
        },
        {
            variant: "ghost",
            color: "black",
            className: "text-black hover:bg-gray-200",
        }
    ],
    defaultVariants: {
        variant: "solid",
        color: "blue",
    },
});

export const AccordionBodyStyles = cva([
    "overflow-hidden",
    "px-4 py-3"
], {})

export const IconAccordionStyles = cva(["flex", "w-full", "justify-between", "items-center"], {
    variants: {
        iconFirst: {
            true: "!justify-end gap-2 flex-row-reverse",
        }
    }
});