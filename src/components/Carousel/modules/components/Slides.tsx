import { CarouselImage } from '@/components/Introduction/modules/hooks/useCarouselData';
import styles from './Slides.module.scss';
import Image from 'next/image';

interface SlideProps {
    image: CarouselImage,
    isFirstSlide: boolean,
}

export default function Slides({ image, isFirstSlide }: SlideProps) {
    return (
        <Image
            src={image.imgURL}
            alt='carousel-image'
            className={styles.img}
            width={image.width}
            height={image.height}
            priority={isFirstSlide ? true : false}
        />
    );
}