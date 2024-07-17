import { forwardRef, useEffect } from "react";
import { railStyles, sliderStyles, thumbStyles, trackStyles } from "@/styles/slider";
import { useSlider } from "@/hooks/useSlider";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Slider = forwardRef(({ min, max, step, marks, initialValue, orientation, onChange, disabled, color, className, ...props }, ref) => {
    const {
        value: currentValue,
        rangeRef,
        thumbRef,
        getPercentage,
        setValue,
        handleDrag,
    } = useSlider(initialValue, min, max, step, onChange);
    const isVertical = orientation === "vertical";

    const handleMouseDown = () => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (event) => {
        if (rangeRef.current) {
            const { left, width, top, height } = rangeRef.current.getBoundingClientRect();
            const newOffset = isVertical ? event.clientY - top : event.clientX - left;
            const widthOrHeight = isVertical ? height : width;
            handleDrag(newOffset, widthOrHeight);
        }
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleInputChange = (event) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
    };

    useEffect(() => {
        if (thumbRef.current) {
            if (isVertical) {
                thumbRef.current.style.top = `${getPercentage(currentValue)}%`;
            } else {
                thumbRef.current.style.left = `${getPercentage(currentValue)}%`;
            }
        }
    }, [currentValue, getPercentage, isVertical, thumbRef]);

    const renderMarkers = () => {
        const markers = [];
        for (let i = step; i < max; i += step) {
            markers.push(
                <span
                    key={i}
                    className="absolute bg-gray-400 h-0.5 w-0.5 rounded-full"
                    style={isVertical 
                        ? { top: `${getPercentage(i)}%`, transform: 'translateY(-50%)' } 
                        : { left: `${getPercentage(i)}%`, transform: 'translateX(-50%)' }}
                ></span>
            );
        }
        return markers;
    };

    return (
        <div
            ref={rangeRef}
            className={cn(sliderStyles({ color, orientation, disabled }), className)}
            {...props}
        >
            <span className={cn(railStyles({ color, orientation, disabled }))}></span>
            <span 
                className={cn(trackStyles({ color, orientation, disabled }))}
                style={isVertical
                    ? { top: 0, height: `${getPercentage(currentValue)}%` }
                    : { left: 0, width: `${getPercentage(currentValue)}%` }
                }
            ></span>
            {marks && renderMarkers()}
            <span
                ref={thumbRef}
                className={cn(thumbStyles({ color, disabled }))}
                onMouseDown={!disabled ? handleMouseDown : null}
                style={isVertical ? {transform: 'translateY(-50%)'} : { transform: 'translateX(-50%)' }}
            >
                <input
                    ref={ref}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={currentValue}
                    onChange={handleInputChange}
                    disabled={disabled}
                    className="absolute border-none h-full w-full overflow-hidden box-border"
                    style={{ clipPath: "rect(0 0 0 0)" }}
                    aria-label="slider"
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={currentValue}
                    aria-orientation={orientation}
                />
            </span>
        </div>
    );
});

Slider.displayName = "Slider";

Slider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    marks: PropTypes.bool,
    color: PropTypes.oneOf(["blue", "red", "green", "indigo", "purple", "pink", "black"]),
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),
    initialValue: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
}