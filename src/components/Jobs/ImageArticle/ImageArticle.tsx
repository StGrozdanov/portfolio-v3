import { Images } from '@/app/api/jobs-and-projects/route';
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