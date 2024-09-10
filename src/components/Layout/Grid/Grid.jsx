import { gridContainerStyles, gridItemStyles } from "@/styles/layout";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Grid = forwardRef(({ columns, rows, children, container, item, spacing, colSpan, rowSpan, className, ...props }, ref) => {
    const gridStyles = container
        ? cn(gridContainerStyles({ spacing, columns, rows }), className)
        : item
        ? cn(gridItemStyles({ colSpan, rowSpan }), className)
        : className;

    return (
        <div
            ref={ref}
            className={gridStyles}
            {...props}
        >
            {children}
        </div>
    );
});

Grid.displayName = "Grid";

Grid.propTypes = {
    columns: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    rows: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    spacing: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    colSpan: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    rowSpan: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    container: PropTypes.bool,
    item: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
}
