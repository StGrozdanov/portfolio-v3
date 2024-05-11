import styles from './Introduction.module.scss';
import AboutMeArticle from './modules/components/AboutMeArticle/AboutMeArticle';
import CarouselArticle from './modules/components/CarouselArticle/CarouselArticle';
import Partners from './modules/components/Partners/Partners';
import Resume from './modules/components/Resume/Resume';
import { getBasicInfoData } from '@/database/queries';

export default async function Introduction() {
    const basicUserInfo = await getBasicInfoData();
    return (
        <>
            <section id='intro' className={styles.container}>
                <AboutMeArticle description={basicUserInfo?.aboutme} />
                <Resume link={basicUserInfo?.cvlink} />
                <CarouselArticle
                    images={basicUserInfo?.carousel}
                    currentLabel={basicUserInfo?.carousel[0].data}
                />
            </section>
            <section className={styles['partners-and-links-article']}>
                <Partners partners={basicUserInfo ? basicUserInfo.partners : []} />
            </section>
        </>
    );
}   