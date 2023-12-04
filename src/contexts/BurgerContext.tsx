'use client'

import { createContext, useState } from "react";
import { ContainerProps } from "./types";

interface BurgerContextType {
    isExpanded: boolean,
    update: () => void,
}

export const BurgerContext = createContext<BurgerContextType>({
    isExpanded: false,
    update: () => console.error('burger context is not initialized yet!')
});

export const BurgerProvider = ({ children }: ContainerProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const update = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <BurgerContext.Provider value={{ isExpanded, update }}>
            {children}
        </BurgerContext.Provider>
    );
}