export const circularRotate = {
    initial: { rotate: 0 },
    animate: { rotate: 360, transition: { duration: 1.4, ease: "linear", repeat: Infinity } },
}

export const circularDash = {
    animate: {
        strokeDasharray: [
            "1px 200px",
            "100px 200px",
            "100px 200px"
        ],
        strokeDashoffset: [
            0,        
            -15,        
            -125         
        ],
        transition: {
            duration: 1.4,
            ease: "easeInOut",
            repeat: Infinity,
        }
    }
};

export const circularDeterminate = (strokeDashoffset) => ({ 
    animate: { strokeDashoffset: strokeDashoffset },
})

export const linearBar1 = {
    animate: { 
        left: [
            "-35%", 
            "100%",
            "100%"
        ],
        right: [
            "100%", 
            "-90%",
            "-90%"
        ],
        transition: {
            duration: 2.1,
            ease: [0.65, 0.815, 0.735, 0.395],
            repeat: Infinity,
        }
    },
}

export const linearBar2 = {
    animate: { 
        left: [
            "-200%",
            "107%",
            "107%"
        ],
        right: [
            "100%",
            "-8%",
            "-8%"
        ],
        transition: {
            duration: 2.1,
            ease: [0.165, 0.84, 0.44, 1],
            repeat: Infinity,
            delay: 1.15
        }
    },
}

export const linearDeterminate = (progress) => ({
    animate: { width: `${progress}%` },
})