import { cva } from "class-variance-authority";

export const paginationButtonStyles = cva([
    "inline-flex",
    "items-center",
    "justify-center",
    "text-sm",
    "font-medium",
    "disabled:opacity-50",
    "disabled:pointer-events-none",
    "hover:bg-gray-200",
    "select-none",
], {
    variants: {
        variant: {
            default: "",
            outlined: "border border-gray-300",
        },
        color: {
            blue: "aria-[current='true']:bg-blue-300",
            red: "aria-[current='true']:bg-red-300",
            green: "aria-[current='true']:bg-green-300",
            indigo: "aria-[current='true']:bg-indigo-300",
            purple: "aria-[current='true']:bg-purple-300",
            pink: "aria-[current='true']:bg-pink-300",
            black: "aria-[current='true']:bg-gray-300",
        },
        shape: {
            default: "rounded-full",
            square: "rounded-none",
            rounded: "rounded-md",
        },
        size: {
            sm: "min-w-6 h-6 mx-0.5 px-0.5",
            md: "min-w-8 h-8 mx-1 px-1",
            lg: "min-w-10 h-10 mx-1 px-1",
        }
    },
    compoundVariants: [
        {
            variant: "outlined",
            color: "blue",
            className: "aria-[current='true']:border-blue-500 aria-[current='true']:text-blue-500",
        },
        {
            variant: "outlined",
            color: "green",
            className: "aria-[current='true']:border-green-500 aria-[current='true']:text-green-500",
        },
        {
            variant: "outlined",
            color: "red",
            className: "aria-[current='true']:border-red-500 aria-[current='true']:text-red-500",
        },
        {
            variant: "outlined",
            color: "indigo",
            className: "aria-[current='true']:border-indigo-500 aria-[current='true']:text-indigo-500",
        },
        {
            variant: "outlined",
            color: "purple",
            className: "aria-[current='true']:border-purple-500 aria-[current='true']:text-purple-500",
        },
        {
            variant: "outlined",
            color: "pink",
            className: "aria-[current='true']:border-pink-500 aria-[current='true']:text-pink-500",
        },
        {
            variant: "outlined",
            color: "black",
            className: "aria-[current='true']:border-gray-300 aria-[current='true']:text-black",
        },
    ],
    defaultVariants: {
        color: "black",
        variant: "default",
        shape: "default",
        size: "md",
    },
});

export const paginationEllipsisStyles = cva([
    "inline-flex",
    "min-w-8",
    "h-8",
    "mx-1",
    "px-1",
    "rounded-full",
    "items-center",
    "justify-center",
    "text-sm",
    "font-medium",
    "select-none",
], {
    variants: {
        disabled: {
            true: "opacity-50 pointer-events-none",
        },
        size: {
            sm: "min-w-6 h-6 mx-0.5 px-0.5",
            md: "min-w-8 h-8 mx-1 px-1",
            lg: "min-w-10 h-10 mx-1 px-1",
        }
    },
    defaultVariants: {
        disabled: false,
    },
})