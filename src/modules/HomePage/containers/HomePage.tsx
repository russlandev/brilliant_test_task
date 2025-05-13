'use client';
import React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import {
  Backdrop,
  HomePageBenefits,
  HomePageHeader,
  HomePageHero,
  HomePageInfoSection,
  HomePageProjects,
  HomePageTable,
} from '../components';
import { useIsHydratingFinished } from '@/hooks/useIsHydratingFinished';

const HomePage = () => {
  const isHydrated = useIsHydratingFinished();

  if (!isHydrated) return null;

  return (
    <LazyMotion features={domAnimation}>
      <Backdrop />
      <div className='mx-4 md:mx-20 relative z-10 min-h-screen'>
        <HomePageHeader />
        <HomePageHero />
        <HomePageBenefits />
        <HomePageProjects />
        <HomePageInfoSection />
        <HomePageTable />
      </div>
    </LazyMotion>
  );
};

export default HomePage;
