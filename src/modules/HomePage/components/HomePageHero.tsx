'use client';
import React, { useEffect, useState } from 'react';
import { m, useScroll } from 'framer-motion';
import { Button } from '@/app/shared';
import { useTwResponsiveBreakpoint } from '@/hooks/useTwResponsiveBreakpoint';

const HomePageHero = () => {
  const [showWhiteText, setShowWhiteText] = useState(false);
  const { scrollY } = useScroll();
  const isMobile = useTwResponsiveBreakpoint();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setShowWhiteText(latest > 10);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <m.div
      initial={{ marginTop: isMobile ? '24px' : '96px' }}
      animate={{ marginTop: showWhiteText ? (isMobile ? '12px' : '48px') : isMobile ? '24px' : '96px' }}
    >
      <div className='relative'>
        <m.h1
          initial={{ opacity: 1, fontSize: isMobile ? '36px' : '92px' }}
          animate={{
            opacity: showWhiteText ? 0 : 1,
            fontSize: showWhiteText ? (isMobile ? '24px' : '84px') : isMobile ? '36px' : '92px',
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='font-clash-grotesk mb-4 lg:mb-9 font-medium bg-gradient-to-r from-[#B53EA4] via-[#FC6F32] to-[#FF4A59] text-transparent bg-clip-text'
        >
          A new economic primitive for funding decentralized AI
        </m.h1>
        <m.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: showWhiteText ? 1 : 0,
            fontSize: showWhiteText ? (isMobile ? '24px' : '84px') : isMobile ? '36px' : '92px',
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='font-clash-grotesk absolute top-0 font-medium'
        >
          A new economic primitive for funding decentralized AI
        </m.div>
      </div>
      <p className='text-base lg:text-2xl mb-4 lg:mb-9 max-w-2/3'>
        We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
      </p>
      <div className='flex gap-6 mt-8 mb-[152px]'>
        <Button size={isMobile ? 'md' : 'lg'}>Buy Salt AI</Button>
        <Button ghost size={isMobile ? 'md' : 'lg'}>
          Try Now
        </Button>
      </div>
    </m.div>
  );
};

export default HomePageHero;
