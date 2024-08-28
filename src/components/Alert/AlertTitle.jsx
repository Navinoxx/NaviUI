import { forwardRef } from "react";
import { titleStyles } from "@/styles/alert";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const AlertTitle = forwardRef(({ className, children, ...props }, ref) => {

    return (
        <span
            ref={ref}
            className={cn(titleStyles(), className)}
            {...props}
        >
            {children}
        </span>
    )
});

AlertTitle.displayName = "AlertTitle"

AlertTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}