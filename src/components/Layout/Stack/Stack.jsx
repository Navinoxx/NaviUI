import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import PropTypes from "prop-types";

const stackStyles = cva(["flex", "flex-col"], {
    variants: {
        direction: {
            row: "flex-row",
            column: "flex-col",
            reverseRow: "flex-row-reverse",
            reverseColumn: "flex-col-reverse",
        },
        justifyContent: {
            start: "justify-start",
            end: "justify-end",
            center: "justify-center",
            between: "justify-between",
            around: "justify-around",
            evenly: "justify-evenly",
        },
        alignItems: {
            start: "items-start",
            end: "items-end",
            center: "items-center",
            baseline: "items-baseline",
            stretch: "items-stretch",
        },
        spacing: {
            1: "gap-1",
            2: "gap-2",
            3: "gap-3",
            4: "gap-4",
            5: "gap-5",
            6: "gap-6",
            7: "gap-7",
            8: "gap-8",
            9: "gap-9",
            10: "gap-10",
        },
    },
    defaultVariants: {
        direction: "col",
        justifyContent: "center",
        alignItems: "center",
        spacing: 0,
    },
});

export const Stack = forwardRef(({ direction, justifyContent, alignItems, spacing, className, ...props }, ref) => {

    return (
        <div
            ref={ref}
            className={cn(stackStyles({ direction, justifyContent, alignItems, spacing }), className)}
            {...props}
        />
    )
})

Stack.displayName = "Stack"

Stack.propTypes = {
    direction: PropTypes.oneOf(["row", "column", "reverseRow", "reverseColumn"]),
    justifyContent: PropTypes.oneOf(["start", "end", "center", "between", "around", "evenly"]),
    alignItems: PropTypes.oneOf(["start", "end", "center", "baseline", "stretch"]),
    spacing: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    className: PropTypes.string,
}