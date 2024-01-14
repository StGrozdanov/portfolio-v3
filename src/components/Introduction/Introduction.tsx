'use client'

import styles from './Introduction.module.scss';
import AboutMeArticle from './modules/components/AboutMeArticle/AboutMeArticle';
import CarouselArticle from './modules/components/CarouselArticle/CarouselArticle';
import Partners from './modules/components/Partners/Partners';
import Resume from './modules/components/Resume/Resume';
import CarouselLinks from './modules/components/CarouselLinks/CarouselLinks';
import { useFetchBasicUserInfo } from './modules/hooks/useFetchBasicUserInfo';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';
import { useEffect } from 'react';

export const revalidate = 900;

export default function Introduction() {
    const { basicUserInfo, carouselData } = useFetchBasicUserInfo();
    const visitaitonDevice = useDeviceDetection();

    useEffect(() => {
        if (visitaitonDevice) {
            fetch(`${process.env.NEXT_PUBLIC_TRACKING_API}/analytics/track`, {
                method: 'POST',
                body: JSON.stringify({
                    deviceType: visitaitonDevice,
                }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
                cache: 'no-cache',
            }).catch(err => console.error(err));
        }
    }, [visitaitonDevice]);

    return (
        <>
            <section id='intro' className={styles.container}>
                <AboutMeArticle description={basicUserInfo?.aboutme} />
                <Resume link={basicUserInfo?.cvlink} />
                <CarouselArticle
                    images={carouselData}
                    progress={carouselData.slideProgress}
                />
            </section>
            <section className={styles['partners-and-links-article']}>
                <Partners partners={basicUserInfo ? basicUserInfo.partners : []} />
                <CarouselLinks
                    progress={carouselData.slideProgress}
                    data={carouselData.currentCarouselLabel}
                />
            </section>
        </>
    );
}   