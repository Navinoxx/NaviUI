import React, { useState } from "react";
import { cn } from "@/utils/cn";
import { breadcrumbStyles } from "@/styles/breadcrumbs";
import PropTypes from "prop-types";
import { Button } from "../Button";

export const Breadcrumbs = ({ separator = "/", maxItems, itemsBeforeCollapse = 1, itemsAfterCollapse = 1, children, className, ...Props }) => {
    const [expanded, setExpanded] = useState(false);
    const items = React.Children.toArray(children);

    const handleEllipsisClick = () => {
        setExpanded(!expanded);
    }

    const renderItems = (items) => {
        if (expanded || !maxItems || items.length <= maxItems) {
            return items;
        }

        const totalItems = items.length;

        const startItems = items.slice(0, itemsBeforeCollapse);
        const endItems = items.slice(totalItems - itemsAfterCollapse, totalItems);

        return [
            ...startItems,
            <Button variant="ghost" color="black" key="ellipsis" className="h-1 w-2" onClick={handleEllipsisClick}>
                ...
            </Button>,
            ...endItems,
        ];
    }

    return (
        <nav>
            <ol className={cn(breadcrumbStyles(), className)} {...Props}>
                {renderItems(items).map((child, index) => (
                    <React.Fragment key={index}>
                        <li className="cursor-pointer">{child}</li>
                        {index < renderItems(items).length - 1 && (
                            <li aria-hidden="true">{separator}</li>
                        )}
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    );
}

Breadcrumbs.propTypes = {
    separator: PropTypes.node,
    maxItems: PropTypes.number,
    itemsBeforeCollapse: PropTypes.number,
    itemsAfterCollapse: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string
}