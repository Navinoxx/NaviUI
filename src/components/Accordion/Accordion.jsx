import React ,{ forwardRef, useCallback, useMemo, useState } from "react";
import { ContextProvider } from "@/context/ContextProvider";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionBody } from "./AccordionBody";
import { accordionStyles } from "@/styles/accordion";
import { cn } from "@/utils/cn";
import { Chevron } from "@/icons";
import PropTypes from "prop-types";

export const Accordion = forwardRef(({ defaultExpanded, expanded, onChange, icon = <Chevron/>, variant, color, children, ...props }, ref) => {
    const isControlled = expanded !== undefined;
    const [isExpanded, setIsExpanded] = useState(defaultExpanded || false);

    const handleChange = useCallback((event) => {
        const newExpanded = isControlled ? !expanded : !isExpanded;
        if (!isControlled) setIsExpanded(newExpanded);

        if (onChange) {
            onChange(event, newExpanded);
        }
    }, [isExpanded, onChange, expanded, isControlled]);

    let hasHeader = false;
    let hasBody = false;

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === AccordionHeader) {
                hasHeader = true;
            } else if (child.type === AccordionBody) {
                hasBody = true;
            }
        }
    });

    if (!hasHeader || !hasBody) {
        throw new Error("Accordion component requires both Accordion.Header and Accordion.Body as children");
    }

    const contextValue = useMemo(() => ({ 
        isExpanded: isControlled ? expanded : isExpanded, 
        toggleAccordion: handleChange, 
        variant, color, icon 
    }), [isExpanded, expanded, variant, color, icon, handleChange, isControlled]);
    
    return (
        <ContextProvider value={contextValue}>
            <div ref={ref} className={cn(accordionStyles())} {...props}>
                {children}
            </div>
        </ContextProvider>
    )
});

Accordion.displayName = "Accordion"

Object.defineProperty(Accordion, "Header", {
    get() {
        return AccordionHeader;
    },
});

Object.defineProperty(Accordion, "Body", {
    get() {
        return AccordionBody;
    },
});

Accordion.propTypes = {
    defaultExpanded: PropTypes.bool,
    expanded: PropTypes.bool,
    onChange: PropTypes.func,
    icon: PropTypes.node,
    variant: PropTypes.oneOf(["solid", "shadow", "outline", "ghost"]),
    color: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    children: PropTypes.node,
}