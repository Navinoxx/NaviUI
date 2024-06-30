import { forwardRef } from "react";
import { IconAccordionStyles } from "@/styles/accordion";
import { useComponentContext } from "@/context/ContextProvider";
import { buttonStyles } from "@/styles/button";
import { Chevron } from "@/icons";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const AccordionHeader = forwardRef(({ iconFirst, children, className, ...props }, ref) => {
    const { expanded, icon, toggleAccordion, variant, color } = useComponentContext()

    return (
        <div 
            ref={ref}
            role="button"
            aria-expanded={expanded}
            className={cn(buttonStyles({ variant, color }), className)}
            onClick={toggleAccordion}
            {...props}
        >
            <div className={IconAccordionStyles({ iconFirst })}>
                {children}
                {icon && <Chevron expanded={expanded}/>}
            </div>
        </div>
    )
})

AccordionHeader.displayName = "AccordionHeader"

AccordionHeader.propTypes = {
    iconFirst: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
}