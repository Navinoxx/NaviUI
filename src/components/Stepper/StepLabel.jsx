import { forwardRef } from "react";
import { stepLabelStyles } from "@/styles/stepper";
import { useComponentContext } from "@/context/useComponentContext";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const StepLabel = forwardRef(({ children, className, ...props }, ref) => {
    const { orientation } = useComponentContext();

    return (
        <span
            ref={ref}
            className={cn(stepLabelStyles({ orientation }), className)}
            {...props}
        >
            {children}
        </span>
    );
});

StepLabel.displayName = "StepLabel";

StepLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
