'use client';

import Image from 'next/image';
import React from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { useTwResponsiveBreakpoint } from '@/hooks/useTwResponsiveBreakpoint';

const images = [
  { key: 1, w: 334, h: 50 },
  { key: 2, w: 421, h: 100 },
  { key: 3, w: 328, h: 58 },
  { key: 4, w: 102, h: 102 },
  { key: 5, w: 102, h: 102 },
];

const HomePageProjects = () => {
  const { scrollYProgress } = useScroll();
  const isMobile = useTwResponsiveBreakpoint();
  const x = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '-500%' : '-100%']);

  return (
    <div className='my-32 -mx-4 lg:-mx-20 lg:my-0 lg:h-lvh flex flex-col justify-center w-screen overflow-hidden'>
      <h2 className='font-clash-grotesk mx-4 text-2xl lg:text-[64px] mb-6 lg:mb-12 font-medium text-center'>
        Projects integrated into the Arrakis AI Ecosystem
      </h2>
      <m.div style={{ x }} className='flex justify-between items-center gap-28'>
        {[...images, ...images, ...images].map(({ key, h, w }, i) => (
          <Image key={i} className={`h-[${h}px]`} alt='' src={`/images/proj_img_${key}.png`} width={w} height={h} />
        ))}
      </m.div>
    </div>
  );
};

export default HomePageProjects;
