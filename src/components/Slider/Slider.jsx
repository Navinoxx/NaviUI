import { forwardRef, useEffect } from "react";
import { markStyles, railStyles, sliderStyles, thumbStyles, trackStyles } from "@/styles/slider";
import { useSlider } from "@/hooks/useSlider";
import { Tooltip } from "../Tooltip";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";

export const Slider = forwardRef(({ min = 0, max, step = 1, marks, initialValue = 0, value, orientation, onChange, disabled, color, valueLabelDisplay, className, railClassName, trackClassName, thumbClassName, marksClassName, ...props }, ref) => {
    const {
        currentValue,
        rangeRef,
        thumbRefs,
        getPercentage,
        range,
        setValue,
        handleDrag,
    } = useSlider(initialValue, value, min, max, step, onChange);

    const isVertical = orientation === "vertical";

    const handleMouseDown = (index) => () => {
        const handleMouseMove = (event) => {
            if (rangeRef.current) {
                const { left, width, top, height } = rangeRef.current.getBoundingClientRect();
                const newOffset = isVertical ? event.clientY - top : event.clientX - left;
                const widthOrHeight = isVertical ? height : width;
                handleDrag(newOffset, widthOrHeight, index);
            }
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleInputChange = (event, index) => {
        const newValue = Number(event.target.value);
        const newValues = [...currentValue];
        newValues[index] = newValue;
        setValue(newValues);
    };

    useEffect(() => {
        thumbRefs.current.forEach((thumbRef, index) => {
            if (thumbRef.current) {
                if (isVertical) {
                    thumbRef.current.style.top = `${getPercentage(currentValue[index])}%`;
                    thumbRef.current.style.transform = 'translateY(-50%)';
                } else {
                    thumbRef.current.style.left = `${getPercentage(currentValue[index])}%`;
                    thumbRef.current.style.transform = 'translateX(-50%)';
                }
            }
        });
    }, [currentValue, getPercentage, isVertical, thumbRefs]);

    const renderMarkers = () => {
        let markers = [];

        if (Array.isArray(marks)) {
            markers = marks;
        } else {
            for (let i = step; i < max; i += step)
                markers = [...markers, { value: i, label: null }];
        }

        return markers.map((mark, index) => (
            <span
                key={index}
                className={cn(markStyles(), marksClassName)}
                style={isVertical
                    ? { top: `${getPercentage(mark.value)}%`, transform: 'translateY(-50%)' }
                    : { left: `${getPercentage(mark.value)}%`, transform: 'translateX(-50%)' }}
            >
                {mark.label ? <span className="absolute left-1/2 -translate-x-1/2 mt-3">{mark.label}</span> : null}
            </span>
        ));
    };

    return (
        <div
            ref={rangeRef}
            className={cn(sliderStyles({ color, orientation, disabled }), className)}
            {...props}
        >
            <span className={cn(railStyles({ color, orientation, disabled }), railClassName)}></span>
            <span 
                className={cn(trackStyles({ color, orientation, disabled }), trackClassName)}
                style={isVertical
                    ? { top: `${range()}%`, height: `${getPercentage(currentValue)}%` }
                    : { left: `${range()}%`, width: `${getPercentage(currentValue)}%` }
                }
            ></span>
            {marks && renderMarkers()}
            {currentValue.map((value, index) => (
                <span
                    key={index}
                    ref={thumbRefs.current[index]}
                    className={cn(thumbStyles({ color, disabled }), thumbClassName)}
                    onMouseDown={!disabled ? handleMouseDown(index) : null}
                >   
                    <input
                        ref={index === 0 ? ref : null}
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onChange={(event) => handleInputChange(event, index)}
                        disabled={disabled}
                        className="absolute border-none h-full w-full overflow-hidden box-border"
                        style={{ clipPath: "rect(0 0 0 0)" }}
                        aria-label="slider"
                        aria-valuemin={min}
                        aria-valuemax={max}
                        aria-valuenow={value}
                        aria-orientation={orientation}
                    />
                    {valueLabelDisplay && !disabled && 
                        <Tooltip content={value} placement={isVertical ? "left" : "top"} arrow>
                            <span className="text-transparent w-full select-none">{value}</span>
                        </Tooltip>
                    }
                </span>
            ))}
        </div>
    );
});

Slider.displayName = "Slider";

Slider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    marks: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
    color: PropTypes.oneOf(["blue", "red", "green", "indigo", "purple", "pink", "black"]),
    orientation: PropTypes.oneOf(["horizontal", "vertical"]),
    initialValue: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    valueLabelDisplay: PropTypes.bool,
    className: PropTypes.string,
    railClassName: PropTypes.string,
    trackClassName: PropTypes.string,
    thumbClassName: PropTypes.string,
    marksClassName: PropTypes.string,
}