import { cva } from "class-variance-authority";

export const skeletonStyles = cva([
    "block",
    "w-full",
    "bg-slate-200",
], {
    variants: {
        variant: {
            text: "rounded h-[1.2em] before:content-[''] scale-y-75 origin-center",
            circular: "rounded-full",
            rectangular: "",
            rounded: "rounded",
        },
        animation: {
            pulse: "animate-pulse",
            wave: "relative overflow-hidden bg-opacity-70 before:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-slate-200 after:animate-wave",
            false: "",
        },
        hasChildren: {
            true: "[&>*]:invisible",
            false: "",
        },
        hasWidth: {
            true: "",
            false: "",
        },
        hasHeight: {
            true: "",
            false: "",
        }
    },
    compoundVariants: [
        {
            hasChildren: true,
            hasWidth: false,
            className: "max-w-fit",
        },
        {
            hasChildren: true,
            hasHeight: false,
            className: "h-auto",
        },
    ],
    defaultVariants: {
        variant: "text",
        animation: "pulse",
    }
})