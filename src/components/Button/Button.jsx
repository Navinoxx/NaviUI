import { forwardRef } from "react";
import { useComponentContext } from "@/context/useComponentContext";
import { buttonStyles } from "@/styles/button";
import { resolveProps } from "@/utils/resolveProps";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Button = forwardRef(({ component, type, variant, size, rounded, color, onClick, disabled, icon, iconPosition, className, children, ...props }, ref) => {
    const contextProps = useComponentContext();
    const inProps = { variant, size, rounded, color, disabled, iconPosition };
    const resolvedProps = resolveProps(contextProps, inProps);

    let Component = component;
    
    if (props.href || props.to) {
        Component = "a";
    } else if (!component) {
        Component = "button";
    }

    return (
        <Component
            ref={ref}
            type={type}
            tabIndex={disabled ? -1 : 0}
            className={cn(buttonStyles(resolvedProps), className)}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {icon}
            {children}
        </Component>
    );  
});

Button.displayName = "Button";

Button.propTypes = {
    component: PropTypes.string,
    type: PropTypes.string,
    variant: PropTypes.oneOf(["solid", "outlined", "shadow", "ghost"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    color: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    iconPosition: PropTypes.oneOf(["start", "end"]),
    href: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};