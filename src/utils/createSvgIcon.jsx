import { forwardRef } from "react";

export const createSvgIcon = (path, name) => {
    const SvgIconComponent = forwardRef((props, ref) => {

        return (
            <svg
                ref={ref}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                {...props}
            >
                {path}
            </svg>
        )
    })

    SvgIconComponent.displayName = name

    return SvgIconComponent
}
