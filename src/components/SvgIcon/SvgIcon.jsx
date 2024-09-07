import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const SvgIcon = forwardRef(({ fontSize="small", children, className, ...props }, ref) => {
    const sizeClasses = {
        small: "1rem",
        medium: "1.5rem",
        large: "2rem",
    };

    const sizeClass = sizeClasses[fontSize] || fontSize;

    return (
        <svg
            ref={ref}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            className={cn("inline-block fill-current w-[1em] h-[1em]", className)}
            style={{ fontSize: sizeClass }}
            {...props}
        >
            {children}
        </svg>
    )
})

SvgIcon.displayName = "SvgIcon"

SvgIcon.propTypes = {
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(["small", "medium", "large"]) ]),
    children: PropTypes.node,
    className: PropTypes.string
}