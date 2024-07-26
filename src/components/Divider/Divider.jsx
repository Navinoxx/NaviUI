import { dividerStyles, dividerTextStyles } from "@/styles/divider";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Divider = forwardRef(({ component = "hr", variant, orientation, textAlign, children, className , ...props}, ref) => {
    const Component = children ? "div" : component

    return (
        <Component 
            ref={ref}
            role={component !== "hr" ? "separator" : undefined}
            className={cn(dividerStyles({ variant, orientation, textAlign }), className)}
            aria-orientation={orientation}
            {...props}
        >
                {children && <span className={cn(dividerTextStyles())}>{children}</span>}
        </Component>
    )
})

Divider.displayName = "Divider"

Divider.propTypes = {
    component: PropTypes.string,
    variant: PropTypes.oneOf(["full", "inset", "middle"]),
    orientation: PropTypes.oneOf(["vertical", "horizontal"]),
    textAlign: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
}