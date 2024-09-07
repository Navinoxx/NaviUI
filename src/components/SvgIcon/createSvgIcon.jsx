import { forwardRef, memo } from "react";
import { SvgIcon } from "./SvgIcon";

export const createSvgIcon = (path, name) => {
    const Component = (props, ref) => {

        return (
            <SvgIcon data-testid={`${name}Icon`} ref={ref} {...props}>
                {path}
            </SvgIcon>
        )
    }

    return memo(forwardRef(Component))
}
