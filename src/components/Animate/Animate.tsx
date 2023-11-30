'use client'

import { AnimationOnScroll } from "react-animation-on-scroll";

interface AnimateProps {
    children: React.ReactNode,
    animationName: string,
    animateOnce?: boolean,
    delay: number,
}

export default function Animate({ children, animationName, animateOnce, delay }: AnimateProps) {
    return (
        <AnimationOnScroll
            animateIn={`animate__${animationName}`}
            animateOnce={animateOnce ? animateOnce : true}
            delay={delay}
        >
            {children}
        </AnimationOnScroll>
    );
}