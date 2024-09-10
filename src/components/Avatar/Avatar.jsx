import { forwardRef, useEffect, useRef } from "react";
import { avatarStyles } from "@/styles/avatar";
import { useLoaded } from "@/hooks/useLoaded";
import { AvatarFallback } from "./AvatarFallback";
import { stringToColor } from "@/utils/stringToColor";
import { cn } from "@/utils/cn";
import { useForkRef } from "@/hooks/useForkRef";
import PropTypes from "prop-types";

export const Avatar = forwardRef(({ src, srcSet, alt, altWithColor, crossOrigin, referrerPolicy, size, variant, children, className, ...props}, ref) => {
    const loaded = useLoaded({ crossOrigin, referrerPolicy, src, srcSet })
    const hasImg = src || srcSet
    const hasImgNotFailing = hasImg && loaded !== 'error'

    const avatarRef = useRef(null);
    const handleRef = useForkRef(avatarRef, ref);

    useEffect(() => {
        if (altWithColor) {
            const backgroundColor = stringToColor(altWithColor);
            avatarRef.current.style.backgroundColor = backgroundColor;
        }
    }, [altWithColor, avatarRef]);
    
    let CHILDREN = null

    if (hasImgNotFailing) {
        CHILDREN = <img
            src={src}
            srcSet={srcSet}
            alt={alt}
            className="w-full h-full object-cover text-center text-transparent"
            {...props}
        />
    } else if (hasImg && alt) {
        CHILDREN = alt[0]
    } else if (altWithColor) {
        CHILDREN = `${altWithColor.split(' ')[0][0]}${altWithColor.split(' ')[1][0]}`
    } else if (children) {
        CHILDREN = children
    } else {
        CHILDREN = <AvatarFallback />
    }

    return (
        <div ref={handleRef} className={cn(avatarStyles({ size, variant }), className)} {...props}>
            {CHILDREN}
        </div>
    )
});

Avatar.displayName = "Avatar"

Avatar.propTypes = {
    src: PropTypes.string,
    srcSet: PropTypes.string,
    alt: PropTypes.string,
    altWithColor: PropTypes.string,
    crossOrigin: PropTypes.string,
    referrerPolicy: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    variant: PropTypes.oneOf(["circle", "rounded", "square"]),
    children: PropTypes.node,
    className: PropTypes.string
}