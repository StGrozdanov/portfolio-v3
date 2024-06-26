import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Slides from "./modules/components/Slides";
import styles from './CarouselComponent.module.scss';
import { useCarouselFadeInAnimation } from "./modules/hooks/useCarouselFadeInAnimation";
import { ReactElement, ReactNode } from "react";
import { CarouselProps } from "@/interfaces/interfaces";

export default function CarouselComponent(data: CarouselProps) {
    const slideChangeHandler = (index: number, element: ReactNode) => {
        const reactElement = element as ReactElement;
        const slideData = reactElement.props.image.data;
        data.carouselChangeHandler && data.carouselChangeHandler(slideData);
    }

    return (
        <Carousel
            key={data.images?.findIndex(image => image.imgURL)}
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            className={`carousel-container ${styles.container}`}
            showStatus={false}
            swipeable={false}
            animationHandler={useCarouselFadeInAnimation}
            transitionTime={800}
            interval={5000}
            showThumbs={false}
            stopOnHover={false}
            onChange={slideChangeHandler}
        >
            {
                data.images?.map((image, index) =>
                    <Slides
                        key={image.imgURL ? image.imgURL : 'https://' + index}
                        isFirstSlide={index === 0}
                        image={image}
                    />
                )
            }
        </Carousel>
    )
}