import { forwardRef, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { dialogContainerStyles, dialogStyles } from "@/styles/dialog";
import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";
import { dialogContainerAnimation, dialogAnimation } from "@/animations/dialog";

export const Dialog = forwardRef(({ open, onClose, maxWidth, className, children, ...props }, dialogRef) => {
    const internalRef = useRef();

    useClickOutside(internalRef, () => {
        if (onClose) onClose(false);
    });

    return (
        <AnimatePresence>
            {open &&
                <motion.div
                    ref={dialogRef}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={dialogContainerAnimation}
                    className={cn(dialogContainerStyles())}
                >
                    <motion.dialog
                        ref={internalRef}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition="transition"
                        variants={dialogAnimation}
                        className={cn(dialogStyles({ maxWidth }), className)}
                        open={open}
                        onClose={onClose}
                        {...props}
                    >
                        {children}
                    </motion.dialog>
                </motion.div>
            }
        </AnimatePresence>
    )
});

Dialog.displayName = "Dialog"

Dialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    maxWidth: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
    className: PropTypes.string,
    children: PropTypes.node
};