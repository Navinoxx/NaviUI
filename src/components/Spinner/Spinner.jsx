import { spinnerStyles } from "@/styles/spinner";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Spinner = forwardRef(({ variant, color, size, className, ...props }, ref) => {

    return (
        <div
            ref={ref}
            className={cn(spinnerStyles({ variant, color, size }), className)} 
            {...props}>
        </div>
    )
});

Spinner.displayName = "Spinner";

Spinner.propTypes = {
    variant: PropTypes.oneOf(["regular", "double", "edge", "dashed"]),
    color: PropTypes.oneOf(["blue", "red", "green", "indigo", "purple", "pink", "black"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    className: PropTypes.string,
}