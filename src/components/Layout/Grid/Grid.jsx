import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

const gridContainerStyles = cva(["grid"], {
    variants: {
        spacing: {
            1: "gap-1",
            2: "gap-2",
            3: "gap-3",
            4: "gap-4",
            5: "gap-5",
            6: "gap-6",
            7: "gap-7",
            8: "gap-8",
            9: "gap-9",
            10: "gap-10",
            11: "gap-11",
            12: "gap-12",
        },
        columns: {
            1: "grid-cols-1",
            2: "grid-cols-2",
            3: "grid-cols-3",
            4: "grid-cols-4",
            5: "grid-cols-5",
            6: "grid-cols-6",
            7: "grid-cols-7",
            8: "grid-cols-8",
            9: "grid-cols-9",
            10: "grid-cols-10",
            11: "grid-cols-11",
            12: "grid-cols-12",
        },
        rows: {
            1: "grid-rows-1",
            2: "grid-rows-2",
            3: "grid-rows-3",
            4: "grid-rows-4",
            5: "grid-rows-5",
            6: "grid-rows-6",
            7: "grid-rows-7",
            8: "grid-rows-8",
            9: "grid-rows-9",
            10: "grid-rows-10",
            11: "grid-rows-11",
            12: "grid-rows-12",
        },
    },
});

const gridItemStyles = cva([], {
    variants: {
        span: {
            1: "col-span-1",
            2: "col-span-2",
            3: "col-span-3",
            4: "col-span-4",
            5: "col-span-5",
            6: "col-span-6",
            7: "col-span-7",
            8: "col-span-8",
            9: "col-span-9",
            10: "col-span-10",
            11: "col-span-11",
            12: "col-span-12",
        },
    },
});

export const Grid = ({ columns, rows, children, container, item, spacing, span, className, ...props }) => {

    const gridStyles = container
        ? cn(gridContainerStyles({ spacing, columns, rows }), className)
        : item
        ? cn(gridItemStyles({ span }), className)
        : className;

    return (
        <div
            className={gridStyles}
            {...props}
        >
            {children}
        </div>
    );
}

Grid.propTypes = {
    columns: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    rows: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    spacing: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    span: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    container: PropTypes.bool,
    item: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
}