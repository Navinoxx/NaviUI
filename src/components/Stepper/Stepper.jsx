import React, { forwardRef, useMemo } from "react";
import { ContextProvider } from "@/context/ContextProvider";
import { Step } from "./Step";
import { cn } from "@/utils/cn";
import { stepperStyles } from "@/styles/stepper";
import PropTypes from "prop-types";

export const Stepper = forwardRef(({ activeStep, orientation, children, className, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const steps = childrenArray.map((step, index) => {
        return React.cloneElement(step, {
            index,
            last: index + 1 === childrenArray.length
        })
    })

    let hasStep = false;

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === Step) {
                hasStep = true;
            }
        }
    });

    if (!hasStep) {
        throw new Error("Stepper component requires at least one Step as children");
    }

    const contextValue = useMemo(() => ({ activeStep, orientation }), [activeStep, orientation]);

    return (
        <ContextProvider value={contextValue}>
            <div ref={ref} className={cn(stepperStyles({ orientation }), className)} {...props}>
                {steps}
            </div>
        </ContextProvider>
    );
});

Stepper.displayName = "Stepper"

Object.defineProperty(Stepper, "Step", {
    get() {
        return Step;
    },
});

Stepper.propTypes = {
    activeStep: PropTypes.number,
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),
    children: PropTypes.node,
    className: PropTypes.string,
}