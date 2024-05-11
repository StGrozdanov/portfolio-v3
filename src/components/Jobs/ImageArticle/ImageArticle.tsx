import { Images } from '@/interfaces/interfaces';
import styles from './ImageArticle.module.scss';

type ImageArticleProps = { image?: Images }

export default function ImageArticle({ image }: ImageArticleProps) {
    return (
        <article>
            <div
                className={styles['img-article-container']}
                style={{ backgroundImage: `url(${image?.imgURL})` }}
            />
        </article>
    );
}