import { forwardRef, useState } from "react";
import { tooltipContainerStyles, tooltipStyles, arrowStyles } from "@/styles/tooltip";
import { tooltipAnimation } from "@/animations/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Tooltip = forwardRef(({ content, children, color, arrow, placement = "top", className, ...props }, ref) => {
    const [showTooltip, setShowTooltip] = useState(false)
    const toggleTooltip = () => setShowTooltip(prev => !prev)

    return (
        <div
            ref={ref}
            id="tooltip"
            role="tooltip"
            className={cn(tooltipContainerStyles())}
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
            {...props}
        >
            {children}
            <AnimatePresence>
                {showTooltip && (
                    <>
                        <motion.div 
                            className={cn(tooltipStyles({ color, placement }), className)}
                            initial="initial"
                            animate="animate"
                            exit="initial"
                            variants={tooltipAnimation[placement]}
                            transition={{ duration: 0.2 }}
                        >
                            {content}
                            {arrow && 
                                <svg
                                    className={cn(arrowStyles({ placement }))}
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 255 255"
                                    xmlSpace="preserve"
                                >
                                    <polygon className={cn(arrowStyles({ color }))} points="0,0 127.5,127.5 255,0" />
                                </svg>}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
});

Tooltip.displayName = "Tooltip";

Tooltip.propTypes = {
    content: PropTypes.string,
    color: PropTypes.string,
    placement: PropTypes.oneOf(["top", "topStart", "topEnd", "right", "rightStart", "rightEnd", "bottom", "bottomStart", "bottomEnd", "left", "leftStart", "leftEnd"]),
    arrow: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
};