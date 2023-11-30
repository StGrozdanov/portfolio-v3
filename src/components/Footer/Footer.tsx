import { SocialMedia } from '@/app/api/get-socials/route';
import styles from './Footer.module.scss';
import Animate from '../Animate/Animate';
import Script from 'next/script';

export default async function Footer() {
    let socials: SocialMedia | undefined = undefined;
    const response = await fetch(`${process.env.BASE_API_URL}/get-socials`);
    if (response.ok) socials = await response.json();
    return (
        <>
            <footer data-testid="site-footer" className={styles["site-footer"]}>
                <article className={styles['site-footer-left-article']}>
                    <ul data-testid="social-links" className={styles["social-links"]}>
                        <li data-testid="facebook" className={styles['facebook']}>
                            <Animate animationName='fadeInUp' delay={200}>
                                <a href={socials?.facebook}><i className="fa fa-facebook" /></a>
                            </Animate>
                        </li>
                        <li data-testid="linkedIn" className={styles['linkedIn']}>
                            <Animate animationName='fadeInUp' delay={200}>
                                <a href={socials?.linkedIn} target="blank"><i className="fa fa-linkedin" /></a>
                            </Animate>
                        </li>
                        <li data-testid="github" className={styles['github']}>
                            <Animate animationName='fadeInUp' delay={400}>
                                <a href={socials?.github} target="blank"><i className="fa fa-github" /></a>
                            </Animate>
                        </li>
                        <li data-testid="email" className={styles['email']}>
                            <Animate animationName='fadeInUp' delay={500}>
                                <a href={`mailto:${socials?.email}`}><i className="fa fa-envelope" /></a>
                            </Animate>
                        </li>
                    </ul>
                </article>
                <article className={styles["site-footer-right-article"]}>
                    <h3 className={styles["footer-title"]}>Stoyan Grozdanov</h3>
                    <ul className={styles['site-footer-life-rules']}>
                        <li>Live</li>
                        <li>Learn</li>
                        <li>Progress</li>
                        <li>One step at a time.</li>
                    </ul>
                </article>
            </footer >
            <Script src="https://kit.fontawesome.com/278cae12ba.js" />
        </>
    );
}