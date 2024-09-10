import React ,{ forwardRef, useMemo } from "react";
import { ContextProvider } from "@/context/ContextProvider";
import { buttonGroupStyles } from "@/styles/buttonGroup";
import { cn } from "@/utils/cn";
import { Button } from "../Button";
import PropTypes from "prop-types";

export const ButtonGroup = forwardRef(({ variant, size, color, direction, rounded, children, className, ...props }, ref) => {
    let hasButton = true;

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type !== Button) {
            hasButton = false;
        }
    });

    if (!hasButton) {
        throw new Error("ButtonGroup component requires all children to be Buttons");
    }

    const contextValue = useMemo(() => ({ variant, size, color }), [variant, size, color]);

    return (
        <ContextProvider value={contextValue}>
            <div
                ref={ref}
                role="group"
                className={cn(buttonGroupStyles({ direction, rounded }), className)}
                {...props}
            >
                {children}
            </div>
        </ContextProvider>
    )
})

ButtonGroup.displayName = "ButtonGroup"

ButtonGroup.propTypes = {
    variant: PropTypes.oneOf(["solid", "outlined", "ghost"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    color: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    direction: PropTypes.oneOf(["row", "column"]),
    rounded: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
}