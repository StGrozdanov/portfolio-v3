import { AboutMeResponse } from '@/app/api/about-me/route';
import styles from './AboutMe.module.scss';
import Article from './modules/Article';
import { BASE_API_URL } from '@/utils/getBaseAPIUrl';
import Animate from '../Animate/Animate';

export default async function AboutMe() {
    let aboutMe: AboutMeResponse | null = null;
    const response = await fetch(`${BASE_API_URL}/about-me`);
    if (response.ok) aboutMe = await response.json();

    return (
        <section id='about' className={styles.container}>
            <article className={styles.slogan}>
                <Animate animationName='fadeInUp' >
                    <h4>About Me</h4>
                </Animate>
                <Animate animationName='fadeInUp'>
                    <h2><span>I am crafting</span> dreams <span>into digital</span> experiences<span>.</span></h2>
                </Animate>
            </article>
            <div className={styles['article-container']}>
                <Article
                    heading={'Tech Stack'}
                    details={aboutMe ? aboutMe.techstack : []}
                    threshold={aboutMe ? aboutMe.softskills.length : 0}
                />
                <Article heading={'Soft Skills'} details={aboutMe ? aboutMe.softskills : []} />
                <Article heading={'Hobbies'} details={aboutMe ? aboutMe.hobbies : []} />
            </div>
        </section>
    );
}