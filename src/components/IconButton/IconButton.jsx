import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { iconButtonStyles } from "@/styles/iconButton";
import PropTypes from "prop-types";

export const IconButton = forwardRef(({ variant, size, rounded, color, onClick, disabled, children, className, ...props }, ref) => {

    return (
        <button
            ref={ref}
            className={cn(iconButtonStyles({ variant, size, rounded, color, disabled }), className)}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
});

IconButton.displayName = "IconButton"

IconButton.propTypes = {
    variant: PropTypes.oneOf(["solid", "outlined", "shadow", "ghost"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    color: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
}