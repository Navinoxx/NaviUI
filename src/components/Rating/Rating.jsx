import React, { useEffect, useId, useState } from "react";
import { Star } from "@/icons";
import { cn } from "@/utils/cn";
import { ratingStyles } from "@/styles/rating";
import PropTypes from "prop-types";

export const Rating = ({ name, max = 5, value, defaultValue, onChange, disabled, readOnly, className, ...props }) => {
    const id = useId();
    const [currentValue, setCurrentValue] = useState(defaultValue || value);
    const [hover, setHover] = useState(null);
    console.log(currentValue);

    useEffect(() => {
        if (value !== undefined) {
            setCurrentValue(value);
        }
    }, [value, setCurrentValue]);

    const handleMouseEnter = (ratingIndex) => {
        if (!disabled && !readOnly) {
            setHover(ratingIndex);
        }
    };

    const handleMouseLeave = () => {
        setHover(null);
    };

    const handleClick = (event, ratingValue) => {
        if (!disabled && !readOnly) {
            setCurrentValue(ratingValue);
            if (onChange) {
                onChange(event, ratingValue);
            }
        }
    };

    const renderStars = () => {
        return Array.from({ length: max }, (_, i) => {
            const ratingValue = i + 1;
            return (
                <React.Fragment key={i}>
                    <label 
                        htmlFor={`${id}${i}`} 
                        className={cn(ratingStyles({ disabled, readOnly }), className)}
                        onMouseEnter={() => handleMouseEnter(ratingValue)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span style={{ color: ratingValue <= (hover || currentValue) ? "gold" : "transparent" }} >
                            <Star/>
                        </span>
                    </label>
                    <input 
                        name={name}
                        id={`${id}${i}`} 
                        type="radio"
                        value={ratingValue}
                        className="sr-only peer"
                        onClick={(e) => handleClick(e, ratingValue)}
                        disabled={disabled}
                        readOnly={readOnly}
                        {...props}
                    />
                </React.Fragment>
            )
        })
    }

    return (
        <span className="flex gap-2">
            {renderStars()}
        </span>
    )
}

Rating.propTypes = {
    name: PropTypes.string,
    max: PropTypes.number,
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    className: PropTypes.string
}