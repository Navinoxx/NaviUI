import React, { forwardRef, useMemo, useState } from "react";
import { ContextProvider } from "@/context/ContextProvider";
import { cn } from "@/utils/cn";
import { radioGroupStyles } from "@/styles/radioGroup";
import { Radio } from "../Radio";
import PropTypes from "prop-types";

export const RadioGroup = forwardRef(({ defaultValue, value, onChange, orientation, children, className, ...props}, ref) => {
    const [radioState, setRadioState] = useState(value || defaultValue || null);
    
    let hasRadio = false;

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type === Radio) {
            hasRadio = true
        }
    })

    if (!hasRadio) {
        throw new Error("RadioGroup component requires at least one Radio as children")
    }

    const contextValue = useMemo(() => ({ radioState, setRadioState, onChange }), [radioState, setRadioState, onChange]);

    return (
        <ContextProvider value={contextValue}>
            <div  
                ref={ref}
                role="radiogroup" 
                className={cn(radioGroupStyles({ orientation }), className)} 
                {...props}
            >
                {children}
            </div>
            
        </ContextProvider>
    )
});

Object.defineProperty(RadioGroup, "Radio", {
    get() {
        return Radio;
    },
})

RadioGroup.displayName = "RadioGroup"

RadioGroup.propTypes = {
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    orientation: PropTypes.oneOf(["vertical", "horizontal"]),
    className: PropTypes.string,
    children: PropTypes.node,
}
