import { forwardRef } from "react";
import { containerStyles } from "@/styles/layout";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Container = forwardRef(({ component, maxWidth, fixed, className, ...props }, ref) => {
    const Component = component || "div"

    return (
        <Component
            ref={ref}
            className={cn(containerStyles({ maxWidth, fixed }), className)}
            {...props}
        />
    )
})  

Container.displayName = "Container"

Container.propTypes = {
    maxWidth: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
    fixed: PropTypes.bool,
    className: PropTypes.string,
    component: PropTypes.string,
}