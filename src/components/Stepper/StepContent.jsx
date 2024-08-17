import { forwardRef } from "react";
import { useComponentContext } from "@/context/ContextProvider";
import { stepContentStyles } from "@/styles/stepper";
import { openAnimation } from "@/animations/stepper";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const StepContent = forwardRef(({ children, className, ...props }, ref) => {
    const { isActive, orientation, last } = useComponentContext()

    if (orientation !== "vertical") {
        throw new Error("StepContent is only designed for use with the vertical stepper.");
    }

    return (
        <motion.span 
            ref={ref}
            className={cn(stepContentStyles({ last }), className)}
            initial={isActive ? "open" : "closed"}
            exit="closed" 
            animate={isActive ? "open" : "closed"}
            variants={openAnimation}
            {...props}
        >
            {children}
        </motion.span>
    )
});

StepContent.displayName = "StepContent"

StepContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}