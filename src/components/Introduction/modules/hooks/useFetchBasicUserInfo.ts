'use client'

import { useEffect, useState } from "react";
import { useCarouselData } from "./useCarouselData";
import { NEXT_BASE_API_URL } from "@/utils/getBaseAPIUrl";
import { BasicInfoResponse } from "@/app/api/basic-user-info/route";

/**
 * Fetches the basic user info and returns it along with the carousel data
 * @returns basic user info
 * @returns carousel data
 */
export function useFetchBasicUserInfo() {
    const [basicUserInfo, setBasicUserInfo] = useState<BasicInfoResponse>();
    const { carouselData, setCarouselImages, setCurrentCarouselLabel } = useCarouselData();

    useEffect(() => {
        fetch(`${NEXT_BASE_API_URL}/basic-user-info`)
            .then(response => response.json())
            .then(result => {
                const baseUserInfo = result as unknown as BasicInfoResponse;
                setBasicUserInfo(baseUserInfo);
                setCarouselImages(baseUserInfo.carousel);
                setCurrentCarouselLabel(baseUserInfo.carousel[0].data);
            })
            .catch(err => console.error(err));
    }, []);

    return {
        basicUserInfo,
        carouselData,
    };
}