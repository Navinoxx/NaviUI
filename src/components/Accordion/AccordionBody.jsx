import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { AccordionBodyStyles } from "@/styles/accordion";
import { useComponentContext } from "@/context/ContextProvider";
import { openAnimation } from "@/animations/accordion";
import PropTypes from "prop-types";

export const AccordionBody = forwardRef(({ children, className, ...props }, ref) => {
    const { isExpanded } = useComponentContext()

    return (
        <motion.div
            ref={ref}
            initial={isExpanded ? "open" : "closed"}
            exit="closed" 
            animate={isExpanded ? "open" : "closed"}
            variants={openAnimation}
            className="overflow-hidden"
            {...props}
        >
            <div className={cn(AccordionBodyStyles(), className)}>
                {children}
            </div>
        </motion.div>
    )
})

AccordionBody.displayName = "AccordionBody"

AccordionBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}