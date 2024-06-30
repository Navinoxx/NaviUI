import { forwardRef, useEffect, useRef } from "react";
import { drawerWrapperStyles, drawerStyles } from "@/styles/drawer";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Drawer = forwardRef(({ open = false, onClose, placement = "left", children, className, ...props }, ref) => {
    const internalRef = useRef();
    const controls = useAnimation();

    useClickOutside(internalRef, () => {
        if (onClose) onClose(false);
    });

    useEffect(() => {
        controls.start(open ? "open" : "closed");
    }, [open, controls, placement]);

    const drawerAnimation = {
        open: { x: 0, y: 0 },
        closed: { 
            x: placement === "right" ? 300 : placement === "left" ? -300 : 0,
            y: placement === "top" ? -300 : placement === "bottom" ? 300 : 0,
        },
    }

    return (
        <AnimatePresence initial={false}>
            {open && (
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { delay: 0.3 } }}
                    className={cn(drawerWrapperStyles())}
                    {...props}
                >
                    <motion.aside
                        ref={internalRef}
                        initial="closed"
                        animate={controls}
                        variants={drawerAnimation}
                        transition={{ ease: "easeInOut", duration: 0.3 }}
                        className={cn(drawerStyles({ placement }), className)}
                        {...props}
                    >
                        {children}
                    </motion.aside>
                </motion.div>
            )}
        </AnimatePresence>
    );
});

Drawer.displayName = "Drawer";

Drawer.propTypes = {
    placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    open: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
};
