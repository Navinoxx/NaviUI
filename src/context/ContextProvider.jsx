import { createContext, useContext } from "react"
import PropTypes from "prop-types"

export const Context = createContext()

export const useComponentContext = () => {
    const context = useContext(Context)

    if (!context) {
        throw new Error("useContext must be used within an Provider")
    }

    return context
}

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