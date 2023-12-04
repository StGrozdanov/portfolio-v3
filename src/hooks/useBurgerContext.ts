'use client'

import { useContext } from "react";
import { BurgerContext } from "../contexts/BurgerContext";

/**
 * Burger context hook that allows access to the context props
 */
export const useBurgerContext = () => useContext(BurgerContext);