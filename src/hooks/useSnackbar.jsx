import { useCallback, useEffect } from "react";
import { useTimeout } from "./useTimeout";

export const useSnackbar = ({ autoHideDuration = null, disableWindowBlurListener = false, onClose, open, resumeHideDuration }) => {
    const { reset: resetAutoHide, clear: clearAutoHide } = useTimeout(() => {
        onClose(false);
    }, autoHideDuration);

    useEffect(() => {
        if (!open) return;

        const handleKeydown = (event) => {
            if (event.key === "Escape") {
                onClose(event, "escapeKeyDown");    
            }
        };

        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [open, onClose]);

    const handleClose = useCallback((event, reason) => {
        if (onClose) {
            onClose(event, reason);
        }
    }, [onClose]);

    const setAutoHideTimer = useCallback((autoHideDuration) => {
        if (!onClose || autoHideDuration === null) return;

        if (autoHideDuration > 0) {
            resetAutoHide(autoHideDuration);
        } else {
            clearAutoHide();
        }

    }, [resetAutoHide, clearAutoHide, onClose]);

    useEffect(() => {
        if (open) {
            setAutoHideTimer(autoHideDuration);
        }
        
        return () => {
            clearAutoHide();
        }
    }, [open, autoHideDuration, setAutoHideTimer, clearAutoHide]);

    const handlePause = useCallback(() => {
        clearAutoHide();
    }, [clearAutoHide]);

    const handleResume = useCallback(() => {
        if (autoHideDuration !== null) {
            resetAutoHide(resumeHideDuration !== null ? resumeHideDuration : autoHideDuration);
        }
    }, [autoHideDuration, resumeHideDuration, resetAutoHide]);


    const createHandleBlur = useCallback((event) => {
        if (disableWindowBlurListener) return;
        if (onClose) onClose(event, "blur");

        handleResume();
    }, [disableWindowBlurListener, onClose, handleResume]);

    const createHandleFocus = useCallback((event) => {
        if (disableWindowBlurListener) return;
        if (onClose) onClose(event, "focus");
        
        handlePause();
    }, [disableWindowBlurListener, onClose, handlePause]);

    const createMouseEnter = useCallback(() => {
        if (disableWindowBlurListener) return;
        handlePause();
    }, [disableWindowBlurListener, handlePause]);

    const createMouseLeave = useCallback(() => {
        handleResume();
    }, [handleResume]);

    useEffect(() => {
        if (!disableWindowBlurListener && open) {
            window.addEventListener('focus', handleResume);
            window.addEventListener('blur', handlePause);
    
            return () => {
                window.removeEventListener('focus', handleResume);
                window.removeEventListener('blur', handlePause);
            };
        }
    
        return undefined;
    }, [disableWindowBlurListener, open, handleResume, handlePause]);

    return { 
        handleClose,
        createHandleBlur,
        createHandleFocus,
        createMouseEnter,
        createMouseLeave
    };
};
