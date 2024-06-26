import { cva } from "class-variance-authority";
import { direction, justifyContent, alignItems, spacing, columns, rows, colSpan, rowSpan } from "@/variants/variants";

export const gridContainerStyles = cva(["grid"], {
    variants: {
        spacing,
        columns,
        rows,
    },
});

export const gridItemStyles = cva([], {
    variants: {
        colSpan,
        rowSpan,
    },
});

export const stackStyles = cva(["flex", "flex-col"], {
    variants: {
        direction,
        justifyContent,
        alignItems,
        spacing,
    },
    defaultVariants: {
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        spacing: 0,
    },
});

export const containerStyles = cva(["mx-auto h-full px-4 sm:px-6 lg:px-8"], {
    variants: {
        maxWidth: {
            sm: "md:max-w-[20rem] lg:max-w-[24rem] xl:max-w-[32rem] 2xl:max-w-[40rem]",
            md: "md:max-w-[24rem] lg:max-w-[32rem] xl:max-w-[40rem] 2xl:max-w-[48rem]",
            lg: "md:max-w-[32rem] lg:max-w-[40rem] xl:max-w-[48rem] 2xl:max-w-[56rem]",
            xl: "md:max-w-[48rem] lg:max-w-[56rem] xl:max-w-[64rem] 2xl:max-w-[72rem]",
            xxl: "md:max-w-[64rem] lg:max-w-[72rem] xl:max-w-[80rem] 2xl:max-w-[90rem]",
        },
        fixed: {
            true: "container",
            false: "",
        },
    },
    defaultVariants: {
        fixed: false,
    },
});