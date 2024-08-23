import { createContext } from "react";
import PropTypes from "prop-types";

export const Context = createContext()

export const ContextProvider = ({ value, children }) => {
    
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

ContextProvider.propTypes = {
    value: PropTypes.object,
    children: PropTypes.node,
}