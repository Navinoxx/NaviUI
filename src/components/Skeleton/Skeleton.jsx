import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { skeletonStyles } from "@/styles/skeleton";
import PropTypes from "prop-types";

export const Skeleton = forwardRef(({ animation, height, width, variant, children, className, ...props }, ref) => {
    const hasChildren = Boolean(children)
    const hasWidth = Boolean(width)
    const hasHeight = Boolean(height)   
    
    return (
        <span
            ref={ref}
            className={cn(skeletonStyles({ variant, animation, hasChildren, hasWidth, hasHeight }), className)}
            style={{ height, width }}
            {...props}
        >
            {children}
        </span>
    );
});

Skeleton.displayName = "Skeleton"

Skeleton.propTypes = {
    animation: PropTypes.oneOf(["pulse", "wave", false]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
}