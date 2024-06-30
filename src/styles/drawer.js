import { position } from "@/variants/variants";
import { cva } from "class-variance-authority";

export const drawerWrapperStyles = cva([
    "absolute",
    "h-full",
    "w-full",
    "left-0",
    "top-0",
    "z-50",
    "bg-black/50",
],{});

export const drawerStyles = cva([
    "fixed",
    "z-50",
    "bg-white",
    "p-5",
    "box-border",
    "text-wrap",
],{
    variants: {
        placement: position,
    },
    compoundVariants: [{
        placement: ["left", "right"],
        className: "max-w-[300px] h-full",
    }, {
        placement: ["top", "bottom"],
        className: "max-h-[300px] w-full",
    }],
    defaultVariants: {
        placement: "left",
    }
});
