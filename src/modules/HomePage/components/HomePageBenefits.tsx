'use client';
import React, { useEffect, useState } from 'react';
import { m, useScroll } from 'framer-motion';

const benefits = [
  { title: 'LLM Models', value: '1,873' },
  { title: 'Paid to data scientists', value: '$326,734' },
  { title: 'Developers', value: '6557' },
];

const HomePageHeader = () => {
  const [showAmination, setShowAnimation] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setShowAnimation(latest > 10);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <m.div className='flex flex-col lg:flex-row justify-center gap-6' initial='hidden' whileInView='visible' viewport={{ amount: 0.05 }}>
      {benefits.map(({ title, value }, i) => (
        <m.div
          className='rounded-full p-8 bg-gradient-to-r from-[#B53EA433] via-[#FC6F3233] to-[#FF4A5933] flex flex-col items-center gap-5 flex-1'
          key={title}
          initial={{ y: 0, opacity: 100 }}
          animate={showAmination ? { y: 0, opacity: 100 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: (i + 1) * 0.1 }}
        >
          <div className='opacity-100 text-4xl lg:text-[64px] lg:leading-[64px]'>{value}</div>
          <div className='text-xl lg:text-2xl font-bold'>{title}</div>
        </m.div>
      ))}
    </m.div>
  );
};

export default HomePageHeader;
