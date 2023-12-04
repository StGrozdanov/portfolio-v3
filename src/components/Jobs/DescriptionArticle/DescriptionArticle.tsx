import Animate from '@/components/Animate/Animate';
import styles from './DescriptionArticle.module.scss';

type DescriptionArticleProps = { achievements?: string[] }

export default function DescriptionArticle({ achievements }: DescriptionArticleProps) {
    return (
        <article style={{ backgroundColor: 'black' }}>
            <Animate animationName='fadeInUp' className={styles.description}>
                <h2>Contribution</h2>
                <h4>{achievements && achievements.join('. ')}</h4>
            </Animate>
        </article>
    );
}