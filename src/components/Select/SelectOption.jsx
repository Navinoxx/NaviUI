import { useComponentContext } from "@/context/ContextProvider";
import PropTypes from "prop-types";

export const SelectOption = ({ value, children, ...props }) => {
    const { selectedValues, setSelectedValues } = useComponentContext();

    const handleOptionClick = () => {
        if (Array.isArray(selectedValues)) {
            setSelectedValues(prevValues =>
                prevValues.some(v => v.value === value)
                    ? prevValues.filter(v => v.value !== value)
                    : [...prevValues, { value, text: children }]
            );
        } else {
            setSelectedValues({ value, text: children });
        }
    };

    const isSelected = Array.isArray(selectedValues)
        ? selectedValues.some(v => v.value === value)
        : selectedValues.value === value;

    return (
        <li
            role="option"
            value={value}
            aria-selected={isSelected}
            className="hover:bg-slate-200 px-2 py-1 aria-selected:bg-slate-200"
            onClick={handleOptionClick}
            {...props}
        >
            {children}
        </li>
    )
}

SelectOption.propTypes = {
    value: PropTypes.string,
    children: PropTypes.node,
}