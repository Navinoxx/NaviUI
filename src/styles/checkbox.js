import { cva } from "class-variance-authority";

export const checkboxInputStyles = cva([
    "cursor-pointer",
    "opacity-0",
    "h-full",
    "w-full",
    "absolute",
    "overflow-hidden",
    "z-[1]",
    "peer",
], {})

export const checkboxStyles = cva([
    "flex",
    "items-center",
    "justify-center",
    "rounded",
    "border",
    "border-slate-300",
    "bg-transparent",
], {
    variants: {
        color: {
            blue: "peer-aria-checked:border-blue-500 peer-aria-checked:bg-blue-500",
            red: "peer-aria-checked:border-red-500 peer-aria-checked:bg-red-500",
            green: "peer-aria-checked:border-green-500 peer-aria-checked:bg-green-500",
            indigo: "peer-aria-checked:border-indigo-500 peer-aria-checked:bg-indigo-500",
            purple: "peer-aria-checked:border-purple-500 peer-aria-checked:bg-purple-500",
            pink: "peer-aria-checked:border-pink-500 peer-aria-checked:bg-pink-500",
            black: "peer-aria-checked:border-black peer-aria-checked:bg-black",
        },
        size: {
            sm: "h-3 w-3",
            md: "h-5 w-5",
            lg: "h-7 w-7",
        },
        disabled: {
            true: "opacity-50 pointer-events-none",
            false: "",
        },
    },
    defaultVariants: {
        color: "blue",
        size: "md",
    },
})

export const checkboxLabelStyles = cva([
    "ml-2",
    "text-gray-700",
], {})