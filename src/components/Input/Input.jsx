import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

const inputStyles = cva([
    "border-b",
    "border-gray-300",
    "py-1",
    "focus:border-b-2",
    "placeholder-transparent",
    "focus:placeholder-gray-300",
    "focus:outline-none",
    "transition-colors",
    "peer",
    "bg-inherit",
], {
    variants: {
        color: {
            blue: "focus:border-blue-600",
            green: "focus:border-green-600",
            red: "focus:border-red-600",
            indigo: "focus:border-indigo-600",
            purple: "focus:border-purple-600",
            pink: "focus:border-pink-600",
            black: "focus:border-black",
        },
        disabled: {
            true: "opacity-50 pointer-events-none",
            false: "",
        },
    },
    defaultVariants: {
        disabled: false,
    },
});

const labelStyles = cva([
    "absolute",
    "left-0",
    "top-1",
    "cursor-text",
    "peer-focus:text-xs",
    "peer-focus:-top-4",
    "peer-[:not(:placeholder-shown)]:text-xs",
    "peer-[:not(:placeholder-shown)]:-top-4",
    "peer-placeholder-shown:text-base",
    "peer-placeholder-shown:text-gray-300",
    "transition-all",
    "pointer-events-none",
], {
    variants: {
        color: {
            blue: "peer-focus:text-blue-600",
            green: "peer-focus:text-green-600",
            red: "peer-focus:text-red-600",
            indigo: "peer-focus:text-indigo-600",
            purple: "peer-focus:text-purple-600",
            pink: "peer-focus:text-pink-600",
            black: "peer-focus:text-black",
        },
        disabled: {
            true: "text-gray-300",
            false: "",
        },
    },
    defaultVariants: {
        disabled: false,
    },
});

export const Input = forwardRef(( { label, type, color, disabled, className, ...props }, ref) => {

    return (
        <div className="relative">
            <input 
                ref={ref}
                id={label}
                name={label}
                type={type}
                className={cn(inputStyles({ color, disabled }), className)}
                autoComplete="off"
                {...props}
            />
            <label 
                htmlFor={label} 
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
    /**
     * Button contents
     */
    label: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    disabled: PropTypes.bool,
    className: PropTypes.string
}