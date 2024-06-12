import { FC, ReactNode } from "react";

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridContainerProps extends GridProps {
    container: true;
    columns?: GridSize;
    rows?: GridSize;
    spacing?: GridSize;
    className?: string;
    children?: ReactNode;
}

interface GridItemProps extends GridProps {
    item: true;
    span?: GridSize;
    className?: string;
    children?: ReactNode;
}

type GridProps = GridContainerProps | GridItemProps;

export const Grid: FC<GridProps>;
