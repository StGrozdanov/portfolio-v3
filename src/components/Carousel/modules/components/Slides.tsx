import { CarouselImage } from '@/components/Introduction/modules/hooks/useCarouselData';
import styles from './Slides.module.scss';
import Image from 'next/image';

export default function Slides(image: CarouselImage) {
    return (
        <div>
            <Image
                src={image.imgURL}
                alt='carousel-image'
                className={styles.img}
                width={1000}
                height={1000}
            />
        </div>
    );
}