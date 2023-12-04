import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from './CarouselLinks.module.scss';
import Link from 'next/link';
import { CarouselImageData } from "../../hooks/useCarouselData";

interface CarouselLinkProps {
    progress: number,
    data: CarouselImageData,
}

export default function CarouselLinks(carousel: CarouselLinkProps) {
    return (
        <article
            className={styles['see-details-article']}
            style={carousel.progress > 90 ? { opacity: 0 } : { opacity: 1 }}
        >
            <h2 className={styles.label}>{carousel.data.label}</h2>
            <Link style={{ color: 'inherit' }} href={`/${carousel.data.type}s/${carousel.data.linkTitle}`}>
                <div className={styles.link}>
                    <p>view project</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </Link>
        </article>
    );
}