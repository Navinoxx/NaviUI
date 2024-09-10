import { forwardRef, useState } from "react";
import { cn } from "@/utils/cn";
import { checkboxInputStyles, checkboxStyles, checkboxLabelStyles, checkboxContainerStyles } from "@/styles/checkbox";
import PropTypes from "prop-types";

export const Checkbox = forwardRef(({ label, labelPlacement, size, checked, defaultChecked, onChange, id, color, disabled, className="", ...props }, ref) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = checked !== undefined && onChange !== undefined;
    const currentChecked = isControlled ? checked : internalChecked;

    const handleChange = (event) => {
        if (!isControlled) {
            setInternalChecked(event.target.checked);
        }
        if (onChange) {
            onChange(event);
        }
    };

    let Component;

    if (label) {
        Component = "label";
    } else {
        Component = "div";
    }

    const checkboxClassName = typeof className === "string" ? className : className.container

    return (
        <Component
            ref={ref}
            className={cn(checkboxContainerStyles({ labelPlacement }), checkboxClassName)}
            {...props}
        >
            <input
                type="checkbox"
                id={id}
                checked={currentChecked}
                onChange={handleChange}
                disabled={disabled}
                className={cn(checkboxInputStyles())}
                aria-checked={currentChecked}
                aria-label={label}
            />
            {label && (
                <span htmlFor={id} className={cn(checkboxLabelStyles({ labelPlacement }), className.label)}>
                    {label}
                </span>
            )}
            <span
                className={cn(checkboxStyles({ color, size, disabled }), className.checkbox)}
            >
                {currentChecked && (
                    <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                            <polyline points="20 6 9 17 4 12" />
                    </svg>
                )}
            </span>
        </Component>
    );
});

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
    label: PropTypes.string,
    labelPlacement: PropTypes.oneOf(["start", "end", "top", "bottom"]),
    id: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    color: PropTypes.oneOf(["blue", "red", "green", "indigo", "purple", "pink", "black"]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
}