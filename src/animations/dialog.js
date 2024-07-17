export const dialogContainerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.3 } },
}

export const dialogAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { ease: "easeInOut", duration: 0.3 },
}