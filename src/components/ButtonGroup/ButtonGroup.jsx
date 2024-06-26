import React ,{ forwardRef } from "react";
import { cn } from "@/utils/cn";
import { Button } from "../Button";
import { buttonGroupStyles } from "@/styles/buttonGroup";
import PropTypes from "prop-types";

export const ButtonGroup = forwardRef(({ space, direction, rounded, children, className, ...props }) => {
    let hasButton = false;

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === Button) {
                hasButton = true;
            }
        }
    });

    if (!hasButton) {
        throw new Error("ButtonGroup component requires at least one Button as children");
    }

    return (
        <div 
            className={cn(buttonGroupStyles({ space, direction, rounded }), className)}
            {...props}
        >
            {children}
        </div>
    )
})

ButtonGroup.displayName = "ButtonGroup"

ButtonGroup.propTypes = {
    direction: PropTypes.oneOf(["row", "column"]),
    rounded: PropTypes.bool,
    space: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
}