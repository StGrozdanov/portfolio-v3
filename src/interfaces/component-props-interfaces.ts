import { CarouselImage, CarouselImageData } from "@/components/Introduction/modules/hooks/useCarouselData";

export interface CarouselProps {
    images: CarouselImage[],
    carouselChangeHandler: (label: CarouselImageData) => void,
    currentCarouselLabel: CarouselImageData,
    slideProgress: number,
}