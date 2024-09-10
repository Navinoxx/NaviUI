import { containerStyles, labelStyles, switchStyles } from "@/styles/switch";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";
import { forwardRef, useEffect, useId, useState } from "react";

export const Switch = forwardRef(({ label, color, size, disabled, defaultChecked, checked, onChange, placement, className, labelClassName, ...props}, ref) => {
    const id = useId()
    const [isChecked, setIsChecked] = useState(defaultChecked || false);

    useEffect(() => {
        if (checked !== undefined) {
            setIsChecked(checked);
        }
    }, [checked]);

    const handleChange = (e) => {
        if (checked === undefined) {
            setIsChecked(e.target.checked);
        }
        if (onChange) {
            onChange(e);
        }
    }
    
    return (
        <span
            ref={ref}
            className={cn(containerStyles({ placement }))}
            {...props}
        >
            <label htmlFor={id} className="relative inline-flex items-center cursor-pointer">
                <input
                    id={id}
                    className="sr-only peer" type="checkbox"
                    disabled={disabled}
                    defaultChecked={defaultChecked}
                    checked={isChecked}
                    onChange={handleChange}
                    aria-checked={checked}
                />
                <span className={cn(switchStyles({ color, size, disabled }), className)}></span>
            </label>
            {label && <span className={cn(labelStyles({ placement, disabled }), labelClassName)}>{label}</span>}
        </span>
    );
});

Switch.displayName = "Switch";

Switch.propTypes = {
    label: PropTypes.string,
    color: PropTypes.oneOf(["blue", "red", "green", "indigo", "purple", "pink", "black"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    placement: PropTypes.oneOf(["start", "end", "bottom", "top"]),
    className: PropTypes.string,
    labelClassName: PropTypes.string
}