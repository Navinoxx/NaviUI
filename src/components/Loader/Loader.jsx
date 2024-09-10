import { loaderStyles } from "@/styles/loader";
import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import PropTypes from "prop-types";

export const Loader = forwardRef(({ animation, color, size, className, ...props }, ref) => {
    const delay = ["[animation-delay:-.1s]", "[animation-delay:-.3s]", "[animation-delay:-.5s]"]

    return (
        <div 
            ref={ref} 
            className="flex flex-row gap-2" 
            {...props}
        >
            {delay.map((d, i) => <div key={i} className={cn(loaderStyles({ animation, color, size }), d, className)} />)}
        </div>
    )
});

Loader.displayName = "Loader"

Loader.propTypes = {
    animation: PropTypes.oneOf(["bounce", "pulse", "ping", "fade", "scale", "flip"]),
    color: PropTypes.oneOf(["blue", "red", "green", "indigo", "purple", "pink", "black"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    className: PropTypes.string,
}