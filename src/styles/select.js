import { borderColor } from "@/variants/variants";
import { cva } from "class-variance-authority";

export const labelSelectStyles = cva([
    "absolute",
    "top-1/2",
    "-translate-y-1/2",
    "left-3",
    "data-[shrink=true]:text-xs",
    "data-[shrink=true]:-top-[calc(50%+.3rem)]",
    "data-[shrink=true]:translate-y-1/2",
    "data-[shrink=true]:left-2",
    "transition-all",
    "pointer-events-none",
    "z-10",
], {
    variants: {
        color: {
            blue: "peer-focus:text-blue-500 peer-aria-expanded:text-blue-500",
            green: "peer-focus:text-green-500 peer-aria-expanded:text-green-500",
            red: "peer-focus:text-red-500 peer-aria-expanded:text-red-500",
            indigo: "peer-focus:text-indigo-500 peer-aria-expanded:text-indigo-500",
            purple: "peer-focus:text-purple-500 peer-aria-expanded:text-purple-500",
            pink: "peer-focus:text-pink-500 peer-aria-expanded:text-pink-500",
            black: "peer-focus:text-black peer-aria-expanded:text-black",
        },
    },
    defaultVariants: {
        color: "black",
    },
});

export const selectStyles = cva([
    "absolute",
    "h-full",
    "w-full",
    "flex",
    "items-center",
    "border",
    "rounded",
    "bg-inherit",
    "pl-2",
    "pr-6",
    "peer",
], {
    variants: {
        color: {
            blue: "aria-expanded:border-blue-500 focus:border-blue-500",
            green: "aria-expanded:border-green-500 focus:border-green-500",
            red: "aria-expanded:border-red-500 focus:border-red-500",
            indigo: "aria-expanded:border-indigo-500 focus:border-indigo-500",
            purple: "aria-expanded:border-purple-500 focus:border-purple-500",
            pink: "aria-expanded:border-pink-500 focus:border-pink-500",
            black: "aria-expanded:border-black focus:border-black",
        },
    },
    defaultVariants: {
        color: "black",
    },
});

export const optionStyles = cva([
    "absolute",
    "top-full",
    "left-0",
    "w-full",
    "max-h-60",
    "overflow-y-auto",
    "overflow-x-hidden",
    "border",
    "rounded",
    "bg-inherit",
    "cursor-pointer",
    "mt-0.5",
], {
    variants: {
        color: borderColor,
    },
    defaultVariants: {
        color: "black",
    },
});