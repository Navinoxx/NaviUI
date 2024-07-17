import { cva } from "class-variance-authority";

export const dialogContainerStyles = cva([
    "w-full",
    "h-full",
    "fixed",
    "z-50",
    "top-0",
    "left-0",
    "flex",
    "justify-center",
    "items-center",
    "bg-black/50",
], {});


export const dialogStyles = cva([
    "bg-white",
    "rounded",
    "p-5",
    "mx-auto",
    "text-wrap",
    "overflow-hidden",
], {
    variants: {
        maxWidth: {
            sm: "max-w-sm",
            md: "max-w-md",
            lg: "max-w-lg",
            xl: "max-w-xl",
            xxl: "max-w-2xl",
        },
    },
    defaultVariants: {
        maxWidth: "md",
    },
});