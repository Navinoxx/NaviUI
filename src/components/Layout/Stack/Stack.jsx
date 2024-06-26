import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { stackStyles } from "@/styles/layout";
import PropTypes from "prop-types";

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
    spacing: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    className: PropTypes.string,
}