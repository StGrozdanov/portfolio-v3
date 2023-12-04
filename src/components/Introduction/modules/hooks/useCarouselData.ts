'use client'

import { useCallback, useEffect, useState } from "react";
import { CarouselProps } from "../../../../interfaces/component-props-interfaces";

export interface CarouselImageData {
    linkTitle: string,
    type: string,
    label: string,
}

export interface CarouselImage {
    imgURL: string,
    data: CarouselImageData,
}

/**
 * 1. manages the slide progress line by incrementing/decremanting the slideProgress variable
 * 2. sets the current carousel label whenever the slides change
 * @returns setter for the current carousel label
 * @returns setter for the carousel images
 * @returns carouselData
 */
export function useCarouselData() {
    const [currentCarouselLabel, setCurrentCarouselLabel] = useState<CarouselImageData>({ linkTitle: '', type: '', label: '' });
    const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([]);
    const [carouselSlideProgress, setCarouselSlideProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            carouselSlideProgress < 100
                ? setCarouselSlideProgress((oldProgress) => oldProgress + 0.04)
                : setCarouselSlideProgress(0);
        }, 1);
    }, [carouselSlideProgress]);

    const carouselChangeHandler = useCallback((label: CarouselImageData) => {
        setCurrentCarouselLabel(label);
        setCarouselSlideProgress(0);
    }, []);

    const carouselData: CarouselProps = {
        carouselChangeHandler,
        currentCarouselLabel,
        images: carouselImages,
        slideProgress: carouselSlideProgress,
    };

    return {
        carouselData,
        setCurrentCarouselLabel,
        setCarouselImages,
    };
}