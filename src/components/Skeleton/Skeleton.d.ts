import { FC } from "react";

interface SkeletonProps {
    animation?: string;
    height?: string | number;
    width?: string | number;
    variant?: string;
    className?: string;
}

export const Skeleton: FC<SkeletonProps>;