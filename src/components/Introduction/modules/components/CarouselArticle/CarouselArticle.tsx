'use client';

import CarouselComponent from "../../../../Carousel/CarouselComponent";
import { Line } from "rc-progress";
import styles from './CarouselArticle.module.scss';
import { CarouselImage, CarouselImageData } from "../../hooks/useCarouselData";
import { useCallback, useEffect, useState } from "react";
import { CarouselProps } from "@/interfaces/interfaces";
import CarouselLinks from "../CarouselLinks/CarouselLinks";

export interface CarouselArticleProps {
    images: CarouselImage[] | undefined,
    currentLabel: CarouselImageData | undefined,
}

export default function CarouselArticle(carousel: CarouselArticleProps) {
    const [currentCarouselLabel, setCurrentCarouselLabel] = useState<CarouselImageData>({ linkTitle: '', type: '', label: '' });
    const [carouselImages, setCarouselImages] = useState<CarouselImage[]>([]);
    const [carouselSlideProgress, setCarouselSlideProgress] = useState(0);

    useEffect(() => {
        if (carousel.images) {
            setCarouselImages(carousel.images);
        }
        if (carousel.currentLabel) {
            setCurrentCarouselLabel(carousel.currentLabel);
        }
    }, [carousel.images, carousel.currentLabel]);

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
    }, [carousel]);

    const carouselData: CarouselProps = {
        carouselChangeHandler,
        currentCarouselLabel,
        images: carouselImages,
        slideProgress: carouselSlideProgress,
    };

    return (
        <article className={styles['carousel-article']}>
            <CarouselComponent {...carouselData} />
            <Line
                percent={carouselData.slideProgress}
                strokeWidth={0.85}
                strokeColor='orange'
                trailColor='white'
            />
            <CarouselLinks
                progress={carouselData.slideProgress}
                data={carouselData.currentCarouselLabel}
            />
        </article>
    );
}