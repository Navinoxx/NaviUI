import React, { useEffect, useId, useState } from "react";
import { Star } from "@/icons";
import { cn } from "@/utils/cn";
import { ratingStyles } from "@/styles/rating";
import PropTypes from "prop-types";

export const Rating = ({ name, max = 5, value, defaultValue, icon, iconColor = "gold", onChange, onChangeActive, disabled, readOnly, className, ...props }) => {
    const id = useId();
    const [currentValue, setCurrentValue] = useState(defaultValue || value);
    const [hover, setHover] = useState(null);

    useEffect(() => {
        if (value !== undefined) {
            setCurrentValue(value);
        }
    }, [value, setCurrentValue]);

    const handleMouseEnter = (ratingIndex) => {
        if (!disabled && !readOnly) {
            setHover(ratingIndex);

            if (onChangeActive) {
                onChangeActive(null, ratingIndex);
            }
        }
    };

    const handleMouseLeave = (event) => {
        setHover(null);

        if (!disabled && !readOnly) {
            if (onChangeActive) {
                onChangeActive(event, -1);
            }
        }
    };

    const handleClick = (event, ratingValue) => {
        if (value === null) return
        
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
                        onMouseLeave={(e) => handleMouseLeave(e)}
                    >
                        <span 
                            className="text-gray-300 transition-colors"
                            style={{ color: ratingValue <= (hover || currentValue) && iconColor }}
                        >
                            {icon || <Star fontSize="medium" />}
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
        <span className="flex">
            {renderStars()}
        </span>
    )
}

Rating.propTypes = {
    name: PropTypes.string,
    max: PropTypes.number,
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    icon: PropTypes.node,
    iconColor: PropTypes.string,
    precision: PropTypes.number,
    onChange: PropTypes.func,
    onChangeActive: PropTypes.func,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    className: PropTypes.string
}