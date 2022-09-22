export const Contenair = {
    init: {},
    start: {},
    exit: {},
};
export const Img = {
    init: {
        opacity: 0,
        scale: 0.5,
    },
    start: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "backOut",
        },
    },
    exit: {
        opacity: 0,
        scale: 0.5,
        transition: {
            duration: 0.3,
            ease: "anticipate",
        },
    },
};
export const Desc = {
    init: {
        opacity: 0,
        y: 50,
    },
    start: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: {
            duration: 0.3,
            ease: "anticipate",
        },
    },
};

export const Right = {
    init: {
        x: 1000,
    },
    start: {
        x: 0,
        transition: {
            ease: "easeOut",
            duration: 1,
        },
    },
    exit: {
        x: 1000,
        transition: {
            ease: "linear",
            duration: 0.2,
        },
    },
};
export const Left = {
    init: {
        x: -1000,
    },
    start: {
        x: 0,
        transition: {
            ease: "easeOut",
            duration: 1,
        },
    },
    exit: {
        x: -1000,
        transition: {
            ease: "linear",
            duration: 0.2,
        },
    },
};
