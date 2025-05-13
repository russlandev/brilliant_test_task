'use client';
import { useTwResponsiveBreakpoint } from '@/hooks/useTwResponsiveBreakpoint';
import { useScroll, m } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Backdrop = () => {
  const { scrollY } = useScroll();
  const [scrollPercent, setScrollPercent] = useState(0);
  const isMobile = useTwResponsiveBreakpoint();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setScrollPercent(latest / (document.documentElement.scrollHeight - window.innerHeight));
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div className='fixed top-0 left-0 w-lvw h-lvh bg-black'>
      <m.div
        initial={{ y: 0 }}
        animate={{ y: scrollPercent * 200 }}
        transition={{ ease: 'linear' }}
        className='fixed text-red-500 right-10 -top-10 z-2'
      >
        <Image alt='' src='/images/planet.png' width={700} height={700} />
      </m.div>
      <m.div
        initial={{ y: isMobile ? 200 : 500 }}
        animate={{ y: (1 - scrollPercent) * (isMobile ? 200 : 500) }}
        className={`fixed text-red-500 -bottom-1/6 left-1/2 z-4 -translate-x-1/2 ${isMobile ? 'opacity-50' : ''}`}
        transition={{ ease: 'linear' }}
      >
        <Image
          className={`max-w-none w-[1920px] h-[${isMobile ? '200' : '552'}px]`}
          alt=''
          src='/images/planet-bottom.png'
          width={1920}
          height={isMobile ? 200 : 552}
        />
      </m.div>
      <div className='z-3 absolute top-[-250px] left-1/6 w-[500px] h-[500px] rounded-full bg-[#FF5722] opacity-20 blur-[150px] pointer-events-none mix-blend-screen' />
      <div className='z-3 absolute bottom-[-250px] right-1/3 w-[500px] h-[500px] rounded-full bg-[#FF5722] opacity-20 blur-[150px] pointer-events-none mix-blend-screen' />
    </div>
  );
};

export default Backdrop;
