import React from 'react';
import { Button } from '@/app/shared';

const HomePageHeader = () => {
  return (
    <div className='flex justify-center gap-6 mt-8'>
      <Button ghost>How it works</Button>
      <Button>Buy Salt AI</Button>
    </div>
  );
};

export default HomePageHeader;
