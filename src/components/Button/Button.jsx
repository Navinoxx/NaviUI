import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

const buttonStyles = cva(["font-semibold", "focus:outline-none"], {
    variants: {
        variant: {
            solid: "text-white",
            shadow: "text-white shadow-lg",
            outline: "border-2",
            ghost: "",
        },
        size: {
            sm: "text-sm px-2 py-1",
            md: "text-base px-4 py-2",
            lg: "text-lg px-6 py-3",
        },
        rounded: {
            true: "rounded-full",
            false: "rounded-md",
        },
        disabled: {
            true: "opacity-50",
            false: "",
        },
        color: {    
            blue: "bg-blue-500 border-blue-500 hover:bg-blue-600",
            green: "bg-green-500 border-green-500 hover:bg-green-600",
            red: "bg-red-500 border-red-500 hover:bg-red-600",
            indigo: "bg-indigo-500 border-indigo-500 hover:bg-indigo-600",
            purple: "bg-purple-500 border-purple-500 hover:bg-purple-600",
            pink: "bg-pink-500 border-pink-500 hover:bg-pink-600",
            black: "bg-black border-black hover:bg-gray-700",
        },
    },
    compoundVariants: [
        {
            variant: ["ghost", "outline"],
            className: "bg-transparent transition-all duration-300",
        },
        {
            variant: "outline",
            color: "blue",
            className: "text-blue-500 hover:bg-blue-500 hover:text-white",
        },
        {
            variant: "outline",
            color: "green",
            className: "text-green-500 hover:bg-green-500 hover:text-white",
        },
        {
            variant: "outline",
            color: "red",
            className: "text-red-500 hover:bg-red-500 hover:text-white",
        },
        {
            variant: "outline",
            color: "indigo",
            className: "text-indigo-500 hover:bg-indigo-500 hover:text-white",
        },
        {
            variant: "outline",
            color: "purple",
            className: "text-purple-500 hover:bg-purple-500 hover:text-white",
        },
        {
            variant: "outline",
            color: "pink",
            className: "text-pink-500 hover:bg-pink-500 hover:text-white",
        },
        {
            variant: "outline",
            color: "black",
            className: "text-black hover:bg-black hover:text-white",
        },
        {
            variant: "shadow",
            color: "blue",
            className: "shadow-blue-500/50",
        },
        {
            variant: "shadow",
            color: "green",
            className: "shadow-green-500/50",
        },
        {
            variant: "shadow",
            color: "red",
            className: "shadow-red-500/50",
        },
        {
            variant: "shadow",    
            color: "indigo",
            className: "shadow-indigo-500/50",
        },
        {
            variant: "shadow",
            color: "purple",
            className: "shadow-purple-500/50",
        },
        {
            variant: "shadow",
            color: "pink",
            className: "shadow-pink-500/50",
        },
        {
            variant: "shadow",
            color: "black",
            className: "shadow-black/50",
        },
        {
            variant: "ghost",
            color: "blue",
            className: "text-blue-500 hover:bg-blue-100",
        },
        {
            variant: "ghost",
            color: "green",
            className: "text-green-500 hover:bg-green-100",
        },
        {
            variant: "ghost",
            color: "red",
            className: "text-red-500 hover:bg-red-100",
        },
        {
            variant: "ghost",
            color: "indigo",
            className: "text-indigo-500 hover:bg-indigo-100",
        },
        {
            variant: "ghost",
            color: "purple",
            className: "text-purple-500 hover:bg-purple-100",
        },
        {
            variant: "ghost",
            color: "pink",
            className: "text-pink-500 hover:bg-pink-100",
        },
        {
            variant: "ghost",
            color: "black",
            className: "text-black hover:bg-gray-200",
        }
    ],
    defaultVariants: {
        variant: "solid",
        size: "md",
        rounded: false,
        disabled: false,
    },
});

export const Button = forwardRef(({ variant, size, rounded, color, onClick, disabled, className, ...props }, ref) => {
    
    return (
        <button
            ref={ref}
            className={cn(buttonStyles({ variant, size, rounded, color, disabled }), className)}
            onClick={onClick}
            disabled={disabled}
            {...props}
        />
    );  
});

Button.displayName = "Button";

Button.propTypes = {
    variant: PropTypes.oneOf(["solid", "outline", "shadow", "ghost"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    rounded: PropTypes.bool,
    color: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};