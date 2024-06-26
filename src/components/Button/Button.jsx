import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { buttonStyles } from "@/styles/button";
import PropTypes from "prop-types";

export const Button = forwardRef(({ variant, size, rounded, color, onClick, disabled, icon, iconPosition, className, children, ...props }, ref) => {
    
    return (
        <button
            ref={ref}
            className={cn(buttonStyles({ variant, size, rounded, color, disabled, iconPosition }), className)}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {icon}
            {children}
        </button>
    );  
});

Button.displayName = "Button";

Button.propTypes = {
    variant: PropTypes.oneOf(["solid", "outline", "shadow", "ghost"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    color: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    iconPosition: PropTypes.oneOf(["start", "end", "top", "bottom"]),
    icon: PropTypes.node,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};