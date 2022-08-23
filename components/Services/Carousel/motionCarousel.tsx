export const CarouselAnim = {
    enter: {
        x: 0,
    },
    center: {
        x: 0,
    },
    exit: (direction: number) => {
        return {
            x:
                direction === 1
                    ? "-55vw"
                    : direction === 2
                    ? "-110vw"
                    : direction === 3
                    ? "-165vw"
                    : direction === 4
                    ? "-220vw"
                    : direction === -1
                    ? "55vw"
                    : direction === -2
                    ? "110vw"
                    : direction === -3
                    ? "165vw"
                    : "220vw",
        };
    },
};


export const TitleAnim = {
    enter: (direction: number) => {
        return {
            scale: direction > 2 || direction < -2 ? 0 : 1,
        };
    },
    center: {
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "backOut",
        },
    },
};
export const TitleNextPrev = {
    enter: (direction: number) => {
        return {
            scale: direction >= 2 || direction <= -2 ? 0.5 : 1,
            opacity: direction >= 2 || direction <= -2 ? 0.5 : 1,
        };
    },
    center: {
        scale: 1,
        opacity:1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};
