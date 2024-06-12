export const generateClasses = (variant, values, classGenerator) => {
    if (typeof values === 'object') {
        return Object.keys(values).map((breakpoint) => {
            return `${breakpoint}:${classGenerator({ [variant]: values[breakpoint] })}`;
        }).join(' ');
    } else {
        return classGenerator({ [variant]: values });
    }
};
