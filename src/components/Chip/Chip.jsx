import { forwardRef } from "react";
import { Cancel } from "@/icons";
import { chipStyles } from "@/styles/chip";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Chip = forwardRef(({ label, variant, color, size, onClick, onDelete, className, ...props}, ref) => {
    const handleDeleteIconClick = (event) => {
        event.stopPropagation();

        if (onDelete) {
            onDelete(event);
        }
    }

    return (
        <div
            ref={ref}
            role={onClick ? "button" : undefined}
            onClick={onClick}
            className={cn(chipStyles({ variant, color, size }), className)} 
            {...props}
        >
            <span className="truncate">{label}</span>
            {onDelete && 
                <Cancel onClick={handleDeleteIconClick} className="w-5 h-5 cursor-pointer"/>
            }
        </div>
    )
});

Chip.displayName = "Chip";

Chip.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.oneOf(["filled", "outlined", "ghost"]),
    color: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
    className: PropTypes.string
}