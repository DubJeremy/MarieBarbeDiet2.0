export const Contenair = {
    init: {},
    start: {},
    exit: {},
};
export const Right = {
    init: {
        x: 500,
    },
    start: {
        x: 0,
        transition: {
            ease: "easeOut",
            duration: 0.7,
        },
    },
    exit: {
        x: 500,
        transition: {
            ease: "linear",
            duration: 0.15,
        },
    },
};
export const Left = {
    init: {
        x: -500,
    },
    start: {
        x: 0,
        transition: {
            ease: "easeOut",
            duration: 0.7,
        },
    },
    exit: {
        x: -500,
        transition: {
            ease: "linear",
            duration: 0.15,
        },
    },  
};
