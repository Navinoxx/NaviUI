import { FC } from "react";

interface BreadcrumbsProps {
    separator?: string;
    maxItems?: number;
    itemsBeforeCollapse?: number;
    itemsAfterCollapse?: number;
    children: React.ReactNode;
    className?: string;
}

export const Breadcrumbs: FC<BreadcrumbsProps>;