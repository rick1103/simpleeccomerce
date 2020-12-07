import {spring} from 'react-router-transition';

export const mapBouceStyles = (styles) => {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`
    }
}

function bounce(val){
    return spring (val, {
        stiffness: 330,
        damping: 22,
    });
}

export const bounceTransition = {
    //start in a transparent, upscaled state
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
    //leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
    },
    //and rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
};

export const mapGlideStyles = (styles) => {
    return {
        opacity: styles.opacity,
        transform: `translateX(${styles.offset}px)`,
    };
}

function glide(val) {
    return spring(val, {
        stiffness: 174,
        damping: 19,
    });
}

export const pageTransitions = {
    atEnter: {
        offset: 200,
        opacity: 0,
    },
    atLeave: {
        offset: glide(-100),
        opacity: glide(0),
    },
    atActive: {
        offset: glide(0),
        opacity: glide(1),
    },
};