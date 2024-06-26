import { FC } from "react";

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface CommonGridProps {
    container: boolean;
    item: boolean;
    className?: string;
}

interface GridContainerProps extends CommonGridProps {
    container: true;
    item?: false;
    columns?: GridSize;
    rows?: GridSize;
    spacing?: GridSize;
}

interface GridItemProps extends CommonGridProps {
    item: true;
    container?: false;
    colSpan?: GridSize;
    rowSpan?: GridSize;
}

type GridProps = GridContainerProps | GridItemProps;

export const Grid: FC<GridProps>;
