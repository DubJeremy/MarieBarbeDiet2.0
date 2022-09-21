export const Container = {
    init: {},
    start: {},
    end: {}
}
export const AnswerAnim = {
    init: {
        height: 10,
        width: "45%"
    },
    start: {
        height: "60%",
        width: "75%",
        transition: {
            delay: 0.5,
            duration: 0.8,
        },
    },
    end: {
        height: 10,
        width: "45%",
        overflow: "hidden",
        transition: {
            delay: 0.15,
            duration: 0.5,
        },
    },
};
export const TxtAnim = {
    init: {
        y: 100,
        opacity: 0,
    },
    start: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 1.2,
            ease: "easeOut",
            duration: 1,
        },
    },
    end: {
        y: 100,
        opacity: 0,
        overflow: "hidden",
        transition: {
            duration: 0.3,
        },
    },
};
