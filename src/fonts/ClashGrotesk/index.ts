import localFont from 'next/font/local';

export const ClashGrotesk = localFont({
  src: [
    {
      path: './font/ClashGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/ClashGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/ClashGrotesk-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './font/ClashGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-clash-grotesk',
});