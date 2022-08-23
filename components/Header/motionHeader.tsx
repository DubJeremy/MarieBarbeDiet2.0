

export const Flip = {
    // init: {
    //     rotateY: 0
    // },
    start: (revealPresentation: boolean) => {
        return {
            rotateY: revealPresentation ? 180 : 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut'
            }
        };
    },
    // exit : {
    //     rotateY: 180,
    //     transition: {
    //         duration: 0.8,
    //         ease: 'easeOut'
    //     }
        
    // }
}