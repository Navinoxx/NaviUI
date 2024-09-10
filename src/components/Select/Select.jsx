import React, { useState, useRef, useId, forwardRef } from "react";
import { ContextProvider } from "@/context/ContextProvider";
import { optionStyles, labelSelectStyles, selectStyles } from "@/styles/select";
import { useClickOutside } from "@/hooks/useClickOutside";
import { SelectOption } from "./SelectOption";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Select = forwardRef(({ id, label, color, multiple, children, className, ...props }, ref) => {
    const ID = useId();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValues, setSelectedValues] = useState(multiple ? [] : { value:'' , text:''});
    const internalRef = useRef();
    const combinedRef = ref || internalRef;

    useClickOutside(internalRef, () => {
        setIsOpen(false);
    });

    const handleSelectChange = (value, text) => {
        if (multiple) {
            setSelectedValues(prevValues =>
                prevValues.some(v => v.value === value)
                    ? prevValues.filter(v => v.value !== value)
                    : [...prevValues, { value, text }]
            );
        } else {
            setSelectedValues({ value, text });
        }
    };

    let hasOption = false;

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type === SelectOption) {
            hasOption = true;
        }
    });

    if (!hasOption) {
        throw new Error("Select component requires at least one SelectOption as children");
    }

    const isShrink = multiple
        ? selectedValues.length > 0 || isOpen
        : selectedValues.text !== '' || isOpen;

    return (
        <ContextProvider value={{ selectedValues, setSelectedValues }}>
            <div ref={combinedRef} className="relative" {...props}>
                <div
                    className="relative w-48 h-10 cursor-pointer"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    <div
                        tabIndex={0}
                        role="combobox"
                        aria-controls={ID}
                        aria-haspopup="listbox"
                        aria-expanded={isOpen}
                        className={cn(selectStyles({ color }), className)}
                    >
                        <span className="truncate">
                            {multiple ? selectedValues.map(v => v.text).join(', ') : selectedValues.text}
                        </span>
                    </div>
                    <label
                        htmlFor={id}
                        className={cn(labelSelectStyles({ color }))}
                        data-shrink={isShrink}
                    >
                        {label}
                    </label>
                    <input
                        tabIndex={-1}
                        id={id}
                        aria-invalid="false"
                        aria-hidden="true"
                        value={multiple ? selectedValues.map(v => v.text).join(', ') : selectedValues.text}
                        onChange={(e) => handleSelectChange(e.target.value, e.target.options[e.target.selectedIndex].text)}
                        className="opacity-0 w-full pointer-events-none"
                    />
                    <svg
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        focusable="false"
                        aria-hidden="true"
                    >
                        <path d="M7 10l5 5 5-5z"/>
                    </svg>
                </div>
                { isOpen &&
                    <ul
                        role="listbox"
                        id={ID}
                        multiple={multiple}
                        aria-expanded={isOpen}
                        aria-multiselectable={multiple}
                        className={cn(optionStyles())}
                    >
                        {children}
                    </ul>
                }
            </div>
        </ContextProvider>
    )
});

Select.displayName = "Select"

Object.defineProperty(Select, "Option", {
    get() {
        return SelectOption;
    },
});

Select.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.oneOf(["blue", "green", "red", "indigo", "purple", "pink", "black"]),
    label: PropTypes.string,
    multiple: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
}