export const resolveProps = (defaultProps, props) => {
    const output = { ...defaultProps, ...props }; 

    for (const key in defaultProps) {
        if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
            output[key] = props[key] !== undefined ? props[key] : defaultProps[key];
        }
    }

    return output;
};
