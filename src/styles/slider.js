import { bgColor } from "@/variants/variants";
import { cva } from "class-variance-authority";

export const sliderStyles = cva([
    "relative",
    "inline-flex",
    "items-center",
    "box-content",
    "rounded",
    "cursor-pointer",
], {
    variants: {
        color: bgColor,
        orientation: {
            vertical: "flex-col h-full min-h-11 w-1",
            horizontal: "flex-row w-full min-w-11 h-1",
        },
        disabled: {
            true: "bg-slate-300 cursor-default",
        }
    },
    defaultVariants: {
        color: "blue",
        orientation: "horizontal"
    }
});


export const trackStyles = cva([
    "block",
    "absolute",
    "rounded",
], {
    variants: {
        color: bgColor,
        orientation: {
            vertical: "h-full w-2",
            horizontal: "w-full h-2",
        },
        disabled: {
            true: "bg-slate-300 cursor-default",
        }
    },
    defaultVariants: {
        color: "blue",
        orientation: "horizontal"
    }
});

export const railStyles = cva([
    "block",
    "absolute",
    "border",
    "border-inherit",
    "opacity-40",
], {
    variants: {
        color: bgColor,
        orientation: {
            vertical: "h-full",
            horizontal: "w-full",
        },
        disabled: {
            true: "bg-slate-300 cursor-default",
        }
    },
    defaultVariants: {
        color: "blue",
        orientation: "horizontal"
    }
});

export const thumbStyles = cva([
    "block",
    "absolute",
    "w-5",
    "h-5",
    "rounded-full",
    "before:content-['']",
    "before:absolute",
    "before:w-full",
    "before:h-full",
    "after:content-['']",
    "after:absolute",
    "after:w-full",
    "after:h-full",
], {
    variants: {
        color: bgColor,
        disabled: {
            true: "bg-slate-300 cursor-default",
        }
    },
    defaultVariants: {
        color: "blue"
    }
});