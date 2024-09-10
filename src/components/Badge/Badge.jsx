import { forwardRef, useEffect } from "react";
import { badgeStyles, containerBadgeStyles, dotStyles } from "@/styles/badge";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Badge = forwardRef(({ content, color, dot, placement, max, invisible, showZero, className, children, ...props }, ref) => {
    const controls = useAnimation();
    const maxValue = content > max ? `${max}+` : content
    const zero = showZero ? content >= 0 : content 

    useEffect(() => {
        controls.start(invisible ? "invisible" : "visible");
        return () => controls.stop();
    }, [invisible, controls]);

    const badgeAnimation = {
        visible: { transform: "scale(1)" },
        invisible: { transform: "scale(0)" },
    }

    return (
        <div
            ref={ref}
            className={cn(containerBadgeStyles(), className)}
            {...props}
        >
            <AnimatePresence initial={false}>
                {zero &&
                    <motion.span
                        className={cn(badgeStyles({ color, placement }))}
                        initial="invisible"
                        animate="visible"
                        exit="invisible"
                        variants={badgeAnimation}
                    >
                        {maxValue}
                    </motion.span>
                }
            </AnimatePresence>
            {dot && 
                <motion.span 
                    className={cn(dotStyles({ color, placement }))}
                    initial="visible"
                    animate={controls} 
                    variants={badgeAnimation} 
                >
                </motion.span>
            }
            {children}
        </div>
    )
});

Badge.displayName = "Badge"

Badge.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    invisible: PropTypes.bool,
    color: PropTypes.string,
    dot: PropTypes.bool,
    max: PropTypes.number,
    showZero: PropTypes.bool,
    placement: PropTypes.oneOf(["topLeft", "topRight", "bottomLeft", "bottomRight"]),
    className: PropTypes.string,
    children: PropTypes.node
}