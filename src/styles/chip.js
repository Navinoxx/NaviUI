import { bgColor } from "@/variants/variants";
import { cva } from "class-variance-authority";

export const chipStyles = cva([
    "inline-flex",
    "items-center",
    "space-x-1",
    "rounded-full",
    "text-xs",
    "font-medium",
    "select-none",
], {
    variants: {
        variant: {
            filled: "text-white",
            outlined: "border bg-transparent",
            ghost: "",  
        },
        size: {
            sm: "px-2 py-1",
            md: "px-3 py-1.5",
            lg: "px-4 py-2",
        },
        onClick: {
            true: "cursor-pointer",
        },
        color: bgColor
    },
    compoundVariants: [
        {   
            variant: "outlined",
            className: "bg-transparent",
        },
        {
            variant: "outlined",
            color: "blue",
            className: "text-blue-500 border-blue-500",
        },
        {
            variant: "outlined",
            color: "green",
            className: "text-green-500 border-green-500",
        },
        {
            variant: "outlined",
            color: "red",
            className: "text-red-500 border-red-500",
        },
        {
            variant: "outlined",
            color: "indigo",
            className: "text-indigo-500 border-indigo-500",
        },
        {
            variant: "outlined",
            color: "purple",
            className: "text-purple-500 border-purple-500",
        },
        {
            variant: "outlined",
            color: "pink",
            className: "text-pink-500 border-pink-500",
        },
        {
            variant: "outlined",
            color: "black",
            className: "text-black border-black",
        },
        {
            variant: "ghost",
            color: "blue",
            className: "text-blue-500 bg-blue-100",
        },
        {
            variant: "ghost",
            color: "green",
            className: "text-green-500 bg-green-100",
        },
        {
            variant: "ghost",
            color: "red",
            className: "text-red-500 bg-red-100",
        },
        {
            variant: "ghost",
            color: "indigo",
            className: "text-indigo-500 bg-indigo-100",
        },
        {
            variant: "ghost",
            color: "purple",
            className: "text-purple-500 bg-purple-100",
        },
        {
            variant: "ghost",
            color: "pink",
            className: "text-pink-500 bg-pink-100",
        },
        {
            variant: "ghost",
            color: "black",
            className: "text-black bg-gray-200",
        }
    ],
    defaultVariants: {
        variant: "filled",
        color: "blue",
        size: "md",
    },
})