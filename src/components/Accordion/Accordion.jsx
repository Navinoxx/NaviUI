import React ,{ useState } from "react";
import { ContextProvider } from "@/context/ContextProvider";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionBody } from "./AccordionBody";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

const accordionStyles = cva(["block", "relative", "w-full", "divide-y", "divide-inherit"], {});

export const Accordion = ({ icon = null, variant, color, children }) => {
    const [expanded, setExpanded] = useState(false);
    const toggleAccordion = () => setExpanded(prev => !prev);
    const values = { expanded, icon, toggleAccordion, variant, color };

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
    
    return (
        <ContextProvider value={values}>
            <div className={cn(accordionStyles())}>
                {React.Children.map(children, (child, index) =>
                    React.isValidElement(child) && index === 0
                        ? React.cloneElement(child, {
                            'data-first-child': index,
                        })
                    : child,
                )}
            </div>
        </ContextProvider>
    )
}

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
    icon: PropTypes.bool,
    variant: PropTypes.oneOf(["solid", "shadow", "outline", "ghost"]),
    color: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    children: PropTypes.node,
}