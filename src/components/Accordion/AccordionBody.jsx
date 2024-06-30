import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { AccordionBodyStyles } from "@/styles/accordion";
import { useComponentContext } from "@/context/ContextProvider";
import PropTypes from "prop-types";

const openAnimation = {
    open: { 
        height: "auto", 
    },
    closed: { 
        height: 0,
    },
}

export const AccordionBody = forwardRef(({ children, className, ...props }, ref) => {
    const { expanded } = useComponentContext()

    return (
        <motion.div
            ref={ref}
            initial="closed"
            exit="closed" 
            animate={expanded ? "open" : "closed"}
            variants={openAnimation}
            className="overflow-hidden"
        >
            <div className={cn(AccordionBodyStyles(), className)} {...props}>
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