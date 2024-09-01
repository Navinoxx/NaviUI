import { cva } from "class-variance-authority";
import { bgColor, hoverBgColor, iconPosition } from "@/variants/variants";
import { combineClasses } from "@/utils/combineClasses";

export const buttonStyles = cva(["font-semibold", "focus:outline-none", "inline-flex", "items-center", "justify-center", "gap-2", "cursor-pointer", "transition-all", "duration-200"], {
    variants: {
        variant: {
            solid: "text-white",
            shadow: "text-white shadow-lg",
            outlined: "border-2",
            ghost: "",
        },
        size: {
            sm: "text-sm px-2 py-1",
            md: "text-base px-4 py-2",
            lg: "text-lg px-6 py-3",
        },
        rounded: {
            true: "rounded-md",
            full: "rounded-full",
        },
        disabled: {
            true: "opacity-50 pointer-events-none select-none",
            false: "",
        },
        iconPosition,
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
            className: "text-blue-500 hover:bg-blue-500 hover:text-white border-blue-500",
        },
        {
            variant: "outlined",
            color: "green",
            className: "text-green-500 hover:bg-green-500 hover:text-white border-green-500",
        },
        {
            variant: "outlined",
            color: "red",
            className: "text-red-500 hover:bg-red-500 hover:text-white border-red-500",
        },
        {
            variant: "outlined",
            color: "indigo",
            className: "text-indigo-500 hover:bg-indigo-500 hover:text-white border-indigo-500",
        },
        {
            variant: "outlined",
            color: "purple",
            className: "text-purple-500 hover:bg-purple-500 hover:text-white border-purple-500",
        },
        {
            variant: "outlined",
            color: "pink",
            className: "text-pink-500 hover:bg-pink-500 hover:text-white border-pink-500",
        },
        {
            variant: "outlined",
            color: "black",
            className: "text-black hover:bg-black hover:text-white border-black",
        },
        {
            variant: "shadow",
            color: "blue",
            className: "shadow-blue-500/50",
        },
        {
            variant: "shadow",
            color: "green",
            className: "shadow-green-500/50",
        },
        {
            variant: "shadow",
            color: "red",
            className: "shadow-red-500/50",
        },
        {
            variant: "shadow",    
            color: "indigo",
            className: "shadow-indigo-500/50",
        },
        {
            variant: "shadow",
            color: "purple",
            className: "shadow-purple-500/50",
        },
        {
            variant: "shadow",
            color: "pink",
            className: "shadow-pink-500/50",
        },
        {
            variant: "shadow",
            color: "black",
            className: "shadow-black/50",
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
        size: "md",
        rounded: false,
        disabled: false,
    },
});