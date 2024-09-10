import React, { useState, forwardRef, useId, useMemo } from "react";
import { ContextProvider } from "@/context/ContextProvider";
import { tabsStyles } from "@/styles/tabs";
import { Tab } from "./Tab";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Tabs = forwardRef(({ defaultValue, orientation, indicatorPosition, indicatorColor, className, indicatorCustom, textColor, children, ...props }, ref) => {
    const [value, setValue] = useState(defaultValue)
    const id = useId()

    const onChangeHandler = (newValue) => {
        setValue(newValue)
    }

    let hasTab = true;

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type !== Tab) {
            hasTab = false;
        }
    });

    if (!hasTab) {
        throw new Error("Tabs component requires all children to be Tab");
    }

    const contextValue = useMemo(() => ({ value, onChange: onChangeHandler, id, indicatorPosition, indicatorColor, indicatorCustom, textColor }), [value, id, indicatorPosition, indicatorColor, indicatorCustom, textColor]);

    return (
        <ContextProvider value={contextValue}>
            <div
                ref={ref}
                role="tablist"
                className={cn(tabsStyles({ orientation }), className)}
                {...props}
            >
                {children}
            </div>
        </ContextProvider>
    )
});

Tabs.displayName = "Tabs"

Tabs.propTypes = {
    defaultValue: PropTypes.string,
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),
    indicatorPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    textColor: PropTypes.string,
    indicatorColor: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    indicatorCustom: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
}