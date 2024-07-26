import { useEffect, useState } from "react";

export const usePagination = ({ boundaryCount = 1, count = 1, defaultPage = 1, page, siblingCount = 1, hideNextButton = false, hidePrevButton = false, showFirstButton = false, showLastButton = false, onChange, disabled }) => {
    const [currentPage, setCurrentPage] = useState(page || defaultPage);

    useEffect(() => {
        if (page !== undefined) {
            setCurrentPage(page);
        }
    }, [page]);

    const handlePageChange = (event, newPage) => {
        if (!page) {
            setCurrentPage(newPage);
        }
        if (onChange) {
            onChange(event, newPage);
        }
    };

    const range = (start, end) => {
        const length = end - start + 1
        return Array.from({ length }, (_, i) => start + i)
    };

    const startPages = range(1, Math.min(boundaryCount, count));
    const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

    const siblingsStart = Math.max(
        Math.min(
            currentPage - siblingCount,
            count - boundaryCount - siblingCount * 2 - 1,
        ),
        boundaryCount + 2,
    );
    
    const siblingsEnd = Math.min(
        Math.max(
            currentPage + siblingCount,
            boundaryCount + siblingCount * 2 + 2,
        ),
        count - boundaryCount - 1,
    );

    const itemList = [
        ...(showFirstButton ? ['first'] : []),
        ...(hidePrevButton ? [] : ['previous']),
        ...startPages,
    
        ...(siblingsStart > boundaryCount + 2
            ? ['start-ellipsis']
            : boundaryCount + 1 < count - boundaryCount
            ? [boundaryCount + 1]
            : []),
    
        ...range(siblingsStart, siblingsEnd),
    
        ...(siblingsEnd < count - boundaryCount - 1
            ? ['end-ellipsis']
            : count - boundaryCount > boundaryCount
            ? [count - boundaryCount]
            : []),
    
        ...endPages,
        ...(hideNextButton ? [] : ['next']),
        ...(showLastButton ? ['last'] : []),
    ];

    const buttonPage = (type) => {
        switch (type) {
            case 'first':
                return 1;
            case 'previous':
                return currentPage - 1;
            case 'next':
                return currentPage + 1;
            case 'last':
                return count;
            default:
                return null;
        }
    };
    
    const items = itemList.map((item) => {
        return typeof item === 'number'
            ? {
            onClick: (event) => {
                handlePageChange(event, item);
            },
                type: 'page',
                page: item,
                selected: item === currentPage,
                disabled,
                'aria-current': item === currentPage ? 'true' : undefined,
            }
        : {
            onClick: (event) => {
                handlePageChange(event, buttonPage(item));
            },
                type: item,
                page: buttonPage(item),
                selected: false,
                disabled:
                disabled ||
                (item.indexOf('ellipsis') === -1 &&
                (item === 'next' || item === 'last' ? currentPage >= count : currentPage <= 1)),
            };
    });

    return items;
}