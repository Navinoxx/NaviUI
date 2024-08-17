import { forwardRef } from "react";
import { snackbarContentStyles, snackbarStyles } from "@/styles/snackbar";
import { useSnackbar } from "@/hooks/useSnackbar";
import { AnimatePresence, motion } from "framer-motion";
import { snackbarAnimation } from "@/animations/snackbar";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Snackbar = forwardRef(({ autoHideDuration, disableWindowBlurListener, onClose, open, resumeHideDuration, message, color, position = "bottomLeft", children, className, ...props}, ref) => {
    const { handleClose, createHandleBlur, createHandleFocus, createMouseEnter, createMouseLeave } = useSnackbar({ 
        autoHideDuration,
        disableWindowBlurListener,
        onClose,
        open,
        resumeHideDuration
    });
    
    return (
        <AnimatePresence>
            {open &&
                <div
                    role="presentation"
                    ref={ref}
                    className={cn(snackbarStyles({ position }))}
                    onBlur={createHandleBlur}
                    onFocus={createHandleFocus}
                    onMouseEnter={createMouseEnter}
                    onMouseLeave={createMouseLeave}
                    {...props}
                >
                    <motion.div
                        className={!children ? cn(snackbarContentStyles({ color }), className) : className}
                        initial="initial"
                        animate="animate"
                        exit="initial"
                        variants={snackbarAnimation}
                    >   
                        {children ||
                            <>
                                <span>
                                    {message}
                                </span>
                                <button
                                    tabIndex="0"
                                    aria-label="Close"
                                    onClick={handleClose}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 cursor-pointer"
                                    >
                                        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                    </svg>
                                </button>
                            </>
                        }
                    </motion.div>
                </div>
            }
        </AnimatePresence>
    )
});

Snackbar.displayName = "Snackbar"

Snackbar.propTypes = {
    autoHideDuration: PropTypes.number,
    disableWindowBlurListener: PropTypes.bool,
    onClose: PropTypes.func,
    open: PropTypes.bool,
    resumeHideDuration: PropTypes.number,
    message: PropTypes.node,
    color: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    position: PropTypes.oneOf(["topLeft", "topCenter", "topRight", "bottomLeft", "bottomCenter", "bottomRight"]),
    children: PropTypes.node,
    className: PropTypes.string
}