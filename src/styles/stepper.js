import { cva } from "class-variance-authority";

export const stepperStyles = cva([
    "relative",
    "flex",
    "w-full",
    "justify-between",
    "font-medium"
], {
    variants: {
        orientation: {
            horizontal: "mt-4",
            vertical: "flex-col justify-start",
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
});

export const stepStyles = cva([
    "flex",
], {
    variants: {
        orientation: {
            horizontal: "flex-col",
            vertical: "justify-start",
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
});

export const stepContainerIconStyles = cva([
    "flex",
], {
    variants: {
        orientation: {
            horizontal: "flex-col items-center",
            vertical: "flex-row",
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
});

export const stepIconStyles = cva([
    "flex",
    "w-8",
    "h-8",
    "justify-center",
    "items-center",
    "fill-gray-300",
    "select-none",
    "transition",
    "duration-300",
], {
    variants: {
        isActive: {
            true: "fill-blue-500"
        },
        isCompleted: {
            true: "fill-blue-500"
        }
    }
});

export const connectorStyles = cva([
    "absolute",
    "border-gray-300",
], {
    variants: {
        orientation: {
            horizontal: "border-t w-full top-[16px]",
            vertical: "border-l h-full left-[16px]",
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
})

export const stepContentStyles = cva([
    "w-full",
    "border-l",
    "border-gray-300",
    "pl-8",
    "overflow-hidden",
], {
    variants: {
        last: {
            true: "border-0"
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
})

export const stepLabelStyles = cva([
    "flex",
    "w-full",
    "items-center",
], {
    variants: {
        orientation: {
            horizontal: "",
            vertical: "pl-8 min-h-8",
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
})

export const stepContainerStyles = cva([
    "relative",
    "flex",
    "flex-col",
    "items-center",
], {
    variants: {
        orientation: {
            horizontal: "",
            vertical: "-left-4",
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
})