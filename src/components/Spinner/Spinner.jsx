import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

const spinnerStyles = cva(["animate-spin", "rounded-full"], {
    variants: {
        variant: {
            regular: "!border-t-transparent",
            double: "border-x-transparent",
            edge: "border-x",
            dashed: "border-dashed",
        },
        color: {
            blue: "border-blue-500",
            red: "border-red-500",
            green: "border-green-500",
            indigo: "border-indigo-500",
            purple: "border-purple-500",
            pink: "border-pink-500",
            black: "border-black",
        },
        size: {
            sm: "w-12 h-12 border-4",
            md: "w-20 h-20 border-[6px]",
            lg: "w-28 h-28 border-8",
        },
    },
    defaultVariants: {
        variant: "regular",
        color: "blue",
        size: "md",
    },
})

export const Spinner = ({ variant, color, size, className, ...props }) => {

    return (
        <div 
            className={cn(spinnerStyles({ variant, color, size }), className)} 
            {...props}>
        </div>
    )
}

Spinner.propTypes = {
    variant: PropTypes.oneOf(["regular", "double", "edge", "dashed"]),
    color: PropTypes.oneOf(["blue", "red", "green", "indigo", "purple", "pink", "black"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    className: PropTypes.string,
}