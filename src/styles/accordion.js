import { cva } from "class-variance-authority";

export const accordionStyles = cva([
    "block",
    "relative",
    "w-full",
    "divide-y",
    "divide-inherit"
], {});

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