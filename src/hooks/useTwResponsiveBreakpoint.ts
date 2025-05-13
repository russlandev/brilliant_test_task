'use client';

import { useEffect, useState } from 'react';

type TBreakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const tailwindBreakpoints: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const getInitialValue = (bp: TBreakpoint) => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(`(max-width: ${tailwindBreakpoints[bp] - 1}px)`).matches;
};

export const useTwResponsiveBreakpoint = (breakpoint: TBreakpoint | undefined = 'lg') => {
  const [isMobile, setIsMobile] = useState(getInitialValue(breakpoint));

  useEffect(() => {
    const mediaQuery = `(max-width: ${tailwindBreakpoints[breakpoint] - 1}px)`;
    const media = window.matchMedia(mediaQuery);

    const updateIsMobile = () => setIsMobile(media.matches);

    updateIsMobile();
    media.addEventListener('change', updateIsMobile);

    return () => media.removeEventListener('change', updateIsMobile);
  }, [breakpoint]);

  return isMobile;
};
