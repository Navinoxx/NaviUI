import { ensureArray } from "@/utils/ensureArray ";
import { useState, useCallback, useRef } from "react";

export const useSlider = (initialValue, value, min, max, step, onChange) => {
    const [currentValue, setCurrentValue] = useState(() => ensureArray(initialValue || value));
    const rangeRef = useRef(null);
    const thumbRefs = useRef([useRef(null), useRef(null)]);

    const clamp = useCallback((value) => {
        if (value < min) return min;
        if (value > max) return max;
        return value;
    }, [min, max]);

    const getPercentage = useCallback((value) => {
        const valuesArray = ensureArray(value);
        if (valuesArray.length === 2) {
            const distance = Math.abs(valuesArray[1] - valuesArray[0]);
            return ((distance) / (max - min)) * 100;
        }
        return ((valuesArray[0] - min) / (max - min)) * 100;
    }, [min, max]);

    const range = () => {
        if (currentValue.length === 2) {
            const minValue = Math.min(...currentValue)
            return getPercentage(minValue)
        } else {
            return 0
        }
    };

    const handleChange = (newValues) => {
        const clampedValues = newValues.map(val => clamp(val));
        setCurrentValue(clampedValues);
        if (onChange) {
            onChange(clampedValues.length === 1 ? clampedValues[0] : clampedValues);
        }
    };

    const handleDrag = (offset, width, index) => {
        const percentage = offset / width;
        const newValue = Math.round(((percentage * (max - min)) + min) / step) * step;
        const newValues = [...currentValue];
        newValues[index] = newValue;
        handleChange(newValues);
    };

    return {
        currentValue,
        rangeRef,
        thumbRefs,
        getPercentage,
        range,
        setValue: handleChange,
        handleDrag,
    };
};
