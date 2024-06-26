import { spinnerStyles } from "@/styles/spinner";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

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