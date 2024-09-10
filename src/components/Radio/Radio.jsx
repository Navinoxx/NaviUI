import { forwardRef } from "react";
import { useComponentContext } from "@/context/useComponentContext";
import { radioStyles, radioSvgStyles } from "@/styles/radioGroup";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { animation } from "@/animations/radioGroup";
import PropTypes from "prop-types";

export const Radio = forwardRef(({ value, label, onChange, checked, color, size = 24, labelPlacement, className, ...props }, ref) => {
    const radioGroup = useComponentContext();
    const radioState = radioGroup ? radioGroup.radioState : checked;
    const setRadioState = radioGroup ? radioGroup.setRadioState : () => {};
    const contextOnChange = radioGroup ? radioGroup.onChange : null;

    const handleChange = (event) => {
        setRadioState(value);

        if (contextOnChange) {
            contextOnChange(event);
        }

        if (onChange) {
            onChange(event);
        }
    };

    const isChecked = checked || radioState === value;

    return (
        <label
            ref={ref}
            className={cn(radioStyles({ labelPlacement }), className)}
            {...props}
        >
            <input
                type="radio"
                aria-hidden="true"
                className="sr-only"
                value={value}
                checked={isChecked}
                onChange={handleChange}
            />
            <span className={cn(radioSvgStyles({ color }))}>
                <svg
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    width={size}
                    height={size}
                    fill="currentColor"
                >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                </svg>
                <motion.svg
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    width={size}
                    height={size}
                    fill="currentColor"
                    className="absolute"
                    initial={isChecked ? "animate" : "initial"}
                    animate={isChecked ? "animate" : "initial"}
                    variants={animation}
                >
                    <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path>
                </motion.svg>
            </span>
            {label && <span>{label}</span>}
        </label>
        );
    }
);

Radio.displayName = "Radio";

Radio.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    color: PropTypes.oneOf(["blue", "red", "green", "indigo", "purple", "pink", "black"]),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    labelPlacement: PropTypes.oneOf(["start", "end", "top", "bottom"]),
    className: PropTypes.string,
};
