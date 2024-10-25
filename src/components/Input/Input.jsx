import { forwardRef, useEffect, useState } from "react";
import { helperTextStyles, fieldsetStyles, inputContainerStyles, inputStyles, labelStyles, legendStyles, rootContainerStyles } from "@/styles/input";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Input = forwardRef(({ id, variant, ariaDescribedBy, label, type, color, disabled, validate, helperText, placeholder, onBlur, onFocus, onChange, value, defaultValue, readOnly=false, required=false, startAdornment, endAdornment, className="", inputRef, inputProps, ...props}, ref) => {
    const [internalValue, setInternalValue] = useState(value || defaultValue || '');
    const [isFocused, setIsFocused] = useState(false);
    const [error, setError] = useState(null);
    
    const inputClassName = typeof className === "string" ? className : className.root;

    useEffect(() => {
        handleOnChange({ target: { value: internalValue } });
    });

    const handleFocus = (e) => {
        setIsFocused(true);
        if (onFocus) onFocus(e);
    };

    const handleBlur = (e) => {
        setIsFocused(false);
        if (validate) setError(validate(e.target.value));
        if (onBlur) onBlur(e);
    };

    const handleOnChange = (e) => {
        setInternalValue(e.target.value);
        if (validate) setError(validate(e.target.value));
        if (onChange) onChange(e);
    };

    const isShrink = internalValue !== '' || isFocused || startAdornment !== undefined;
    const noLabel = !label;
    
    return (
        <div
            ref={ref}
            className={cn(rootContainerStyles(), inputClassName)}
            {...props}
        >
            <label
                htmlFor={id}
                id={`${id}-label`}
                className={cn(labelStyles({ variant, color, disabled, isFocused, error }), className.label)}
                data-shrink={isShrink}
            >
                {label}
            </label>
            <div className={cn(inputContainerStyles({ variant }), className.inputContainer)}>
                {startAdornment && <div className="flex pl-3 items-center">{startAdornment}</div>}
                <input
                    ref={inputRef}
                    id={id}
                    name={label}
                    type={type}
                    className={cn(inputStyles({ variant, color, disabled, isFocused, noLabel, error }), className.input)}
                    autoComplete="off"
                    disabled={disabled}
                    aria-label={label}
                    aria-invalid={!!error}
                    aria-disabled={disabled}
                    aria-describedby={ariaDescribedBy}
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleOnChange}
                    value={internalValue}
                    defaultValue={defaultValue}
                    readOnly={readOnly}
                    required={required}
                    {...inputProps }
                />
                {endAdornment && <div className="flex pr-3 items-center">{endAdornment}</div>}
                { variant === "Outlined" &&
                    <fieldset 
                        aria-hidden="true"
                        className={cn(fieldsetStyles({ variant, color, error }), className.fieldset)}
                    >
                        <legend className={cn(legendStyles({ variant, isShrink, noLabel }), className.legend)}>
                            <span className="inline-block opacity-0 visible">{label}</span>
                        </legend>
                    </fieldset>
                }
            </div>
            {helperText && 
                <span role="alert" aria-live="assertive" className={cn(helperTextStyles({ error }), className.helperText)}>
                    {helperText}
                </span>
            }
        </div>
    );
});

Input.displayName = "Input";

Input.propTypes = {
    id: PropTypes.string,
    variant: PropTypes.oneOf(["Outlined", "Filled", "Standard"]),
    ariaDescribedBy: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    validate: PropTypes.func,
    helperText: PropTypes.string,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    startAdornment: PropTypes.node,
    endAdornment: PropTypes.node,
    className: PropTypes.oneOfType([
        PropTypes.string, 
        PropTypes.shape({
            root: PropTypes.string, 
            label: PropTypes.string, 
            inputContainer: PropTypes.string, 
            input: PropTypes.string, 
            fieldset: PropTypes.string, 
            legend: PropTypes.string
        })
    ]),
    inputRef: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]),
    inputProps: PropTypes.object,
};