'use client';
import React, { useEffect, useRef, useState } from 'react';
import { m, useInView } from 'framer-motion';
import { Button } from '@/app/shared';

const HomePageHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isInView) setStartAnimation(true);
  }, [isInView]);

  return (
    <div ref={ref} className='lg:mb-40'>
      <m.div
        initial={{ y: 500, opacity: 0 }}
        animate={startAnimation ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.15, duration: 1.5 }}
      >
        <h1 className='font-clash-grotesk text-2xl lg:text-[64px] mb-8 font-medium max-w-2/3'>
          Crowdsourcing our collective intelligence to build the best AI
        </h1>
        <p className='text-lg lg:text-2xl mb-2 lg:max-w-2/3'>
          Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.
        </p>
        <p className='text-2xl mb-9 lg:max-w-2/3'>
          Salt aims to solve that by rewarding open source developers who contribute to the democratization of AI. We run competitions
          between AI models to find and reward the best AI models. As a result, our users will be able to access the latest cutting edge AI
          models.
        </p>
        <div className='flex gap-6 mt-8 mb-[152px]'>
          <Button size='lg'>Use The Cutting Edge AI</Button>
        </div>
      </m.div>
    </div>
  );
};

export default HomePageHero;
