'use client'

import { useState, useEffect } from 'react';

/**
 * hook that figures out the device of the visitor by the user agent. 
 * Can be either Mobile, Tablet or Laptop / Desktop - returns it as a string. 
 */
export const useDeviceDetection = () => {
  const [device, setDevice] = useState('');

  useEffect(() => {
    /**
      * device detection handler
    */
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet = /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) {
        setDevice('Mobile');
      } else if (isTablet) {
        setDevice('Tablet');
      } else {
        setDevice('Laptop / Desktop');
      }
    };

    handleDeviceDetection();
    window.addEventListener('resize', handleDeviceDetection);

    return () => {
      window.removeEventListener('resize', handleDeviceDetection);
    };
  }, []);

  return device;
};