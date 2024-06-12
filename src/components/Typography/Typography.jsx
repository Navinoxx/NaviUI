import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

const variantMapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    caption: "span",
    overline: "span",
};

const typographyStyles = cva([""], {
    variants: {
        variant: {
            h1: "text-8xl",
            h2: "text-6xl",
            h3: "text-5xl",
            h4: "text-4xl",
            h5: "text-2xl",
            h6: "text-xl",
            subtitle1: "text-base",
            subtitle2: "text-sm",
            body1: "text-base",
            body2: "text-sm",
            caption: "text-xs",
            overline: "text-xs uppercase",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        },
    },
    compoundVariants: [
        {
            variant: ["h1", "h2", "h3", "h4", "h5", "h6"],
            className: "leading-tight",
        },
        {
            variant: ["h3", "h4", "h5", "subtitle1", "body1", "body2", "caption", "overline"],
            className: "font-medium",
        },
        {
            variant: ["h6", "subtitle2"],
            className: "font-semibold",
        },
    ],
}); 

export const Typography = ({ variant, align, className, ...props }) => {
    const Component = variantMapping[variant] || "span";

    return (
        <Component
            className={cn(typographyStyles({ variant, align }), className)}
            {...props}
        />
    );
};

Typography.propTypes = {
    variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "overline"]),
    align: PropTypes.oneOf(["left", "center", "right"]),
    className: PropTypes.string,
}