import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { avatarGroupStyles } from "@/styles/avatarGroup";
import { Avatar } from "../Avatar/Avatar";
import { avatarStyles } from "@/styles/avatar";
import PropTypes from "prop-types";

export const AvatarGroup = forwardRef(({ max = 5, children, className, ...props }, ref) => {
    let hasAvatar = true

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type !== Avatar) {
            hasAvatar = false
        }
    })

    if (!hasAvatar) {
        throw new Error("AvatarGroup component requires all children to be Avatars");
    }

    let clampedMax = max < 2 ? 2 : max
    const totalAvatars = React.Children.count(children)
    
    if (totalAvatars === clampedMax) {
        clampedMax += 1
    }

    clampedMax = Math.min(totalAvatars + 1, clampedMax)

    const maxAvatars = Math.min(totalAvatars, clampedMax - 1)
    const remainingAvatars = Math.max(totalAvatars - clampedMax, totalAvatars - maxAvatars, 0)

    return (
        <div
            ref={ref}
            className={cn(avatarGroupStyles(), className)}
            {...props}
        >   
            {remainingAvatars > 0 && <span className={avatarStyles()}>+{remainingAvatars}</span>}
            {React.Children.toArray(children)
                .slice(0, maxAvatars)
                .reverse()
                .map((child, index) => (
                    <React.Fragment key={index}>
                        {child}
                    </React.Fragment>
                ))
            }
        </div>
    )
});

AvatarGroup.displayName = "AvatarGroup"

AvatarGroup.propTypes = {
    max: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node
}