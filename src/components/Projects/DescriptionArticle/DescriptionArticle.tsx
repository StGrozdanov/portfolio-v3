import Animate from '@/components/Animate/Animate';
import styles from './DescriptionArticle.module.scss';

type DescriptionArticleProps = { description?: string }

export default function DescriptionArticle({ description }: DescriptionArticleProps) {
    return (
        <article style={{ backgroundColor: 'black' }}>
            <Animate animationName='fadeInUp' className={styles.description}>
                <h2>Description</h2>
                <h4>{description}</h4>
            </Animate>
        </article>
    );
}