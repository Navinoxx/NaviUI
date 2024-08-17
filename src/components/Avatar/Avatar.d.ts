import { FC } from "react";

interface AvatarProps {
    src: string;
    srcSet?: string;
    alt?: string;
    altWithColor?: string;
    crossOrigin?: string;
    referrerPolicy?: string;
    size?: "sm" | "md" | "lg";
    variant?: "rounded" | "square" | "circle";
    children?: React.ReactNode;
    className?: string;
}

export const Avatar: FC<AvatarProps>;