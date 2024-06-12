import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

const loaderStyles = cva(["rounded-full"], {
    variants: {
        animation: {
            bounce: "animate-bounce",
            pulse: "animate-pulse",
            ping: "animate-ping",
            fade: "animate-fade",
            scale: "animate-scale",
            flip: "animate-flip",
        },
        color: {
            blue: "bg-blue-700",
            red: "bg-red-700",
            green: "bg-green-700",
            indigo: "bg-indigo-700",
            purple: "bg-purple-700",
            pink: "bg-pink-700",
            black: "bg-black",
        },
        size: {
            sm: "w-4 h-4",
            md: "w-6 h-6",
            lg: "w-8 h-8",
        },
    },
    defaultVariants: {
        animation: "bounce",
        color: "blue",
        size: "md",
    },
})

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