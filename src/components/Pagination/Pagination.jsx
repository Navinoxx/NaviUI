import { forwardRef } from "react";
import { usePagination } from "@/hooks/usePagination";
import { paginationButtonStyles, paginationEllipsisStyles } from "@/styles/pagination";
import { FirstPage, LastPage, NavigateBefore, NavigateNext } from "@/icons";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Pagination = forwardRef(({ boundaryCount = 1, count = 1, color, variant, shape, size, defaultPage = 1, page, siblingCount = 1, hideNextButton = false, hidePrevButton = false, showFirstButton = false, showLastButton = false, onChange, disabled, className, ...props }, ref) => {
    const items = usePagination({ boundaryCount, count, defaultPage, page, siblingCount, hideNextButton, hidePrevButton, showFirstButton, showLastButton, onChange, disabled });

    const defaultGetAriaLabel = (type, page, selected) => {
        if (type === 'page') {
            return `${selected ? '' : 'Go to '}page ${page}`;
        }
        return `Go to ${type} page`;
    }

    return (
        <nav
            ref={ref}
            aria-label="Pagination navigation"
            {...props}
        >
            <ul className="flex flex-wrap items-center list-none">
                {items.map((item, index) => (
                    <li key={index}>
                        {item.type === "start-ellipsis" || item.type === "end-ellipsis" ? 
                            <span className={cn(paginationEllipsisStyles({ disabled, size }))}>
                                ... 
                            </span>
                            :
                            <button
                                tabIndex="0"
                                type="button"
                                aria-label={defaultGetAriaLabel(item.type, item.page, item.selected)}
                                aria-current={item["aria-current"]}
                                className={cn(paginationButtonStyles({ color, variant, shape, size }), className)}
                                onClick={item.onClick}
                                disabled={item.disabled}
                            >
                                {item.type === "page" && item.page}
                                {item.type === "previous" && <NavigateBefore />}
                                {item.type === "next" && <NavigateNext />}
                                {item.type === "first" && <FirstPage />}
                                {item.type === "last" && <LastPage/>}
                            </button>
                        }
                    </li>
                ))}
            </ul>
        </nav>
    )
});

Pagination.displayName = "Pagination"

Pagination.propTypes = {
    boundaryCount: PropTypes.number,
    count: PropTypes.number,
    color: PropTypes.oneOf(["blue", "red", "green", "indigo", "purple", "pink", "black"]),
    variant: PropTypes.oneOf(["default", "outlined"]),
    shape: PropTypes.oneOf(["default", "rounded", "square"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    defaultPage: PropTypes.number,
    page: PropTypes.number,
    siblingCount: PropTypes.number,
    hideNextButton: PropTypes.bool,
    hidePrevButton: PropTypes.bool,
    showFirstButton: PropTypes.bool,
    showLastButton: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
}