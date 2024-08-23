import { forwardRef } from "react";
import { IconAccordionStyles } from "@/styles/accordion";
import { useComponentContext } from "@/context/useComponentContext";
import { buttonStyles } from "@/styles/button";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { iconAnimation } from "@/animations/accordion";
import PropTypes from "prop-types";

export const AccordionHeader = forwardRef(({ iconFirst = false, children, className, ...props }, ref) => {
    const { isExpanded, icon, toggleAccordion, variant, color } = useComponentContext()

    return (
        <div 
            ref={ref}
            role="button"
            aria-expanded={isExpanded}
            className={cn(buttonStyles({ variant, color }), className)}
            onClick={toggleAccordion}
            {...props}
        >
            <div className={IconAccordionStyles({ iconFirst })}>
                {children}
                <motion.div
                    initial={isExpanded ? "open" : "closed"}
                    animate={isExpanded ? "open" : "closed"}
                    variants={iconAnimation}
                >
                    {icon}
                </motion.div>
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