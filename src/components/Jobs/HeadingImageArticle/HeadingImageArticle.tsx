'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
import styles from './HeadingImageArticle.module.scss';
import { Images } from "@/interfaces/interfaces";

interface HeadingImageArticleProps { image?: Images }

export default function HeadingImageArticle({ image }: HeadingImageArticleProps) {
    const iconClickHandler = useCallback(() => {
        window.scroll({
            behavior: 'smooth',
            top: 500,
        })
    }, []);

    return (
        <article className={styles['img-article']}>
            <div
                className={styles['img-article-container']}
                style={{ backgroundImage: `url(${image?.imgURL})` }}
            />
            <FontAwesomeIcon
                style={{ position: 'absolute', top: '50%', right: 20, fontSize: '4rem', cursor: 'pointer' }}
                icon={faArrowDownLong}
                color="white"
                beat
                onClick={iconClickHandler}
            />
        </article>
    );
}