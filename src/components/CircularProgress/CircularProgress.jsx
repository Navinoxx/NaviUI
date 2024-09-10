import { forwardRef } from "react";
import { circularDash, circularRotate, circularDeterminate } from "@/animations/progress";
import { CircularProgressStyles } from "@/styles/progress";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const CircularProgress = forwardRef(({ size = 44, value = 0, thickness = 3.6, variant = "indeterminate", color, className, ...props }, ref) => {
    const radius = (size - thickness) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference.toFixed(3);
    const strokeDashoffset = circumference - (value / 100) * circumference;
    
    return (
        <span
            ref={ref}
            role="progressbar"
            aria-valuenow={value}
            className={cn(CircularProgressStyles({ color }), className)}
            {...props}
        >
            <motion.svg
                width={size}
                height={size}
                viewBox={`${size / 2} ${size / 2} ${size} ${size}`}
                variants={variant === "indeterminate" ? circularRotate : null}
                initial="initial"
                animate="animate"
            >
                <motion.circle
                    cx={size}
                    cy={size}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={thickness}
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    variants={variant === "determinate" ? circularDeterminate(strokeDashoffset) : circularDash}
                    initial="initial"
                    animate="animate"
                />
            </motion.svg>
        </span>
    );
});

CircularProgress.displayName = "CircularProgress";

CircularProgress.propTypes = {
    size: PropTypes.number,
    value: PropTypes.number,
    thickness: PropTypes.number,
    variant: PropTypes.oneOf(["determinate", "indeterminate"]),
    color: PropTypes.oneOf(["blue", "red", "green", "indigo", "purple", "pink", "black"]),
    className: PropTypes.string,
};