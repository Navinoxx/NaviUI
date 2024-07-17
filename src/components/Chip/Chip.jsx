import { chipStyles } from "@/styles/chip";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Chip = ({ label, variant, color, size, onClick, onDelete, className, ...props}) => {

    return (
        <div
            role={onClick ? "button" : undefined}
            onClick={onClick}
            className={cn(chipStyles({ variant, color, size }), className)} 
            {...props}
        >
            <span className="truncate">{label}</span>
            {onDelete && 
                <svg 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 cursor-pointer" 
                    onClick={onDelete}
                >
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                </svg>
            }
        </div>
    )
}

Chip.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.oneOf(["filled", "outlined", "ghost"]),
    color: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
    className: PropTypes.string
}