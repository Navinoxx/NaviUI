export const setRef = (ref, value) => {
    if (typeof ref === 'function') {
        ref(value)
    } else if (ref) {
        ref.current = value
    }
}