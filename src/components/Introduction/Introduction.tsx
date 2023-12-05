'use client'

import styles from './Introduction.module.scss';
import AboutMeArticle from './modules/components/AboutMeArticle/AboutMeArticle';
import CarouselArticle from './modules/components/CarouselArticle/CarouselArticle';
import Partners from './modules/components/Partners/Partners';
import Resume from './modules/components/Resume/Resume';
import CarouselLinks from './modules/components/CarouselLinks/CarouselLinks';
import { useFetchBasicUserInfo } from './modules/hooks/useFetchBasicUserInfo';
import { TrackingInfoResponse } from '@/app/api/track-visitor/route';
import { useDeviceDetection } from '@/hooks/useDeviceDetection';
import { useEffect, useState } from 'react';

export default function Introduction() {
    const { basicUserInfo, carouselData } = useFetchBasicUserInfo();
    const [userLocationData, setUserLocationData] = useState<TrackingInfoResponse>();
    const visitaitonDevice = useDeviceDetection();

    const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`
        : process.env.NEXT_PUBLIC_BASE_API_URL;

    useEffect(() => {
        if (visitaitonDevice) {
            fetch(`${BASE_URL}/track-visitor`)
                .then(data => data.json())
                .then(response => {
                    const locationData: TrackingInfoResponse = {
                        country_code: response.country_code,
                        country_name: response.country_name,
                        city: response.city,
                        postal: response.postal,
                        IPv4: response.IPv4,
                        state: response.state
                    };
                    setUserLocationData(locationData);
                })
                .catch(err => console.error(err));
        }
    }, [visitaitonDevice]);

    useEffect(() => {
        if (visitaitonDevice && userLocationData) {
            fetch(`${BASE_URL}/analytics`, {
                method: 'POST',
                body: JSON.stringify({
                    deviceType: visitaitonDevice,
                    ipAddress: userLocationData.IPv4,
                    originCountry: userLocationData.country_name,
                }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
            }).catch(err => console.error(err));
        }
    }, [visitaitonDevice, userLocationData]);

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