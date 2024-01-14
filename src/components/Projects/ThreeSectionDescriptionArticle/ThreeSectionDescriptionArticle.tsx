import Animate from '@/components/Animate/Animate';
import styles from './ThreeSectionDescriptionArticle.module.scss';
import moment from "moment";

interface ThreeSectionDescriptionArticleProps {
    title?: string,
    started_at?: Date,
    ended_at?: Date | null,
    summary?: string,
    techStack?: string[],
    link?: string,
    repository?: string,
}

export default function ThreeSectionDescriptionArticle({
    title,
    started_at,
    ended_at,
    summary,
    techStack,
    link,
    repository,
}: ThreeSectionDescriptionArticleProps) {
    return (
        <Animate animationName='fadeInUp' className={styles.description}>
            <section className={styles['description-section']}>
                <h3>Title</h3>
                <h4>{title}</h4>
                <h3>Link to website</h3>
                <h4>
                    <a
                        href={link}
                        target='_blank'
                        rel="noreferrer"
                        style={{ color: 'inherit', textDecoration: 'underline' }}
                    >check it out!</a>
                </h4>
                <h3>Github Repository</h3>
                <h4>
                    <a
                        href={repository}
                        target='_blank'
                        rel="noreferrer"
                        style={{ color: 'inherit', textDecoration: 'underline' }}
                    >check it out!</a>
                </h4>
                <h3>Duration</h3>
                <h4>{moment(started_at).format('MMM YYYY')} - {ended_at ? moment(ended_at).format('MMM YYYY') : 'now'}</h4>
            </section>
            <section className={styles['description-section']}>
                <h3>Concept</h3>
                <h4>{summary}</h4>
            </section>
            <section className={styles['description-section-contribution']}>
                <h3>Tech Stack</h3>
                <h4>{techStack && techStack.join(', ')}</h4>
            </section>
        </Animate>
    );
}