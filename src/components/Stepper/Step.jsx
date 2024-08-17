import { forwardRef, useMemo } from "react";
import { ContextProvider, useComponentContext } from "@/context/ContextProvider";
import { connectorStyles, stepIconStyles, stepContainerIconStyles, stepStyles, stepContainerStyles } from "@/styles/stepper";
import { cn } from "@/utils/cn";
import { StepContent } from "./StepContent";
import { StepLabel } from "./StepLabel";
import PropTypes from "prop-types";

export const Step = forwardRef(({ index, last, className, children, ...props }, ref) => {
    const { activeStep, orientation } = useComponentContext()

    const isActive = index + 1 === activeStep
    const isCompleted = index + 1 < activeStep

    const contextValue = useMemo(() => ({ isActive, isCompleted, orientation, last }), [isActive, isCompleted, orientation, last]);

    return (
        <ContextProvider value={contextValue}>
            <div 
                ref={ref}
                className={cn(stepStyles({ orientation }), className)}
                {...props}
            >
                <span className={cn(stepContainerIconStyles({ orientation }))}>
                    <svg
                        className={cn(stepIconStyles({ isActive, isCompleted }), className)}
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="12" cy="12" r="12"></circle>
                        <text
                            fill="black"
                            x="12"
                            y="12"
                            textAnchor="middle"
                            dominantBaseline="central"
                        >
                            {isCompleted ? "✓" : index + 1}
                        </text>
                    </svg>
                </span>
                <span className={cn(stepContainerStyles({ orientation }))}>
                    {children}
                </span>
            </div>
            {!last &&
                <div className="relative flex flex-grow min-h-8">
                    <div className={cn(connectorStyles({ orientation }))}></div>
                </div>
            }
        </ContextProvider>
    );
})

Step.displayName = "Step"

Object.defineProperty(Step, "Content", {
    get() {
        return StepContent
    }
})

Object.defineProperty(Step, "Label", {
    get() {
        return StepLabel
    }
})

Step.propTypes = {
    index: PropTypes.number,
    last: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
}