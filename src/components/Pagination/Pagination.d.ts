import { FC } from "react";

interface PaginationProps {
    boundaryCount?: number;
    count?: number;
    color?: "blue" | "red" | "green" | "indigo" | "purple" | "pink" | "black";
    variant?: "default" | "outlined";
    shape?: "default" | "rounded" | "square";
    size?: "sm" | "md" | "lg";
    defaultPage?: number;
    page?: number;
    siblingCount?: number;
    hideNextButton?: boolean;
    hidePrevButton?: boolean;
    showFirstButton?: boolean;
    showLastButton?: boolean;
    onChange?: (page: number) => void;
    disabled?: boolean;
    className?: string;
}

export const Pagination: FC<PaginationProps>;