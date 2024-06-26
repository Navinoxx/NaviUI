import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { buttonStyles } from "@/styles/button";
import { useComponentContext } from "@/context/ContextProvider";
import { Chevron } from "@/icons";
import PropTypes from "prop-types";

const IconStyles = cva(["flex", "justify-between", "items-center"], {
    variants: {
        iconFirst: {
            true: "!justify-end gap-2 flex-row-reverse",
        }
    }
});

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
            <div className={IconStyles({ iconFirst })}>
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