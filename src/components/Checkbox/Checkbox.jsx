import { forwardRef, useState } from "react";
import { cn } from "@/utils/cn";
import { checkboxInputStyles, checkboxStyles, checkboxLabelStyles } from "@/styles/checkbox";
import PropTypes from "prop-types";

export const Checkbox = forwardRef(({ label, size, checked, defaultChecked, onChange, id, color, disabled, className, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);

    const isControlled = checked !== undefined && onChange !== undefined;

    const handleChange = (event) => {
        if (!isControlled) {
            setInternalChecked(event.target.checked);
        }
        if (onChange) {
            onChange(event);
        }
    };

    const currentChecked = isControlled ? checked : internalChecked;

    return (
        <div className="flex items-center relative p-1">
            <input
                ref={ref}
                type="checkbox"
                id={id}
                checked={currentChecked}
                onChange={handleChange}
                disabled={disabled}
                className={cn(checkboxInputStyles())}
                aria-checked={currentChecked}
                aria-label={label}
                {...props}
            />
            <span
                className={cn(checkboxStyles({ color, size, disabled }), className)}
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
            {label && (
                <label htmlFor={id} className={cn(checkboxLabelStyles())}>
                    {label}
                </label>
            )}
        </div>
    );
});

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    color: PropTypes.oneOf(["blue", "red", "green", "indigo", "purple", "pink", "black"]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
}