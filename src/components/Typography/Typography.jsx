import { typographyStyles } from "@/styles/typography";
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

export const Typography = ({ variant, align, className, ...props }) => {
    if (!Object.prototype.hasOwnProperty.call(variantMapping, variant)) {
        throw new Error(`Invalid variant: ${variant}`);
    }

    const Component = variantMapping[variant];

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