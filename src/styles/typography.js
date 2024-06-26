import { cva } from "class-variance-authority";

export const typographyStyles = cva([""], {
    variants: {
        variant: {
            h1: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
            h2: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
            h3: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
            h4: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
            h5: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
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