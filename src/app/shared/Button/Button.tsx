import React, { ButtonHTMLAttributes, FC } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  ghost?: boolean;
  size?: 'md' | 'lg';
}

const Button: FC<IButton> = ({ ghost, size = 'md', ...props }) => {
  return ghost ? (
    <button
      className={`cursor-pointer w-fit rounded-full whitespace-nowrap ${size === 'md' ? 'px-8 py-[12px] text-[22px]' : 'py-[22px] px-12 text-2xl '} `}
      {...props}
    ></button>
  ) : (
    <div className='bg-gradient-to-r from-[#B53EA4] via-[#FC6F32] to-[#FF4A59] w-fit h-fit rounded-full whitespace-nowrap'>
      <button
        className={`bg-black cursor-pointer rounded-full m-0.5 ${
          size === 'md' ? 'px-[30px] py-[10px] text-[22px]' : 'py-[20px] px-[46px] whitespace-nowrap text-2xl '
        }`}
        {...props}
      ></button>
    </div>
  );
};

export default Button;
