import { focusBorderColor } from "@/variants/variants";
import { cva } from "class-variance-authority";

export const rootContainerStyles = cva([
    "relative",
    "inline-flex",
    "w-52",
    "h-12",
    "m-2",
], {});

export const inputContainerStyles = cva([
    "relative",
    "inline-flex",
    "box-border",
], {
    variants: {
        variant: {
            Outlined: "rounded-md",
            Filled: "rounded-t-md bg-gray-100",
            Standard: "mt-4",
        },
    },
});

export const inputStyles = cva([
    "block",
    "w-full",
    "outline-none",
    "transition-colors",
    "box-content",
    "bg-inherit",
    "peer",
], {
    variants: {
        variant: {
            Outlined: "px-3",
            Filled: "border-b focus:border-b-2 px-3 h-8 mt-4",
            Standard: "border-b focus:border-b-2 h-8",
        },
        color: focusBorderColor,
        error: {
            true: "!border-red-600",
        },
        isFocused: {},
        noLabel: {},
        disabled: {
            true: "opacity-50 pointer-events-none",
        },
    },
    compoundVariants: [
        {
            noLabel: false,
            isFocused: false,
            className: "placeholder-transparent",
        },
    ],
    defaultVariants: {
        variant: "Outlined",
        color: "blue",
        disabled: false,
    },
});

export const labelStyles = cva([
    "absolute",
    "cursor-text",
    "data-[shrink=true]:text-xs",
    "data-[shrink=false]:text-base",
    "data-[shrink=false]:text-gray-300",
    "transition-all",
    "duration-200",
    "pointer-events-none",
], {
    variants: {
        variant: {
            Outlined: "left-3 top-3 data-[shrink=true]:-top-2",
            Filled: "left-3 top-3 data-[shrink=true]:top-1 z-10",
            Standard: "left-0 top-5 data-[shrink=true]:top-1",
        },
        color: {
            blue: "",
            green: "",
            red: "",
            indigo: "",
            purple: "",
            pink: "",
            black: "",
        },
        error: {
            true: "!text-red-600",
        },
        isFocused: {},
        disabled: {
            true: "text-gray-300",
        },
    },
    compoundVariants: [
        {
            color: "blue",
            isFocused: true,
            className: "text-blue-600",
        },
        {
            color: "green",
            isFocused: true,
            className: "text-green-600",
        },
        {
            color: "red",
            isFocused: true,
            className: "text-red-600",
        },
        {
            color: "indigo",
            isFocused: true,
            className: "text-indigo-600",
        },
        {
            color: "purple",
            isFocused: true,
            className: "text-purple-600",
        },
        {
            color: "pink",
            isFocused: true,
            className: "text-pink-600",
        },
        {
            color: "black",
            isFocused: true,
            className: "text-black",
        }
    ],
    defaultVariants: {
        variant: "Outlined",
        color: "blue",
        disabled: false,
    },
});

export const fieldsetStyles = cva([
    "absolute",
    "pointer-events-none",
], {
    variants: {
        variant: {
            Outlined: "border border-gray-300 rounded-md inset-0 -top-1",
            Filled: "",
            Standard: "",
        },
        color: {
            blue: "peer-focus:border-blue-500",
            green: "peer-focus:border-green-500",
            red: "peer-focus:border-red-500",
            indigo: "peer-focus:border-indigo-500",
            purple: "peer-focus:border-purple-500",
            pink: "peer-focus:border-pink-500",
            black: "peer-focus:border-black",
        }
    },
    compoundVariants: [
        {
            variant: "Outlined",
            error: true,
            className: "!border-red-600",
        },
    ],
    defaultVariants: {
        variant: "Outlined",
        color: "blue",
    },
});

export const legendStyles = cva([
    "text-xs",
    "text-gray-500",
], {
    variants: {
        variant: {
            Outlined: "block h-3 w-auto overflow-hidden invisible ml-2 max-w-0",
        },
        color: {
            blue: "peer-focus:text-blue-500",
            green: "peer-focus:text-green-500",
            red: "peer-focus:text-red-500",
            indigo: "peer-focus:text-indigo-500",
            purple: "peer-focus:text-purple-500",
            pink: "peer-focus:text-pink-500",
            black: "peer-focus:text-black",
        }
    },
    compoundVariants: [
        {
            variant: "Outlined",
            isShrink: true,
            className: "transition-all ease-in-out duration-200 max-w-full",
        },
        {
            variant: "Outlined",
            isShrink: true,
            noLabel: false,
            className: "pl-2",
        },
    ],
    defaultVariants: {
        variant: "Outlined",
        color: "blue",
    },
});

export const helperTextStyles = cva([
    "absolute",
    "top-12",
    "mt-1",
    "text-xs",
    "text-gray-500",
], {
    variants: {
        error: {
            true: "text-red-600",
        }
    }
});
