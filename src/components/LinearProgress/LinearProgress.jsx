import { forwardRef } from "react";
import { linearBar1, linearBar2, linearDeterminate } from "@/animations/progress";
import { LinearProgressStyles, linearBarStyles } from "@/styles/progress";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const LinearProgress = forwardRef(({ value = 0, thickness = 4, color, variant = "indeterminate", className, ...props }, ref) => {

    return (
        <div
            ref={ref}
            role="progressbar"
            className={cn(LinearProgressStyles({ color }), className)} 
            style={{ height: thickness }}
            aria-valuemin={variant === "determinate" ? 0 : undefined}
            aria-valuemax={variant === "determinate" ? 100 : undefined}
            aria-valuenow={variant === "determinate" ? value : undefined}
            {...props}
        >   
            {variant === "determinate" ? (
                <motion.span
                    className={cn(linearBarStyles({ color }))}
                    variants={linearDeterminate(value)}
                    animate="animate"
                />
            ) : 
                <>
                    <motion.span
                        className={cn(linearBarStyles({ color }))}
                        variants={linearBar1}
                        animate="animate"
                    />
                    <motion.span
                        className={cn(linearBarStyles({ color }))}
                        variants={linearBar2}
                        animate="animate"
                    />
                </>
            }
        </div>
    );
});

LinearProgress.displayName = "LinearProgress";

LinearProgress.propTypes = {
    value: PropTypes.number,
    thickness: PropTypes.number,
    color: PropTypes.oneOf(["blue", "red", "green", "indigo", "purple", "pink", "black"]),
    variant: PropTypes.oneOf(["determinate", "indeterminate"]),
    className: PropTypes.string
}