import { useState, useCallback, useRef } from 'react';

export const useSlider = (initialValue, min, max, step, onChange) => {
    const [value, setValue] = useState(initialValue);
    const rangeRef = useRef(null);
    const thumbRef = useRef(null);

    const clamp = useCallback((value) => {
        if (value < min) return min;
        if (value > max) return max;
        return value;
    }, [min, max]);

    const getPercentage = useCallback((value) => {
        return ((value - min) / (max - min)) * 100;
    }, [min, max]);

    const handleChange = (newValue) => {
        const clampedValue = clamp(newValue);
        setValue(clampedValue);
        if (onChange) {
            onChange(clampedValue);
        }
    };

    const handleDrag = (offset, width) => {
        const percentage = offset / width;
        const newValue = Math.round(((percentage * (max - min)) + min) / step) * step;
        handleChange(newValue);
    };

    return {
        value,
        rangeRef,
        thumbRef,
        getPercentage,
        setValue: handleChange,
        handleDrag,
    };
};