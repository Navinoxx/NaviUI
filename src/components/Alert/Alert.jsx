import { forwardRef } from "react";
import { alertStyles, closeButtonStyles, iconStyles, messageStyles } from "@/styles/alert";
import { Success, Error, Warning, Info, Close } from "@/icons";
import { AlertTitle } from "./AlertTitle";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Alert = forwardRef(({ severity, icon, onClose, className="", children, ...props }, ref) => {
    const Icon = { success: Success, error: Error, warning: Warning, info: Info }[severity];
    const alertClassName = typeof className === "string" ? className : className.alert

    return (
        <div
            ref={ref}
            role="alert"
            className={cn(alertStyles({ severity }), alertClassName)}
            {...props}
        >
            {icon !== false && (
                <div className={cn(iconStyles({ severity }), className.icon)}>
                    {icon || <Icon fontSize="medium" />}
                </div>
            )}  
            <div className={cn(messageStyles({ severity }), className.message)}>
                {children}
            </div>
            {onClose && (
                <div>   
                    <button
                        type="button"
                        tabIndex={0}
                        aria-label="Close"
                        className={cn(closeButtonStyles({ severity }), className.closeButton)}
                        onClick={onClose}
                    >
                        <Close />
                    </button>
                </div>
            )}
        </div>
    );
});

Alert.displayName = "Alert"

Object.defineProperty(Alert, "Title", {
    get() {
        return AlertTitle;
    },
});

Alert.propTypes = {
    severity: PropTypes.oneOf(["success", "error", "warning", "info"]),
    icon: PropTypes.node,
    onClose: PropTypes.func,
    className: PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.shape({
            alert: PropTypes.string, 
            icon: PropTypes.string, 
            messageContainer: PropTypes.string, 
            title: PropTypes.string, 
            message: PropTypes.string})]),
    children: PropTypes.node
}