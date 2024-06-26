import { alertStyles, titleStyles } from "@/styles/alert";
import { cn } from "@/utils/cn";
import { Success, Error, Warning, Info } from "@/icons";
import PropTypes from "prop-types";

export const Alert = ({ variant, message, withIcon }) => {
    const title = `${variant.charAt(0).toUpperCase()}${variant.slice(1)}`;
    const Icon = { success: Success, error: Error, warning: Warning, info: Info }[variant];

    return (
        <div role="alert" className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md">
            <div className={cn(alertStyles({ variant, withIcon }))}>
                {withIcon && <Icon />}
            </div>
            <div className="px-4 py-2 mx-3">
                <span className={cn(titleStyles({ variant }))}>{title}</span>
                <p className="text-sm text-black">{message}</p>
            </div>
        </div>
    );
}

Alert.propTypes = {
    variant: PropTypes.oneOf(["success", "error", "warning", "info"]),
    message: PropTypes.string,
    withIcon: PropTypes.bool
}