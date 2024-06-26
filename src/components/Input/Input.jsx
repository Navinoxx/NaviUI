import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { inputStyles, labelStyles } from "@/styles/input";
import PropTypes from "prop-types";

export const Input = forwardRef(( { id, label, type, color, disabled, className, ...props}, ref) => {

    return (
        <div className="relative h-10">
            <input 
                ref={ref}
                id={id}
                name={label}
                type={type}
                className={cn(inputStyles({ color, disabled }), className)}
                autoComplete="off"
                disabled={disabled}
                aria-label={label}
                aria-disabled={disabled}
                {...props}
            />
            <label 
                htmlFor={id} 
                className={cn(labelStyles({ color, disabled }), className)}
                {...props}
            >
                {label}
            </label>
        </div>
    );
});

Input.displayName = "Input";

Input.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    disabled: PropTypes.bool,
    className: PropTypes.string
}