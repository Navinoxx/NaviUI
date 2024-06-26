import { loaderStyles } from "@/styles/loader";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Loader = ({ animation, color, size, className, ...props }) => {
    const delay = ["[animation-delay:-.1s]", "[animation-delay:-.3s]", "[animation-delay:-.5s]"]

    return (
        <div className="flex flex-row gap-2">
            {delay.map((d, i) => <div key={i} className={cn(loaderStyles({ animation, color, size }), d, className)} {...props} />)}
        </div>
    )
}

Loader.propTypes = {
    animation: PropTypes.oneOf(["bounce", "pulse", "ping", "fade", "scale", "flip"]),
    color: PropTypes.oneOf(["blue", "red", "green", "indigo", "purple", "pink", "black"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    className: PropTypes.string,
}