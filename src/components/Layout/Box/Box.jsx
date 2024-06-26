import { forwardRef } from "react";
import PropTypes from "prop-types";

export const Box = forwardRef(({ component, className, ...props }, ref) => {
    const Component = component || "div"

    return (
        <Component
            ref={ref}
            className={className}
            {...props}
        />
    )
})

Box.displayName = "Box"

Box.propTypes = {
    component: PropTypes.string,
    className: PropTypes.string,
}